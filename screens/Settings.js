import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Settings,
    ScrollView

} from "react-native";
import { images, icons, color } from '../constants'

import { UIheader, UIcomponent } from '../components'

function Set(props) {

    return <View style={
        {
            flex: 1,
            backgroundColor: 'white',

        }
    }>

        <UIheader title='Setting'></UIheader>
        <ScrollView>

            <UIcomponent></UIcomponent>
        </ScrollView>

    </View>

}

export default Set
