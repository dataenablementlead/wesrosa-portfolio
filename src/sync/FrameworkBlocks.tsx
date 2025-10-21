// FrameworkBlocks.tsx
import * as React from "react"
import {
    cardSurface,
    h1Main,
    leadText,
    styleReveal,
    useReveal,
    useAutoRevealOnView,
} from "./StyleKit.tsx"

function Section({
    id,
    title,
    children,
}: {
    id: string
    title: string
    children: React.ReactNode
}) {
    const on = useReveal(id)
    return (
        <section
            id={id}
            aria-labelledby={`${id}-h`}
            style={{ marginTop: 20 }}
            data-reveal=""
        >
            <h3
                id={`${id}-h`}
                style={{
                    margin: "0 0 8px 0",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0046AD",
                    ...(styleReveal(on) as object),
                }}
            >
                {title}
            </h3>
            <div style={{ ...(styleReveal(on) as object) }}>{children}</div>
        </section>
    )
}

/** ---------- Framework Block #1: Enablement Framework ---------- */
export function FrameworkEnablement(): JSX.Element {
    useAutoRevealOnView()

    const intro = useReveal("fw-enable-intro")
    const articleStyle: React.CSSProperties = {
        ...cardSurface,
        padding: 20,
        borderRadius: 16,
        marginTop: 0,
    }

    const p: React.CSSProperties = {
        ...leadText,
        margin: "0 0 12px 0",
    }

    const ul: React.CSSProperties = { margin: "8px 0 0 18px" }
    const li: React.CSSProperties = { ...leadText, margin: "0 0 6px 0" }

    return (
        <article
            id="framework-enablement"
            aria-label="Enablement Framework for Data, Cloud, and Delivery"
            style={articleStyle}
            data-reveal=""
        >
            {/* Title stays visible to avoid hidden headings */}
            <h2
                style={{
                    ...h1Main,
                    fontSize: 28,
                    margin: "0 0 4px 0",
                    opacity: 1,
                    transform: "none",
                }}
            >
                Enablement Framework for Data and Cloud Delivery
            </h2>
            <p style={{ ...p, ...(styleReveal(intro) as object) }}>
                A practical way to help teams adopt shared platforms, build
                safely, and show progress early.
            </p>

            <Section id="fw-enable-principles" title="Principles">
                <p style={p}>
                    I use three principles to keep delivery fast and compliant.{" "}
                    <strong>Governance by design</strong> so controls live
                    inside intake and pipelines.{" "}
                    <strong>Standards with empathy</strong> so teams start where
                    they are and level up with support.{" "}
                    <strong>Enablement beats heroics</strong> so repeatable
                    patterns replace last minute fixes.
                </p>
            </Section>

            <Section id="fw-enable-structure" title="Operating Rhythm">
                <p style={p}>
                    The framework sets a steady cadence that balances learning
                    with delivery. It focuses on small wins that scale.
                </p>
                <ul style={ul}>
                    <li style={li}>
                        <strong>Baseline and focus:</strong> a light maturity
                        check to find the right starting point and cut noise.
                    </li>
                    <li style={li}>
                        <strong>Targeted enablement:</strong> hands on support
                        for Azure data services, platform usage, and release
                        routines.
                    </li>
                    <li style={li}>
                        <strong>Guardrails embedded:</strong> RBAC, lineage, and
                        policy checks wired into intake and CI so audit steps
                        are not bolted on later.
                    </li>
                    <li style={li}>
                        <strong>Reusable patterns:</strong> reference pipelines,
                        IaC snippets, and PR templates that teams can drop in.
                    </li>
                    <li style={li}>
                        <strong>Community and champions:</strong> a simple forum
                        and office hours to surface blockers and share wins.
                    </li>
                    <li style={li}>
                        <strong>Measure what matters:</strong> cycle time, cost
                        signals, access exceptions, and incident trends.
                    </li>
                </ul>
            </Section>

            <Section id="fw-enable-outcomes" title="Typical Outcomes">
                <p style={p}>
                    This approach has led to shorter release cycles, stronger
                    audit posture, and lower run costs. Results have included{" "}
                    <strong>
                        cost avoidance through archival of inactive data
                    </strong>
                    ,{" "}
                    <strong>
                        faster patching and safer releases with automation
                    </strong>
                    , and <strong>fewer access exceptions</strong> thanks to
                    RBAC and lineage at intake. The pattern proves value with
                    one or two use cases, then scales with the same building
                    blocks.
                </p>
            </Section>

            <Section id="fw-enable-when" title="Where It Fits Best">
                <p style={p}>
                    Use this when multiple teams need to adopt shared data and
                    cloud platforms, or when delivery slows due to manual
                    reviews and unclear guardrails. It works because it is
                    simple, repeatable, and people centered.
                </p>
            </Section>
        </article>
    )
}

/** Lightweight TOC for optional navigation */
export const FRAMEWORK_TOC = [
    { id: "framework-enablement", label: "Enablement Framework" },
]
