// Framework.tsx
import * as React from "react"
import Layout from "./Layout.tsx"

import {
    container1280,
    sectionMain,
    h1Main,
    leadText,
    styleReveal,
    useReveal,
    useAutoRevealOnView,
    useStickyHeaderSpacer,
    useResponsiveSidePadding,
    useReduceMotion,
} from "./StyleKit.tsx"

// Import the new Framework block(s)
import { FrameworkEnablement } from "./FrameworkBlocks.tsx"

export default function Framework(): JSX.Element {
    // Respect reduced motion and enable per-element reveals
    const reduceMotion = useReduceMotion()
    useAutoRevealOnView()

    // Sticky header spacer + responsive side padding
    const { spacerHeight } = useStickyHeaderSpacer()
    const sidePad = useResponsiveSidePadding()

    // Reveal flags for hero
    const h1On = useReveal("fw-h1")
    const leadOn = useReveal("fw-lead")

    // Compute adjusted top padding to avoid "double gap" under sticky header
    const rawTop = (sectionMain as any)?.paddingTop
    const defaultTopPad =
        typeof rawTop === "string"
            ? parseInt(rawTop, 10) || 24
            : typeof rawTop === "number"
              ? rawTop
              : 56
    const adjustedTopPad = Math.max(0, defaultTopPad - spacerHeight)
    const firstSectionStyle: React.CSSProperties = {
        ...sectionMain,
        paddingTop: adjustedTopPad,
    }

    React.useEffect(() => {
        try {
            document.title = "Framework – Wes Rosa Innovation Portfolio"
        } catch {}
    }, [])

    return (
        <Layout>
            <main role="main" style={{ background: "#fff", color: "#0F172A" }}>
                {/* Spacer to offset sticky header */}
                <div aria-hidden="true" style={{ height: spacerHeight }} />

                <div style={{ ...container1280, ...sidePad }}>
                    {/* HERO */}
                    <section
                        style={firstSectionStyle}
                        aria-label="Framework Hero"
                    >
                        <h1
                            id="fw-h1"
                            data-reveal=""
                            style={{
                                ...h1Main,
                                ...(styleReveal(h1On) as object),
                                color: "#0A3D91",
                            }}
                        >
                            Framework
                        </h1>
                        <p
                            id="fw-lead"
                            data-reveal=""
                            style={{
                                ...leadText,
                                ...(styleReveal(leadOn) as object),
                            }}
                        >
                            How I build scalable, repeatable frameworks for
                            data, cloud, and delivery.
                        </p>
                    </section>

                    {/* CONTENT */}
                    <section
                        style={{ ...sectionMain, paddingTop: 16 }}
                        aria-label="Framework Content"
                    >
                        <FrameworkEnablement />
                    </section>
                </div>
            </main>
        </Layout>
    )
}
;(Framework as any).displayName = "Framework"
