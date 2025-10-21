import * as React from "react"
import Layout from "./Layout.tsx"
import {
    container1280,
    sectionMain,
    h1Main,
    leadText,
    useAutoRevealOnView,
    styleReveal,
    useReveal,
} from "./StyleKit.tsx"

// --- Mobile helper (unchanged) ---
function useIsMobile(breakpoint = 768) {
    const [isMobile, set] = React.useState(false)
    React.useEffect(() => {
        const mql = window.matchMedia(`(max-width:${breakpoint}px)`)
        const onChange = (e: MediaQueryList | MediaQueryListEvent) => {
            const matches =
                "matches" in e
                    ? (e as MediaQueryList).matches
                    : (e as MediaQueryListEvent).matches
            set(!!matches)
        }
        onChange(mql)
        if (mql.addEventListener)
            mql.addEventListener("change", onChange as EventListener)
        else if (mql.addListener) mql.addListener(onChange as any)
        return () => {
            if (mql.removeEventListener)
                mql.removeEventListener("change", onChange as EventListener)
            else if (mql.removeListener) mql.removeListener(onChange as any)
        }
    }, [breakpoint])
    return isMobile
}

// --- Section divider (unchanged) ---
function SectionDivider({
    from = "#FFFFFF",
    to = "#F7F9FC",
}: {
    from?: string
    to?: string
}) {
    return (
        <div
            aria-hidden="true"
            style={{
                height: "2rem",
                background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
            }}
        />
    )
}

// --- Button + HoverCard unchanged ---
function Button({
    children,
    kind = "primary",
    href,
}: {
    children: React.ReactNode
    kind?: "primary" | "secondary"
    href?: string
}) {
    const [hover, setHover] = React.useState(false)
    const base: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.875rem 1.25rem",
        borderRadius: 999,
        fontWeight: 700,
        fontSize: "clamp(0.95rem, 0.25vw + 0.85rem, 1rem)",
        textDecoration: "none",
        border: "1px solid transparent",
        transition:
            "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease",
    }

    const variants = {
        primary: {
            background: "linear-gradient(180deg, #006CFF, #0046AD)",
            color: "#fff",
            boxShadow: hover ? "0 4px 14px rgba(0,108,255,0.28)" : "none",
            transform: hover ? "translateY(-2px)" : "none",
        },
        secondary: {
            background: "#fff",
            color: "#0046AD",
            border: "2px solid #0046AD",
            transform: hover ? "translateY(-2px)" : "none",
            boxShadow: hover ? "0 4px 16px rgba(0,70,173,0.15)" : "none",
        },
    }

    return (
        <a
            data-btn
            href={href}
            style={{ ...base, ...variants[kind] }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </a>
    )
}

function HoverCard({ children }: { children: React.ReactNode }) {
    const [hover, set] = React.useState(false)
    return (
        <div
            onMouseEnter={() => set(true)}
            onMouseLeave={() => set(false)}
            style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(15,23,42,0.08)",
                boxShadow: hover
                    ? "0 10px 30px rgba(0,0,0,0.10)"
                    : "0 6px 24px rgba(0,0,0,0.06)",
                padding: "2rem",
                transform: hover ? "translateY(-4px)" : "translateY(0)",
                transition: "transform 220ms ease, box-shadow 220ms ease",
            }}
        >
            {children}
        </div>
    )
}

