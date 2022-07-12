import { HashRouter as Router, Switch, Route, Link ,Redirect} from "react-router-dom";
import Login from "../login";
import Home from "../home"
// import CouponManagement from "../campPromotionCenter/CouponManagement"
const Main:React.FC = ()=> {
  return (
    <div>
        <Router>
            <Switch>
                <Redirect from='/' exact to='/home' />
                <Route path='/login'  component={Login}></Route>
                <Route path='/home' component={Home}></Route>
            </Switch>
        </Router>
    </div>
  )
}
export default Main