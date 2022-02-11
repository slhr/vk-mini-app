import {IUser} from "./user";

export interface QueueState {
    queue: IQueue | null;
    loading: boolean;
    error: null | string;
}

export enum QueueActionTypes {
    FETCH_QUEUE = "FETCH_QUEUE",
    FETCH_QUEUE_SUCCESS = "FETCH_QUEUE_SUCCESS",
    FETCH_QUEUE_ERROR = "FETCH_QUEUE_ERROR"
}


interface FetchQueueAction {
    type: QueueActionTypes.FETCH_QUEUE;
}

interface FetchQueueSuccessAction {
    type: QueueActionTypes.FETCH_QUEUE_SUCCESS;
    payload: IQueue;
}

interface FetchQueueErrorAction {
    type: QueueActionTypes.FETCH_QUEUE_ERROR;
    payload: string;
}

export type QueueAction = FetchQueueAction | FetchQueueSuccessAction | FetchQueueErrorAction


export enum QueueTypes {
    QUEUE_TYPE_1 = "Баскетбол",
    QUEUE_TYPE_2 = "Волейбол",
    QUEUE_TYPE_3 = "Футбол",
}


export interface IQueue {
    id: number;
    type: QueueTypes;
    date: Date;
    city: string;
    address: string;
    participants: IUser[];
    participantsLimit: number;
    description: string;
}