// --- Homepage Component ---
export default function Home() {
    const isMobile = useIsMobile(820)
    useAutoRevealOnView()

    const h1On = useReveal("home-h1")
    const leadOn = useReveal("home-lead")

    return (
        <Layout>
            <main
                style={{
                    background: "#fff",
                    color: "#0F172A",
                    fontFamily: "Inter, system-ui, sans-serif",
                }}
            >
                {/* HERO */}
                <section style={{ ...sectionMain, textAlign: "center" }}>
                    <h1 id="home-h1" data-reveal="" style={styleReveal(h1On)}>
                        Helping organizations modernize how they deliver data
                        and cloud outcomes
                    </h1>
                    <p
                        id="home-lead"
                        data-reveal=""
                        style={{
                            ...leadText,
                            ...(styleReveal(leadOn) as object),
                            maxWidth: "48rem",
                            margin: "1rem auto",
                        }}
                    >
                        I’m <strong>Wes Rosa</strong> — a senior technology and
                        delivery leader focused on building high-performance
                        teams, improving reliability, and accelerating
                        modernization across data, cloud, and infrastructure.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            marginTop: "1.5rem",
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "center",
                        }}
                    >
                        <Button kind="secondary" href="/chat">
                            Chat with Wes
                        </Button>
                        <Button kind="primary" href="/book">
                            Book a Call
                        </Button>
                        <Button kind="secondary" href="/case-studies">
                            Explore Case Studies
                        </Button>
                    </div>
                </section>

                <SectionDivider from="#fff" to="#F7F9FC" />

                {/* METRICS */}
                <section style={{ ...sectionMain, background: "#F7F9FC" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile
                                ? "1fr 1fr"
                                : "repeat(4, 1fr)",
                            gap: "1.5rem",
                            textAlign: "center",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#0046AD",
                                }}
                            >
                                $6 M+
                            </div>
                            Cost avoidance through data archival and FinOps
                            optimization
                        </div>
                        <div>
                            <div
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#0046AD",
                                }}
                            >
                                100 %
                            </div>
                            Disaster-recovery pass rate across regulated
                            environments
                        </div>
                        <div>
                            <div
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#0046AD",
                                }}
                            >
                                92 %
                            </div>
                            Employee engagement from high-performance teams
                        </div>
                        <div>
                            <div
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#0046AD",
                                }}
                            >
                                40 %
                            </div>
                            Faster delivery from standardized enablement
                            frameworks
                        </div>
                    </div>
                </section>

                <SectionDivider from="#F7F9FC" to="#fff" />

                {/* SUMMARY */}
                <section style={{ ...sectionMain, textAlign: "center" }}>
                    <p
                        style={{
                            ...leadText,
                            maxWidth: "48rem",
                            margin: "0 auto",
                        }}
                    >
                        For more than 15 years, I’ve led teams modernizing{" "}
                        <strong>
                            data, cloud, and infrastructure platforms
                        </strong>{" "}
                        in highly regulated sectors. My focus is always the same
                        — clear standards, measurable outcomes, and empowering
                        people to deliver faster and with confidence.
                    </p>
                </section>

                {/* CARDS */}
                <section style={{ ...sectionMain, textAlign: "center" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile
                                ? "1fr"
                                : "repeat(3, 1fr)",
                            gap: "1.5rem",
                            marginTop: "1.5rem",
                        }}
                    >
                        <HoverCard>
                            <h3
                                style={{
                                    marginBottom: "0.75rem",
                                    fontSize: "1.25rem",
                                    color: "#0046AD",
                                }}
                            >
                                Leadership Philosophy
                            </h3>
                            <p
                                style={{
                                    marginBottom: "0.75rem",
                                    color: "rgba(15,23,42,0.72)",
                                    lineHeight: 1.6,
                                }}
                            >
                                How I lead through enablement and standards.
                            </p>
                            <a
                                href="/about"
                                style={{
                                    color: "#006CFF",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                }}
                            >
                                Read About Wes →
                            </a>
                        </HoverCard>
                        <HoverCard>
                            <h3
                                style={{
                                    marginBottom: "0.75rem",
                                    fontSize: "1.25rem",
                                    color: "#0046AD",
                                }}
                            >
                                Frameworks & Playbooks
                            </h3>
                            <p
                                style={{
                                    marginBottom: "0.75rem",
                                    color: "rgba(15,23,42,0.72)",
                                    lineHeight: 1.6,
                                }}
                            >
                                My repeatable model for modernization success.
                            </p>
                            <a
                                href="/framework"
                                style={{
                                    color: "#006CFF",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                }}
                            >
                                View Framework →
                            </a>
                        </HoverCard>
                        <HoverCard>
                            <h3
                                style={{
                                    marginBottom: "0.75rem",
                                    fontSize: "1.25rem",
                                    color: "#0046AD",
                                }}
                            >
                                Case Studies
                            </h3>
                            <p
                                style={{
                                    marginBottom: "0.75rem",
                                    color: "rgba(15,23,42,0.72)",
                                    lineHeight: 1.6,
                                }}
                            >
                                Real results with measurable impact.
                            </p>
                            <a
                                href="/case-studies"
                                style={{
                                    color: "#006CFF",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                }}
                            >
                                See Outcomes →
                            </a>
                        </HoverCard>
                    </div>
                </section>

                <SectionDivider from="#fff" to="#F7F9FC" />

                {/* MINI BIO */}
                <section
                    style={{
                        ...sectionMain,
                        background: "#F7F9FC",
                        borderTop: "1px solid rgba(15,23,42,0.08)",
                        borderBottom: "1px solid rgba(15,23,42,0.08)",
                        textAlign: "center",
                    }}
                >
                    <h2 style={h1Main}>
                        Leadership in data, cloud, and modernization
                    </h2>
                    <p
                        style={{
                            ...leadText,
                            maxWidth: "48rem",
                            margin: "0 auto",
                        }}
                    >
                        I’ve spent over 15 years helping organizations modernize
                        their platforms and teams. My approach is simple — align
                        on outcomes, embed governance early, and enable people
                        to deliver faster and with confidence.
                    </p>
                </section>

                <SectionDivider from="#F7F9FC" to="#fff" />

                {/* CLOSING */}
                <section style={{ ...sectionMain, textAlign: "center" }}>
                    <h2 data-reveal="" style={h1Main}>
                        Ready to talk about your data, cloud, or delivery
                        roadmap?
                    </h2>
                    <p data-reveal="" style={leadText}>
                        Let’s explore what modernization could look like for
                        your organization.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            marginTop: "1.5rem",
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "center",
                        }}
                    >
                        <Button kind="primary" href="/book">
                            Book a Call
                        </Button>
                        <Button kind="secondary" href="/chat">
                            Ask Wes AI
                        </Button>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
