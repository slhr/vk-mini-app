import {QueueAction, QueueActionTypes, QueueState} from "../../types/queue";


const initialState: QueueState = {
    queue: null,
    loading: false,
    error: null,
};

export const queueReducer = (state = initialState, action: QueueAction): QueueState => {

    switch (action.type) {
        case QueueActionTypes.FETCH_QUEUE:
            return {loading: true, error: null, queue: null};

        case QueueActionTypes.FETCH_QUEUE_SUCCESS:
            return {loading: false, error: null, queue: action.payload};

        case QueueActionTypes.FETCH_QUEUE_ERROR:
            return {loading: false, error: action.payload, queue: null};

        default:
            return state;
    }
};
