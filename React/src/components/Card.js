import React from 'react';

const Card = ({ title,url, id }) => {
	// const { name, email, id } = props;
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt="Robots" src={`${url}`} />
			<div>
				<p>{title}</p>
			</div>
		</div>
	);
};

export default Card;
