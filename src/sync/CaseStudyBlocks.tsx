// CaseStudyBlocks.tsx
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

/** ---------- Case Study #1: Archival ---------- */
export function CaseStudyArchival(): JSX.Element {
    useAutoRevealOnView()

    const intro = useReveal("cs-archival-intro")

    const articleStyle: React.CSSProperties = {
        ...cardSurface,
        padding: 20,
        borderRadius: 8,
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
            id="archival"
            aria-label="Enterprise Data Archival Modernization"
            style={articleStyle}
            data-reveal=""
        >
            {/* Titles visible by default */}
            <h2
                style={{
                    ...h1Main,
                    fontSize: 28,
                    margin: "0 0 4px 0",
                    opacity: 1,
                    transform: "none",
                }}
            >
                Case Study #1 – Enterprise Data Archival Modernization
            </h2>
            <p style={{ ...p, ...(styleReveal(intro) as object) }}>
                TD Bank – Enterprise Data Platform
            </p>

            <Section id="archival-context" title="Context & Challenge">
                <p style={p}>
                    By 2020, our enterprise data platform had grown to more than{" "}
                    <strong>10 PB</strong>, including{" "}
                    <strong>1 PB of inactive data</strong> spread across legacy
                    Hadoop clusters. The cost of maintaining it kept rising, and
                    the platform had an absolute capacity limit we knew we would
                    eventually hit.
                </p>
                <p style={p}>
                    Business teams were skeptical about “archival” because they
                    feared losing access to historical data needed for audits or
                    analytics. Technology wanted to move forward with the cloud
                    roadmap, but every conversation risked stalling over fear of
                    disruption.
                </p>
            </Section>

            <Section id="archival-approach" title="Approach">
                <p style={p}>
                    I reframed the problem around value and enablement. We
                    launched a POC and business workflow pilot aligned to{" "}
                    <strong>Azure best practices</strong> and the Microsoft
                    roadmap for storage and PaaS solutions.
                </p>
                <ul style={ul}>
                    <li style={li}>
                        <strong>Assessment and baselining:</strong> quantified
                        cost of inactive data and who depended on it.
                    </li>
                    <li style={li}>
                        <strong>Training and champions:</strong> nominated data
                        owners and delivery teams to validate the approach and
                        demonstrate value.
                    </li>
                    <li style={li}>
                        <strong>Governance and standards:</strong> repeatable
                        rules for retention, encryption, and metadata tagging
                        aligned with corporate policy.
                    </li>
                    <li style={li}>
                        <strong>Solution alignment:</strong> partnered with
                        Microsoft engineering to confirm our design matched
                        reference patterns and remained upgrade-safe.
                    </li>
                    <li style={li}>
                        <strong>Small wins:</strong> started with one pilot
                        dataset to prove instant retrieval for historical data.
                        Adoption followed quickly.
                    </li>
                </ul>
            </Section>

            <Section id="archival-outcome" title="Outcome">
                <p style={p}>
                    Over six months, we <strong>archived more than 1 PB</strong>{" "}
                    of inactive data, <strong>avoided over $6 million</strong>{" "}
                    in projected infrastructure and license costs, and{" "}
                    <strong>cut nightly ETL load times by 40%</strong>. We also
                    freed up cloud credits that funded new analytics POCs
                    without additional budget. Self-service retrieval gave teams
                    confidence, and archival became a standard step in every new
                    project.
                </p>
            </Section>

            <Section id="archival-reflection" title="Reflection">
                <p style={p}>
                    Governance can feel like enablement when framed around
                    shared wins. By aligning with vendor roadmaps and showing
                    visible success early, we built lasting momentum for cloud
                    modernization.
                </p>
            </Section>
        </article>
    )
}

