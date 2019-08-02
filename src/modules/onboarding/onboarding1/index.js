import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import Heading from '../../../components/text/Heading'
import Paragraph from '../../../components/text/Paragraph'
import styles from './styles'
import { telescope } from '../../../assets/images'
import Button from '../../../components/buttons/baseButton'
import ButtonPrimary from '../../../components/buttons/primaryButton'
import Dots from '../../../components/dotsNavigator'

export default class Screen extends React.Component {
    nextScreen(){
        this.props.navigation.navigate('Onboarding2')
    }


    render() {

        return(
            <SafeAreaView style={styles.base}>  
                <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={telescope}/>
                    </View>
                    <View style={styles.headingContainer}>
                        <Heading>New ways to explore</Heading>
                    </View>
                    <View style={styles.paragraphsContainer}>
                        <View style={styles.paragrahContainer}>
                            <Paragraph customStyle={styles.paragraphHeader}>Explore feed</Paragraph>
                            <Paragraph>Recommended reading and daily articles from our community</Paragraph>
                        </View>
                        <View style={styles.paragrahContainer}>
                            <Paragraph customStyle={styles.paragraphHeader}>Places tab</Paragraph>
                            <Paragraph>Discover landmarks near you or search for places across the world</Paragraph>
                        </View>
                        <View style={styles.paragrahContainer}>
                            <Paragraph customStyle={styles.paragraphHeader}>On this day</Paragraph>
                            <Paragraph>Travel back in time and learn what happened today in history</Paragraph>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonSkip}>
                            <Button label='Skip'/>
                        </View>
                        <View style={styles.dotsContainer}>
                            <Dots activeIndex={1} />
                        </View>
                        <View style={styles.buttonNext}>
                            <ButtonPrimary label='Next' onPress={() => this.nextScreen()}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
