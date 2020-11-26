import React from "react"

import SignInSide from './components/login/SignInSide'
import SignUpSide from './components/login/SignUpSide'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// layouts
import HomepageLayout from './layouts/HomepageLayout'

class App extends React.Component {
	render() {
	   return (
			<Router>
				<Route exact path = "/" component = {SignInSide} />
				<Route path = "/login" component = {SignInSide} />
				<Route path = "/register" component = {SignUpSide} />
				<Route path = "/home" render={() => (
					<HomepageLayout>
						<Home />
					</HomepageLayout>
				)} />
			</Router>
	   )
	}
}

export default App;
