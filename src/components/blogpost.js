import React from "react";

const blogpost = (props) =>{
    const {title,text,video} = props

    return(
        <div>
            <h1 className="text-[64px] text-center pb-[50px]">
                {title}
            </h1>
            <center>
                <a href = "/home">
                    <img src="/home.png" width="400" className="pb-[50px]"/>
                </a>

                <video src={video} width="750" height="500" controls className="pb-[40px]">
                </video>

            </center>


            <h2 className="text-[32px] text-start pl-[100px] pr-[400px]">
                {text}
            </h2>

        </div>


    );
}

export default blogpost;