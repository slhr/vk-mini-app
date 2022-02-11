import {AppPanel, PanelsActionTypes} from "../../types/panels";


export const setPanel = (panel: AppPanel) => ({
    type: PanelsActionTypes.SET_PANEL, panel
});

export const goToPanel = (panel: AppPanel) => ({
    type: PanelsActionTypes.GO_TO_PANEL, panel
});

export const goToPrevPanel = (panel: AppPanel) => ({
    type: PanelsActionTypes.GO_TO_PREV_PANEL, panel
});
