import * as React from "react"

// ---- Layout tokens (shared)
export const container1280: React.CSSProperties = {
    maxWidth: 1280,
    margin: "0 auto",
    width: "100%",
    padding: "0 24px",
    boxSizing: "border-box",
}

export const sectionMain: React.CSSProperties = {
    padding: "56px 0 104px",
}

// ---- Typography tokens (shared)
export const h1Main: React.CSSProperties = {
    fontFamily: "Inter, system-ui, Arial, sans-serif",
    fontSize: 34,
    fontWeight: 700,
    margin: "8px 0 12px",
    lineHeight: 1.22,
    letterSpacing: "-0.01em",
}

export const leadText: React.CSSProperties = {
    fontFamily: "Inter, system-ui, Arial, sans-serif",
    fontSize: 17,
    lineHeight: 1.75,
    margin: "0 0 24px",
    opacity: 0.9,
}

// ---- Card pattern (shared)
export const cardSurface: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
    overflow: "hidden",
}

// ---- Reveal utilities (shared)
const revealBase: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(8px)",
    transition: "opacity 420ms ease, transform 420ms ease",
}
const revealed: React.CSSProperties = { opacity: 1, transform: "translateY(0)" }

export const styleReveal = (on: boolean): React.CSSProperties => ({
    ...revealBase,
    ...(on ? revealed : {}),
})

export const useReveal = (id: string) => {
    const [on, setOn] = React.useState(false)
    React.useEffect(() => {
        const el = document.getElementById(id)
        const handler = () => setOn(el?.getAttribute("data-reveal") === "on")
        const mo = new MutationObserver(handler)
        if (el) {
            handler()
            mo.observe(el, {
                attributes: true,
                attributeFilter: ["data-reveal"],
            })
        }
        return () => mo.disconnect()
    }, [id])
    return on
}

export const useAutoRevealOnView = () => {
    React.useEffect(() => {
        const els = Array.from(
            document.querySelectorAll<HTMLElement>("[data-reveal]")
        )
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) =>
                        e.isIntersecting &&
                        e.target.setAttribute("data-reveal", "on")
                ),
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        )
        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])
}

// ---- Sticky header spacer (shared)
export const useStickyHeaderSpacer = () => {
    const [height, setHeight] = React.useState(0)
    const [needsSpacer, setNeedsSpacer] = React.useState(false)
    React.useEffect(() => {
        const measure = () => {
            const header = document.querySelector(
                "header"
            ) as HTMLElement | null
            if (!header) {
                setHeight(0)
                setNeedsSpacer(false)
                return
            }
            const rect = header.getBoundingClientRect()
            const pos = window.getComputedStyle(header).position
            setHeight(Math.ceil(rect.height))
            setNeedsSpacer(pos === "sticky" || pos === "fixed")
        }
        measure()
        window.addEventListener("resize", measure)
        const t = window.setTimeout(measure, 100)
        return () => {
            window.removeEventListener("resize", measure)
            window.clearTimeout(t)
        }
    }, [])
    return { spacerHeight: needsSpacer ? height : 0 }
}
//Tiny mobile padding tweak (very small phones)
export const useResponsiveSidePadding = () => {
    const [pad, setPad] = React.useState<React.CSSProperties>({
        padding: "0 24px",
    })
    React.useEffect(() => {
        const apply = () => {
            const w = window.innerWidth || 1280
            setPad({ padding: w < 400 ? "0 16px" : "0 24px" })
        }
        apply()
        window.addEventListener("resize", apply)
        return () => window.removeEventListener("resize", apply)
    }, [])
    return pad
}
// ---- Responsive min-height (shared)
export const useResponsiveMinHeight = (
    breakpoint = 768,
    small = 420,
    large = 560
) => {
    const [minH, setMinH] = React.useState<number>(large)
    React.useEffect(() => {
        const sync = () => {
            const w = typeof window !== "undefined" ? window.innerWidth : 1280
            setMinH(w < breakpoint ? small : large)
        }
        sync()
        window.addEventListener("resize", sync)
        return () => window.removeEventListener("resize", sync)
    }, [breakpoint, small, large])
    return minH
}
//If a user prefers reduced motion, disable the reveal animations.
export const useReduceMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
