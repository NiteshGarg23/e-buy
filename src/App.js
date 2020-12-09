import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { auth, handleUserProfile } from './firebase/utils'
import { setCurrentUser } from './redux/User/user.actions'

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
	const { setCurrentUser, currentUser } = props;

	useEffect(() => {
		const authListener = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				const userRef = await handleUserProfile(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					})
				})
			};

			setCurrentUser(userAuth);
		})

		return () => {
			authListener();
		};

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

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
