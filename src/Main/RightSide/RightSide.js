import React from "react";
import styled from "styled-components";
import BurgerMenu from "../../BurgerMenu";
import Header from "./Header";

const Main = styled.div`
height: 100vh;
width: 100%;
display: flex;
overflow: hidden;
`;
function RightSide({open, openFunction, lol, lolo}) {

return (

<Main open = {open } openFunction={openFunction}>
<Header openFunction={openFunction} open={open} lol={lol} lolo={lolo}/>
</Main>

)
}
export default RightSide;
