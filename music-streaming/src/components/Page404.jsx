import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	text-align: center;
	color: white;
`;
const Text = styled.h1`
	text-align: center;
	font-size: 2em;
`;

const YodaImage = styled.img`
	width: 70%;
	max-width: 600px;
`;

function Page404(props) {
	return (
		<StyledMain>
			<Text>404 ERROR OCCURED HAS</Text>
			<YodaImage src="https://i.ebayimg.com/images/g/4NkAAOSwZW5aCn10/s-l300.jpg" />
			<Text>NOT FOUND THE PAGE WAS</Text>
		</StyledMain>
	);
}

export default Page404;
