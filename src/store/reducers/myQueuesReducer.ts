import {MyQueuesAction, MyQueuesActionTypes, MyQueuesState} from "../../types/myQueues";
import {IQueue, QueueTypes} from "../../types/queue";

export const initialQueues: IQueue[] = [
    {
        id: 1,
        type: QueueTypes.QUEUE_TYPE_1,
        date: new Date("2022-02-01"),
        description: "Описание события",
        address: "ул. Ленина 10",
        city: "Челябинск",
        participantsLimit: 10,
        participants: [{
            city: {id: 5098, title: "Копейск"},
            country: {id: 1, title: "Россия"},
            first_name: "Андрей",
            id: 112546845,
            last_name: "Моисеенко",
            photo_100: "https://sun1.is74.userapi.com/s/v1/ig2/AS23PNN7qmpLlKHFjSTdO4_NLOqy4KmDsPNtCjY1w4IfhBVjOkVDsl1uYFU-BlfL_quBsDAR15WP1KF68c5j4eb3.jpg?size=100x100&quality=96&crop=0,0,576,576&ava=1",
            photo_200: "https://sun1.is74.userapi.com/s/v1/ig2/2sIs_ST8vMxEyN_txdG-5e2gNtmEN1dmLr_2krfwjx10SjLCnV2OtcGETzQUE89ux1RMoHcNhol4783nr_v-MxOf.jpg?size=200x200&quality=96&crop=0,0,576,576&ava=1",
            photo_max_orig: "https://sun1.is74.userapi.com/s/v1/ig2/fy6Ho3Z7736aLg1pcJorlzW3P2c-uE-x5Go7NiNlVGozkDXc6hSrNw6Hg9Sic8T3X8XtHqjkPJ4iB4D7dJGZq4KF.jpg?size=576x576&quality=96&crop=0,0,576,576&ava=1",
            sex: 2,
            timezone: 5,
        }]
    },
    {
        id: 2,
        type: QueueTypes.QUEUE_TYPE_2,
        date: new Date("2022-02-02"),
        description: "Описание события",
        address: "пр-кт Комсомольский 1",
        city: "Челябинск",
        participantsLimit: 10,
        participants: [{
            city: {id: 5098, title: "Копейск"},
            country: {id: 1, title: "Россия"},
            first_name: "Андрей",
            id: 112546845,
            last_name: "Моисеенко",
            photo_100: "https://sun1.is74.userapi.com/s/v1/ig2/AS23PNN7qmpLlKHFjSTdO4_NLOqy4KmDsPNtCjY1w4IfhBVjOkVDsl1uYFU-BlfL_quBsDAR15WP1KF68c5j4eb3.jpg?size=100x100&quality=96&crop=0,0,576,576&ava=1",
            photo_200: "https://sun1.is74.userapi.com/s/v1/ig2/2sIs_ST8vMxEyN_txdG-5e2gNtmEN1dmLr_2krfwjx10SjLCnV2OtcGETzQUE89ux1RMoHcNhol4783nr_v-MxOf.jpg?size=200x200&quality=96&crop=0,0,576,576&ava=1",
            photo_max_orig: "https://sun1.is74.userapi.com/s/v1/ig2/fy6Ho3Z7736aLg1pcJorlzW3P2c-uE-x5Go7NiNlVGozkDXc6hSrNw6Hg9Sic8T3X8XtHqjkPJ4iB4D7dJGZq4KF.jpg?size=576x576&quality=96&crop=0,0,576,576&ava=1",
            sex: 2,
            timezone: 5,
        }]
    },
    {
        id: 3,
        type: QueueTypes.QUEUE_TYPE_3,
        date: new Date("2022-02-03"),
        description: "Описание события",
        address: "ул. Борьбы 1",
        city: "Копейск",
        participantsLimit: 10,
        participants: [{
            city: {id: 5098, title: "Копейск"},
            country: {id: 1, title: "Россия"},
            first_name: "Андрей",
            id: 112546845,
            last_name: "Моисеенко",
            photo_100: "https://sun1.is74.userapi.com/s/v1/ig2/AS23PNN7qmpLlKHFjSTdO4_NLOqy4KmDsPNtCjY1w4IfhBVjOkVDsl1uYFU-BlfL_quBsDAR15WP1KF68c5j4eb3.jpg?size=100x100&quality=96&crop=0,0,576,576&ava=1",
            photo_200: "https://sun1.is74.userapi.com/s/v1/ig2/2sIs_ST8vMxEyN_txdG-5e2gNtmEN1dmLr_2krfwjx10SjLCnV2OtcGETzQUE89ux1RMoHcNhol4783nr_v-MxOf.jpg?size=200x200&quality=96&crop=0,0,576,576&ava=1",
            photo_max_orig: "https://sun1.is74.userapi.com/s/v1/ig2/fy6Ho3Z7736aLg1pcJorlzW3P2c-uE-x5Go7NiNlVGozkDXc6hSrNw6Hg9Sic8T3X8XtHqjkPJ4iB4D7dJGZq4KF.jpg?size=576x576&quality=96&crop=0,0,576,576&ava=1",
            sex: 2,
            timezone: 5,
        }]
    },
];


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
