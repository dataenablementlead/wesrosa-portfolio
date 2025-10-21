import * as React from "react"

export default function Chatbase(): JSX.Element {
    const CHATBASE_ID = "r-i9aUynIgpG_wBNOwEzu"
    const src = `https://www.chatbase.co/chatbot-iframe/${CHATBASE_ID}`

    // Let the parent control height; this wrapper just fills available space
    const frameWrap: React.CSSProperties = {
        width: "100%",
        height: "100%",
        minHeight: "inherit",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
        background: "#fff",
        boxSizing: "border-box",
    }

    const iframeStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        border: "0",
        display: "block",
    }

    return (
        <div style={frameWrap}>
            <iframe
                title="Chatbase Chatbot"
                src={src}
                style={iframeStyle}
                loading="lazy"
                onLoad={() => console.log("[Chatbase] iframe loaded")}
                referrerPolicy="no-referrer-when-downgrade"
                allow="clipboard-read; clipboard-write"
            />
        </div>
    )
}
;(Chatbase as any).displayName = "Chatbase"
