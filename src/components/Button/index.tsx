import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { 
    Butt,
    TextButt
} from './styles';

interface IButtonProps extends Omit<TouchableOpacityProps, 'activeOpacity'> {
    title:string;
    error?: string;
    width?: number;
    height?: number;
}

export function Button({ height, width, title, ...res } : IButtonProps){
    return(
        <Butt {...res}>
            <TextButt>
                {title}
            </TextButt>
        </Butt>
    )

}