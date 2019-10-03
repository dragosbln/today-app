import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {colors} from '../../../assets/theme'

export default StyleSheet.create({
    base: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    contentContainer:{
        flex: 1,
        width: '75%',
    },
    image: {
        width: screenWidth/2.5,
        height: screenWidth/2.5,
        resizeMode: 'contain',
        marginBottom: '7%'
    },
    imageContainer: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headingContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    paragrahContainer: {
        flex: 1,
    },
    linkContainer: {
        flex:3
    },
    linkText: {
        color: colors.primary
    },
    buttonsContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 2
    },  
    buttonNext: {
        flex:3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }, buttonSkip: {
        flex:3,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    dotsContainer: {
        flex: 2
    }
})