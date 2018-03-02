import React from 'react';
import MobileNavBar from './MobileNavBar'


const MobileApp = (props) =>  {

    document.title = 'stephanie diaz'
    const { children } =  props
    return (
    <div id="app" >
    <MobileNavBar />
    { children }
    </div>
	);

}

export default MobileApp;
