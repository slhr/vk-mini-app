import {QueueTypes} from "./queue";
import basketballImage from "../assets/images/basketball.png";
import volleyballImage from "../assets/images/volleyball.jpg";
import footballImage from "../assets/images/football.png";


export const imageDictionary: any = {
    [QueueTypes.QUEUE_TYPE_1]: basketballImage,
    [QueueTypes.QUEUE_TYPE_2]: volleyballImage,
    [QueueTypes.QUEUE_TYPE_3]: footballImage,
};