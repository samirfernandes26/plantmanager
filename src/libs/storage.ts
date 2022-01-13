import AsyncStorege from '@react-native-async-storage/async-storage'
import { isBefore, format } from 'date-fns'
import * as Notifications from 'expo-notifications'

export interface IPlantProps{
    id?: string;
    name?: string;
    about?: string;
    water_tips?: string;
    photo?: string;
    environments?: [string];
    frequency?: {
        times?: number,
        repeat_every?: string;
    }
    dateTimeNotification?: Date;
    promximaRega?:Date;
    handleRemove: () => void
}

export interface IStoragePlantProps {
    [ id: string]:{
        data:IPlantProps
    }
}

export async function savePlant(plant:IPlantProps):Promise<void>{
    try {
        
        const nexTime = new Date(plant.dateTimeNotification);
        const now = new Date();

        const {times} = plant.frequency;
        const {repeat_every} = plant.frequency;

        if(repeat_every === 'week'){

            const inverval = Math.trunc(7 / times);
            nexTime.setDate(now.getDate() + inverval);

        }else{

            nexTime.setDate(nexTime.getDate() + 1);

        }

        const seconds = Math.abs(Math.ceil(now.getTime() - nexTime.getTime()/1000));

        const notificationId = await Notifications.scheduleNotificationAsync({
            content:{
                title:'Heeey, 🌱',
                body:`Está na hora de cuidar da sua ${plant.name}`,
                sound: true,
                priority: Notifications.AndroidNotificationPriority.HIGH,
                data:{
                    plant
                },
            },
            trigger:{
                seconds: seconds < 60 ? 60 : seconds,
                repeats: true
            }
        })

        const data = await AsyncStorege.getItem('@plantManager:plants');
        const oldPlants = data ? (JSON.parse(data) as IStoragePlantProps): {};

        const newPlant = {
            [plant.id]:{
                data:plant,
                notificationId
            }
        }

        await AsyncStorege.setItem('@plantManager:plants', JSON.stringify({ ...newPlant, ...oldPlants }));

    } catch (error) {
        // throw new Error(error)
        console.log(error);
    }
}

export async function loadPlant():Promise<IPlantProps[]>{
    try {
        const data = await AsyncStorege.getItem('@plantManager:plants');
        const plants = data ? (JSON.parse(data) as IStoragePlantProps): {};


        const plantsSorted = Object.keys(plants).map((plant) => {
            return {
                ...plants[plant].data,
                hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
            }
        }).sort((a,b) => 
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 -
                Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            )
        )

        return plantsSorted;

    } catch (error) {
        // throw new Error(error)
        console.log(error);
    }
}