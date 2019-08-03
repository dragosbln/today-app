import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles'
import DotButton from '../../../../components/buttons/dotButton'
import Paragraph from '../../../../components/text/Paragraph'
import PreviewCard from './previewCard'


const elem = props => {
        let yearStr = props.year;
        if(yearStr.includes('BC')) yearStr = '-' + yearStr.split(' ')[0]
        if(yearStr.includes('AD')) yearStr = yearStr.split(' ')[1]
        let year = +yearStr;
        return(
            <View style={[styles.container, props.first ? styles.paddingTop : null]}>
                <View style={styles.lineView}>
                    <View style={[styles.line, props.first ? styles.lineFirst : null]}></View>
                    <View style={[
                            styles.dotView, 
                            props.focused ? styles.dotViewActive : null, 
                            props.done ? styles.dotViewDone : null
                        ]}>
                        {props.focused ? <DotButton active radius={7}/> : null}
                        {props.done ? <DotButton active radius={3}/> : null}
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.yearView}>
                        <Paragraph customStyle={styles.yearText}>{props.year}</Paragraph>
                    </View>
                    <View style={styles.yearsPassedView}>
                        <Paragraph customStyle={styles.yearsPassedText}>{new Date().getFullYear() - year} years ago</Paragraph>
                    </View>
                    <View style={styles.descriptionView}>
                        <Paragraph customStyle={styles.descriptionText}>{props.description}</Paragraph>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
                        {props.refs.map((el, i) => (
                            <PreviewCard title={el.title}
                                description={el.description}
                                thumbnailUrl={el.thumbnail}
                                key={i} />
                        ))}
                        {/* it won't scroll till the end, withou this */}
                        <View style={styles.scrollHack}></View>
                    </ScrollView>
                </View>
            </View>
        )
}

export default elem