/** ---------- Case Study #2: Cloud Enablement ---------- */
export function CaseStudyCloudEnablement(): JSX.Element {
    useAutoRevealOnView()
    const intro = useReveal("cs-cloud-intro")

    const articleStyle: React.CSSProperties = {
        ...cardSurface,
        padding: 20,
        borderRadius: 16,
        marginTop: 16,
    }

    const p: React.CSSProperties = {
        ...leadText,
        margin: "0 0 12px 0",
    }

    const ul: React.CSSProperties = { margin: "8px 0 0 18px" }
    const li: React.CSSProperties = { ...leadText, margin: "0 0 6px 0" }

    return (
        <article
            id="cloud-enablement"
            aria-label="Cloud Enablement Framework for Diverse Stakeholders"
            style={articleStyle}
            data-reveal=""
        >
            {/* Titles visible by default */}
            <h2
                style={{
                    ...h1Main,
                    fontSize: 28,
                    margin: "0 0 4px 0",
                    opacity: 1,
                    transform: "none",
                }}
            >
                Case Study #2 – Cloud Enablement Framework for Diverse
                Stakeholders
            </h2>
            <p style={{ ...p, ...(styleReveal(intro) as object) }}>
                Enterprise Cloud Program
            </p>

            <Section id="cloud-context" title="Context & Challenge">
                <p style={p}>
                    Teams were at different levels of readiness. Some moved
                    fast, others relied on legacy patterns and manual approvals.
                    We needed to bring dozens of teams and hundreds of
                    applications onto a shared cloud foundation without slowing
                    innovation or creating friction between business and IT.
                </p>
            </Section>

            <Section id="cloud-approach" title="Approach">
                <p style={p}>
                    I built a structured but flexible{" "}
                    <strong>Cloud Enablement Framework</strong>. It became the
                    operating rhythm for learning, practice, and success in the
                    cloud. We followed a consistent sequence that kept momentum
                    visible and measurable:
                </p>
                <ul style={ul}>
                    <li style={li}>
                        <strong>Assessment and baselining:</strong> used a
                        maturity scoring model so each team started at the level
                        that matched their capability. Flexible but
                        standardized.
                    </li>
                    <li style={li}>
                        <strong>Training and capability building:</strong>{" "}
                        structured classes, one-on-one sessions for champions,
                        and hands-on materials people could use independently.
                        Focus areas included Azure data fundamentals, internal
                        SaaS data platform usage, governance by design, code
                        best practices, and FinOps principles.
                    </li>
                    <li style={li}>
                        <strong>Champions and community:</strong> early adopters
                        who demonstrated real wins and created a culture of
                        collaboration and shared learning.
                    </li>
                    <li style={li}>
                        <strong>Governance and standards:</strong> lightweight
                        controls embedded in pipelines so compliance happened
                        automatically. Governance included only when necessary
                        to reduce friction and keep delivery velocity high.
                    </li>
                    <li style={li}>
                        <strong>Solution alignment:</strong> worked with
                        Microsoft and internal architecture, but the goal was to
                        align and influence stakeholders to adopt, refine, or
                        create standards when it benefited all teams, always
                        targeting the lowest cost of ownership.
                    </li>
                    <li style={li}>
                        <strong>Small wins and visible progress:</strong> one or
                        two use cases per team to prove value early, share
                        results, and build momentum.
                    </li>
                </ul>
            </Section>

            <Section id="cloud-outcome" title="Outcome">
                <p style={p}>
                    Within the first year, we had{" "}
                    <strong>
                        over 10 teams and 200 engineers and analysts
                    </strong>{" "}
                    actively building in Azure with the same governance model,
                    standards, and curated zones. We enabled hundreds of users
                    and <strong>reduced deployment time by up to 50%</strong> —
                    in one case from eight months down to three — by embedding
                    the framework, controls, and automation directly into
                    pipelines. The model became a repeatable pattern across
                    analytics, BI, and AI modernization.
                </p>
            </Section>

            <Section id="cloud-reflection" title="Reflection">
                <p style={p}>
                    Transformation is about people and trust. By meeting teams
                    where they were, showing early progress, and aligning to
                    clear outcomes, we turned cloud adoption into a business
                    enablement capability.
                </p>
            </Section>
        </article>
    )
}

/** Lightweight TOC for optional navigation */
export const CASE_STUDY_TOC = [
    { id: "archival", label: "Archival Modernization" },
    { id: "cloud-enablement", label: "Cloud Enablement" },
]
