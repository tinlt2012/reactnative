
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


function Register(props) {
    const [keyboardIsShown, setkeyboardIsShown] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorPasswordNew, setErrorPasswordNew] = useState('')
    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShown(false)
        })
    })

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
                flex: 20,
                // backgroundColor: 'red'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    width: '50%',
                    color: `#ffe4e1`,
                    marginTop: 8,


                }}>Here 's your first step with us !</Text>
                <Image
                    source={images.register} style={{
                        height: 130,
                        width: 130,
                        alignSelf: 'center',
                        // backgroundColor: 'red',

                        marginStart: 30,
                        marginTop: 15
                    }}>

                </Image>

            </View>
            <View style={
                {
                    flex: 60,
                    backgroundColor: 'white',
                    marginTop: 30,
                    borderRadius: 20,
                    marginHorizontal: 10
                }
            }>
                <View
                    style={
                        {
                            marginHorizontal: 20
                        }
                    }
                >
                    <Text style={
                        {
                            color: 'black',
                            fontSize: 16,
                            color: color.primarity,

                        }
                    }>Account</Text>
                    <TextInput style={
                        {

                            color: 'black',
                            fontStyle: 'italic'
                        }

                    }
                        placeholder='Type your account name'

                        placeholderTextColor={color.placeHolder}
                    ></TextInput>
                    <View style={{ height: 1, backgroundColor: 'pink', width: '100%' }}></View>
                </View>
                <View style={{
                    marginHorizontal: 20,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
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
                        placeholder="Example@gmail.com"
                        placeholderTextColor={color.placeHolder}

                    />
                    <View style={{ height: 1, backgroundColor: 'pink', width: '100%' }}></View>

                    <Text style={
                        {
                            color: 'red',
                            fontSize: 16,
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
                            fontSize: 16,
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
                            fontSize: 10,
                        }
                    }> {errorPassword}</Text>


                </View>
                <View
                    style={
                        {
                            marginHorizontal: 20
                        }
                    }
                >
                    <Text style={
                        {
                            color: 'black',
                            fontSize: 20,
                            color: color.primarity,

                        }
                    }>Re-password </Text>
                    <TextInput
                        onChangeText={(text) => {

                            setErrorPasswordNew(password == text ? '' : 'Re-password is not match with your password you are typed')
                        }}
                        style={
                            {

                                color: 'black',
                                fontStyle: 'italic'
                            }

                        }
                        placeholder='Retype your password'

                        placeholderTextColor={color.placeHolder}
                        secureTextEntry={true}
                    ></TextInput>
                    <View style={{ height: 1, backgroundColor: 'pink', width: '100%' }}></View>
                    <Text style={
                        {
                            color: 'red',
                            fontSize: 10,
                        }
                    }> {errorPasswordNew}</Text>
                </View>

            </View>
            {keyboardIsShown == false && <View style={{
                paddingTop: 10,
                flex: 5,
                // backgroundColor: 'green'

            }}>
                <TouchableOpacity
                    onPress={() => {
                        // alert(`${email} + ${password}`)

                    }}
                    style={{
                        backgroundColor: errorEmail == '' && errorPassword == '' && errorPasswordNew == '' ? `#00ffff` : `#778899`,
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
                    }>REGISTER</Text>

                </TouchableOpacity>

            </View>}
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
                        flex: 15
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
export default Register