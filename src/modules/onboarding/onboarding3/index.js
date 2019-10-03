import React from 'react';
import { View, Image, SafeAreaView, Switch } from 'react-native';
import Heading from '../../../components/text/Heading'
import Paragraph from '../../../components/text/Paragraph'
import styles from './styles'
import { reports } from '../../../assets/images'
import Button from '../../../components/buttons/baseButton'

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            switchActive: false
        }
    }

    onSwitchChanged = () => {
        this.setState(state => ({
            ...state,
            switchActive: !state.switchActive
        }))
    }
    nextScreen(){
        this.props.navigation.navigate('Home')
    }
    render() {

        return(
            <SafeAreaView style={styles.base}>  
                <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={reports}/>
                    </View>
                    <View style={styles.headingContainer}>
                        <Heading>Help make the app better</Heading>
                    </View>
                    <View style={styles.paragrahContainer}>
                        <Paragraph>Help improve the app by letting the Wikipedia Foundation know how you use it. Data collected is anonymus</Paragraph>
                    </View>
                    <View style={styles.linkContainer}>
                        <Paragraph customStyle={styles.linkText}>Learn more about data collected</Paragraph>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch value={this.state.switchActive} onValueChange={this.onSwitchChanged}/>
                        <View style={styles.emojisContainer}>
                            {this.state.switchActive ? <Paragraph customStyle={styles.emojis}>😄🎉</Paragraph> : null}
                        </View>
                    </View>
                    <View style={styles.switchDetailsContainer}>
                        <Paragraph customStyle={styles.switchDetailsText}>Send usage reports</Paragraph>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button label='Get started' textStyle={styles.buttonText} customStyle={styles.button} onPress={() => this.nextScreen()}/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
