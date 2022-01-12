import AsyncStorege from '@react-native-async-storage/async-storage'
import { isBefore, format } from 'date-fns'

export interface IPlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string;
    }
    dateTimeNotification?: Date;
}

interface IStoragePlantProps {
    [ id: string]:{
        data:IPlantProps
    }
}

export async function savePlant(plant:IPlantProps):Promise<void>{
    try {
        const data = await AsyncStorege.getItem('@plantManager:plants');
        const oldPlants = data ? (JSON.parse(data) as IStoragePlantProps): {};

        const newPlant = {
            [plant.id]:{
                data:plant
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