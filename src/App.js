import React from "react"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { auth } from './firebase/utils'

// layouts
import HomepageLayout from './layouts/HomepageLayout'

// pages
import Login from './pages/Login/Login'
import Register from './pages/Registration/Register'
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
		this.authListener = auth.onAuthStateChanged(userAuth => {
			if(!userAuth){
				this.setState({
					...initialState
				});
			};

			this.setState({
				currentUser: userAuth
			});
		});
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
				<Route path = "/register" render={() => (
					<Register />
				)} />
				<Route path = "/home" 
					render={() => (
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
