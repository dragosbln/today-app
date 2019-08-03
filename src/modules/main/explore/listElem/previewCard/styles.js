import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    base: {
        marginRight: 10,
        width: screenWidth/1.6,
        height: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        shadowOffset:{  width: 0,  height: 1,  },
        shadowRadius: 2,
        shadowColor: colors.gray,
        shadowOpacity: 0.3,
        elevation: 1,
        padding: 15,
        borderRadius: 5
    },
    imageView: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 1,
        resizeMode: 'contain'
    },
    textContainer: {
        width: '85%',
        height: '100%'
    },
    headingView: {
        justifyContent: 'center',
        marginBottom: 5,
        flex: 1
    },
    headingText: {
        fontWeight: 'bold'
    },
    descriptionView: {
        flex: -1
    }
})