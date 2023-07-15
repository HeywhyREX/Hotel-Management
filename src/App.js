import React from 'react'
import "./App.css";
import Stitch from './switch';
import Seem from './pages/aboutPage/seem';
import  {BrowserRouter as Router,Route, Switch} from 'react-router-dom'//Means all factor in this component has access to this router//
import SectionFive from './pages/SectionFive/SectionFive';
import ContactMain from './pages/Contact/ContactMain';


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/Home'>
          <Stitch/>
        </Route>
        <Route path='/Seem'>
               <Seem/>
        </Route>
        <Route path='/Contact'>
          <ContactMain />
        </Route>
     
      </Switch>
    <SectionFive />
    </Router>
      
    
  )
}

export default App
