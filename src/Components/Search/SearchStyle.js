import styled from 'styled-components';

export const FormSearch = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputSearch = styled.input`
	padding: 0.5rem;
	margin: 0.5rem 0;
	border: 1px solid #4747ff;
	border-radius: 0.5rem 0 0 0.5rem;

	&:focus {
		outline: none;
	}
`;

export const ButtonSearch = styled.button`
	padding: 0.5rem 1rem;
	margin: 0.5rem 0;
	background-color: #4747ff;
	color: #fff;
	border-radius: 0 0.5rem 0.5rem 0;
	cursor: pointer;
	border: 1px solid #4747ff;
`;
