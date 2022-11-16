import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#111e73' barStyle="light-content"/>
        <LinearGradient 
            colors={['#111e73', '#111e73']}
            style={styles.header}>
            <Animatable.Image
                animation="fadeInDownBig"
                source={require('../../assets/logo/logo1.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <Animatable.Text
                animation="zoomIn"
                style={ {textAlign:'left',color:"#fff",fontSize:50,fontWeight:'bold'}
            }>$ocketed</Animatable.Text>
        </LinearGradient>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >

            <Animatable.Text style = {styles.foottext} >sign to connect with</Animatable.Text>
            <Animatable.Text style = {styles.foottext} >engineers lobby</Animatable.Text>
            
            <Animatable.View
                animation="fadeInLeftBig"
                style={styles.button}>
            <TouchableOpacity
                onPress={()=>navigation.navigate('SignUpScreen')}>
                <LinearGradient
                    colors={['#3e50c7', '#111e73']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>create an account</Text>
                
                </LinearGradient>
            </TouchableOpacity>
            </Animatable.View>
            
            <Animatable.View
                animation="fadeInRightBig"
                style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <View style={styles.signIn} >
                    <Text style={{ color : 'black', fontSize : 20, fontWeight:'bold' }}>SignIn</Text>
                </View>
                
            </TouchableOpacity>
            </Animatable.View>
        
        </Animatable.View>
    </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: '#111e73'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    foottext : {
        fontSize : 18,
        fontWeight : 'normal',
        flexDirection : 'row',
        alignItems : 'flex-end',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize : 20,
    },
});

