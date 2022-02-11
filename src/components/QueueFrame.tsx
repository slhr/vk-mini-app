import React from "react";
import {IQueue} from "../types/queue";
import {Avatar, IconButton, SimpleCell} from "@vkontakte/vkui";
import {Icon16MoreVertical} from "@vkontakte/icons";
import {Panels} from "../types/panels";
import {useDispatch} from "react-redux";
import {getQueue} from "../store/actionCreators/queueActionCreators";
import {imageDictionary} from "../types/images";
import {goToPanel} from "../store/actionCreators/panelsActionCreators";
import {useTypedSelector} from "../hooks/useTypedSelector";


const QueueFrame: React.FC<IQueue> = (
    {id, type, date, address, city}
) => {
    const dispatch = useDispatch();

    const myQueues = useTypedSelector(state => state.myQueues.queues);


    const onClick = () => {
        dispatch(getQueue(id, myQueues));
        dispatch(goToPanel(Panels.QUEUE_PAGE));
    };
    return (
        <SimpleCell onClick={onClick}

                    after={
                        <IconButton aria-label="Подробнее">
                            <Icon16MoreVertical/>
                        </IconButton>
                    }
                    description={`${city} ${address}`}
                    before={<Avatar size={32} src={imageDictionary[type]}/>}
        >

            {date.toLocaleDateString()} · {type}

        </SimpleCell>
    );
};

export default QueueFrame;