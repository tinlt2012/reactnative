import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList,

} from "react-native";

// import FoodIteam from "./FoodItem";

import { images, icons, color } from '../../constants'

import { UIButton } from '../../components'
// import Icon from 'react-native-vector-icons/FontAwesome5'
function _getColorFromStatus(status) {
    if (status.toUpperCase().trim() == 'OPENING NOW') {
        return color.success
    }
    else if (status.toUpperCase().trim() == 'CLOSING SOON') {
        return color.alert
    }
    else if (status.toUpperCase().trim() == 'CLOSING NOW') {
        return color.warning
    }
    else if (status.toUpperCase().trim() == 'OPENING SOON') {
        return color.wait
    }
    return color.wait
}
function instagramItem(props) {
    let {
        name,
        price,
        socialNetworks,
        status,
        url,
        website,
    } = props.food
    const { onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                {
                    height: 180,
                    // backgroundColor: 'red',
                    paddingTop: 20,
                    paddingLeft: 10,
                    flexDirection: 'row',


                }

            }>
            <Image style={
                {
                    height: 100,
                    width: 100,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    marginRight: 10,
                    marginTop: 15


                }
            }
                source={
                    {
                        uri: url
                    }
                }>

            </Image>
            <View style={
                {
                    // backgroundColor: 'green',
                    flex: 1,
                    marginRight: 20,
                }
            }>
                <Text style={
                    {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'black'
                    }
                }>
                    Name : {name}
                </Text>
                <View style={
                    {
                        height: 1,
                        backgroundColor: '#00fa9a'

                    }
                }>
                </View>
                <View style={
                    {
                        flexDirection: 'row'
                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            color: 'green'

                        }
                    }>
                        Status
                    </Text>
                    <Text style={
                        {
                            fontSize: 15,
                            marginLeft: 20,
                            color: _getColorFromStatus(status)

                        }
                    }>
                        {status.toUpperCase()}
                    </Text>

                </View>
                <View style={
                    {
                        flexDirection: 'row'
                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            color: 'orange'


                        }
                    }>
                        Price
                    </Text>
                    <Text style={
                        {
                            fontSize: 15,
                            marginLeft: 20,
                            color: 'black'


                        }
                    }>
                        {price} $

                    </Text>

                </View>
                <View style={
                    {
                        flexDirection: 'row'
                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            color: 'gray'


                        }
                    }>
                        Food Type
                    </Text>
                    <Text style={
                        {
                            fontSize: 15,
                            marginLeft: 20,
                            color: "blue"


                        }
                    }>
                        Kieu Tho
                    </Text>

                </View>
                <View style={
                    {
                        flexDirection: 'row',

                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            color: "green"


                        }
                    }>
                        Website

                    </Text>
                    <Text style={
                        {
                            fontSize: 15,
                            marginLeft: 20,
                            color: 'black'

                        }
                    }>
                        {website}
                    </Text>

                </View>
                <View style={
                    {
                        flexDirection: 'row',
                        paddingBottom: 10,
                        paddingTop: 5,


                    }
                }>

                    {socialNetworks['facebook'] != undefined && < Image
                        source={icons.facebook}
                        style={
                            {
                                height: 30,
                                width: 30,

                            }
                        }
                    />
                    }

                    {socialNetworks['twitter'] != undefined && < Image
                        source={icons.twitter}
                        style={
                            {
                                height: 30,
                                width: 30,
                                marginLeft: socialNetworks['facebook'] != undefined ? 10 : 0,
                                marginRight: 10

                            }
                        }
                    />}
                    {socialNetworks['instagram'] != undefined && < Image
                        source={icons.instagram}
                        style={
                            {
                                height: 30,
                                width: 30,
                                marginLeft: socialNetworks['facebook'] != undefined && socialNetworks['twitter'] == undefined ? 10 : 0,

                            }
                        }
                    />
                    }


                </View>

            </View>
        </TouchableOpacity>

    )
}
export default instagramItem