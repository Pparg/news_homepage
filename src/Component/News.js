import React from "react";

export function News({path, big, content}){
    return(
        <div className={big? "news_wrapper_big":"news_wrapper_small"}>
            <img src={path} alt="imag"></img>
            <div className={big?"news_information_big" :"news_information_small"}>
                <h1>{content[0]}</h1>
                <div className={big? "news_wth_button": "news_with_p"}>
                    <p>{content[1]}</p>
                    {big? <div className="news_button">{content[2]}</div> :<p>{content[2]}</p>}
                </div>
            </div>
        </div>
    )
}