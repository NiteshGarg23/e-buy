import React from "react"
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { auth, handleUserProfile } from './firebase/utils'
import { setCurrentUser } from './redux/User/user.actions'

// layouts
import HomepageLayout from './layouts/HomepageLayout'

// pages
import Login from './pages/Login/Login'
import Register from './pages/Registration/Register'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'


class App extends React.Component {
	authListener = null;

	componentDidMount(){
		const { setCurrentUser } = this.props;

		this.authListener = auth.onAuthStateChanged(async userAuth => {
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
	}

	componentWillUnmount(){
		this.authListener()
	}

	render() {
		const { currentUser } = this.props;

	    return (
			<Router>
				<Route exact path = "/" render={() => (
					<Register />
				)} />
				<Route path = "/login" 
					render={() => currentUser ? <Redirect to="/home" /> : (
					<Login />
				)} />
				<Route path = "/register" 
					render={() => currentUser ? <Redirect to="/home" /> : (
					<Register />
				)} />
				<Route path = "/forgot-password" 
					render={() => (
					<ForgotPassword />
				)} />
				<Route path = "/home" 
					render={() => !currentUser ? <Redirect to="/login" /> : (
						<HomepageLayout>
							<Home />
						</HomepageLayout>
					)} 
				/>
			</Router>
	    )
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
