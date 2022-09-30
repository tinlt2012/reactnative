import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Settings

} from "react-native";
import { images, icons, color } from '../constants'

import { UIButton } from '../components'
function UIheader(props) {
    const { title } = props
    return <ImageBackground
        source={images.background}
        style={
            {
                backgroundColor: '#add8e6',
                height: 150,
                flexDirection: 'row',


            }
        }>
        <Text style={
            {
                fontSize: 25,
                justifyContent: 'center',
                textAlign: "center",
                marginTop: 20,
                // alignSelf: 'center',
                lineHeight: 45,
                marginStart: 150,
                marginRight: 30,
                fontSize: 30,
                color: 'red'
            }
        }>{title}

        </Text>
        < Image
            source={icons.settings}
            style={
                {
                    height: 50,
                    width: 50,
                    marginRight: 20,
                    marginTop: 30,



                }
            }
        />





    </ImageBackground>
}



export default UIheader