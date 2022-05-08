// import "./analytics.css"
import "./analytics.css"

import { IoIosNotifications, IoIosTrophy } from "react-icons/io"
import { FaSignal } from "react-icons/fa"
import { MdMessage } from "react-icons/md"


// import {FaBeer} from "react-icons"
// import {} from "react-icons"

export const Analytics = () => {
    return (
        <>
            <nav id="topbar">

                <FaSignal id="signal" />
                <p>Analytics</p>
                <IoIosNotifications id="bell" />
                <IoIosTrophy id="trophy" />

                {/* <img src="../../public/bar_chart_icon.png" alt="" />
                
                <img src="../../public/trophy_icon.png" alt="" />
                <img src="../../public/notification_bell_icon.png" alt="" /> */}
            </nav>
            <div id="body">
                <div>  <h2> Social Analytics</h2></div>
                <div id="cardContainer">

                    <div className="card">
                        <div className="messageIcon">
                            <img className="imgMsg" src="../../public/speech-bubble-3-64.png" alt="" />
                        </div>
                        <div className="cardDetails">
                            <h3>Social Engagement</h3>
                            <p>Understand your engagement on social media. spot trends and understand what your audience likes now to act quickly!</p>
                        </div>
                    </div>

                    <div id="card2" className="card">
                        <div id="messageIcon2" className="messageIcon">
                            <img className="imgMsg" src="../../public/megaphone.png" alt="" />
                        </div>
                        <div className="cardDetails">
                            <h3>Social Campaign</h3>
                            <p>Gauge the success of your social campaigns. Evaluate performance in one place + pinpoint correlation between campaigns with side by side comparisons</p>
                        </div>
                    </div>

                    <div id="card3" className="card">
                        <div id="messageIcon3" className="messageIcon">
                            <img className="imgMsg" src="../../public/facebook-logo.png" alt="" />
                        </div>
                        <div className="cardDetails">
                            <h3>Facebook report</h3>
                            <p>Get comprehensive facebook data. Track measure and analyze page performance including page growth, total impressions and more</p>
                        </div>
                    </div>

                    <div id="card4" className="card">
                        <div id="messageIcon4" className="messageIcon">
                            <img className="imgMsg" src="../../public/twitter.png" alt="" />
                        </div>
                        <div className="cardDetails">
                            <h3>Twitter report</h3>
                            <p>Understand impact of your twitter profile access and evaluate data including audience growth + engagement stats</p>
                        </div>
                    </div>

                    <div id="card5" className="card">
                        <div id="messageIcon5" className="messageIcon">
                            <img className="imgMsg" src="../../public/linkedin.png" alt="" />
                        </div>
                        <div className="cardDetails">
                            <h3>Linkedin report</h3>
                            <p>Undertand the impact of your company linkedin page. Review data to view and analyze page and post performance</p>
                        </div>
                    </div>


                   
            
                </div>
                <div id="cardContainer2">
                <div id="card6" className="card">
                        <div id="messageIcon6" className="messageIcon">
                            <img className="imgMsg" src="../../public/instagram.png" alt="" />
                        </div>
                        <div className="cardDetails">
                            <h3>Instagram report</h3>
                            <p>Make sense of your instagram account. And better understand which posts, hashtags and content types reach your audience</p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

