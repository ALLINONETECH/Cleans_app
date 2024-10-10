import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
// import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const RegisterScreen = () => {
    const [checked, setChecked] = React.useState(false);
    const [ward, setWard] = useState('test');
    const navigate = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Let's {'\n'}
                    <Text style={styles.headerBoldText}>Create</Text>{'\n'}
                    <Text style={styles.headerBoldText}>Your   <Text style={styles.cleanS}>CLEAN-S</Text></Text>{'\n'}
                    <Text style={styles.headerBoldText}>Account</Text>
                </Text>
                <TouchableOpacity style={styles.profileIconContainer}>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={styles.profileIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInput
                    label="Full Name"
                    mode="outlined"
                    left={<TextInput.Icon icon="account" />}
                    style={styles.input}
                    theme={inputTheme}
                />
                <TextInput
                    label="Email Address"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    style={styles.input}
                    theme={inputTheme}
                />
                <TextInput
                    label="Mobile"
                    mode="outlined"
                    left={<TextInput.Icon icon="phone" />}
                    style={styles.input}
                    theme={inputTheme}
                />
                <TextInput
                    label="Address Line 1"
                    mode="outlined"
                    left={<TextInput.Icon icon="map-marker" />}
                    style={styles.input}
                    theme={inputTheme}
                />
                <TextInput
                    label="Address Line 2"
                    mode="outlined"
                    left={<TextInput.Icon icon="map-marker" />}
                    style={styles.input}
                    theme={inputTheme}
                />
                <View style={styles.row}>
                    <TextInput
                        label="House Number"
                        mode="outlined"
                        left={<TextInput.Icon icon="home" />}
                        style={[styles.input, styles.halfInput]}
                        theme={inputTheme}
                    />
                    <TextInput
                        label="Pincode"
                        mode="outlined"
                        left={<TextInput.Icon icon="map-marker" />}
                        style={[styles.input, styles.halfInput]}
                        theme={inputTheme}
                    />
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={ward}
                        onValueChange={(itemValue) => setWard(itemValue)}
                        style={styles.picker}
                        
                        dropdownIconColor={'black'}
                        mode="dropdown" // You can also try 'dialog' for a different UI
                    >
                        <Picker.Item label="Select Ward" value="" />
                        <Picker.Item label="Ward 1" value="ward1" />
                        <Picker.Item label="Ward 2" value="ward2" />
                        <Picker.Item label="Ward 3" value="ward3" />
                        {/* Add more ward options as needed */}
                    </Picker>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(!checked)}
                        color="green"
                    />
                    <Text style={styles.checkboxText}>
                        I agree to the <Text style={styles.linkText}>Terms & Privacy</Text>
                    </Text>
                </View>
                <TouchableOpacity >
                    <Text style={styles.signUpButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>

                <TouchableOpacity onPress={() => navigate.navigate('Login')}>
                    <Text style={styles.footerText}>
                        Have an account? <Text style={styles.linkText}>Sign In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const inputTheme = {
    colors: {
        placeholder: '#92a79f',
        text: '#344c42',
        primary: '#49939a',
        background: 'transparent',
    },
    roundness: 30,
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f1f8f4',
        alignItems: 'center',
        // paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        paddingBottom: 38,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: '#2b5f56',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginBottom: 15,
    },
    headerTitle: {
        fontSize: 35,
        color: 'white',
        fontWeight: '300',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    headerBoldText: {
        fontWeight: '700',
        color: 'white',
    },
    cleanS: {
        color: '#ffb020',
    },
    profileIconContainer: {
        position: 'absolute',
        // justifyContent: 'flex-end',
        top: '105%',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
    },
    profileIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '75%',
        marginBottom: 10,
        marginTop: 30
    },
    input: {
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginLeft: 0
    },
    checkboxText: {
        color: '#2b5f56',
    },
    linkText: {
        color: '#2b5f56',
    },
    signUpButton: {
        backgroundColor: '#2b5f56',
        borderRadius: 30,
        width: '100%',
        paddingVertical: 15,
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    signUpLabel: {
        fontSize: 18,
    },
    footerText: {
        color: '#344c42',
        marginTop: 20,
        marginBottom: 20
    },
    footer: {
        margin: 0,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#49939a',
        borderRadius: 30,
        backgroundColor: '#f1f8f4',
        marginBottom: 10,
    },
    picker: {
        height: 50,
        padding: 10,
        color: 'black',
    }
});

export default RegisterScreen;
