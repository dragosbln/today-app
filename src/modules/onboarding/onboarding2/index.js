import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import Heading from '../../../components/text/Heading'
import Paragraph from '../../../components/text/Paragraph'
import styles from './styles'
import { translation } from '../../../assets/images'
import Button from '../../../components/buttons/baseButton'
import ButtonPrimary from '../../../components/buttons/primaryButton'
import Dots from '../../../components/dotsNavigator'

export default class Screen extends React.Component {
    nextScreen(){
        this.props.navigation.navigate('Onboarding3')
    }

    render() {

        return(
            <SafeAreaView style={styles.base}>  
                <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={translation}/>
                    </View>
                    <View style={styles.headingContainer}>
                        <Heading>Search in nearly 300 languages</Heading>
                    </View>
                    <View style={styles.paragrahContainer}>
                        <Paragraph>We've found the following kanguages on your device:</Paragraph>
                    </View>
                    <View style={styles.languagesContainer}>
                        <View style={styles.primaryLanguage}>
                            <Paragraph>English</Paragraph>
                            <View style={styles.primaryTag}>
                                <Paragraph customStyle={styles.primaryTagText}>PRIMARY</Paragraph>
                            </View>
                        </View>
                        <View style={styles.language}>
                            <Paragraph>中文</Paragraph>
                        </View>

                    </View>
                    <View style={styles.linkContainer}>
                        <Paragraph customStyle={styles.linkText}>Learn more about wikipedia</Paragraph>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonSkip}>
                            <Button label='Skip'/>
                        </View>
                        <View style={styles.dotsContainer}>
                            <Dots activeIndex={2} />
                        </View>
                        <View style={styles.buttonNext}>
                            <ButtonPrimary label='Next' onPress={() => this.nextScreen()} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
