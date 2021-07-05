import React, { FC, useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from 'react-native';
import { View, Text, NativeBaseProvider, FormControl, ScrollView, MinusIcon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';

import Style from './style';
import { InputField, Button, Header, TextAreaField, commafy } from "../../components/index";

interface Props {
    navigation: any;
    route: any;
};

const Edit_Inventory: FC<Props> = ({ navigation, route }) => {

    const [name, setName] = useState<string>('');
    const [totalStock, setTotalStock] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<boolean>(false);
    const [confirmAction, setConfirmAction] = useState<boolean>(false);

    let persistName = route.params.item.name;

    useEffect(() => {
        setName(route.params.item.name);
        setTotalStock(commafy(route.params.item.totalStock));
        setPrice(commafy(route.params.item.price));
        setDescription(route.params.item.description);

    }, [])

    const onlyNumbers = (value: any) => {
        value = value.replace(/[^0-9]/g, '');
        if (value[0] == 0) {
            value = parseFloat(value)
        }

        return commafy(value);
    };

    const updateInventory = async () => {

        if (!name || !totalStock || !price || !description) return setErrMsg('All Fields are required');
        if (description.length < 3) return setErrMsg('Description is too short');

        try {
            let inventories: any;
            let inventoryName: any;

            inventories = await AsyncStorage.getItem('inventory');
            inventories = JSON.parse(inventories);

            inventoryName = inventories.filter((inventory: any) => inventory.name === persistName);
            let inventoryIndex = inventories.findIndex((inventory: any) => inventory.name === persistName);

            const pushedInventoryData = { name, totalStock: parseFloat(totalStock.replace(/,/g, '')).toString(), price:parseFloat(price.replace(/,/g, '')).toString(), description };

            if (name === persistName) {

                inventories.splice(inventoryIndex, 1, pushedInventoryData);
                await AsyncStorage.setItem('inventory', JSON.stringify(inventories));
                setSuccessMsg(true);
                setErrMsg(null);

            } else {

                let splicedInventory = inventories;

                splicedInventory.splice(inventoryIndex, 1);
                inventoryName = splicedInventory.filter((inventory: any) => inventory.name === name);

                if (inventoryName.length) return setErrMsg(`Inventory with "${name}" exists.`);

                await AsyncStorage.setItem('inventory', JSON.stringify(inventories));
                setSuccessMsg(true);
                setErrMsg(null);
            }


        } catch (e) {
            setErrMsg('Failed to save the data to the storage');
        }
    };

    const deleteInventory = async () => {
        try {
            let inventories: any;

            inventories = await AsyncStorage.getItem('inventory');
            inventories = JSON.parse(inventories);

            let inventoryIndex = inventories.findIndex((inventory: any) => inventory.name === persistName);

            inventories.splice(inventoryIndex, 1);

            await AsyncStorage.setItem('inventory', JSON.stringify(inventories));
            setConfirmAction(false);
            navigation.navigate('home');


        } catch (e) {
            setErrMsg('Failed to save the data to the storage');
        }
    };

    const confirmDelete = () => setConfirmAction(true);
  

    return (
        <NativeBaseProvider>
            <Header title="Edit Inventory" onPress={() => navigation.navigate('home')} />
            <View style={Style.body}>
                <View style={Style.newInventory}>
                    <TouchableOpacity style={Style.addInventory} onPress={confirmDelete}>
                        <MinusIcon style={Style.removeIcon} size={4} color='rgb(138,7,7)' />
                    </TouchableOpacity>
                    <Text style={Style.addText}>Delete Inventory</Text>
                </View>
                <ScrollView flex={1}>

                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={Style.form}>

                            {errMsg ?
                                <Animatable.View animation="slideInLeft" iterationCount={1} useNativeDriver >
                                    <Text style={Style.errMsg}>{errMsg}</Text>
                                </Animatable.View>
                                : null}

                            <FormControl isRequired style={Style.inputHolder}>
                                <FormControl.Label _text={{ bold: true }} ><Text style={Style.label}>Name</Text></FormControl.Label>
                                <InputField placeholder='Inventory Name' onChangeText={(text) => { setName(text); setErrMsg(''); }} keyboardType="default" value={name} />
                            </FormControl>

                            <FormControl isRequired style={Style.inputHolder}>
                                <FormControl.Label _text={{ bold: true }}><Text style={Style.label}>Total Stock</Text></FormControl.Label>
                                <InputField placeholder='Total Stock' onChangeText={(text) => { setTotalStock(onlyNumbers(text)); setErrMsg(''); }} keyboardType="number-pad" value={totalStock} />
                            </FormControl>

                            <FormControl isRequired style={Style.inputHolder}>
                                <FormControl.Label _text={{ bold: true }}><Text style={Style.label}>Price</Text></FormControl.Label>
                                <InputField placeholder='Price' onChangeText={(text) => { setPrice(onlyNumbers(text)); setErrMsg(''); }} keyboardType="number-pad" value={price} />
                            </FormControl>

                            <FormControl isRequired style={Style.inputHolder}>
                                <FormControl.Label _text={{ bold: true }}><Text style={Style.label}>Description</Text></FormControl.Label>
                                <TextAreaField placeholder='Description' onChangeText={(text) => { setDescription(text); setErrMsg(''); }} keyboardType="default" value={description} />
                            </FormControl>

                            <Button title="UPDATE" onPress={updateInventory} />

                        </View>

                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
            <Modal
                isVisible={successMsg}
                animationIn="bounceInLeft"
                animationOut="bounceInRight"
                useNativeDriver
                hasBackdrop
                backdropColor="'rgba(0,0,0,0.9)"
                coverScreen
                useNativeDriverForBackdrop
                onBackdropPress={() => setSuccessMsg(false)}
            >
                <View style={Style.modalView}>
                    <View style={Style.innerContainer}>
                        <Image source={require('@Asset/images/success.png')} style={Style.successImg} />
                        <View>
                            <Text style={Style.modalText}>Inventory Updated Successfully</Text>
                        </View>
                    </View>
                    <Button title="CLOSE" onPress={() => setSuccessMsg(false)} />
                </View>

            </Modal>

            <Modal
                isVisible={confirmAction}
                animationIn="bounceInLeft"
                animationOut="bounceInRight"
                useNativeDriver
                hasBackdrop
                backdropColor="'rgba(0,0,0,0.9)"
                coverScreen
                useNativeDriverForBackdrop
                onBackdropPress={() => setConfirmAction(false)}
            >
                <View style={Style.deleteModalView}>
                    <View style={Style.innerContainer}>
                        <View>
                            <Text style={Style.modalText}>Confirm inventory deletion</Text>
                        </View>
                    </View>
                    <Button title="DELETE" onPress={deleteInventory} />
                </View>

            </Modal>

        </NativeBaseProvider>
    )
};

export default Edit_Inventory;