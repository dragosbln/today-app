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
        width: '70%',
    },
    image: {
        width: screenWidth/1,
        height: screenWidth/2.5,
        resizeMode: 'contain',
        marginBottom: '7%'
    },
    imageContainer: {
        height: 280,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headingContainer: {
        flex: 2,
        width:'100%',
        justifyContent: 'center'
    },
    paragrahContainer: {
        flex: 1,
        width: '90%'
    },
    buttonsContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
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
    },
    languagesContainer: {
        flex: 1
    },
    primaryLanguage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    language: {
        flex: 1
    },
    primaryTag: {
        backgroundColor: colors.gray,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 3
    },
    primaryTagText:{
        color: '#fff',
        fontWeight: '500'
    },
    linkContainer: {
        flex: 3
    },
    linkText: {
        color: colors.primary
    }
})