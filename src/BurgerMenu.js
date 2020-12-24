import React  from "react";
import styled  from 'styled-components';
import Navigaton from "./Main/LeftSide/Navigation";

const StyledBurger = styled.div `
flex-flow: nowrap;
position: fixed;
left: 30px;
top: 40px;
display: block;
z-index: 10;




div {
height: 0.25rem;
width: 25px;
border-radius: 10px;
transform-origin:2.5px;
background-color: black;
margin-bottom: 3px;

  &:nth-child(1) {
      transform: ${({ handler }) => handler ? 'rotate(45deg)' : 'rotate(0)'};
      transition: 0.5s linear;
    }
    &:nth-child(2) {
      transform: ${({ handler }) => handler ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ handler }) => handler ? 0 : 1};
      transition: 0.5s linear;
    }
    &:nth-child(3) {
      transform: ${({ handler }) => handler ? 'rotate(-45deg)' : 'rotate(0)'};
      transition: 0.5s linear;

}


`;
const BurgerMenu = ({handler}) => {

    return  (

        <StyledBurger onClick={handler} >
            <div className='d-block' > </div>
            <div className="col-12 d-block" > </div>
            <div className="col-12" > </div>
        </StyledBurger>

    )


};

export default BurgerMenu;