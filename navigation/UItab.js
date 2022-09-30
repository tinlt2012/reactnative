import * as React from 'react'
import { Settings, ProductGridView, FoodList, Loginn } from '../screens'
import { color, icons, images } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard

} from "react-native";
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,

    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name
        if (screenName == "ProductGridView") {
            return focused ? <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image> :
                <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image>
        }
        if (screenName == "FoodList") {
            return focused ? <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image> :
                <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image>
        }
        if (screenName == "Checkin") {
            return focused ? <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image> :
                <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image>
        }
        if (screenName == "Profile") {
            return focused ? <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image> :
                <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image>
        }
        if (screenName == "Settings") {
            return focused ? <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image> :
                <Image style={{ height: 20, width: 20 }} source={icons.ins4}></Image>
        }


    }

})

function UItab(props) {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="ProductGridView" component={ProductGridView} />
            <Tab.Screen name="FoodList" component={FoodList} />

            <Tab.Screen name="Checkin" component={Loginn} />
            {/* <Tab.Screen name="Profile" component={Profile} /> */}
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}
export default UItab