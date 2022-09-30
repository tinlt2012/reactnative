import React, { useEffect, useState } from "react";
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
import { isValidEmail, isValidPassword } from '../Utilies/validations'
import { images, icons, color } from '../constants'
import { SafeAreaView } from "react-native-safe-area-context";
import {
    user as UserRepository,
} from '../repositories'
function Profile(props) {
    UserRepository.getUserDetail()
    return <SafeAreaView style={
        {
            backgroundColor: "black",
            flex: 1
        }
    }>
        <Text>This issss</Text>
    </SafeAreaView>

}
export default Profile