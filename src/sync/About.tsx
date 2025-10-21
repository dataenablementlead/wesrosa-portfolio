import * as React from "react"
import Layout from "./Layout.tsx"

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
    useResponsiveSidePadding,
    useReduceMotion,
} from "./StyleKit.tsx"

export default function About(): JSX.Element {
    // accessibility + animations
    const reduceMotion = useReduceMotion()
    useAutoRevealOnView()

    // sticky header spacer + responsive side padding
    const { spacerHeight } = useStickyHeaderSpacer()
    const sidePad = useResponsiveSidePadding()

    // reveal flags
    const h1On = useReveal("about-h1")
    const leadOn = useReveal("about-lead")
    const bioOn = useReveal("about-bio")
    const card1On = useReveal("about-card-1")
    const card2On = useReveal("about-card-2")
    const card3On = useReveal("about-card-3")
    const ctaH2On = useReveal("about-cta-h2")
    const ctaPOn = useReveal("about-cta-p")
    const ctaRowOn = useReveal("about-cta-row")

    // compute adjusted top padding to avoid "double gap" with sticky header
    const rawTop = (sectionMain as any)?.paddingTop
    const defaultTopPad =
        typeof rawTop === "string"
            ? parseInt(rawTop, 10) || 56
            : typeof rawTop === "number"
              ? rawTop
              : 56
    const minTopPad = 6
    const adjustedTopPad = Math.max(minTopPad, defaultTopPad - spacerHeight)
    const firstSectionStyle: React.CSSProperties = {
        ...sectionMain,
        paddingTop: adjustedTopPad,
        textAlign: "center",
    }

    // local styles that complement shared tokens (inline only)
    const grid: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: 16,
        marginTop: 16,
    }
    const cardPad: React.CSSProperties = {
        ...cardSurface,
        padding: 20,
        borderRadius: 16,
    }
    const h3: React.CSSProperties = {
        margin: "0 0 8px 0",
        fontSize: 18,
        fontWeight: 700,
        color: "#0046AD",
    }
    const body: React.CSSProperties = {
        ...leadText,
        margin: "0 auto",
        maxWidth: 900,
    }
    const lightBand: React.CSSProperties = {
        background: "#F7F9FC",
        borderTop: "1px solid rgba(15,23,42,0.08)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
        textAlign: "center",
    }
    const ctaRow: React.CSSProperties = {
        display: "flex",
        gap: 12,
        justifyContent: "center",
        flexWrap: "wrap",
    }
    const btnBase: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        fontWeight: 700,
        borderRadius: 12,
        lineHeight: 1.2,
    }
    const btnPrimary: React.CSSProperties = {
        ...btnBase,
        padding: "12px 20px",
        background:
            "linear-gradient(180deg, rgba(0,108,255,1), rgba(0,70,173,1))",
        color: "#fff",
        border: "1px solid transparent",
    }
    const btnSecondary: React.CSSProperties = {
        ...btnBase,
        padding: "10px 18px",
        color: "#0046AD",
        background: "#fff",
        border: "2px solid #0046AD",
    }

    React.useEffect(() => {
        try {
            document.title = "About – Wes Rosa Innovation Portfolio"
            // eslint-disable-next-line no-console
            console.log("[About] mounted (v=2025-10-20-01)")
        } catch {}
    }, [])

    return (
        <Layout>
            <main role="main" style={{ background: "#fff", color: "#0F172A" }}>
                {/* Spacer to offset sticky/fixed header height */}
                <div aria-hidden="true" style={{ height: spacerHeight }} />

                <div style={{ ...container1280, ...sidePad }}>
                    {/* HERO */}
                    <section style={firstSectionStyle} aria-label="About Wes">
                        <h1
                            id="about-h1"
                            data-reveal=""
                            style={{
                                ...h1Main,
                                ...(styleReveal(h1On) as object),
                            }}
                        >
                            I lead with standards and empathy
                        </h1>
                        <p
                            id="about-lead"
                            data-reveal=""
                            style={{
                                ...leadText,
                                ...(styleReveal(leadOn) as object),
                                maxWidth: 768,
                                margin: "0 auto",
                            }}
                        >
                            I build teams that deliver reliably and learn fast.
                            Clear goals, simple guardrails, and the right
                            enablement turn change fatigue into progress.
                        </p>
                    </section>

                    {/* SHORT BIO */}
                    <section style={{ ...sectionMain, textAlign: "center" }}>
                        <p
                            id="about-bio"
                            data-reveal=""
                            style={{
                                ...body,
                                ...(styleReveal(bioOn) as object),
                            }}
                        >
                            For more than 15 years I’ve led modernization across
                            data, cloud, and infrastructure in regulated
                            environments. My approach is practical: align on
                            outcomes, embed governance early, and enable teams
                            to solve more on their own. That’s how we achieved{" "}
                            <strong>$6M+</strong> cost avoidance, a{" "}
                            <strong>100%</strong> DR pass, <strong>40%</strong>{" "}
                            faster delivery, and a <strong>92%</strong>{" "}
                            engagement score.
                        </p>
                    </section>

                    {/* LEADERSHIP TENETS */}
                    <section style={{ ...sectionMain }}>
                        <div style={grid}>
                            <div
                                id="about-card-1"
                                data-reveal=""
                                style={{
                                    ...cardPad,
                                    ...(styleReveal(card1On) as object),
                                    textAlign: "center",
                                }}
                            >
                                <h3 style={h3}>Standards with empathy</h3>
                                <p style={{ margin: 0, lineHeight: 1.6 }}>
                                    Structure creates clarity; empathy sustains
                                    people. We set clear expectations and
                                    support the team to meet them.
                                </p>
                            </div>

                            <div
                                id="about-card-2"
                                data-reveal=""
                                style={{
                                    ...cardPad,
                                    ...(styleReveal(card2On) as object),
                                    textAlign: "center",
                                }}
                            >
                                <h3 style={h3}>Enablement beats heroics</h3>
                                <p style={{ margin: 0, lineHeight: 1.6 }}>
                                    Automation, training, and playbooks scale
                                    better than late-night saves. We design work
                                    so good outcomes are repeatable.
                                </p>
                            </div>

                            <div
                                id="about-card-3"
                                data-reveal=""
                                style={{
                                    ...cardPad,
                                    ...(styleReveal(card3On) as object),
                                    textAlign: "center",
                                }}
                            >
                                <h3 style={h3}>One metric, one behavior</h3>
                                <p style={{ margin: 0, lineHeight: 1.6 }}>
                                    Each cycle we choose one measurable result
                                    and one behavior change. Small wins compound
                                    into durable progress.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CREDIBILITY STRIP (light band) */}
                    <section style={{ ...sectionMain, ...lightBand }}>
                        <p style={{ ...leadText, margin: 0 }}>
                            <strong>Trusted in regulated environments:</strong>{" "}
                            Financial services, Healthcare, Public sector
                            <br />
                            <strong>Frameworks & practices:</strong> ITIL, ISO
                            27001-aligned controls, DR/BCP readiness, FinOps
                        </p>
                    </section>

                    {/* CTA */}
                    <section style={{ ...sectionMain, textAlign: "center" }}>
                        <h2
                            id="about-cta-h2"
                            data-reveal=""
                            style={{
                                ...h1Main,
                                ...(styleReveal(ctaH2On) as object),
                            }}
                        >
                            Want the details?
                        </h2>
                        <p
                            id="about-cta-p"
                            data-reveal=""
                            style={{
                                ...leadText,
                                ...(styleReveal(ctaPOn) as object),
                            }}
                        >
                            See the playbook I use to align stakeholders, embed
                            governance, and speed up delivery.
                        </p>
                        <div
                            id="about-cta-row"
                            data-reveal=""
                            style={{
                                ...ctaRow,
                                ...(styleReveal(ctaRowOn) as object),
                            }}
                        >
                            <a href="/framework" style={btnPrimary}>
                                View Framework
                            </a>
                            <a href="/case-studies" style={btnSecondary}>
                                See Case Studies
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    )
}
;(About as any).displayName = "About"
