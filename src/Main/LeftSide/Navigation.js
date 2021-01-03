
import styled from "styled-components";
import React  from 'react';
import BurgerMenu from "../../BurgerMenu";


const StyledMenu =styled.div `
height: 100vh;
width: 30%;
background-color: white;
overflow: visible;
display: ${({handler}) => handler ? "block" : "none"} ;
padding: 0;

`;
const Ul= styled.div `
text-decoration: none;
list-style: none;
width: 100%;
height: 100vh;
overflow: visible;


li {


text-decoration: none;
list-style: none;
text-align: left;
 padding-left: 3rem;
 height: 4rem;
 align-items: center;
transition: transform 1s linear;
background-color: #ecebeb;
overflow: visible;

 &:hover {
background: white;
transition: 0.5s linear;
cursor: pointer;

}

};
 


}
a {
list-style: none;
text-decoration: none;
font-size:20px;
color: black;
overflow: visible;


}
.switcher{
    display: flex;
    justify-content: space-between;
    
}



.close {
    width: 60%;
    display: flex;
    justify-content: space-evenly; 
    height: 100%;
    
}
.hydrated {
height: 100%;
font-size: 30px;
}
.textClose{
height: 100%;
display: flex;
align-items: center;
}
.switcher:hover{
background:  #ecebeb;
transition: none;
}
{`;


function Navigation({handler , openFunction}) {

return (
  <StyledMenu handler={handler} className='container '>

    <Ul className=" row no-gutters NavUl" handler={handler} >
      <li className=" col-md-12 NavList switcher" >
        <a className='language'>
          EN
        </a>
        <a  onClick={openFunction} className='close'>
            <p className='textClose'>CLOSE</p>
         <ion-icon className='lola' name="close-outline"> </ion-icon>

        </a>
      </li>
      <li className=" col-md-12 NavList" > <a href='/'>Register/Log in</a></li>
      <li className="col-md-12 NavList"> <a href='/'>Home</a></li>
      <li className=" col-md-12 NavList"> <a href='/'>Winners</a></li>
      <li className=" col-md-12 NavList"> <a href='/'> Nominees</a></li>
      <li className=" col-md-12 NavList"> <a href='/'>Collections</a></li>
      <li className="col-md-12 NavList"> <a href='/'> Academy</a></li>
      <li className="col-md-12 NavList"> <a href='/'>Professional directory</a></li>
      <li className="col-md-12 NavList"> <a href='/'>Jobs & Talent</a></li>
      <li className="col-md-12 NavList"> <a href='/'>Blog</a></li>
      <li className="col-md-12 NavList"> <a href='/'>eBooks & Publications  </a></li>
      <li className="col-md-12 NavList"> <a href='/'>JURY2020</a></li>
      <li className="col-md-12 NavList"> <a href='/'>Conferences</a></li>




    </Ul>

  </StyledMenu>
)
}

export default Navigation;