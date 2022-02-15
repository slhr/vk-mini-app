import {MyQueuesAction, MyQueuesActionTypes, MyQueuesState} from "../../types/myQueues";
import {IQueue, QueueTypes} from "../../types/queue";


const initialState: MyQueuesState = {
    queues: [],
    loading: false,
    error: null,
};

export const myQueuesReducer = (state = initialState, action: MyQueuesAction): MyQueuesState => {

    switch (action.type) {

        case MyQueuesActionTypes.FETCH_MY_QUEUES:
            return {loading: true, error: null, queues: []};

        case MyQueuesActionTypes.FETCH_MY_QUEUES_SUCCESS:
            return {loading: false, error: null, queues: action.payload};

        case MyQueuesActionTypes.FETCH_MY_QUEUES_ERROR:
            return {loading: false, error: action.payload, queues: []};

        case MyQueuesActionTypes.CREATE_QUEUE:
            return {loading: false, error: null, queues: [...state.queues, action.payload]};

        default:
            return state;
    }
};
