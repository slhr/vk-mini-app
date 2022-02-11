import {useMemo} from "react";


export const useMemoDate = () => {
    const today = useMemo(() => new Date(), [])
    const minDate = today.toISOString().slice(0, 10);
    const maxDate = `${ +minDate.slice(0, 4) + 1}${minDate.slice(4)}`

    return [minDate, maxDate];
};
