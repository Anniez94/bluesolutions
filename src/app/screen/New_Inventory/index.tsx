import React, { FC, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Image , } from 'react-native';
import { View, Text, NativeBaseProvider, FormControl, } from 'native-base';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';

import Style from './style';
import { InputField, Button, Header, TextAreaField, commafy } from "../../components/index";


interface Props {
    navigation: any
};

const New_Inventory: FC<Props> = (props) => {

    const [name, setName] = useState<string>('');
    const [totalStock, setTotalStock] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<boolean>(false);


    const onlyNumbers = (value: any) => {
        value = value.replace(/[^0-9]/g, '');
        if (value[0] == 0) {
            value= parseFloat(value)
        } 

        return commafy(value);
    };

    const createInventory = async () => {

        if (!name || !totalStock || !price || !description) return setErrMsg('All Fields are required');
        if (description.length < 3) return setErrMsg('Description is too short');

        const inventoryData = [{ name, totalStock: parseFloat(totalStock.replace(/,/g, '')).toString(), price: parseFloat(price.replace(/,/g, '')).toString(), description }];
        const pushedInventoryData = { name,totalStock: parseFloat(totalStock.replace(/,/g, '')).toString(), price: parseFloat(price.replace(/,/g, '')).toString(), description };

        try {
            let inventories: any;

            inventories = await AsyncStorage.getItem('inventory');

            if (inventories === null) {
                await AsyncStorage.setItem('inventory', JSON.stringify(inventoryData));
                setSuccessMsg(true);
                setName('');
                setDescription('');
                setPrice('');
                setTotalStock('');

            }
            else {
                inventories = JSON.parse(inventories)

                let inventoryName = inventories.filter((inventory: any) => inventory.name === name);

                if (inventoryName.length) return setErrMsg(`Inventory with "${name}" exists.`);

                inventories.push(pushedInventoryData);

                await AsyncStorage.setItem('inventory', JSON.stringify(inventories));
                setSuccessMsg(true);
                setName('');
                setDescription('');
                setPrice('');
                setTotalStock('');
            }

        } catch (e) {
            setErrMsg('Failed to save the data to the storage');
        }
    };

    return (
        <NativeBaseProvider>
            <Header title="New Inventory" onPress={() => props.navigation.navigate('home')} />
            <View style={Style.body}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={Style.form}>

                        {errMsg ?
                            <Animatable.View animation="slideInLeft" iterationCount={1} useNativeDriver >
                                <Text style={Style.errMsg}>{errMsg}</Text>
                            </Animatable.View>
                            : null}

                        <FormControl isRequired style={Style.inputHolder}>
                            <FormControl.Label _text={{ bold: true}}><Text style={Style.label}>Name</Text></FormControl.Label>
                            <InputField placeholder='Inventory Name' onChangeText={(text) => { setName(text); setErrMsg(''); }} keyboardType="default" value={name}/>
                        </FormControl>

                        <FormControl isRequired style={Style.inputHolder}>
                            <FormControl.Label _text={{ bold: true }}><Text style={Style.label}>Total Stock</Text></FormControl.Label>
                            <InputField placeholder='Total Stock' onChangeText={(text) => { setTotalStock(onlyNumbers(text)); setErrMsg('');}} keyboardType="number-pad" value={totalStock}/>
                        </FormControl>

                        <FormControl isRequired style={Style.inputHolder}>
                            <FormControl.Label _text={{ bold: true }}><Text style={Style.label}>Price</Text></FormControl.Label>
                            <InputField placeholder='Price' onChangeText={(text) => { setPrice(onlyNumbers(text)); setErrMsg(''); }} keyboardType="number-pad" value={price}/>
                        </FormControl>

                        <FormControl isRequired style={Style.inputHolder}>
                            <FormControl.Label _text={{ bold: true }}><Text style={Style.label}>Description</Text></FormControl.Label>
                            <TextAreaField placeholder='Description' onChangeText={(text) => { setDescription(text); setErrMsg(''); }} keyboardType="default" value={description}/>
                        </FormControl>

                        <Button title="CREATE" onPress={createInventory} />
                    </View>

                </TouchableWithoutFeedback>
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
                        <Text style={Style.modalText}>Inventory Created Successfully</Text>
                    </View>
                    </View>
                    <Button title="CLOSE" onPress={()=> setSuccessMsg(false)} />
                </View>

            </Modal>

        </NativeBaseProvider>
    )
};

export default New_Inventory;