import {queueReducer} from "./queueReducer";
import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {myQueuesReducer} from "./myQueuesReducer";
import {panelsReducer} from "./panelReducer";

export const rootReducer = combineReducers({
    panels: panelsReducer,
    user: userReducer,
    myQueues: myQueuesReducer,
    queue: queueReducer,
});

export type RootState = ReturnType<typeof rootReducer>