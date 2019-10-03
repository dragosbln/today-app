import React from 'react';
import { KeyboardAvoidingView, View, Text, FlatList, Dimensions, Linking } from 'react-native';
import styles from './styles'
import ListHeader from './listHeader'
import Header from '../../../components/header'
import ListElem from './listElem'
import AppService from '../../../services'
import ManageOptionsService from '../../../services/manageOptionsService'
// import {events} from '../../../utils/seed'

export default class Explore extends React.Component{

    constructor(props) {
        super(props)
        this.screenHeight = Dimensions.get('window').height
        this.state = {
            // loadingData: true,
            // error: false,
            // events: [],
            currentListOffset: -this.screenHeight/3,
            focusedElementIndex: 0,
            showDismissable: true,
            // finnishedLoading: false
        }
        this.scrollRef = React.createRef()
    }

    getEvents = async () => {

        if(this.props.finnishedLoading) return
        // this.setState(state => ({
        //     ...state,
        //     loadingData: true
        // }))
        // const eventsResponse = await AppService.getEvents();
        // if(!eventsResponse) {
        //     this.setState(state => ({
        //         ...state,
        //         loadingData: false
        //     }))
        //     return
        // }
        
        // this.setState(state => ({
        //     ...state,
        //     loadingData: false,
        //     events: [
        //         ...state.events,
        //         ...eventsResponse.data
        //     ],
        //     finnishedLoading: eventsResponse.done
        // }))
        this.props.getEvents()
    }

    // checkManageOption = async () => {
    //     const shouldDisplay = await ManageOptionsService.shouldDisplay()
    //     this.setState(state => ({
    //         ...state,
    //         showDismissable: shouldDisplay
    //     }))
    // }

    setInitialScrollConfig = () => {
        if(this.props.shouldDisplayManageOptions) {
            this.setState(state => ({
                ...state,
                currentListOffset: -this.screenHeight/3 + this.screenHeight/2,
            }))
        }
    }

    componentDidMount = () => {
        // this.checkManageOption()
        this.setInitialScrollConfig()
        this.getEvents()
    }

    _isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
       
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 100;
     }

    checkOffset = (event) => {
        const offset = event.contentOffset.y;


        if(offset < this.state.currentListOffset + this.screenHeight/6 && offset > this.state.currentListOffset) {
            if(this._isCloseToBottom(event)) this.getEvents()
        }
        
        if(offset < this.state.currentListOffset + this.screenHeight/3 && offset > this.state.currentListOffset) return

        if(offset > this.state.currentListOffset + this.screenHeight/3){
            
            return this.setState(state => ({
                ...state,
                currentListOffset: state.currentListOffset + this.screenHeight/3,
                focusedElementIndex: state.focusedElementIndex + 1
            }))
        }
        this.setState(state => ({
            ...state,
            currentListOffset: state.currentListOffset - this.screenHeight/3,
            focusedElementIndex: state.focusedElementIndex - 1
        }))
    }

    onDismissableClose = () => {
        this.setState(state => ({
            ...state,
            currentListOffset: -this.screenHeight/3,
            focusedElementIndex: 0
        }))
        this.scrollRef.current.scrollToOffset({ y: 0, animated: false})
        this.props.closeDismissable()

    }

    onRefClicked = (url) => {
        Linking.openURL(url).catch((err) => console.log(err))
    }

    render() {

        return(
            <KeyboardAvoidingView style={styles.base}> 
                <Header />
                <FlatList
                    ref={this.scrollRef}
                    style={styles.main}
                    refreshing={this.props.loadingData && this.props.events.length === 0}
                    onRefresh={this.getEvents}
                    data={this.props.events}
                    ListHeaderComponent={<ListHeader onDismissableClose={this.onDismissableClose} showDismissable={this.props.shouldDisplayManageOptions} />}
                    ListFooterComponent={this.props.finnishedLoading ? null : <View style={styles.listFooter}><Text>Loading...</Text></View>}
                    onScroll={(event) => {this.checkOffset(event.nativeEvent)}}
                    
                    onEndReachedThreshold={1}
                    renderItem={({index, item}) => {
                        return (
                            <ListElem id={index}
                                    first={index === 0}
                                    year={item.year}
                                    description={item.description}
                                    refs={item.refs}
                                    onRefClicked={this.onRefClicked}
                                    focused={index === this.state.focusedElementIndex}
                                    done={index < this.state.focusedElementIndex}
                                    key={index} />
                        )
                    }} />
            </KeyboardAvoidingView>
        )
    }
}