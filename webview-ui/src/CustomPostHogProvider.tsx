import { type ReactNode } from "react"

// Stubbed provider that simply renders children without initializing PostHog
export function CustomPostHogProvider({ children }: { children: ReactNode }) {
    return <>{children}</>
}
