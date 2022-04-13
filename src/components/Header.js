 // eslint-disable-next-line
import { React } from "react";
import Navigation from "./Navigation";
import navbar from "./Navigation";

const Header = () => {
    return (
        
          <div className="banner">
           <Navigation></Navigation>
               <div className="overlay"></div>   
              <div className="banner_content">
                  <h1>welcome to the our website</h1>
                  <h3>this is my first website that i creating in react</h3>
                  <div className="d-flex">
                  <input type="text" placeholder="Search what you want"/>
                  </div>
              </div>
          </div>
    )
}

export default Header
