import React, {useEffect} from "react";
import {AdaptivityProvider, AppRoot, ScreenSpinner, View} from "@vkontakte/vkui";
import MyQueuesPage from "./pages/MyQueuesPage";
import CreationPage from "./pages/CreationPage";
import SearchPage from "./pages/SearchPage";
import "@vkontakte/vkui/dist/vkui.css";
import {getUser} from "./store/actionCreators/userActionCreators";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {Panels} from "./types/panels";
import QueuePage from "./pages/QueuePage";


const App = () => {
    const activePanel = useTypedSelector(state => state.panels.currentPanel);
    const user = useTypedSelector(state => state.user.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    if (!user) return <ScreenSpinner size='large' />
    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} style={{backgroundColor: "white"}}>
                    <MyQueuesPage id={Panels.MY_QUEUES}/>
                    <CreationPage id={Panels.CREATION_PAGE}
                                  user={user}/>
                    <SearchPage id={Panels.SEARCH_PAGE}/>
                    <QueuePage id={Panels.QUEUE_PAGE}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
};


export default App;
