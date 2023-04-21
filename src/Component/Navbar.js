import React from "react";
export function NavBar({logo_path}){
    return(
        <div className="navbar_container">
            <div className="logo">
               <img src={logo_path} alt="logo"></img>
            </div>
            {window.innerWidth<800? 
            <div className="dropdown" ><i className="fa-solid fa-bars fa-2xl"></i>
                <div className="dropdow_content">
                    <li className="dropdown_links">Home</li>
                    <li className="dropdown_links">New</li>
                    <li className="dropdown_links">Popular</li>
                    <li className="dropdown_links">Trending</li>
                    <li className="dropdown_links">Categories</li>
                </div>
            </div> 
            : 
            <div className="navbar_links">
                <li className="links">Home</li>
                <li className="links">New</li>
                <li className="links">Popular</li>
                <li className="links">Trending</li>
                <li className="links">Categories</li>
            </div>}
            
        </div>
    )
}