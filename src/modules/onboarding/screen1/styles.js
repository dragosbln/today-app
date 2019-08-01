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
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headingContainer: {
        flex: 2,
        width:'75%',
        justifyContent: 'center'
    },
    paragraphsContainer: {
        flex: 5,
    },
    paragrahContainer: {
        height: '25%'
    },
    paragraphHeader: {
        fontWeight: '500'
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
    }
})