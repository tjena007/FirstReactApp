//Import React and ReactDOM Library
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
	const btnText = 'Click me'
	return (
	 <div>
		<label className='label' htmlFor="name">Enter name:</label>
		<input id="name" type="text" />
		<button style={{backgroundColor: 'black', color : 'white'}}>{btnText}</button>
	</div>
	);
};

//Take a react component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));
