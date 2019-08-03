import React from 'react';
import { KeyboardAvoidingView, View, FlatList, Dimensions } from 'react-native';
import styles from './styles'
import Dismissable from './dismissable'
import Header from '../../../components/header'
import ListElem from './listElem'
import AppService from '../../../services'
// import {events} from '../../../utils/seed'

export default class Explore extends React.Component{

    constructor(props) {
        super(props)
        this.screenHeight = Dimensions.get('window').height
        this.state = {
            loadingData: true,
            error: false,
            events: null,
            currentListOffset: -this.screenHeight/3,
            focusedElementIndex: 0,
            showDismissable: true
        }
    }

    getEvents = async () => {
        this.setState(state => ({
            ...state,
            loadingData: true
        }))
        const events = await AppService.getEvents();
       

        // console.log(events);
        
        this.setState(state => ({
            ...state,
            loadingData: false,
            events: events
        }))
    }

    componentDidMount = () => {
        this.getEvents()
    }

    checkOffset = (offset) => {
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
            showDismissable: false
        }))
    }

    render() {

        return(
            <KeyboardAvoidingView style={styles.base}> 
                <Header />
                <FlatList
                    style={styles.main}
                    refreshing={this.state.loadingData}
                    onRefresh={this.getEvents}
                    data={this.state.events}
                    ListHeaderComponent={this.state.showDismissable ? <Dismissable onClose={this.onDismissableClose} /> : null}
                    onScrollEndDrag={(event) => console.log(event.nativeEvent)}
                    onScroll={(event) => this.checkOffset(event.nativeEvent.contentOffset.y)}
                    renderItem={({index, item}) => {
                        return (
                            <ListElem first={index === 0}
                                    year={item.year}
                                    description={item.description}
                                    refs={item.refs}
                                    focused={index === this.state.focusedElementIndex}
                                    done={index < this.state.focusedElementIndex}
                                    key={index} />
                        )
                    }} />
            </KeyboardAvoidingView>
        )
    }
}