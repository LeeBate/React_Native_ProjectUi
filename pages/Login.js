import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 41.98, backgroundColor: 'white', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../assets/oppo2.png')} />
                {/* <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#006831', alignSelf: 'center' }}>Mobile Shop</Text> */}
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tabs')}>
                    <View style={styles.btnGroup}>
                        <Image style={styles.btnIcon} source={require('../assets/Google.png')} />
                        <Text style={styles.btnText}>Continue with Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tabs')}>
                    <View style={styles.btnGroup}>
                        <Image style={styles.btnIcon} source={require('../assets/Facebook.png')} />
                        <Text style={styles.btnText}>Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <Text style={styles.lineText}>Or</Text>
            </View>
            <View style={styles.btnContainerColor}>
                <TouchableOpacity style={styles.btnColor}>
                    <View style={styles.btnGroup}>
                        <Text style={styles.btnTextWhite}>Create account</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 3.70, backgroundColor: 'white' }}></View>
            <View style={{ flex: 8.23 }}>
                <View style={styles.policyContainer}>
                    <Text style={styles.policyTextBlack}>By signing up, you agree to the
                        <Text style={styles.policyTextColor}> Terms of Service </Text>and
                        <Text style={styles.policyTextColor}> Privacy</Text>, Including
                        <Text style={styles.policyTextColor}> Cookie Use</Text>.
                    </Text>
                </View>
            </View>
            <View style={{ flex: 16.23 }}>
                <View style={styles.policyContainer}>
                    <Text style={styles.policyTextBlack}>Have an account already?
                        <Text style={styles.policyTextColor}> Log in</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        backgroundColor: 'white',
        width: 300,

        alignSelf: 'center',

        resizeMode: 'contain'
    },
    btnContainer: {
        flex: 7.51,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 311,
        height: 60,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: '#d9d9d9',
        borderWidth: 2
    },
    btnColor: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 311,
        height: 60,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#006831',
        borderColor: '#d9d9d9',
        borderWidth: 1
    },
    btnGroup: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    btnIcon: {
        marginRight: 7
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'regular',
        color: 'black'
    },
    btnTextWhite: {
        fontSize: 22,
        fontWeight: 'regular',
        color: 'white'
    },
    line: {
        width: 311,
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#d9d9d9'
    },
    lineContainer: {
        flex: 3.19,
        alignItems: 'center',
        justifyContent: 'center',
        /*    backgroundColor: 'darkblue' */
    },
    lineText: {
        color: 'black',
        fontSize: 16,
        position: 'absolute',
        backgroundColor: 'white',
        paddingHorizontal: 5
    },
    policyContainer: {
        flex: 1,
        width: 353,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    policyTextBlack: {
        fontSize: 14,
        color: 'black'
    },
    policyTextColor: {
        fontSize: 14,
        color: '#006831',

    },


})