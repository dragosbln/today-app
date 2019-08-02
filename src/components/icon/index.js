import React from 'react';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const myIcon = props => {

    return(
        <Icon name={props.name} style={[styles.base, props.active ? styles.active : null, props.customStyle]}/>
    )
}

export default myIcon