import React from "react"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { auth, handleUserProfile } from './firebase/utils'

// layouts
import HomepageLayout from './layouts/HomepageLayout'

// pages
import Login from './pages/Login/Login'
import Register from './pages/Registration/Register'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'

const initialState = {
	currentUser: null
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			...initialState
		};
	}

	authListener = null;

	componentDidMount(){
		this.authListener = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				const userRef = await handleUserProfile(userAuth);
				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					})
				})
			};

			this.setState({
				...initialState
			});
		})
	}

	componentWillUnmount(){
		this.authListener()
	}

	render() {
		const { currentUser } = this.state;

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
						<HomepageLayout currentUser={currentUser}>
							<Home />
						</HomepageLayout>
					)} 
				/>
			</Router>
	   )
	}
}

export default App;
