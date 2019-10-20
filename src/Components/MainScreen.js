import React, {Component} from 'react';

import { Icon } from 'native-base';

import BottomTabNavigation from '../Navigation/BottomTabNavigation';

class MainScreen extends Component{

    static navigationOptions = {
        headerLeft: <Icon name="md-menu" style={{paddingLeft: 10}}/>,
        title: "Sales Mktg",
        headerRight: <Icon name="md-send" style={{paddingRight: 10}}/>

    }

    render(){
        return(
            <BottomTabNavigation />
        )
    }
}

export default MainScreen;
