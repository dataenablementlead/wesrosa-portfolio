import * as React from "react"

export default function CalendlySection(): JSX.Element {
    const sectionStyle: React.CSSProperties = {
        padding: "64px 24px",
        background: "#fff",
    }
    const wrapStyle: React.CSSProperties = {
        maxWidth: 1080,
        margin: "0 auto",
    }
    const titleStyle: React.CSSProperties = {
        fontFamily: "Inter, system-ui, Arial",
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 12,
        color: "#0A3D91",
    }
    const pStyle: React.CSSProperties = {
        fontFamily: "Inter, system-ui, Arial",
        fontSize: 16,
        color: "#333",
        marginBottom: 24,
    }
    const iframeStyle: React.CSSProperties = {
        width: "100%",
        height: 720,
        border: "1px solid #E6ECF7",
        borderRadius: 12,
    }

    return (
        <section style={sectionStyle} aria-labelledby="calendly-title">
            <div style={wrapStyle}>
                <h2 id="calendly-title" style={titleStyle}>
                    Book time with me
                </h2>
                <p style={pStyle}>
                    Pick a slot that works for you — you’ll get a calendar
                    invite automatically.
                </p>
                <iframe
                    title="Calendly"
                    src="https://calendly.com/wes-rosa?hide_gdpr_banner=1"
                    style={iframeStyle}
                    loading="lazy"
                />
            </div>
        </section>
    )
}
