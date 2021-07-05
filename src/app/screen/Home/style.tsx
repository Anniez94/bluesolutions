import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { justifyContent } from 'styled-system';

const style = StyleSheet.create({

    headerContainer: {
        height: 100,
        backgroundColor: '#F1F9FF'
    },
    navHeading: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Lato-Bold',
        textAlign: 'center'
    },
    body: {
        width: Dimensions.get('window').width,
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#022945',
        marginTop: -40,
        paddingTop: 20,
        paddingBottom: 50,
    },
    emptyDataSet: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -130
    },
    empty: {
        width: 243,
        height: 235
    },
    emptyTextSet: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },
    scrollview: {
        flexGrow: 1,
        marginVertical: 10,
        paddingTop: 5,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    fab: {
        backgroundColor: '#2a6f97'
    },
    linearGradient: {
        width: '100%',
        height: '100%'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listHeading: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginBottom: 10,
        color: '#fff'
    },
    newInventory: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 20
    },
    addInventory: {
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 5
    },
    addIcon: {
        justifyContent: 'center',
        color: '#047302'
    },
    addText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: "#fff",
        lineHeight: 20,
    },
    desc: {
        paddingHorizontal: 20,
        paddingTop: 80
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#fff'
    }
});

export default style;