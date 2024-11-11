import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
	width : 100%;
	height : 50px;
	/* background-color : white; */
	padding : 0 4%;
	display : flex;
	justify-content : flex-end;
	align-items : center;
`

const Footer = () => {
	return <StyledFooter>
		<span>© 2024 Hassan Karrach</span>
	</StyledFooter>;
}


export default Footer;