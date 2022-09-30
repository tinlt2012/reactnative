import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native'
import { images, colors, icons, color } from '../../constants'
// import Icon from 'react-native-vector-icons/FontAwesome5'
// import FiveStars from './FiveStars';
function GridItem(props) {
    const { item, index, onPress } = props
    return <View style={{
        flex: 0.5,
        //height: 200,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'blue'
    }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 10,
            marginHorizontal: 5
        }}>
            <Image
                style={{
                    width: 70,
                    height: 90,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 15
                }}
                source={{
                    uri: item.url
                }} />
            <Text style={{
                color: 'black',
                fontSize: 15,
                flex: 1,
                textAlign: 'right'
            }}>$ {item.price}</Text>
        </View>
        <Text style={{
            color: 'green',
            fontWeight: 'bold',
            fontSize: 15,
            marginHorizontal: 10,
            marginTop: 5,
        }}>$ {item.productName}
        </Text>
        {
            item.specifications.map(specification =>
                <Text
                    key={specification}
                    style={{
                        color: 'black',
                        fontSize: 15,
                        paddingHorizontal: 10,
                        paddingBottom: 10,

                    }}>* {specification}</Text>)
        }
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <TouchableOpacity
                onPress={onPress}
                style={{ flexDirection: 'row' }}>
                <Text style={
                    {
                        color: 'red'
                    }
                }>Save for later</Text>
                <Image
                    style={{
                        height: 30,
                        width: 30,
                        marginLeft: 10
                    }}
                    source={icons.heart}>

                </Image>
            </TouchableOpacity>

        </View>
    </View>
}
export default GridItem