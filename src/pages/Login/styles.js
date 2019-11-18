import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
	justify-content: space-between;
	padding: 20px;
	align-items: center;
	flex-direction: column;
`;
export const Logo = styled.Image`
	max-width: 75px;
	width: 75px;
	height: 75px;
`;
export const TextDescription = styled.Text`
	letter-spacing: 3;
	color: #f4f4f4;
	text-align: center;
	text-transform: uppercase;
`;
export const ButtonWrapper = styled.View`
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
`;
export const Title = styled.Text`
	color: #f4f4f4;
	margin: 50% 0px 20px;
	font-size: 30;
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 3;
`;
export const ColorView = styled.View`
	width: 100%;
	height: 150%;
	background-color: #cd4f40;
`;

export const StyledButton = styled.TouchableHighlight`
    width:250px;
    background-color:${props => (props.transparent ? 'transparent' : '#f3f8ff')};
    padding:15px;
    border:${props => (props.transparent ? '1px solid #f3f8ff ' : 0)}
    justify-content:center;
    margin-bottom:20px;
    border-radius:24px
`;
export const StyledTitle = styled.Text`
	text-transform: uppercase;
	text-align: center;
	font-weight: bold;
	letter-spacing: 3;
	color: ${props => (props.transparent ? '#f3f8ff ' : '#666')};
`;

export const Button = ({ onPress, color, ...props }) => (
    <StyledButton {...props}>
        <StyledTitle {...props}>{props.title}</StyledTitle>
    </StyledButton>
);
