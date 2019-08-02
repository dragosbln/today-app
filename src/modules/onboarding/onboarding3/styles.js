import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {colors} from '../../../assets/theme'

export default StyleSheet.create({
    base: {
        flex: 10,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    contentContainer:{
        flex: 10,
        width: '72%',
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
        flex: 30,
        width:'100%',
        justifyContent: 'center'
    },
    paragrahContainer: {
        flex: 15,
    },
    buttonContainer: {
        height: 130,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.primary,
        height: 50,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff'
    },
    linkContainer: {
        flex: 5,
        justifyContent: 'center'
    },
    linkText: {
        color: colors.primary
    },
    switchContainer: {
        flex: 10,
        marginBottom: 10,
        alignItems: 'flex-end',
        flexDirection:'row'

    },
    switchDetailsContainer: {
        flex: 20,
    },
    emojis: {
        fontSize: 16
    },
    emojisContainer: {
        height: '100%',
        justifyContent: 'center',
        paddingTop: 10,
        paddingStart: 10
    },
    switchDetailsText: {
        color: colors.gray
    }
})