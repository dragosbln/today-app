import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'
import Paragraph from '../../../../components/text/Paragraph'
import Button from '../../../../components/buttons/baseButton'
import {explore} from '../../../../assets/images'


const dismissable = props => {
        return(
            <View style={styles.dismissable}>
                <View style={styles.imageContainer}>
                        <Image style={styles.image} source={explore}/>
                </View>
                <View style={styles.paragrahContainer}>
                        <Paragraph customStyle={styles.text}>Adjust your Reading preferences including text size and theme from the article toolbar or in your user settings for a more confortable reading experience.</Paragraph>
                </View>
                <View style={styles.buttonContainer}>
                        <Button label='Manage preferences' textStyle={styles.buttonText} customStyle={styles.button} onPress={() => null}/>
                </View>

                <View style={styles.buttonContainer}>
                        <Button label='Dismiss' onPress={() => null}/>
                </View>
            </View>
        )
}

export default dismissable