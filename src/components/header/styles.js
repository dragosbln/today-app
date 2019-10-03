import { StyleSheet, Dimensions, Platform } from 'react-native';
import {colors} from '../../assets/theme'

const OS =Platform.OS;
const ios = () => OS ==='ios'

export default StyleSheet.create({
    base:{
        height: ios() ? 70 : 80,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: ios() ? 50 : 10,
    },
    title: {
        height: 40
    },
    input: {
        height: ios() ? 30 : 40,
        width: Dimensions.get('window').width-10,
        backgroundColor: colors.grayLight,
        borderRadius: 5,
        paddingLeft: 30
    },
    searchContainer: {
        position: 'relative',
    },
    searchIcon: {
        position: 'absolute',
        top: ios() ? '15%' : '25%',
        left: '2%'
    },
    icon: {
        fontSize: 18,
        color: colors.gray
    },
    optionsContainer: {
        position: 'absolute',
        top: 5,
        left: 10
    }
})