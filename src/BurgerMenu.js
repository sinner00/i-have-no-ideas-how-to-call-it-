import React  from "react";
import styled  from 'styled-components';

const StyledBurger = styled.div `
flex-flow: nowrap;
position: fixed;
right: 30px;
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
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      transition: 0.1s linear;
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
      transition: 0.1s linear;
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      transition: 0.1s linear;

}


`;
const BurgerMenu = ({ handler, open }) => {

    return  (

        <StyledBurger open={open} onClick={handler} >
            <div className='d-block' > </div>
            <div className="col-12 d-block" > </div>
            <div className="col-12" > </div>
        </StyledBurger>

    )


};

export default BurgerMenu;
