import React from "react";


export default function home() {
    return(
        <section className="">

            <center>
                <div className="border-solid border-black">
                    <h1 className="text-[80px] pt-[80px] pb-[50px] ">
                        Christopher Convento's Development Portfolio
                    </h1>
                </div>

                <h2 className="text-[48px] pb-[50px]">
                   Game Design Projects
                </h2>
                <div className="flex justify-center gap-[32px]">
                    <div>
                        <a href="/skyisfalling">
                            <img src="fallingsky.png" className="w-[494px] h-[849px]"/>
                        </a>
                    </div>
                    <div>
                        <a href="/digitalportfolio">
                            <img src="cspdigitalportfolio.png"/>
                        </a>
                    </div>
                    <div>
                        <a href="/cardgame">
                            <img src="31game.png"/>
                        </a>
                    </div>


                </div>
            </center>


        </section>
    );
}