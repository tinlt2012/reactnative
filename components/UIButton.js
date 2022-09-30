import React, { useState, useEffect } from 'react'
import {
    TouchableOpacity,
    Text, Image
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome5'
import { images, icons, color } from '../constants'

function UIButton(props) {
    const { onPress, title, isSelected } = props
    //     let acccountTypes = [
    //    'Inluence','Business','Invidiual'
    //     ]

    return <TouchableOpacity
        onPress={onPress}

        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 50,
            borderRadius: 10,
            marginHorizontal: 15, // can le trai phai
            marginVertical: 15,// can le tren duoi
            justifyContent: 'center', // giua theo chieu doc
            alignItems: 'center', // giua theo chieu ngang
            backgroundColor: isSelected == true ? 'white' : null



        }}>
        {
            isSelected == true && <Image
                source={icons.check}
                style={
                    {
                        position: 'absolute',
                        height: 30,
                        width: 30,
                        top: 10,
                        left: 10,
                        // marginStart: 10, // cach o truoc 10 
                        // // marginHorizontal: 10, // cach o sau 10
                        // marginEnd: 10

                    }
                }
            />

        }
        <Text style={{
            color: isSelected == true ? color.primarity : color.secondary,
            fontSize: 20,
            fontStyle: "italic"

        }}>{title}</Text>
    </TouchableOpacity >

}
export default UIButton
