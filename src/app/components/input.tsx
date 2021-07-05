import React, { FC } from 'react';
import { View, Input } from 'native-base';
import Style from './style';

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    keyboardType: any;
    value: string;

};

const InputField: FC<Props> = (props) => {
    return (
        <View>
            <Input placeholder={props.placeholder} onChangeText={props.onChangeText} w="100%" style={Style.inputs}  keyboardType={props.keyboardType} value={props.value}/>
        </View>
    )
};

export default InputField;