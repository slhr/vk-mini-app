import React, {useEffect} from "react";
import {
    Avatar,
    Button,
    CustomSelectOption,
    FormItem,
    FormLayout,
    Input,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Select, Textarea
} from "@vkontakte/vkui";
import {Panels} from "../types/panels";
import {
    Icon24CalendarOutline,
    Icon28AllCategoriesOutline,
    Icon28BuildingOutline,
    Icon28LocationMapOutline,
    Icon28UserOutline
} from "@vkontakte/icons";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createQueue} from "../store/actionCreators/queueActionCreators";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {getSelectTypeOptions, transformUseFormRegister} from "../utils/helpers";
import {useMemoDate} from "../hooks/useMemoDate";
import {goToPanel} from "../store/actionCreators/panelsActionCreators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IUser} from "../types/user";


const schema = yup.object().shape({
    type: yup.string().required("Выберите тип события"),
    date: yup.string().required("Введите корректную дату"),
    city: yup.string().required("Введите название города"),
    address: yup.string().required("Укажите адрес проведения события"),
    participantsLimit: yup.number()
        .typeError("Укажите лимит участников")
        .min(1, "Количество участников должно быть больше 0")
        .max(100, "Количество участников ограничено (не более 100)"),
});

interface CreationPageProps {
    id: Panels;
    user: IUser;
}

const CreationPage: React.FC<CreationPageProps> = ({id, user}) => {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    });

    const typeRegisterObject = transformUseFormRegister(register("type"));
    const dateRegisterObject = transformUseFormRegister(register("date"));
    const cityRegisterObject = transformUseFormRegister(register("city"));
    const addressRegisterObject = transformUseFormRegister(register("address"));
    const participantsLimitRegisterObject = transformUseFormRegister(register("participantsLimit"));
    const descriptionRegisterObject = transformUseFormRegister(register("description"));

    const [minDate, maxDate] = useMemoDate();


    useEffect(() => {
        setValue("type", undefined);
    }, [setValue]);

    const dispatch = useDispatch();

    const myQueuesLength: number = useTypedSelector(state => state.myQueues.queues.length);

    const onSubmit = (values: any) => {
        console.log(values);
        const queueCreationInfo = {
            id: myQueuesLength + 1,
            type: values.type,
            description: values.description,
            participantsLimit: values.participantsLimit,
            date: values.date,
            address: values.address,
            city: values.city,
            user: user
        };
        dispatch(createQueue(queueCreationInfo));
        dispatch(goToPanel(Panels.MY_QUEUES));
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => dispatch(goToPanel(Panels.MY_QUEUES))}/>}>
                Creation Page
            </PanelHeader>

            <FormLayout onSubmit={handleSubmit(onSubmit)}>

                <FormItem top="Тип события"
                          bottom={errors.type && errors.type.message}
                          status={errors.type && "error"}>

                    <Select {...typeRegisterObject}
                            placeholder="Выберите тип события"
                            options={getSelectTypeOptions()}
                            renderOption={({option, ...restProps}) => (
                                <CustomSelectOption
                                    {...restProps}
                                    before={<Avatar size={32} src={option.icon}/>}
                                />
                            )}

                            after={<Icon28AllCategoriesOutline/>}/>
                </FormItem>

                <FormItem top="Дата события"
                          bottom={errors.date && errors.date.message}
                          status={errors.date && "error"}>

                    <Input
                        type="date"
                        {...dateRegisterObject}
                        min={minDate}
                        max={maxDate}
                        defaultValue={minDate}
                        after={<Icon24CalendarOutline/>}/>


                </FormItem>

                <FormItem top="Место проведения"
                          bottom={errors.city && errors.city.message}
                          status={errors.city && "error"}>

                    <Input {...cityRegisterObject}
                           placeholder="Город"
                           type="text"
                           after={<Icon28BuildingOutline/>}/>

                </FormItem>

                <FormItem status={errors.address && "error"}
                          bottom={errors.address && errors.address.message}>

                    <Input {...addressRegisterObject}
                           placeholder="Адрес"
                           type="text"
                           after={<Icon28LocationMapOutline/>}/>

                </FormItem>

                <FormItem top="Количество участников"
                          bottom={errors.participantsLimit && errors.participantsLimit.message}
                          status={errors.participantsLimit && "error"}>

                    <Input {...participantsLimitRegisterObject}
                           placeholder="Количество участников"
                           type="number"
                           after={<Icon28UserOutline/>}/>
                </FormItem>

                <FormItem top="Дополнительная информация">

                    <Textarea {...descriptionRegisterObject}
                              placeholder="Описание события"/>

                </FormItem>

                <FormItem>
                    <Button type="submit" size="l" stretched>
                        Create
                    </Button>
                </FormItem>

            </FormLayout>
        </Panel>
    );
};

export default CreationPage;