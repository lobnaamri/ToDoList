
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Edit from './Edit';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import Home from './Home';



function App(){ 

   
    return ( 

<Router>

<Switch>
<Route path="/home" exact component={Home}/>
<Route path="/:id/Edit" exact component={Edit}/>



</Switch>

</Router>
    );


}

export default App; 