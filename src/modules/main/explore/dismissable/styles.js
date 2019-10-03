import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    
    dismissable: {
        height: screenWidth/1.1,
        alignItems: 'center',
        marginBottom: '5%',
        backgroundColor: '#fff'
    },
    imageContainer: {
        width: '100%',
        height: screenWidth/2,
    },
    image: {
        flex: 1,
        width: screenWidth,
        resizeMode: 'contain'
    },
    paragrahContainer: {
        height: '15%',
        marginTop: '3%',
        width: '90%'
    },
    text:{
        textAlign: 'center'
    },
    buttonContainer: {
        height: '12%',
        marginVertical: '1%',
        width: '80%',
    },
    button: {
        flex: 1,
        borderColor: colors.primary,
        borderWidth: 1,
        height: 20,
        borderRadius: 10
    },
    buttonText: {
        color: colors.primary
    }
})