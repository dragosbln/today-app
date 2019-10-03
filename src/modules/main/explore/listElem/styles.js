import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    
    container: {
        width: '100%',
        height: screenHeight/3,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    paddingTop: {
        paddingTop: '5%'
    },
    lineView: {
        width:screenWidth/6,
        height: '100%',
        marginTop: '3%'
    },
    line: {
        width: 1,
        height: '105%',
        backgroundColor: colors.primary,
        position: 'absolute',
        right: 0,
        top: '-5%'
    },
    lineFirst: {
        top: '-12.5%'
    },
    dotView:{
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: -7,
        top: -7
    },
    dotViewActive: {
        width: 26,
        height: 26,
        borderRadius: 13,
        right: -13,
        top: -13
    },
    dotViewDone: {
        width: 16,
        height: 16,
        borderRadius: 8,
        top: -8,
        right: -8
    },
    contentContainer: {
        marginLeft: '10%',
    },
    yearView: {
        paddingBottom: '1%'
    },
    yearText: {
        color: colors.primary,
        fontSize: 18
    },
    yearsPassedView: {
        paddingBottom: '5%'
    },
    yearsPassedText: {
        color: colors.gray
    },
    descriptionView: {
        height: '30%',
        width: '77%',
        paddingBottom: '7%'
    },
    cardsContainer: {
        height: '20%',
        padding: 5,
        marginBottom: 20
    },
    scrollHack: {
        width: 75
    }
})