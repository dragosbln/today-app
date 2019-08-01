import { StyleSheet } from 'react-native';
import {colors} from '../../../assets/theme'

export default StyleSheet.create({
    button: {
        width: 10,
        height: 10,
        backgroundColor: colors.primaryLight,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        backgroundColor: colors.primary
    }
})