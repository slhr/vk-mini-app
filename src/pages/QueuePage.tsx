import React, {useState} from "react";
import {
    Avatar,
    CellButton,
    Group,
    Header, HorizontalCell,
    HorizontalScroll, MiniInfoCell,
    Panel,
    PanelHeader,
    PanelHeaderBack, Separator,
    SimpleCell
} from "@vkontakte/vkui";
import {
    Icon20ArticleOutline,
    Icon24Cancel,
    Icon24Done,
    Icon28AllCategoriesOutline,
    Icon28CalendarOutline,
    Icon28LocationMapOutline,
    Icon28UserOutline
} from "@vkontakte/icons";
import {Panels} from "../types/panels";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IQueue} from "../types/queue";
import {goToPrevPanel} from "../store/actionCreators/panelsActionCreators";
import {useDispatch} from "react-redux";


interface QueuePageProps {
    id: Panels.QUEUE_PAGE;
}

const QueuePage: React.FC<QueuePageProps> = ({id}) => {
    const queue: IQueue | null = useTypedSelector(state => state.queue.queue);
    const [subscribeStatus, toggleSubscribeStatus] = useState(false);

    const previousPanel = useTypedSelector(state => state.panels.previousPanel);
    const dispatch = useDispatch();

    const subscribe = () => {
        toggleSubscribeStatus(true);
    };

    const unsubscribe = () => {
        toggleSubscribeStatus(false);
    };

    if (!queue || !previousPanel) return <>loading...</>;

    return (
        <Panel id={id}>

            <PanelHeader style={{height: "10vh"}}
                         left={<PanelHeaderBack onClick={() => dispatch(goToPrevPanel(previousPanel))}/>}>
                Очередь
            </PanelHeader>

            <Group mode="plain" style={{height: "80vh", overflow: "hidden", overflowY: "auto"}}>
                <Group mode="plain">
                    <SimpleCell indicator={queue.type}
                                before={<Icon28AllCategoriesOutline/>}>
                        Тип
                    </SimpleCell>

                    <SimpleCell indicator={queue.date.toLocaleDateString()} before={<Icon28CalendarOutline/>}>
                        Дата
                    </SimpleCell>

                    <SimpleCell indicator={`${queue.city} ${queue.address}`}
                                before={<Icon28LocationMapOutline/>}>
                        Место
                    </SimpleCell>

                    <SimpleCell indicator={queue.participantsLimit}
                                before={<Icon28UserOutline/>}>
                        Количество участников
                    </SimpleCell>
                </Group>

                <Group mode="plain" header={<Header>Участники</Header>}>

                    <HorizontalScroll showArrows getScrollToLeft={i => i - 120}
                                      getScrollToRight={i => i + 120}>
                        <div style={{display: "flex"}}>

                            {
                                queue.participants.map(participant =>
                                    <HorizontalCell key={participant.id} header={participant.first_name}>
                                        <Avatar size={48} src={participant.photo_200}/>
                                    </HorizontalCell>
                                )
                            }
                        </div>

                    </HorizontalScroll>
                </Group>

                <Separator style={{margin: "12px 0"}}/>

                {
                    queue.description &&
                    <MiniInfoCell before={<Icon20ArticleOutline/>}
                                  textWrap="full"
                                  textLevel="primary">
                        {queue.description}
                    </MiniInfoCell>
                }

            </Group>

            <CellButton
                onClick={subscribeStatus ? unsubscribe : subscribe}
                centered
                before={subscribeStatus ? <Icon24Cancel/> : <Icon24Done/>}>
                {subscribeStatus ? "Отписаться" : "Записаться"}
            </CellButton>

        </Panel>
    );
};

export default QueuePage;