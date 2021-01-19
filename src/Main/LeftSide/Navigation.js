
import styled from "styled-components";
import React from "react";


const Ul = styled.ul `
text-decoration: none;
list-style: none;
height: 100vh;
overflow: scroll;
width : ${({ isModalOpen }) => (isModalOpen ? "30%" : "0")};
transform-origin: left;
transition:  300ms ease-in;



}







li {


text-decoration: none;
list-style: none;
text-align: left;
 padding-left: 3rem;
 height: 4rem;
 align-items: center;
background-color: #ecebeb;
overflow: visible;
border-bottom: 1px solid darkgray ;

 &:hover {
background: white;
transition: 0.5s linear;
cursor: pointer;

}

};
 



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
.hydrated:hover {
color: lightgrey;
transition: 200ms;
}
.textClose{
height: 100%;
display: flex;
align-items: center;
font-size: 15px;
}
.switcher:hover{
background:  #ecebeb;
transition: none;
}
.language {
font-size: 15px;

}
.language_wrapper{
border-bottom: 1px solid black;
position: relative;

}
.language_wrapper::before
 {
 position: absolute;
content: "";
transform: scaleX(0);
transform-origin: left;
z-index: 2;
width: 100%;
height: 100%;


}

 .language_wrapper:hover::before {
 transform: scaleX(1);
 border-bottom: 1px solid white;
 transition: transform 400ms ease-in ;

 }
.wrap1::before {
border-bottom: 1px solid black;
transition: 500ms ease-out;
}
.textClose:hover {
color: lightgrey;
transition: 200ms;
}
.lola:hover {
color: lightgrey;
transition: 200ms;
background-color: lightgrey;
}


`;


// eslint-disable-next-line react/prop-types
function Navigation({ isModalOpen, setModalOpen, sideRef }) {

  return (

    <Ul ref={sideRef} className=" row no-gutters NavUl" isModalOpen={isModalOpen} >
      <li className=" col-md-12 NavList switcher" >
        <a href="/" className="language">
          <p className="language_wrapper wrap1">
          English
          </p>
        </a>
        <button href="/" onClick={setModalOpen} className="close">
          <p className="textClose">CLOSE</p>
          <ion-icon className="lola" name="close-outline"> </ion-icon>
        </button>
      </li>
      <li className=" col-md-12 NavList" > <a href="/">Register/Log in</a></li>
      <li className="col-md-12 NavList"> <a href="/">Home</a></li>
      <li className=" col-md-12 NavList"> <a href="/">Winners</a></li>
      <li className=" col-md-12 NavList"> <a href="/"> Nominees</a></li>
      <li className=" col-md-12 NavList"> <a href="/">Collections</a></li>
      <li className="col-md-12 NavList"> <a href="/"> Academy</a></li>
      <li className="col-md-12 NavList"> <a href="/">Professional directory</a></li>
      <li className="col-md-12 NavList"> <a href="/">Jobs & Talent</a></li>
      <li className="col-md-12 NavList"> <a href="/">Blog</a></li>
      <li className="col-md-12 NavList"> <a href="/">eBooks & Publications  </a></li>
      <li className="col-md-12 NavList"> <a href="/">JURY2020</a></li>
      <li className="col-md-12 NavList"> <a href="/">Conferences</a></li>
    </Ul>
  )
}

export default Navigation;
