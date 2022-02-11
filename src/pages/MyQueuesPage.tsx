import React from "react";
import {CellButton, Group, Panel, PanelHeader, ScreenSpinner, SimpleCell} from "@vkontakte/vkui";
import {Panels} from "../types/panels";
import {Icon24Add, Icon24Search} from "@vkontakte/icons";
import QueueFrame from "../components/QueueFrame";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {goToPanel} from "../store/actionCreators/panelsActionCreators";


interface MyQueuesProps {
    id: Panels.MY_QUEUES;
}

const MyQueuesPage: React.FC<MyQueuesProps> = ({id}) => {
    const myQueues = useTypedSelector(state => state.myQueues.queues);
    const dispatch = useDispatch();

    if (!myQueues) return <ScreenSpinner size='large' />
    return (
        <Panel id={id}>

            <PanelHeader style={{height: "10vh"}}>
                My events
            </PanelHeader>

            <CellButton style={{height: "10vh"}}
                        before={<Icon24Search/>}
                        centered
                        onClick={() => dispatch(goToPanel(Panels.SEARCH_PAGE))}>
                Search
            </CellButton>

            <Group mode="plain"
                   style={{height: "70vh", overflow: "hidden", overflowY: "auto"}}>
                {
                    myQueues.length
                        ? myQueues.map(queue =>
                            <QueueFrame key={queue.id} {...queue} />
                        )
                        : <SimpleCell>Ничего нет</SimpleCell>
                }
            </Group>

            <CellButton style={{height: "10vh"}}
                        before={<Icon24Add/>}
                        centered
                        onClick={() => dispatch(goToPanel(Panels.CREATION_PAGE))}>
                Create
            </CellButton>

        </Panel>
    );
};

export default MyQueuesPage;