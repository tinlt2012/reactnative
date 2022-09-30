
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


function Login(props) {
    const [keyboardIsShown, setkeyboardIsShown] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShown(false)
        })
    })


    // const { navigation, route } = props
    // //functions of navigate to/back
    // const { navigate, goBack } = navigation

    return <View style={
        {
            backgroundColor: 'white',
            flex: 1,

        }

    }>
        <ImageBackground
            source={images.background1}
            resizeMode='cover'
            style={
                {
                    flex: 100
                }
            }

        >

            <View style={{
                height: 150,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                flex: 30,
                // backgroundColor: 'red'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    width: '50%',


                }}>Already have an Account?</Text>
                <Image
                    source={images.computer} style={{
                        height: 150,
                        width: 150,
                        alignSelf: 'center',
                        // backgroundColor: 'red',

                        marginStart: 40,
                    }}>

                </Image>

            </View>
            <View style={
                {
                    flex: 30,
                    // backgroundColor: 'blue',
                    marginTop: 30,
                }
            }>
                <View style={{
                    marginHorizontal: 20,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        color: color.primarity

                    }}>Email</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setErrorEmail(isValidEmail(text) == true ? '' : 'email is not correct format')
                            setEmail(text)

                        }}
                        style={{
                            color: 'black'
                        }}
                        placeholder="example@gmail.com"
                        placeholderTextColor={color.placeHolder}

                    />
                    <View style={{ height: 1, backgroundColor: 'pink', width: '100%' }}></View>

                    <Text style={
                        {
                            color: 'red',
                            fontSize: 20,
                        }
                    }>
                        {errorEmail}
                    </Text>


                </View>
                <View style={{
                    marginHorizontal: 20,
                }}>
                    <Text

                        style={{
                            color: 'black',
                            fontSize: 20,
                            color: color.primarity

                        }}>Password</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setErrorPassword(isValidPassword(text) == true ? '' : 'password must be have more than 3 charaters')
                            setPassword(text)
                        }}

                        style={{
                            color: 'black'
                        }}

                        placeholder="Enter your password"
                        placeholderTextColor={color.placeHolder}
                        secureTextEntry={true} // security passwd

                    />

                    <View style={{ height: 1, backgroundColor: 'pink', width: '100%' }}></View>

                    <Text style={
                        {
                            color: 'red',
                            fontSize: 20,
                        }
                    }> {errorPassword}</Text>


                </View>
            </View>
            <View style={{
                paddingTop: 10,
                flex: 15,
                // backgroundColor: 'green'

            }}>
                <TouchableOpacity
                    onPress={() => {
                        // navigate('UItab')

                    }}
                    style={{
                        backgroundColor: errorEmail == '' && errorPassword == '' ? color.primarity : `#778899`,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: "40%",
                        alignSelf: 'center',
                        borderRadius: 20
                    }}>
                    <Text style={
                        {
                            padding: 5,

                        }
                    }>LOGIN</Text>

                </TouchableOpacity>
                <TouchableOpacity

                    onPress={() => {

                    }}
                    style={
                        {
                            marginTop: 10,
                        }
                    }>
                    <Text style={
                        {
                            padding: 5,
                            color: color.primarity,
                            alignSelf: 'center',
                            fontSize: 20

                        }
                    }>New user ? Register Now</Text>
                </TouchableOpacity>
            </View>
            {keyboardIsShown == false && <View style={
                {
                    flex: 25,
                    // backgroundColor: "white"
                }
            } >
                <View style={
                    {
                        height: 40,
                        flexDirection: 'row',
                        alignItems: "center",
                        marginHorizontal: 40,
                        flex: 30
                    }
                }>
                    <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                    <Text style={
                        {
                            padding: 8,
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            fontStyle: 'italic'

                        }
                    }> Other Methods</Text>
                    <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                </View>
                <View style={
                    {
                        flex: 50,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        padding: 5,
                        justifyContent: "center"
                    }


                }>
                    < Image
                        source={icons.facebook}
                        style={
                            {
                                height: 50,
                                width: 50,


                            }
                        }
                    />
                    < Image
                        source={icons.twitter}
                        style={
                            {
                                height: 50,
                                width: 50,
                                marginEnd: 18,
                                marginStart: 18

                            }
                        }
                    />
                    < Image
                        source={icons.instagram}
                        style={
                            {
                                height: 50,
                                width: 50,

                            }
                        }
                    />


                </View>


            </View>
            }



        </ImageBackground >


    </View >


}
export default Login