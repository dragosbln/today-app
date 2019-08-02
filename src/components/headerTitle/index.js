import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const myIcon = props => {

    return(
        <View style={[styles.base, props.customStyle]}>
            <Text style={styles.text}>
                <Text style={styles.bigText}>W</Text>
                IKIPEDI
                <Text style={styles.bigText}>A</Text>
            </Text>
        </View>
    )
}

export default myIcon