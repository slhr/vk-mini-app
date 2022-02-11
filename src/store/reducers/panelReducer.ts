import {Panels, PanelsActions, PanelsActionTypes, PanelsState} from "../../types/panels";


const initialState: PanelsState = {
    currentPanel: Panels.MY_QUEUES,
    previousPanel: null,
};

export const panelsReducer = (state = initialState, action: PanelsActions): PanelsState => {
    switch (action.type) {

        case PanelsActionTypes.SET_PANEL:
            return {currentPanel: action.panel, previousPanel: null};

        case PanelsActionTypes.GO_TO_PANEL:
            return {currentPanel: action.panel, previousPanel: state.currentPanel};

        case PanelsActionTypes.GO_TO_PREV_PANEL:
            return {currentPanel: action.panel, previousPanel: state.currentPanel};

        default:
            return state;
    }
};