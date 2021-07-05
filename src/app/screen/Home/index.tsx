import React, { FC, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeBaseProvider, AddIcon, Spinner, HStack, Center, ScrollView } from 'native-base';
import { StackNavigationProp } from "@react-navigation/stack";

import { commafy } from "../../components/index";
import Style from './style';

// interface NavigationProps {
//     // navigation: StackNavigationProp<
// };

// type Props = {
// 	navigation?: StackNavigationProp<any,any>;
// };

const Home: FC = ({ navigation }: any) => {

    const [inventories, setInventories] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getStorage = async () => {
            let inventory: any;
            inventory = await AsyncStorage.getItem('inventory');
            if (inventory !== null) {
                inventory = JSON.parse(inventory);
                setInventories(inventory);
            } else {
                setInventories([])
            }
            setLoading(false)
        };

        getStorage();

    }, [inventories]);

    return (
        <NativeBaseProvider>

            <View style={Style.headerContainer}>
                <View>
                    <StatusBar backgroundColor={'transparent'}  barStyle='dark-content' />
                </View>
            </View>

            <View style={Style.body}>

                <View style={Style.newInventory}>
                    <TouchableOpacity style={Style.addInventory} onPress={() => navigation.navigate("New_Inventory")}>
                        <AddIcon style={Style.addIcon} size={4} color='#047302'/>
                    </TouchableOpacity>
                    <Text style={Style.addText}>New Inventory</Text>
                </View>

                {inventories.length ?
                    <View>
                        
                        <View style={Style.tableHeader}>
                        <Text style={Style.listHeading}>Name</Text>
                        <Text style={Style.listHeading}>Total Stock</Text>
                        <Text style={Style.listHeading}>Price</Text>
                        </View>

                        <ScrollView>
                        <FlatList
                            data={inventories}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={Style.scrollview} onPress={() => navigation.navigate("Edit_Inventory", { item })}>
                                    <View>
                                        <View style={Style.list}>
                                            <Text style={Style.listHeading}>{item.name}</Text>
                                            <Text style={Style.listHeading}>{commafy(item.totalStock)}</Text>
                                            <Text style={Style.listHeading}>&#8358;{commafy(item.price)}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            }
                        />
                        </ScrollView>
                    </View>
                    :
                    loading ?
                        <Center flex={1}>
                            <HStack space={2}>
                                <Spinner accessibilityLabel="Loading posts" />
                            </HStack>
                        </Center>
                        :
                        <View style={Style.emptyDataSet}>
                            <Image source={require('@Asset/images/empty2.png')} style={Style.empty} />
                            <View style={Style.desc}>
                                <Text style={Style.addText}>Bluemoon Solutions is a software company tasked with working on an 
                                    inventory management system.</Text>
                            </View>
                        </View>
                }
            </View>

        </NativeBaseProvider>
    )
};

export default Home;