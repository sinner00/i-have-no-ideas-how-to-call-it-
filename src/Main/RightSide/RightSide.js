import React, {useState} from "react";
import styled from "styled-components";
import BurgerMenu from "../../BurgerMenu";

const Main = styled.div`
height: 100vh;
width: 70%;
`;
function RightSide({open}) {

return (
    <>
    <Main open={open}> </Main>
    <BurgerMenu open={open} />
    </>
)
}
export default RightSide;
