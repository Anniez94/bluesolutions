import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import Style from "./style";

interface Props {
    title: string;
    onPress: () => void;
}

const Button: FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={Style.buttonView}>
            <Text style={Style.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
};

export default Button;