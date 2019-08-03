import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    base:{
        flex: 1,
    },
    main: {
        marginTop: '3%',
        backgroundColor: colors.grayLight
    },
})