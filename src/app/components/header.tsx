import React, { FC} from 'react';
import { StatusBar, TouchableOpacity} from 'react-native';
import { View, Text, ArrowBackIcon} from 'native-base';
import Style from './style';

interface Props {
    onPress: () => void;
    title: string
};

const Header: FC<Props> = (props) => {

    return (
            <View style={Style.header}>
                <StatusBar translucent={true} backgroundColor={'transparent'}  barStyle='light-content'  />
                <View style={Style.navHolder}>
                    <TouchableOpacity onPress={props.onPress}>
                        <ArrowBackIcon size={5} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={Style.navHeading}>{props.title}</Text>
                </View>
            </View>
            

    )
};

export default Header;