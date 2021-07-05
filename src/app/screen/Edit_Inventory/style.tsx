import React from 'react';
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    body: {
        width: Dimensions.get('window').width,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fafafa',
        marginTop: -40,
        padding: 20,
        paddingBottom: 150
    },
    form: {
        marginTop: 20
    },
    inputHolder: {
        paddingVertical: 10
    },
    errMsg: {
        color: 'red',
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
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
    deleteModalView: {
        width: '100%',
        height: '30%',
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
        fontFamily: 'Lato-Bold',
        fontSize: 18
    },
    fab:{
        backgroundColor:'red'
    },
    addInventory: {
        elevation: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 5
    },
   removeIcon: {
        justifyContent: 'center',
        color: 'red'
    },
    addText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        lineHeight: 20,
    },
    newInventory: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 20
    },
    label: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#000'
    },


});

export default styles