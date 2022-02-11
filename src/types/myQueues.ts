import {IQueue} from "./queue";

export interface MyQueuesState {
    queues: IQueue[];
    loading: boolean;
    error: string | null;
}

export enum MyQueuesActionTypes {
    FETCH_MY_QUEUES = "FETCH_MY_QUEUES",
    FETCH_MY_QUEUES_SUCCESS = "FETCH_MY_QUEUES_SUCCESS",
    FETCH_MY_QUEUES_ERROR = "FETCH_MY_QUEUES_ERROR",

    CREATE_QUEUE = "CREATE_QUEUE"
}

interface FetchMyQueuesAction {
    type: MyQueuesActionTypes.FETCH_MY_QUEUES;
}

interface FetchMyQueuesSuccessAction {
    type: MyQueuesActionTypes.FETCH_MY_QUEUES_SUCCESS,
    payload: IQueue[];
}

interface FetchMyQueuesErrorAction {
    type: MyQueuesActionTypes.FETCH_MY_QUEUES_ERROR,
    payload: string;
}

interface CreateQueueAction {
    type: MyQueuesActionTypes.CREATE_QUEUE,
    payload: IQueue
}


export type MyQueuesAction = FetchMyQueuesAction | FetchMyQueuesSuccessAction | FetchMyQueuesErrorAction | CreateQueueAction