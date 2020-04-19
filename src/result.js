import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Spinner } from 'react-bootstrap';
import { generatePassword } from './passwordGenerator';

const defaultForm = {
	lowercase: true,
	uppercase: false,
	numbers: false,
	symbols: false,
	length: 6,
	replacement: true,
};

const Result = () => {
	const [password, setPassword] = useState('Choose options below...');
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState(defaultForm);
	const [formValid, setFormValid] = useState(true);

	useEffect(() => {
		if (form.lowercase || form.uppercase || form.numbers || form.symbols) {
			setFormValid(true);
		} else {
			setFormValid(false);
		}
	}, [form.lowercase, form.uppercase, form.numbers, form.symbols]);

	const generate = async () => {
		setIsLoading(true);
		let generatedPassword = await generatePassword(form);
		setPassword(generatedPassword.data.result.random.data[0]);
		setIsLoading(false);
	};

	const handleCheckChange = (e, stateProp) => {
		setForm({
			...form,
			[stateProp]: e.target.checked,
		});
	};

	const handleRangeChange = e => {
		setForm({
			...form,
			length: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (formValid) {
			generate();
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Row>
				<Form.Group as={Col} md="12" controlId="formPassword" className="font-weight-bold">
					<Form.Label>Your password is:</Form.Label>
					<Form.Control type="text" value={password} readOnly focus />
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col} controlId="formCharacters">
					<Form.Label>
						What kind of characters would you like?
					</Form.Label>
					<Form.Check
						custom
						type="switch"
						label="Lowercase letters"
						name="lowercase"
						id="lowercase"
						checked={form.lowercase}
						onChange={e => handleCheckChange(e, 'lowercase')}
					/>
					<Form.Check
						custom
						type="switch"
						label="Uppercase letters"
						name="uppercase"
						id="uppercase"
						checked={form.uppercase}
						onChange={e => handleCheckChange(e, 'uppercase')}
					/>
					<Form.Check
						custom
						type="switch"
						label="Numbers"
						name="numbers"
						id="numbers"
						checked={form.numbers}
						onChange={e => handleCheckChange(e, 'numbers')}
					/>
					<Form.Check
						custom
						type="switch"
						label="Symbols"
						name="symbols"
						id="symbols"
						checked={form.symbols}
						onChange={e => handleCheckChange(e, 'symbols')}
					/>
					{formValid ? (
						''
					) : (
						<Form.Text className="text-danger">
							Please choose at least one character type
						</Form.Text>
					)}
					<Form.Check
						custom
						type="switch"
						label="Repeating characters allowed"
						name="replacement"
						id="replacement"
						checked={form.replacement}
						onChange={e => handleCheckChange(e, 'replacement')}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formLength">
					<Form.Label>
						How long would you like the password to be?
					</Form.Label>
					<Form.Control
						custom
						type="range"
						min="5"
						max="20"
						value={form.length}
						onChange={handleRangeChange}
					/>
					<Form.Text className="text-muted">
						{form.length} characters long
					</Form.Text>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Button type="submit" variant="success" disabled={isLoading} className="mx-auto">
					Generate{' '}
					{isLoading ? (
						<Spinner
							as="span"
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
						/>
					) : (
						''
					)}
				</Button>
			</Form.Row>
		</Form>
	);
};

export default Result;
