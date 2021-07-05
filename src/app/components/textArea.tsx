import React, { FC } from 'react';
import { View, TextArea } from 'native-base';
import Style from './style';

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    keyboardType: any;
    value: string;

};

const TextAreaField: FC<Props> = (props) => {
    return (
        <View>
            <TextArea placeholder={props.placeholder} onChangeText={props.onChangeText} w="100%" h={20} style={Style.inputs}  keyboardType={props.keyboardType} value={props.value}/>
        </View>
    )
};

export default TextAreaField;