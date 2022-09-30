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
function UIcomponent(props) {
    const { title } = props
    return <View>
        <View style={
            {
                height: 40,
                backgroundColor: '#a9a9a9'
            }
        }>
            <Text style={
                {
                    color: 'black',
                    fontSize: 15,
                    lineHeight: 32,
                    marginStart: 10,
                    color: '#add8e6',
                }
            }>Common</Text>
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>

            < Image
                source={icons.earth}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25
                }
            }>Language</Text>
            <Text style={
                {
                    color: 'black',
                    marginLeft: 180,
                    lineHeight: 25
                }
            }>
                English
            </Text>
            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 20,
                        width: 20,
                        marginLeft: 33,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>

            < Image
                source={icons.agriculture}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25
                }
            }>Environment</Text>
            <Text style={
                {
                    color: 'black',
                    marginLeft: 162,
                    lineHeight: 25
                }
            }>
                Production
            </Text>
            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 20,
                        width: 20,
                        marginLeft: 8,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                height: 40,
                backgroundColor: '#a9a9a9',
                marginTop: 30
            }
        }>
            <Text style={
                {
                    color: 'black',
                    fontSize: 15,
                    lineHeight: 32,
                    color: '#add8e6',
                    marginStart: 10
                }
            }>Account</Text>

        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>
            < Image
                source={icons.smartphone}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25,

                }
            }>Phone Number</Text>

            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 20,
                        width: 20,
                        marginLeft: 230,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>

            < Image
                source={icons.email}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25
                }
            }>Email</Text>

            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 20,
                        width: 20,
                        marginLeft: 293,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>
            < Image
                source={icons.signOut}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25,

                }
            }>Sign Out</Text>

            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 20,
                        width: 20,
                        marginLeft: 272,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                height: 40,
                backgroundColor: '#a9a9a9',
                marginTop: 20
            }
        }>
            <Text style={
                {
                    color: 'black',
                    fontSize: 15,
                    lineHeight: 32,
                    marginStart: 10,
                    color: '#add8e6',
                }
            }>Security</Text>

        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>
            < Image
                source={icons.padlock}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25,

                }
            }>Lock app on the background</Text>

            < Image
                source={icons.switch}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginLeft: 126,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>

            < Image
                source={icons.taplock}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25
                }
            }>Use FingerPrint</Text>

            < Image
                source={icons.switch}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginLeft: 215,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>
            < Image
                source={icons.key}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25,

                }
            }>Change Password</Text>

            < Image
                source={icons.switch}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginLeft: 196,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                height: 40,
                backgroundColor: '#a9a9a9',
                marginTop: 20
            }
        }>
            <Text style={
                {
                    color: 'black',
                    fontSize: 15,
                    lineHeight: 32,
                    marginStart: 10,
                    color: '#add8e6',
                }
            }>Others</Text>

        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>
            < Image
                source={icons.doc}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25,

                }
            }>Terms of Service</Text>

            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginLeft: 214,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>

            < Image
                source={icons.open}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25
                }
            }>Open source licenses</Text>

            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginLeft: 182,
                        paddingTop: 30



                    }
                }
            />
        </View>
        <View style={
            {
                flexDirection: 'row',
                marginStart: 10,
                paddingTop: 10

                // backgroundColor: 'red'
            }
        }>
            < Image
                source={icons.settings}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginRight: 20


                    }
                }
            />

            <Text style={
                {
                    color: 'black',
                    lineHeight: 25,

                }
            }>Advance Setting</Text>

            < Image
                source={icons.angleRight}
                style={
                    {
                        height: 30,
                        width: 30,
                        marginLeft: 216,
                        paddingTop: 30



                    }
                }
            />
        </View>
    </View>





}
export default UIcomponent