import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,


} from "react-native";
import { images, icons, color } from '../constants'

import { UIButton } from '../components'



function Welcome(props) {



    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influence',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Invidiual',
            isSelected: false,
        },




    ])
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation

    return <View style={{
        backgroundColor: 'white',
        flex: 1 // full man hinh
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={
                {
                    flex: 100
                }
            }

        >

            <View style={
                {
                    flexDirection: 'row', // fire and your company same the row 
                    flex: 25,
                    // backgroundColor: 'green',

                }
            }>
                <View style={
                    {
                        flexDirection: 'row',
                        height: 50,
                        justifyContent: 'flex-start', // nam ben trai cung
                        alignItems: 'center', // middle of row
                    }
                }>
                    <Image
                        source={icons.fire}
                        style={
                            {
                                height: 30,
                                width: 30,
                                marginStart: 10, // cach o truoc 10 
                                // marginHorizontal: 10, // cach o sau 10
                                marginEnd: 10
                            }
                        }
                    />
                    <Text style={{
                        color: 'white',
                        marginEnd: 180
                    }}>YOURCOMPANY.CO</Text>

                    <View style={{
                        flex: 1,
                        color: 'red'
                    }} />

                    <Image
                        source={icons.question}
                        style={
                            {
                                height: 20,
                                width: 20,
                                marginEnd: 15 // cach trai 15px

                            }
                        }
                    />

                </View>
            </View>

            <View style={
                {
                    flex: 20,
                    // backgroundColor: 'black',
                    justifyContent: 'center', // giua theo chieu doc
                    alignItems: 'center', // giua theo chieu ngang
                }
            }>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: 15 }}>Welcome to</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontWeight: 'bold' }}>YOURCOMPANY.CO</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: 15 }}>Please select your acccount type</Text>

            </View>
            <View style={
                {
                    flex: 40,
                    // backgroundColor: 'blue'
                }

            }>

                {accountTypes.map(accountType =>
                    <UIButton
                        key={accountType.name}
                        onPress={() => {
                            navigate('Register')

                            navigation.navigate('Register')
                            setAccountTypes(accountTypes.map(eachAccountType => {
                                return {
                                    ...eachAccountType,
                                    isSelected: eachAccountType.name == accountType.name
                                }
                            }));
                        }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)}




            </View>
            <View style={
                {
                    flex: 20,
                    // backgroundColor: 'red'
                }


            }>
                <UIButton
                    onPress={() => {
                        navigate('Login')
                    }}
                    title={'Login'.toUpperCase()}>

                </UIButton>
                <Text style={{
                    color: 'white',
                    marginStart: 1,
                    fontSize: 15,
                    alignSelf: 'center',
                    fontWeight: 'bold'
                }}>Don't know what is your account type , pls register ? </Text>
                <Text style={{
                    textDecorationLine: "underline",
                    alignSelf: 'center',
                    fontSizeL: 25,
                    color: color.primarity,
                }}> REGISTER</Text>


            </View>
        </ImageBackground>
    </View>

}

export default Welcome
