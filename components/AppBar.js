// Made by Taha Bisgin.
// ©TahaBisginSoftware, all rights reserved.

//import the needed packages
import * as React from  'react';
import { Appbar } from 'react-native-paper';

//The Header component
const Header = () => {
    return(
        <Appbar.Header style = {{marginTop:25, backgroundColor:'#364156'}}>
            <Appbar.Content title="News"/>
        </Appbar.Header>
    )
}

export default Header;