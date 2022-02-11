import {Dispatch} from "redux";
import {IQueue, QueueAction, QueueActionTypes, QueueTypes} from "../../types/queue";
import {MyQueuesAction, MyQueuesActionTypes} from "../../types/myQueues";
import {IUser} from "../../types/user";



export const getQueue = (id: number, myQueues: any) => async (dispatch: Dispatch<QueueAction>) => {

    try {
        dispatch({type: QueueActionTypes.FETCH_QUEUE});
        // const queue = await setTimeout(() => ({...q}), 1000);
        dispatch({type: QueueActionTypes.FETCH_QUEUE_SUCCESS, payload: myQueues[id - 1]});
    } catch (error) {
        dispatch({type: QueueActionTypes.FETCH_QUEUE_ERROR, payload: "error"});
    }
};


interface ICreateQueueState {
    id: number,
    type: QueueTypes,
    description: string,
    participantsLimit: number,
    date: string,
    address: string,
    city: string,
    user: IUser
}

const createQueueState = (queueInfo: ICreateQueueState): IQueue => {
    return {
        id: queueInfo.id,
        type: queueInfo.type,
        date: new Date(queueInfo.date),
        description: queueInfo.description,
        address: queueInfo.address,
        city: queueInfo.city,
        participantsLimit: queueInfo.participantsLimit,
        participants: [queueInfo.user]
    };
};


export const createQueue = (queueInfo: ICreateQueueState) => async (dispatch: Dispatch<MyQueuesAction>) => {
    dispatch({type: MyQueuesActionTypes.CREATE_QUEUE, payload: createQueueState(queueInfo)});
};


