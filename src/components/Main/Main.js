import React from "react";
import "./Main.css";

function Main(){
    return(
        <div>
        <div className="container_main">
            <div className="container_main_paragraph">
                <div className="container_main_p1">
                    <p>Elevate your potential</p>
                </div>

                <div className="container_main_p2">
                    <div className="container_main_p2_sub_para">
                        <p>Put your</p>
                        <div className="container_main_p2_word">
                            <p className="container_main_p2_word_color container_main_p2_word">dream</p>
                        </div>     
                    </div>
                    
                    <div className="container_main_p2_sub_para">
                        <p className="container_main_p2_word_color">career</p>
                        <div className="container_main_p2_word">
                            <p className="container_main_p2_word">within</p>
                        </div>  
                    </div>
                    <div>
                        <p>reach.</p>
                    </div>
                </div>

                <div className="container_main_p3">
                    <p>Stand out among job seekers with our free</p>
                    <p>online cover letter, portfolio and resume</p>
                    <p>builders. Ready to aspire higher?</p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="container_main_image">
                <img src="https://www.sender.net/wp-content/uploads/2022/03/b025-What-is-Dynamic-Email-Content-Definition-Guide-and-Examples-small.webp" />
            </div>
        </div>
        </div>
    );
}

export default Main;