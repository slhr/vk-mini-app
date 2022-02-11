import React, {BaseSyntheticEvent, useState} from "react";
import {
    FormItem,
    FormLayout, Group, Header, IconButton, Input, NativeSelect,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    SimpleCell
} from "@vkontakte/vkui";
import {Panels} from "../types/panels";
import {useForm} from "react-hook-form";
import {dateToString, getSelectTypeOptions, transformUseFormRegister} from "../utils/helpers";
import {IQueue} from "../types/queue";
import {
    Icon16Clear,
    Icon24CalendarOutline,
    Icon28BuildingOutline,
} from "@vkontakte/icons";
import useDebounce from "../hooks/useDebounce";
import QueueFrame from "../components/QueueFrame";
import {useDispatch} from "react-redux";
import {goToPanel} from "../store/actionCreators/panelsActionCreators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useMemoDate} from "../hooks/useMemoDate";



interface SearchPageProps {
    id: Panels.SEARCH_PAGE;
}

const SearchPage: React.FC<SearchPageProps> = ({id}) => {
    const dispatch = useDispatch();
    const myQueues = useTypedSelector(state => state.myQueues.queues);
    const [queues, setQueues] = useState<IQueue[]>(myQueues);
    const {register, handleSubmit, setValue} = useForm({
        mode: "onChange",
    });

    const typeRegisterObject = transformUseFormRegister(register("type"));
    const dateRegisterObject = transformUseFormRegister(register("date"));
    const cityRegisterObject = transformUseFormRegister(register("city"));

    const clearValue = (valueName: string) => {
        setValue(valueName, "");
        handleSubmit(debouncedSearch)();
    };

    const onChange = (e: BaseSyntheticEvent, valueName: string) => {
        setValue(valueName, e.target.value);
        handleSubmit(debouncedSearch)();
    };

    const getQueues = (values: any) => {
        console.log(values);

        // api request with filter values - getQueuesByFilters(values.type, values.date, values.city)
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        let filteredQueues = myQueues.filter((queue) => {
            let [dateFilter, typeFilter, cityFilter] = [true, true, true];

            let queueDate = dateToString(queue.date);

            if (values.date) {
                dateFilter = queueDate === values.date;
            }

            if (values.type) {
                typeFilter = queue.type === values.type;
            }

            if (values.city) {
                cityFilter = queue.city.toLowerCase().includes(values.city.toLowerCase());
            }

            return dateFilter && typeFilter && cityFilter;
        });
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        setQueues(filteredQueues);

    };

    const debouncedSearch = useDebounce(getQueues, 500);

    let [minDate, maxDate] = useMemoDate();

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => dispatch(goToPanel(Panels.MY_QUEUES))}/>}>
                Search
            </PanelHeader>

            <FormLayout>

                <FormItem top="Тип события">

                    <NativeSelect {...typeRegisterObject}
                                  onChange={(e) => onChange(e, "type")}
                                  placeholder="Выберите тип события">

                        {
                            getSelectTypeOptions().map(option =>
                                <option key={option.value} value={option.label}>{option.label}</option>
                            )
                        }

                    </NativeSelect>
                </FormItem>

                <FormItem top="Дата события">

                    <Input {...dateRegisterObject}
                           type="date"
                           min={minDate}
                           max={maxDate}
                           onChange={(e) => onChange(e, "date")}
                           after={
                               <>
                                   <Icon24CalendarOutline/>
                                   <IconButton hoverMode="opacity"
                                               aria-label="Очистить поле"
                                               onClick={() => clearValue("date")}>
                                       <Icon16Clear/>
                                   </IconButton>
                               </>
                           }/>

                </FormItem>

                <FormItem top="Место проведения">

                    <Input {...cityRegisterObject}
                           onChange={(e) => onChange(e, "city")}
                           placeholder="Город"
                           type="text"
                           after={
                               <>
                                   <Icon28BuildingOutline/>
                                   <IconButton hoverMode="opacity"
                                               aria-label="Очистить поле"
                                               onClick={() => clearValue("city")}>
                                       <Icon16Clear/>
                                   </IconButton>
                               </>
                           }/>

                </FormItem>

            </FormLayout>

            <Group mode="plain" header={<Header>Результаты поиска</Header>}>
                {queues.length === 0
                    ? <SimpleCell>Ничего не найдено</SimpleCell>
                    : queues.map(queue =>
                        <QueueFrame key={queue.id} {...queue} />
                    )}
            </Group>

        </Panel>
    );
};

export default SearchPage;