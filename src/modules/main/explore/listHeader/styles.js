import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../../assets/theme'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
    base:{
        backgroundColor: colors.grayLight,
    },
    listHeader:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingBottom: 5,
        height: screenHeight/12
    },
    imageView: {
        width: screenWidth/6,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 5
    },
    image: {
        width: screenWidth/12,
        height: screenWidth/12,
        resizeMode: 'contain'
    },
    textView: {
        padding: 5
    },
    headingView: {
        paddingVertical: 2
    },
    headingText: {
        fontSize: 14,
        color: colors.gray
    },
    paragraphView: {
        paddingBottom: 5,
    },
    paragraphText: {
        fontSize: 16

    }
})