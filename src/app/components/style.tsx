import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    buttonView:{
        width:'100%',
        paddingVertical: 15,
        borderColor: '#022945',
        borderRadius: 5,
        backgroundColor: '#022945',
        borderWidth: 2,
        elevation: 5,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat-Black',
        textAlign: 'center'
    },
    inputs: {
        backgroundColor: '#fff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14
    },

    header: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: '#022945',
        height: 120
    },

    navHeading: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Montserrat-Medium',
        marginLeft: 10
    },
    navHolder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default style;