import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../../../assets/theme'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default StyleSheet.create({
    
    container: {
        width: '100%',
        maxHeight: screenHeight/2,
        flexDirection: 'row'
    },
    lineView: {
        width:screenWidth/6,
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: colors.primary,
        marginTop: '3%'
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
        borderWidth: 2,
        borderRadius: 13,
        backgroundColor: '#fff',
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: -13,
        top: -13
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
        width: '77%',
        marginBottom: '7%'
    },
    cardsContainer: {
        flexDirection: 'row',
        padding: 5
    }
})