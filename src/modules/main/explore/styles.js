import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    base:{
        flex: 1,
    },
    dismissable: {
        height: screenWidth/1.1,
        alignItems: 'center',
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
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },



    container: {
        width: '100%',
        height: '50%',
        flexDirection: 'row'
    },
    lineView: {
        width:screenWidth/6,
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: colors.primary
    }
})