import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						key={robots[i].id}
						id={robots[i].id}
						title={robots[i].title}
						url={robots[i].thumbnailUrl}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
