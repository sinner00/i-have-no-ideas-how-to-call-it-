import React  from "react";
import styled  from 'styled-components';


const StyledBurger = styled.div `
{
flex-flow: nowrap;
top: 40px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 10;
padding-right: 5px;
overflow: hidden;
cursor: pointer;
height: 100%;
width: 100%;








.s {

cursor: pointer;
height: 0.25rem;
width: 25px;
border-radius: 10px;
transform-origin:2.5px;
background-color: black;
margin-bottom: 2px;
position: relative;


}
.s::before{
width: 100%;
height: 100%;
content: "";
position: absolute;
top: 0;
left: 0;
z-index: 2;

background-color: red;
transform: scaleX(0);
transform-origin: left;
}
&:hover .sa::before{

transform: scaleX(1);
background-color: yellow;
transition: transform  300ms ease-in-out


}
&:hover .sb::before{

transform: scaleX(1);
background-color: yellow;
transition: transform  450ms ease-in-out


}

&:hover .sc::before{

transform: scaleX(1);
background-color: yellow;
transition: transform  550ms ease-in-out


}

}



`;
const BurgerMenu = ({ lol ,openFunction }) => {
                console.log( lol);


    return  (

        <StyledBurger slider= {lol} onClick={openFunction}
                      className="BurgerMenuStyle" >

            <div className='d-block s sa' > </div>
            <div className="col-12 s d-block sb" > </div>
            <div className="col-12 s sc" > </div>
        </StyledBurger>

    )


};

export default BurgerMenu;