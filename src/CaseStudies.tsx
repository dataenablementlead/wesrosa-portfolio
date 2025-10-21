// case-studies.tsx
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

// The ONLY functional addition: import the case-study blocks
import {
    CaseStudyArchival,
    CaseStudyCloudEnablement,
} from "./CaseStudyBlocks.tsx"

export default function CaseStudies(): JSX.Element {
    // Respect reduced motion and enable per-element reveals
    const reduceMotion = useReduceMotion()
    useAutoRevealOnView()

    // Sticky header spacer + responsive side padding
    const { spacerHeight } = useStickyHeaderSpacer()
    const sidePad = useResponsiveSidePadding()

    // Reveal flags for hero
    const h1On = useReveal("cs-h1")
    const leadOn = useReveal("cs-lead")

    // Compute adjusted top padding to avoid “double gap”
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
            document.title = "Case Studies – Wes Rosa Innovation Portfolio"
        } catch {}
    }, [])

    return (
        <Layout>
            <main role="main" style={{ background: "#fff", color: "#0F172A" }}>
                {/* Spacer to offset sticky header */}
                <div aria-hidden="true" style={{ height: spacerHeight }} />

                <div style={{ ...container1280, ...sidePad }}>
                    {/* HERO (unchanged) */}
                    <section
                        style={firstSectionStyle}
                        aria-label="Case Studies Hero"
                    >
                        <h1
                            id="cs-h1"
                            data-reveal=""
                            style={{
                                ...h1Main,
                                ...(styleReveal(h1On) as object),
                                color: "#0A3D91",
                            }}
                        >
                            Case Studies
                        </h1>
                        <p
                            id="cs-lead"
                            data-reveal=""
                            style={{
                                ...leadText,
                                ...(styleReveal(leadOn) as object),
                            }}
                        >
                            Selected outcomes across data platforms, DR, and
                            enablement.
                        </p>
                    </section>

                    {/* CONTENT (only change: render imported blocks) */}
                    <section
                        style={{ ...sectionMain, paddingTop: 16 }}
                        aria-label="Case Studies Content"
                    >
                        <CaseStudyArchival />
                        <CaseStudyCloudEnablement />
                    </section>
                </div>
            </main>
        </Layout>
    )
}
;(CaseStudies as any).displayName = "CaseStudies"
