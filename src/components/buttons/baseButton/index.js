import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

const text = props => {
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.customStyle]}>
            <Text style={[styles.text, props.textStyle]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default text;