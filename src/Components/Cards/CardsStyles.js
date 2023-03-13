import styled from 'styled-components';
import { SPECIES_TYPE } from '../../Data/Colors';

export const CardContainer = styled.div`
	width: 300px;
	height: 350px;
	border: 1px solid #4747ff;
	padding: 10px;
	background-color: ${(props) => SPECIES_TYPE[props.species]};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
`;

export const CardContainerImg = styled.div`
	padding: 5px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
export const CardImg = styled.img`
	width: 200px;
	height: 200px;
`;

export const CardInfo = styled.div`
	display: Flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CardTitle = styled.h3`
	font-size: 32px;
	font-family: 'poppins';
`;

export const CardSpecies = styled.p`
	font-size: 22px;
`;
