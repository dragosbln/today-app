import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles'
import DotButton from '../../../../components/buttons/dotButton'
import Paragraph from '../../../../components/text/Paragraph'
import PreviewCard from './previewCard'


const elem = props => {
        return(
            <View style={styles.container}>
                <View style={styles.lineView}>
                    <View style={props.active ? styles.dotViewActive : styles.dotView}>
                        {props.active ? <DotButton active radius={7}/> : null}
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.yearView}>
                        <Paragraph customStyle={styles.yearText}>2014</Paragraph>
                    </View>
                    <View style={styles.yearsPassedView}>
                        <Paragraph customStyle={styles.yearsPassedText}>4 years ago</Paragraph>
                    </View>
                    <View style={styles.descriptionView}>
                        <Paragraph customStyle={styles.descriptionText}>nd color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using in our running example, and you'll notice that when you navigate to the</Paragraph>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
                        <PreviewCard />
                        <PreviewCard />
                        <PreviewCard />
                    </ScrollView>
                </View>
            </View>
        )
}

export default elem