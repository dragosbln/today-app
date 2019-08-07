import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'
import Dismissable from './dismissable'
import Heading from '../../../../components/text/Heading'
import Paragraph from '../../../../components/text/Paragraph'
import {calendar} from '../../../../assets/images'
import moment from 'moment'

export default header = props => {

    return(
        <View style={styles.base}>
            {props.showDismissable ? <Dismissable onClose={props.onDismissableClose}/> : null}
            <View style={styles.listHeader}>
                <View style={styles.imageView}>
                    <Image source={calendar} style={styles.image}/>
                </View>
                <View style={styles.textView}>
                    <View style={styles.headingView}>
                        <Paragraph customStyle={styles.headingText}>On this day</Paragraph>
                    </View>
                    <View style={styles.paragraphView}>
                        <Paragraph customStyle={styles.paragraphText}>{moment().format('dddd, MMMM Do')}</Paragraph>
                    </View>
                </View>
            </View>
        </View>
    )
}
