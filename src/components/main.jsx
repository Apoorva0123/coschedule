import React from 'react';
import './main.css'
import footer from '../images/footer.png'
function Main() {
     let imgs = ['https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75',
    'https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100',
    'https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100',
    'https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100',
    'https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100',
    "https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Finc-5000-logo.png&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75"
];
  return (
    <div>
        <h1 className="heading">
            Organize All Of Your Marketing In<br></br> One Place. 
         From&nbsp;Any&nbsp;Place.
        </h1>
        <p className="mini_heading">Get more done in less time with the only work management software for&nbsp;marketers.</p>
        <a className="start">Get Started Free</a>
        <p className="small">Why not? It's free forever.</p>
       <img src={imgs[0]} className="main_image"></img>
         <div className="outer" >
             <h2 className="small_2">30,000 marketers start their day with&nbsp;CoSchedule</h2>
        <div className="grid-container" style={{backgroundColor: "white"}} >
          <img src={imgs[1]} className="grid-item"></img>
          <img src={imgs[2]} className="grid-item"></img>
          <img src={imgs[3]} className="grid-item"></img>
          <img src={imgs[4]} className="grid-item"></img>
          <img src={imgs[5]} className="grid-item"></img>
          <img src="" className="grid-item"></img>
          <img src={imgs[6]} className="grid-item"></img>
          <img src={imgs[7]} className="grid-item"></img>
          <img src={imgs[8]} className="grid-item"></img>
          <img src="" className="grid-item"></img>
        </div>
        </div>
        <h2 className="center">Our Products</h2>
        <div className="grid_container_1">
          <div className="main_1">
          <div className="grid_item_1"><img className="im" src={imgs[9]}></img></div>
          <div className="box_small"><img className="box_small_img" src={imgs[13]}></img></div>
          <div className="main_box">
            <h3 className="box_h3">Marketing Calendar</h3>
            <p className="box_p">A calendar that helps you see, schedule, and share your&nbsp;marketing.</p>
            <ul className="box_ul">
            <li className="box_li" > &nbsp;See everything together in one place</li>
            <li className="box_li"> &nbsp;Share your progress with higher-ups</li>
            <li className="box_li"> &nbsp;Show what your marketing is doing</li>
            </ul>
            <a className="box_btn">Explore More</a>
          </div>
          </div>
           <div className="main_1">
          <div className="grid_item_1"><img className="im" src={imgs[10]}></img></div>
          <div className="box_small"><img className="box_small_img" src={imgs[14]}></img></div>
          <div className="main_box">
            <h3 className="box_h3">Marketing Suite</h3>
            <p className="box_p">A family of agile marketing products to coordinate your team, projects, and process.</p>
            <ul className="box_ul">
            <li className="box_li" > &nbsp; Manage marketing requests</li>
            <li className="box_li"> &nbsp; Eliminate content bottlenecks</li>
            <li className="box_li"> &nbsp; Maximize resources to increase output</li>
            </ul>
            <a className="box_btn">Explore More</a>
          </div>
          </div>

             <div className="main_1">
          <div className="grid_item_1"><img className="im" src={imgs[11]}></img></div>
          <div className="box_small"><img className="box_small_img" src={imgs[13]}></img></div>
          <div className="main_box">
            <h3 className="box_h3">Headline Studio</h3>
            <p className="box_p">Write better headlines that will boost <br></br>your traffic.</p>
            <ul className="box_ul">
            <li className="box_li" > &nbsp;Score your headlines based on proven data</li>
            <li className="box_li"> &nbsp;Improve headlines with smart suggestions</li>
            <li className="box_li"> &nbsp;Find the high-scoring words instantly</li>
            </ul>
            <a className="box_btn">Explore More</a>
          </div>
          </div>
           <div className="main_1">
          <div className="grid_item_1"><img className="im" src={imgs[12]}></img></div>
          <div className="box_small"><img className="box_small_img" src={imgs[14]}></img></div>
          <div className="main_box">
            <h3 className="box_h3">Actionable Marketing Institute</h3>
            <p className="box_p">Develop new marketing skills in<br></br> 30 minutes (or less).</p>
            <ul className="box_ul">
            <li className="box_li" > &nbsp;Improve your marketing with fluff-free training</li>
            <li className="box_li"> &nbsp;Spend less time learning & more time doing</li>
            <li className="box_li"> &nbsp;Learn from industry pros you trust</li>
            </ul>
            <a className="box_btn">Explore More</a>
          </div>
          </div>
        </div>

      <div className="three">
        <div class="tbox">
          <h2 class="heading_1 ">The fastest growing marketing work management&nbsp;software</h2>
          <p class="mini_heading_1">CoSchedule is trusted by 30,000 marketers in 100+&nbsp;countries.</p>
        </div>
         
         <div className="grid_container_2">
            <div className="gartner_div">
                <div className="gartner">Gartner</div>
                <div className="magic">Magic Quadrant</div>
                <div className="gartner_p">
                    The Gartner Magic Quadrant for <br></br> Content Marketing Platforms 2020
                </div>
            </div>
            <div className="gartner_div">
                <div className="gartner_img_div">
                    <img className="gartner_img" src={imgs[15]} width="50%" height="70%"></img>
                </div>
                <div className="gartner_p">
                    One Of The Fatest-Growing <br></br> Marketing Platforms 3 Years In a Row.
                </div>
            </div>
            <div className="gartner_div">
                <div className="gartner_img_div">
                    <img className="gartner_img" src={imgs[16]}  ></img>
                </div>
                <div className="gartner_p">
                    Awarded High Performer in 5 Product <br></br>Categories.
                </div>
            </div>
        </div>
</div>

<div class="orange">
  <h2 class="orange_p">Organize all of your marketing in one&nbsp;place</h2>
  <a   class="orange_heading">Get Started Free</a>
  </div>
<div>
  <img src={footer}></img>
</div>
        </div>
  )
}
export default Main