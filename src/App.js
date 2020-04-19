import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Result from './result';

function App() {
	return (
		<Container>
			<Jumbotron className="mt-2">
				<h1>Super Secret Password Generator</h1>
				<p>Fill out the simple form below to generate something a little better than password123</p>
			</Jumbotron>
			<Result />
		</Container>
	);
}

export default App;
