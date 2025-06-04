import type { BrowserSettings } from "@shared/BrowserSettings"
import type { TaskFeedbackType } from "@shared/WebviewMessage"

/**
 * Stubbed TelemetryService for DOD-compliant builds.
 * All methods are no-ops and no data is sent anywhere.
 */
class TelemetryService {
    public distinctId = ""

    // Singleton pattern
    private static instance: TelemetryService = new TelemetryService()
    private constructor() {}

    public static getInstance(): TelemetryService {
        return TelemetryService.instance
    }

    public async updateTelemetryState(_didUserOptIn: boolean): Promise<void> {
        return
    }

    public captureExtensionActivated(_installId: string): void {}
    public captureTaskCreated(_taskId: string, _apiProvider?: string, _collect: boolean = false): void {}
    public captureTaskRestarted(_taskId: string, _apiProvider?: string, _collect: boolean = false): void {}
    public captureTaskCompleted(_taskId: string, _collect: boolean = false): void {}
    public captureConversationTurnEvent(
        _taskId: string,
        _provider: string,
        _model: string,
        _source: "user" | "assistant",
        _collect: boolean = false,
    ): void {}
    public captureTokenUsage(
        _taskId: string,
        _tokensIn: number,
        _tokensOut: number,
        _model: string,
        _collect: boolean = false,
    ): void {}
    public captureModeSwitch(_taskId: string, _mode: "plan" | "act", _collect: boolean = false): void {}
    public captureTaskFeedback(_taskId: string, _feedbackType: TaskFeedbackType, _collect: boolean = false): void {}
    public captureToolUsage(
        _taskId: string,
        _tool: string,
        _autoApproved: boolean,
        _success: boolean,
        _collect: boolean = false,
    ): void {}
    public captureCheckpointUsage(
        _taskId: string,
        _action: "shadow_git_initialized" | "commit_created" | "restored" | "diff_generated",
        _durationMs?: number,
        _collect: boolean = false,
    ): void {}
    public captureDiffEditFailure(_taskId: string, _modelId: string, _errorType?: string, _collect: boolean = false): void {}
    public captureModelSelected(_model: string, _provider: string, _taskId?: string, _collect: boolean = false): void {}
    public captureHistoricalTaskLoaded(_taskId: string, _collect: boolean = false): void {}
    public captureRetryClicked(_taskId: string, _collect: boolean = false): void {}
    public captureBrowserToolStart(_taskId: string, _browserSettings: BrowserSettings, _collect: boolean = false): void {}
    public captureBrowserToolEnd(
        _taskId: string,
        _stats: { actionCount: number; duration: number; actions?: string[] },
        _collect: boolean = false,
    ): void {}
    public captureBrowserError(
        _taskId: string,
        _errorType: string,
        _errorMessage: string,
        _context?: { action?: string; url?: string; isRemote?: boolean; [key: string]: any },
        _collect: boolean = false,
    ): void {}
    public captureOptionSelected(_taskId: string, _qty: number, _mode: "plan" | "act", _collect: boolean = false): void {}
    public captureOptionsIgnored(_taskId: string, _qty: number, _mode: "plan" | "act", _collect: boolean = false): void {}
    public captureGeminiApiPerformance(
        _taskId: string,
        _modelId: string,
        _latencyMs: number,
        _attempt: number,
        _collect: boolean = false,
    ): void {}
    public captureModelFavoritesUsage(_model: string, _isFavorited: boolean, _collect: boolean = false): void {}
    public captureButtonClick(_button: string, _taskId?: string, _collect: boolean = false): void {}
    public isTelemetryEnabled(): boolean { return false }
    public isCategoryEnabled(_category: string): boolean { return false }
    public async sendCollectedEvents(_taskId?: string): Promise<void> { return }
    public async shutdown(): Promise<void> { return }
}

export const telemetryService = TelemetryService.getInstance()
