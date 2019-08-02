import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'
import Paragraph from '../../../../../components/text/Paragraph'
import {dummy} from '../../../../../assets/images'


const elem = props => {
        return(
            <View style={styles.base}>
                <View style={styles.textContainer}>
                    <View style={styles.headingView}>
                        <Paragraph customStyle={styles.headingText}>NASA</Paragraph>
                    </View>
                    <View style={styles.descriptionView}>
                        <Paragraph customStyle={styles.descriptionText}>Space-related agency of the...</Paragraph>
                    </View>
                </View>
                <View style={styles.imageView}>
                        <Image source={dummy} style={styles.image}/>
                </View>
            </View>
        )
}

export default elem