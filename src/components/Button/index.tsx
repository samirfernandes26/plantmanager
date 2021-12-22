import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { 
    Butt,
    TextButt
} from './styles';
import { Entypo } from '@expo/vector-icons'

interface IButtonProps extends Omit<TouchableOpacityProps, 'activeOpacity'> {
    title?:string;
    error?: string;
    width?: number;
    height?: number;
    top ?: number;
    nome_icon?:boolean;
}

export function Button({ nome_icon ,height, width, top, title, ...res } : IButtonProps){
    return(
        <Butt {...res} width={width} height={height} top={top}>
            {   title && 
                <TextButt> {title} </TextButt>
            }
            
            { 
                nome_icon &&
                <Entypo name='chevron-thin-right' size={25} color={'#FFFFFF'}/>
            }
        </Butt>
        
    )

}