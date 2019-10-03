import { StyleSheet } from 'react-native';
import {colors} from '../../assets/theme'

export default StyleSheet.create({
    base:{
        flex: 1,
        color: colors.gray,
        fontSize: 24
    },
    active: {
        color: colors.primary
    }
})