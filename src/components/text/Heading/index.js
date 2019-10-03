import React from 'react';
import { Text } from 'react-native';
import styles from './styles'

const text = props => {
    return(
        <Text style={[styles.text, props.customStyle]}>{props.children}</Text>
    )
}

export default text;