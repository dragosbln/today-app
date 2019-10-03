import React from 'react';
import { View } from 'react-native';
import DotButton from '../buttons/dotButton'

import styles from './styles'

const dots = (props) => {
    return(
        <View style={styles.dots}>
            {[0,1,2,3].map((el, i) => (
                <View style={styles.button}>
                    <DotButton active={i === props.activeIndex} />
                </View>
            ))}
        </View>
    )
}

export default dots;