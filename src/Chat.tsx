import * as React from "react"
import Layout from "./Layout.tsx"
import Chatbase from "./Chatbase.tsx"

// Shared tokens + hooks
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

export default function Chat(): JSX.Element {
    React.useEffect(() => {
        console.log("[Chat] mounted (v=2025-10-19-01)")
    }, [])

    // accessibility + animations
    const reduceMotion = useReduceMotion()
    useAutoRevealOnView()

    // sticky header spacer + responsive frame height + side padding
    const { spacerHeight } = useStickyHeaderSpacer()
    // Match Book page behavior: 520 mobile/tablet, 760 desktop
    const minH = useResponsiveMinHeight(768, 520, 760)
    const sidePad = useResponsiveSidePadding()

    // reveal flags
    const h1On = useReveal("chat-h1")
    const leadOn = useReveal("chat-lead")
    const frameOn = useReveal("chat-frame")

    return (
        <Layout>
            <main role="main">
                {/* Spacer to offset sticky/fixed header */}
                <div aria-hidden="true" style={{ height: spacerHeight }} />
                        <h1
                            id="chat-h1"
                            data-reveal=""
                            style={{
                                ...h1Main,
                                ...(styleReveal(h1On) as object),
                            }}
                        >
                            Chat with Wes AI
                        </h1>

                        <p
                            id="chat-lead"
                            data-reveal=""
                            style={{
                                ...leadText,
                                ...(styleReveal(leadOn) as object),
                            }}
                        >
                            Ask about data platforms, cloud modernization,
                            governance, or my portfolio.
                        </p>

                        {/* Card container controls height; iframe fills 100% inside */}
                        <div
                            id="chat-frame"
                            data-reveal=""
                            style={{
                                ...styleReveal(frameOn),
                                ...cardSurface,
                                minHeight: minH,
                                height: "min(84svh, 860px)", // iOS-friendly; ignored elsewhere if unsupported
                            }}
                        >
                            <Chatbase />
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    )
}
;(Chat as any).displayName = "Chat"
