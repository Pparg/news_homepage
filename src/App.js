import React from "react";
import "./App.css"
import { NavBar } from "./Component/Navbar";
import logo from "./assets/images/logo.svg"
import { News } from "./Component/News";
import imagebig from "./assets/images/image-web-3-desktop.jpg"
import image01 from "./assets/images/image-retro-pcs.jpg"
import image02 from "./assets/images/image-top-laptops.jpg"
import image03 from "./assets/images/image-gaming-growth.jpg"

let little_news = [
  ["01", "Reviving Retro PCs", "What happens when old PCs are given modern upgrades?"],
  ["02", "Top 10 Laptops of 2022", "Our best picks for various needs and budgets."],
  ["03","The Growth of Gaming","How the pandemic has sparked fresh opportunities."]
]
let big_news = ["The Bright Future of Web 3.0?", "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?","Read more"]

export function Main() {
  return (
    <div className="main_container">
      <NavBar logo_path={logo}/>
      <div className="news_grid">
        <News path={imagebig} big={true} content={big_news}/>
        <div className="new_wrapper">
          <h1>New</h1>
          <div className="new_news">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="ligne"></div>
          <div className="new_news">
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div className="ligne"></div>
          <div className="new_news">
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>
      <div className="popular">
        <News big={false} content={little_news[0]} path={image01}/>
        <News big={false} content={little_news[1]} path={image02}/>
        <News big={false} content={little_news[2]} path={image03}/>
      </div>
    </div>
  )
  
}