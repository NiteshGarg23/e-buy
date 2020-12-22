import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

// hoc
import WithAuth from './hoc/withAuth'

// layouts
import HomepageLayout from './layouts/HomepageLayout'

// pages
import Login from './pages/Login/Login'
import Register from './pages/Registration/Register'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'


const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession())
	}, [])

	return (
		<Router>
			<Route exact path = "/" render={() => (
				<Register />
			)} />
			<Route path = "/login" render={() => (
				<Login />
			)} />
			<Route path = "/register" render={() => (
				<Register />
			)} />
			<Route path = "/forgot-password" 
				render={() => (
				<ForgotPassword />
			)} />
			<Route path = "/home" render={() => (
				<WithAuth>
					<HomepageLayout>
						<Home />
					</HomepageLayout>
				</WithAuth>
			)} />
		</Router>
	)
}

export default App;
