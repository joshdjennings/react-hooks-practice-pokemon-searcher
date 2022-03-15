import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

function PokemonCard({
	pokemon: {
		id,
		name,
		hp,
		sprites: { back, front },
	},
}) {
	// Above is nested destructuring

	const [showFront, setShowFront] = useState(true);

	function handleCardClick(event) {
		return setShowFront((mUV) => !mUV);
	}
	// left of arrow is the Most Updated Value and the right side is what the new state is going to be (the opposite)
	// if you use the variable inside the function you're trying to set, its better to use it as a callback to ensure you're using the most updated version

	return (
		<Card onClick={handleCardClick}>
			<div>
				<div className="image">
					<img alt="oh no!" src={showFront ? front : back} />
				</div>
				<div className="content">
					<div className="header">{name}</div>
				</div>
				<div className="extra content">
					<span>
						<i className="icon heartbeat red" />
						{hp} hp
					</span>
				</div>
			</div>
		</Card>
	);
}

export default PokemonCard;
