import React from 'react';
import {
	CardContainer,
	CardContainerImg,
	CardImg,
	CardInfo,
	CardTitle,
	CardSpecies,
} from './CardsStyles';

const Cards = (props) => {
	const { name, species, image } = props;

	return (
		<>
			<CardContainer>
				<CardContainerImg>
					<CardImg src={image} alt={name} />
				</CardContainerImg>
				<CardInfo>
					<CardTitle>{name}</CardTitle>
					<CardSpecies>{species}</CardSpecies>
				</CardInfo>
			</CardContainer>
		</>
	);
};

export default Cards;
