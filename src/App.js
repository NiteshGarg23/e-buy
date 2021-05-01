import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

// components
import AdminToolBar from './components/adminToolBar/AdminToolBar'

// hoc
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

// layouts
import HomepageLayout from './layouts/HomepageLayout'
import AdminpageLayout from './layouts/AdminpageLayout'

// pages
import Login from './pages/Login/Login'
import Register from './pages/Registration/Register'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Search from './pages/Search/Search'

const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession())
	}, [])

	return (
		<Router>
		<AdminToolBar />
		<Switch>
			<Route exact path = "/" render={() => (
				<Register />
			)} />
			<Route exact path = "/search" render={() => (
				<HomepageLayout>
					<Search />
				</HomepageLayout>
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
			<Route path = "/admin" render={() => (
				<WithAdminAuth>
					<AdminpageLayout>
						<Admin />
					</AdminpageLayout>
				</WithAdminAuth>
			)} />
		</Switch>
		</Router>
	)
}

export default App;
