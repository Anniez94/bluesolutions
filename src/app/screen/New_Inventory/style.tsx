import React from 'react';
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    body: {
        width: Dimensions.get('window').width,
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fafafa',
        marginTop: -40,
        padding: 20
    },
    form: {
        marginTop: 20
    },
    inputHolder: {
        paddingVertical: 10
    },
    label: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#000'
    },
    errMsg: {
        color: 'red',
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
    },
    successImg: {
        width: 300,
        height: 250,
    },
    modalView: {
        width: '100%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 50,
        paddingBottom:10,
        paddingHorizontal:10
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    modalText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18
    }
});

export default styles