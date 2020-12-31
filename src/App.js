//global imports
import Layout from 'antd/lib/layout/layout'
import {Route,Switch} from 'react-router-dom'



import Home from './pages/Home'




const  App = ()=> {
  return(
  
  <Switch>
    <Route exact path="/" component={Home}/>
  </Switch>
  )
}

export default App;
