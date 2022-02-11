interface ICountry {
    id: number;
    title: string;
}

interface ICity {
    id: number;
    title: string;
}

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    photo_100: string;
    photo_200: string;
    photo_max_orig?: string;
    sex: number;
    timezone: number;

    country: ICountry;
    city: ICity;
}


export interface UserState {
    user: IUser | null;
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: IUser;
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}



export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction