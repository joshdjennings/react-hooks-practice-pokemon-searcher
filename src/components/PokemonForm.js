import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

function PokemonForm({ addNewPokemon }) {
	const defaultState = {
		name: '',
		hp: '',
		frontURL: '',
		backURL: '',
	};

	const [formData, setFormData] = useState(defaultState);

	const handleChange = (e) => {
		const thingWeChange = e.target.name;
		setFormData(() => ({ ...formData, [thingWeChange]: e.target.value }));
	};

	return (
		<div>
			<h3>Add a Pokemon!</h3>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					console.log('submitting form...');

					// reset the form
					setFormData(defaultState);
					addNewPokemon(formData);
				}}
			>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Name"
						name="name"
					/>
					<Form.Input
						fluid
						label="hp"
						value={formData.hp}
						onChange={handleChange}
						placeholder="hp"
						name="hp"
					/>
					<Form.Input
						fluid
						label="Front Image URL"
						value={formData.frontURL}
						onChange={handleChange}
						placeholder="url"
						name="frontUrl"
					/>
					<Form.Input
						fluid
						label="Back Image URL"
						value={formData.backURL}
						onChange={handleChange}
						placeholder="url"
						name="backUrl"
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form>
		</div>
	);
}

export default PokemonForm;
