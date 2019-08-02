import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    base: {
        marginRight: 10,
        width: screenWidth/1.5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowOffset:{  width: 0,  height: 1,  },
        shadowRadius: 2,
        shadowColor: colors.gray,
        shadowOpacity: 0.3,
        padding: 15,
        borderRadius: 5
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
    }
})