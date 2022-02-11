import bridge from "@vkontakte/vk-bridge";
import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";


// let user = {
//     city: {id: 5098, title: 'Копейск'},
//     country: {id: 1, title: 'Россия'},
//     first_name: "Андрей",
//     id: 112546845,
//     last_name: "Моисеенко",
//     photo_100: "https://sun1.is74.userapi.com/s/v1/ig2/AS23PNN7qmpLlKHFjSTdO4_NLOqy4KmDsPNtCjY1w4IfhBVjOkVDsl1uYFU-BlfL_quBsDAR15WP1KF68c5j4eb3.jpg?size=100x100&quality=96&crop=0,0,576,576&ava=1",
//     photo_200: "https://sun1.is74.userapi.com/s/v1/ig2/2sIs_ST8vMxEyN_txdG-5e2gNtmEN1dmLr_2krfwjx10SjLCnV2OtcGETzQUE89ux1RMoHcNhol4783nr_v-MxOf.jpg?size=200x200&quality=96&crop=0,0,576,576&ava=1",
//     photo_max_orig: "https://sun1.is74.userapi.com/s/v1/ig2/fy6Ho3Z7736aLg1pcJorlzW3P2c-uE-x5Go7NiNlVGozkDXc6hSrNw6Hg9Sic8T3X8XtHqjkPJ4iB4D7dJGZq4KF.jpg?size=576x576&quality=96&crop=0,0,576,576&ava=1",
//     sex: 2,
//     timezone: 5,
// }


export const getUser = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USER});
        const user = await bridge.send("VKWebAppGetUserInfo");
        dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: user});
    } catch (error) {
        dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: "error"});
    }
};
