import {QueueTypes} from "../types/queue";
import {imageDictionary} from "../types/images";


export const transformUseFormRegister = (registerObject: any) => {
    return {
        name: registerObject.name,
        onChange: registerObject.onChange,
        onBlur: registerObject.onBlur,
        getRef: registerObject.ref,
    };
};


export const getSelectTypeOptions = () => {
    return Object.values(QueueTypes).map(value => {
        return {value: value, label: value, icon: imageDictionary[value]};
    });
};

export const dateToString = (date: Date) => {
    return date.toISOString().slice(0, 10);
};