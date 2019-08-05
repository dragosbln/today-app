import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import Paragraph from '../../../../../components/text/Paragraph'
import {logo} from '../../../../../assets/images'


const elem = props => {
        const image = props.thumbnailUrl ? {uri: props.thumbnailUrl} : logo
        const description = props.description ? props.description : 'Find more on Wikipedia!'
        return(
            <TouchableOpacity onPress={props.onRefClicked} style={styles.base}>
                <View style={styles.textContainer}>
                    <View style={styles.headingView}>
                        <Paragraph customStyle={styles.headingText}>{props.title}</Paragraph>
                    </View>
                    <View style={styles.descriptionView}>
                        <Paragraph customStyle={styles.descriptionText}>{description}</Paragraph>
                    </View>
                </View>
                <View style={styles.imageView}>
                        <Image source={image} style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
}

export default elem