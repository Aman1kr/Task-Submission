import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.title.toLowerCase().includes(searchField.toLowerCase());
		});

		return !robots.length ?
			<h1>Loading...</h1> :
	 		(
				<div className="tc">
					<h1 className="f1">Peoples</h1>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default App;
