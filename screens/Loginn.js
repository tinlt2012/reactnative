
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    FlatList

} from "react-native";
import { images, icons, color } from '../constants'




function Loginn(props) {
    const [foods, setFoods] = useState([
        {
            name: 'Paella Valenciana, with rabbit ',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
            status: 'Opening soon',
            price: 5223.56,
            like: 210,
            status: ' đang đi vệ sinh với Tín ',
            website: 'https://edition.cnn.com',
            socialNetworks: {
                facebook: 'https://www.facebook.com/duyvu91',
                twitter: 'https://twitter.com/LostInBrittany',
                instagram: 'https://www.instagram.com/nghiatran__/',


            }
        },
        {
            name: 'Gazpacho',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gjyk-VN438EkSnwwAcCRVgzW6F_MmeH-A&usqp=CAU',
            status: 'Opening Now',
            price: 1124.56,
            like: 230,
            status: ' đang đi vệ sinh với Tín ',
            website: 'https://huands.abc.com',
            socialNetworks: {
                twitter: 'https://twitter.com/LostInBrittany',
                instagram: 'https://www.instagram.com/nghiatran__/'
            }
        },
        {
            name: 'Gazpacho abcsd',
            url: 'https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp',
            status: 'Opening Now',
            price: 1124.56,

            website: 'https://huands.abc.com',
            socialNetworks: {
                twitter: 'https://twitter.com/LostInBrittany',
                instagram: 'https://www.instagram.com/nghiatran__/'
            }
        },
        {
            name: 'Pimientos de Padron',
            url: 'https://www.thatsmags.com/image/view/201807/favorita-1.jpg',
            status: 'Closing soon',
            price: 2342.56,

            website: 'https://www.uiuds.com',
            socialNetworks: {
                facebook: 'https://www.facebook.com/duyvu91',
                twitter: 'https://twitter.com/LostInBrittany',
            }
        },
        {
            name: 'Albondigas',
            url: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/09/lead7.jpg',
            status: 'Comming soon',

            website: 'https://edition.sabc.com',
            socialNetworks: {
                instagram: 'https://www.instagram.com/nghiatran__/'
            }
        },
        {
            name: 'Abc xyz',
            url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
            status: 'Closing soon',
            price: 5568.11,

            website: 'https://www.food.com/',
            socialNetworks: {
                instagram: 'https://www.instagram.com/aeisinger/',
                facebook: 'https://www.facebook.com/duyvu91'
            }
        },
        {
            name: 'chim cuc',
            url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
            status: 'Closing soon',
            price: 5568.11,

            website: 'https://www.food.com/',
            socialNetworks: {
                instagram: 'https://www.instagram.com/aeisinger/'
            }
        },
    ])


    const [categories, setCategories] = useState([
        {
            name: 'x.i.u2000',
            url: 'https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/300768664_3282194878659296_6574190263253836637_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cvFqza0PyvsAX8_yoqC&_nc_ht=scontent.fdad8-1.fna&oh=00_AT9692XVGn9009ty2PVXAZqnG6yLjo-oO-26ZnWZqVPbvQ&oe=6327DFA6',
            like: 100,
            status: ' đang đi vệ sinh ',
        },
        {
            name: 'cún_iu',
            url: 'https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/275941044_3161614254050693_1832096450987872374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=7g2XUgFTZoMAX-hs-uM&tn=NBw9-smGSW434bKn&_nc_ht=scontent.fdad8-1.fna&oh=00_AT_MOTulSYlXoByT44Ntgshb0tCxZV1Y_tAkWUJq2scjcQ&oe=6327C75E',
            like: 110,
            status: ' đang thèm trà sữa ',
        },
        {
            name: 'tinlt_2012',
            url: 'https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/299425180_3326560074243447_4519395126392598391_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gnwhcAF9GLYAX8IAZXM&_nc_ht=scontent.fdad8-1.fna&oh=00_AT_AA6-97IDqoUDddx9tVenlqu6ZvSXMIIofJAe_f9Cr7A&oe=63282070',
            like: 90,
            status: ' Iu cún rất nhiều ',
        },
        {
            name: 'tho_son_xe',
            url: 'https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/262857042_3089388731273246_2152860737930142093_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=B7Eykdh_9dMAX-_Llmx&_nc_ht=scontent.fdad8-1.fna&oh=00_AT9ZJST6dWGBQtCevCalgulFDI5pYti4-tLCOZ5qS_DYqQ&oe=6329031F',
            like: 77,
            status: ' đang nhớ Anh TÍn ',
        },
        {
            name: 'thanhtin_99',
            url: 'https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/289860436_3284913035074818_7492937609361842038_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=CWwd_2rUk2QAX9_BCQ_&_nc_ht=scontent.fdad8-1.fna&oh=00_AT_-F38iKwEOgh0TREGJBuW74IlYrNbu7iL7d6NSXVu4ag&oe=6328A659',
            like: 60,
            status: ' đang đi vệ sinh ',
        },
        {
            name: 'bongie',
            url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/22/12/dinner-table.jpg?width=1200',
            like: 99,
            status: ' món này ngon quá :v ',
        },
        {
            name: 'li.nhh.nh',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzVkc-LPuqE-DXVUkTznfkCadCqCYzcfoBA&usqp=CAU',
            like: 112,
            status: ' đang đi vệ sinh ',
        },
        {
            name: 'uyenph_18y',
            url: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/299207984_3275455255999925_8537698450610275886_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=5e-kMg_f374AX8uTif1&_nc_ht=scontent.fdad7-1.fna&oh=00_AT8jDUX9e82SL65YKWpChurt-q93xHLKTNrz076vjgez7A&oe=632B7723',
            like: 150,
            status: ' happy guys ^^ ',
        },
        {
            name: 'Wine',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUB_gxlZAGsGjHOwSU6mIc_L4X18yTAffJT-ocG6Y-5WqZSORqytoBaMkA5qcgeC2FeZA&usqp=CAU',
            like: 197,
            status: ' đang đi vệ sinh ',
        },
        {
            name: 'Barbecue',
            url: 'https://m.media-amazon.com/images/I/81s-rWYsoKL._SX466_.jpg',
            like: 100,
            status: ' đang đi vệ sinh ',
        },
    ])
    return <View style={
        {
            backgroundColor: 'white',
            flex: 100,

        }
    } >
        <View style={
            {
                flexDirection: 'row',
                height: 50,
                flex: 4,
                marginTop: 7,
                // backgroundColor: 'red'
            }
        }>
            <Image source={images.instagramLogo} style={{
                height: 40,
                width: 110,
                marginStart: 10,

            }} />
            <Image source={icons.plus} style={{
                height: 27,
                width: 27,
                marginLeft: 210,
                marginRight: 25

            }} />
            <Image source={icons.messenger} style={{
                height: 27,
                width: 27,

            }} />



        </View>

        <View style={{
            flex: 18,
            // backgroundColor: 'blue'
        }}>
            <FlatList
                horizontal
                data={categories}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <TouchableOpacity>
                        <Image style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'cover',
                            borderRadius: 40,
                            borderColor: "#afeeee",

                            borderWidth: 2,
                            margin: 7,
                        }}
                            source={{ uri: item.url }}
                        />
                        <Text
                            style={
                                {
                                    color: 'black',
                                    textAlign: 'center',
                                    // fontWeight: 'bold',
                                    color: `black`,

                                }

                            }>
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                }}
                style={{ height: 1, flex: 1, }}>

            </FlatList>

        </View>

        <View style={{
            flex: 78,
            // backgroundColor: 'green',

        }}>
            <FlatList
                // horizontal
                data={categories}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <View>
                        <View style={{ height: 1, backgroundColor: '#dcdcdc' }}></View>
                        <View style={{
                            height: 55,

                            flexDirection: 'row',
                        }}>
                            <Image source={{ uri: item.url }} style={{
                                height: 40,
                                width: 40,
                                borderRadius: 40,
                                marginTop: 5,
                                borderWidth: 1,
                                borderColor: 'black',
                                marginStart: 5
                            }} />
                            <Text style={{
                                marginTop: 15,
                                paddingStart: 5,
                                color: 'black'
                            }} > {item.name} </Text>
                            <View style={{ flex: 1 }}></View>
                            <Image source={images.menu_dots} style={{
                                height: 25,
                                marginTop: 30,
                                // marginLeft: 200,
                                marginRight: 10,
                                width: 25,
                            }} />



                        </View>

                        <View style={{
                            marginTop: 6
                        }} >
                            <Image style={{
                                // resizeMode: 'contain',
                                height: 420,
                                width: 440,
                            }} source={{ uri: item.url }}>
                            </Image>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            marginTop: 7,


                        }}>
                            <Image style={{
                                height: 25,
                                width: 25,
                                marginStart: 15
                            }} source={icons.heartred}></Image>
                            <Image style={{
                                height: 25,
                                width: 25,
                                marginStart: 15,
                                transform: ([{ rotateX: '0deg' }, { rotateZ: '0rad' }])
                            }} source={icons.ins2}></Image>
                            <Image style={{
                                height: 25,
                                width: 25,
                                marginStart: 15
                            }} source={icons.ins3}></Image>
                            <Image style={{
                                height: 25,
                                width: 25,
                                marginStart: 250
                            }} source={icons.ribbon}></Image>
                        </View>
                        <View style={
                            {
                                // backgroundColor: 'red'
                            }
                        }>
                            <Text style={
                                {
                                    color: 'black',
                                    fontWeight: 'bold',
                                    marginStart: 15
                                }
                            }>{item.like} lượt thích </Text>
                        </View>
                        <View style={
                            {
                                // backgroundColor: 'red'
                                flexDirection: 'row'
                            }
                        }>
                            <Text style={
                                {
                                    color: 'black',
                                    fontWeight: 'bold',
                                    marginStart: 15
                                }
                            }>{item.name}  </Text>
                            <Text style={{ fontSize: 15, color: 'black' }}> {item.status} </Text>
                        </View>
                        <View style={
                            {
                                // backgroundColor: 'red'
                                flexDirection: 'row'
                            }
                        }>
                            <Image style={{
                                height: 30,
                                width: 30,
                                borderRadius: 20,
                                marginStart: 15,
                                marginTop: 5
                            }} source={icons.avt}></Image>
                            <TextInput style={{
                                color: color.inactive,

                                marginStart: 10,
                                paddingBottom: 30,


                            }}
                                placeholder="Thêm bình luận ..."
                                placeholderTextColor={color.placeHolder} >

                            </TextInput>
                            <Image style={{
                                height: 15,
                                width: 15,
                                marginStart: 160,
                                marginTop: 18,
                            }} source={icons.heartred}></Image>
                            <Image style={{
                                height: 25,
                                width: 25,
                                marginStart: 0,
                                marginTop: 15
                            }} source={icons.tab}></Image>
                            <Image style={{
                                height: 15,
                                width: 15,
                                marginStart: 5,
                                marginTop: 15
                            }} source={icons.plus}></Image>

                        </View>

                    </View>




                }}>


            </FlatList>




        </View>
        <View style={{
            flex: 6,
            // backgroundColor: 'gray',
            flexDirection: 'row'
        }}>
            <View style={{
                flexDirection: 'row',
                marginTop: 5
            }}>
                <TouchableOpacity onPress={() => {

                }}>
                    <Image style={{
                        height: 30,
                        width: 30,
                        marginStart: 15
                    }} source={icons.ins4}>

                    </Image>
                </TouchableOpacity>
                <Image style={{
                    height: 30,
                    width: 30,
                    marginStart: 60
                }} source={icons.ins5}>

                </Image>
                <Image style={{
                    height: 30,
                    width: 30,
                    marginStart: 60
                }} source={icons.ins6}>

                </Image>
                <Image style={{
                    height: 30,
                    width: 30,
                    marginStart: 60
                }} source={icons.heart}>

                </Image>
                <Image style={{
                    height: 30,
                    width: 30,
                    marginStart: 60,
                    marginEnd: 15,
                    borderRadius: 40
                }} source={icons.avt}>

                </Image>
            </View>

        </View>

    </View>

}
export default Loginn