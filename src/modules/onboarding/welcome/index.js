import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import Heading from '../../../components/text/Heading'
import Paragraph from '../../../components/text/Paragraph'
import styles from './styles'
import { logo } from '../../../assets/images'
import Button from '../../../components/buttons/baseButton'
import ButtonPrimary from '../../../components/buttons/primaryButton'
import Dots from '../../../components/dotsNavigator'

export default class Screen extends React.Component {

    nextScreen(){
        this.props.navigation.navigate('Onboarding1')
    }

    render() {

        return(
            <SafeAreaView style={styles.base}>  
                <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={logo}/>
                    </View>
                    <View style={styles.headingContainer}>
                        <Heading>The free encyclopedia</Heading>
                    </View>
                    <View style={styles.paragrahContainer}>
                        <Paragraph>Wikipedia is written collaboratively by volunteers and consists of more than 40 million articles in almost 300 languages</Paragraph>
                    </View>
                    <View style={styles.linkContainer}>
                        <Paragraph customStyle={styles.linkText}>Learn more about wikipedia</Paragraph>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonSkip}>
                            <Button label='Skip'/>
                        </View>
                        <View style={styles.dotsContainer}>
                            <Dots activeIndex={0}/>
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
