import React from "react"
import styled from "styled-components"
import RightSide from "./RightSide/RightSide";


const StyledWrapper = styled.div `
width: 100%;
height: 100vh;
position: relative;
`
;

function Side({open, openFunction, lol, lolo}) {
    return(
    <StyledWrapper>
        <RightSide  open={open} openFunction={openFunction} lol ={lol} lolo={lolo}/>
    </StyledWrapper>
    )
}

export default Side;
