import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from "react";

import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
    return(
    <View style={styles.container}>
        <View style={styles.profileSection}>
            <Image
                source={{ uri: 'https://fastly.picsum.photos/id/864/200/300.jpg?hmac=pHxnt4rXpNHIqBRpVSe-yL_pDtdwDfasgfub8GwI5mw' }} // Placeholder image URL
                style={styles.profileImage}
            />
            <Text style={styles.profileText}>Marcio Sérgio Schlichting</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Icon name="settings-outline" color="#887700"/>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        margin: 10
    },
    profileSection: {
        display: 'flex',
        flexDirection: 'row',  
        backgroundColor: '#fff',
        gap: 20
    },
    profileText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 75,
    }
});

export default AccountScreen;