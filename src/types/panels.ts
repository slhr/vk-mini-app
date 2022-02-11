export enum Panels {
    MY_QUEUES = "MY_QUEUES",
    CREATION_PAGE = "CREATION_PAGE",
    SEARCH_PAGE = "SEARCH_PAGE",
    QUEUE_PAGE = "QUEUE_PAGE",
}

export type AppPanel = Panels.MY_QUEUES | Panels.CREATION_PAGE | Panels.SEARCH_PAGE | Panels.QUEUE_PAGE

export type PanelsState = {
    currentPanel: AppPanel
    previousPanel: AppPanel | null
}

export enum PanelsActionTypes {
    SET_PANEL = "SET_PANEL",
    GO_TO_PANEL = "GO_TO_PANEL",
    GO_TO_PREV_PANEL = "GO_TO_PREV_PANEL",
}

interface SetPanelAction {
    type: PanelsActionTypes.SET_PANEL;
    panel: AppPanel;
}

interface GoToPanelAction {
    type: PanelsActionTypes.GO_TO_PANEL;
    panel: AppPanel;
}

export interface GoToPrevPanelAction {
    type: PanelsActionTypes.GO_TO_PREV_PANEL;
    panel: AppPanel;
}

export type PanelsActions = SetPanelAction | GoToPanelAction | GoToPrevPanelAction