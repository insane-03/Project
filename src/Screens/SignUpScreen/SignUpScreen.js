import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Picker,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { State } from 'react-native-gesture-handler';

const SignInScreen = ({navigation}) => {


    const [data, setData] = useState({
        email:'',
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#111e73' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>SignUp Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView showsVerticalScrollIndicator = {false} >

            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Username</Text>
            <View style={styles.action}>
                
                <TextInput 
                    placeholder="Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Picker>
                <Picker.Item label = 'Management Account' value = 'Management Account' />
                <Picker.Item label = 'Professor Account' value = 'Professor Account' />
                <Picker.Item label = 'Student Account' value = 'Student Account' />
            </Picker>

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {  }}
                >
                <LinearGradient
                    colors={['#3e50c7', '#111e73']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#111e73',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#111e73'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
    </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#111e73'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#3e50c7',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#000',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'black'
    }
});
