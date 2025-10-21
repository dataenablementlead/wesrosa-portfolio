import * as React from "react"
import Layout from "./Layout.tsx"
import CalendlySection from "./CalendlySection.tsx"

import {
    container1280,
    sectionMain,
    h1Main,
    leadText,
    cardSurface,
    styleReveal,
    useReveal,
    useAutoRevealOnView,
    useStickyHeaderSpacer,
    useResponsiveMinHeight,
    useResponsiveSidePadding,
    useReduceMotion,
} from "./StyleKit.tsx"

export default function Book(): JSX.Element {
    React.useEffect(() => {
        try {
            document.title = "Book Time – Wes Rosa Innovation Portfolio"
            // eslint-disable-next-line no-console
            console.log("[Book] mounted (v=2025-10-19-02)")
        } catch {}
    }, [])

    // Accessibility + animations
    const reduceMotion = useReduceMotion()
    useAutoRevealOnView()

    // Sticky header spacer + responsive frame height + side padding
    const { spacerHeight } = useStickyHeaderSpacer()
    // Match Chat behavior: 520 on mobile/tablet, 760 on desktop
    const minH = useResponsiveMinHeight(768, 520, 760)
    const sidePad = useResponsiveSidePadding()

    // Reveal flags
    const h1On = useReveal("book-h1")
    const leadOn = useReveal("book-lead")
    const frameOn = useReveal("book-frame")

    // Fix: radix 10 and robust fallback
    const rawTop = (sectionMain as any)?.paddingTop
    const defaultTopPad =
        typeof rawTop === "string"
            ? parseInt(rawTop, 10) || 56
            : typeof rawTop === "number"
              ? rawTop
              : 56

    // Smallest top padding you want *in addition to* the spacer
    const minTopPad = 6 // try 4–8

    // Reduce section padding by spacer height, but never below minTopPad
    const adjustedTopPad = Math.max(minTopPad, defaultTopPad - spacerHeight)

    const firstSectionStyle: React.CSSProperties = {
        ...sectionMain,
        paddingTop: adjustedTopPad,
    }
    return (
        <Layout>
            <main role="main">
                {/* Spacer to offset sticky/fixed header height */}
                <div aria-hidden="true" style={{ height: spacerHeight }} />

                <div style={{ ...container1280, ...sidePad }}>
                    <section
                        style={firstSectionStyle}
                        aria-label="Book time with Wes"
                    >
                        <h1
                            id="book-h1"
                            data-reveal=""
                            style={{
                                ...h1Main,
                                ...(styleReveal(h1On) as object),
                            }}
                        >
                            Book time with Wes
                        </h1>

                        <p
                            id="book-lead"
                            data-reveal=""
                            style={{
                                ...leadText,
                                ...(styleReveal(leadOn) as object),
                            }}
                        >
                            Quick intro or deep-dive. Pick a slot that works for
                            you and you’ll get a calendar invite automatically.
                        </p>

                        {/* Card container controls height; iframe fills 100% inside */}
                        <div
                            id="book-frame"
                            data-reveal=""
                            style={{
                                ...styleReveal(frameOn),
                                ...cardSurface,
                                minHeight: minH,
                                height: "min(84svh, 860px)", // iOS-friendly viewport height cap
                            }}
                        >
                            <CalendlySection />
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    )
}
;(Book as any).displayName = "Book"
