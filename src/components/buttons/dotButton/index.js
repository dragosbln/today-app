import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

const dot = props => {
    return(
        <TouchableOpacity onPress={props.onPress} 
            style={
                [styles.button, 
                    props.active ? styles.active: null, 
                    props.customStyle, 
                    props.radius ? {width: props.radius*2, height: props.radius*2} : null]
                }>
        </TouchableOpacity>
    )
}

export default dot;