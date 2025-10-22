import * as React from "react"
import { container1280, useResponsiveSidePadding } from "./StyleKit.tsx"

const NAV_ITEMS: { label: string; href: string }[] = [
    { label: "Framework", href: "/framework" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Chat", href: "/chat" },
    { label: "Book", href: "/book" },
]

export default function Layout(props: {
    children: React.ReactNode
}): JSX.Element {
    // Simple, safe breakpoint (no SSR issues)
    const [isNarrow, setIsNarrow] = React.useState(false)
    React.useEffect(() => {
        const onResize = () =>
            setIsNarrow(
                (typeof window !== "undefined" ? window.innerWidth : 1280) < 720
            )
        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    // Match page padding on mobile
    const sidePad = useResponsiveSidePadding()

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#fff",
                fontFamily: "Inter, sans-serif",
                color: "#111",
            }}
        >
            {/* NAV */}
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 20,
                    background: "#fff",
                    borderBottom: "1px solid #eee",
                }}
            >
                <div
                    style={{
                        ...container1280,
                        ...sidePad,
                        paddingTop: 14,
                        paddingBottom: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: isNarrow ? 12 : 24,
                        flexWrap: "wrap", // key: allow a second row on narrow screens
                        rowGap: 8,
                    }}
                >
                    {/* Brand */}
                    <a
                        href="/"
                        style={{
                            fontWeight: 800,
                            letterSpacing: 0.2,
                            textDecoration: "none",
                            color: "#0B6EF3",
                            fontSize: isNarrow ? 16 : 18,
                            lineHeight: 1,
                        }}
                    >
                        Wes Rosa Innovation
                    </a>

                    {/* CTA (moves right on desktop, sits next to brand on mobile) */}
                    <div
                        style={{
                            marginLeft: isNarrow ? 0 : "auto",
                            order: isNarrow ? 2 : 3,
                        }}
                    >
                        <a
                            href="/Wes_Rosa_Resume.pdf"
                            style={{
                                textDecoration: "none",
                                fontWeight: 700,
                                background: "#0B6EF3",
                                color: "#fff",
                                padding: isNarrow ? "8px 12px" : "9px 14px",
                                borderRadius: 10,
                                fontSize: isNarrow ? 13 : 14,
                                display: "inline-block",
                            }}
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Nav (wraps to full-width row on narrow screens) */}
                    <nav
                        style={{
                            display: "flex",
                            gap: isNarrow ? 12 : 18,
                            flexWrap: "wrap",
                            order: isNarrow ? 3 : 2,
                            width: isNarrow ? "100%" : "auto",
                        }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                style={{
                                    textDecoration: "none",
                                    color: "#333",
                                    fontWeight: 600,
                                    fontSize: isNarrow ? 13 : 14,
                                    padding: isNarrow ? "5px 6px" : "6px 8px",
                                    borderRadius: 6,
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* CONTENT */}
            <main>{props.children}</main>

            {/* FOOTER */}
            <footer
                style={{
                    borderTop: "1px solid #eee",
                    padding: "18px 20px",
                    color: "#666",
                }}
            >
                <div style={{ ...container1280 }}>
                    © {new Date().getFullYear()} Wes Rosa · Innovation
                    Portfolio
                </div>
            </footer>
        </div>
    )
}
