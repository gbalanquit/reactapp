import React, { Component } from 'react';
import Dialog from './components/Dialog';

class App extends Component {
	state = {
		isOpen: false,
	};
	render() {
		return (
			<div className="App">
				<button onClick={e => this.setState({ isOpen: true })}>Open Dialog</button>
				<Dialog isOpen={this.state.isOpen} onClose={e => this.setState({ isOpen: false })}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare nunc diam, quis eleifend
					orci pharetra eget. Nunc neque elit, pellentesque a orci non, semper venenatis mi. Nullam sed quam
					nec neque efficitur semper. Vestibulum nec quam eleifend, efficitur ante et, viverra mauris.
				</Dialog>
			</div>
		);
	}
}

export default App;
