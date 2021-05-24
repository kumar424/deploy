import React,{ Component } from 'react'
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch, Link , Redirect } from 'react-router-dom'
import One from './homepage'
import Joinbook from './joinbook'
import Createbook from './createbook'
export default class App extends Component{
   constructor(props){
       super(props);
       this.state = {
           "name" : props.name
       }
   }
   render(){
       return(
           <div>
               <Router>
                   <Switch>
                       <Route path='/' exact component={One}/>
                       <Route path='/create' component={Createbook}/>
                       <Route path='/join' component={Joinbook} />
                   </Switch>
               </Router>
               
            </div>
       )
   }

}

const appDiv = document.getElementById('app');
render(<App name="kumar" />, appDiv);