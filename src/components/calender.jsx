import "./calender.css"
import "./test.css"
import {BlurContext} from "../context/blurcontext.jsx"
import { useContext, useEffect, useState } from "react";

export const Calender = () =>
{
  const {changeblur} = useContext(BlurContext)

  const {url} = useContext(BlurContext)

  const [twofour , setTwofour] = useState([])
  const [twofive , setTwofive] = useState([])
  const [twosix , setTwosix] = useState([])
  const [twoseven , setTwoseven] = useState([])
  const [twoeight , setTwoeight] = useState([])
  const [twonine , setTwonine] = useState([])
  const [thirty , setThirty] = useState([])
  const [one , setOne] = useState([])
  const [two , setTwo] = useState([])
  const [three , setThree] = useState([])
  const [four , setFour] = useState([])
  const [five , setFive] = useState([])
  const [six , setSix] = useState([])
  const [seven , setSeven] = useState([])
  const [eight , setEight] = useState([])
  const [nine , setNine] = useState([])
  const [ten , setTen] = useState([])
  const [eleven , setEleven] = useState([])
  const [tweleve , setTwelve] = useState([])
  const [thirteen , setThirteen] = useState([])
  const [fourteen , setFourteen] = useState([])
  const [fifteen , setFifteen] = useState([])
  const [sixteen , setSixteen] = useState([])
  const [seventeen , setSeventeen] = useState([])
  const [eighteen , setEighteen] = useState([])
  const [nineteen , setNineteen] = useState([])
  const [twenty , setTwenty] = useState([])
  const [twentyone , setTwentyone] = useState([])

  useEffect( () =>
  {
    getData24()
  }, [] )
  useEffect( () =>
  {
    getData25()
  }, [] )
  useEffect( () =>
  {
    getData26()
  }, [] )
  useEffect( () =>
  {
    getData27()
  }, [] )
  useEffect( () =>
  {
    getData28()
  }, [] )
  useEffect( () =>
  {
    getData29()
  }, [] )
  useEffect( () =>
  {
    getData30()
  }, [] )
  useEffect( () =>
  {
    getData1()
  }, [] )
  useEffect( () =>
  {
    getData2()
  }, [] )
  useEffect( () =>
  {
    getData3()
  }, [] )
  useEffect( () =>
  {
    getData4()
  }, [] )
  useEffect( () =>
  {
    getData5()
  }, [] )
  useEffect( () =>
  {
    getData6()
  }, [] )
  useEffect( () =>
  {
    getData7()
  }, [] )
  useEffect( () =>
  {
    getData8()
  }, [] )
  useEffect( () =>
  {
    getData9()
  }, [] )
  useEffect( () =>
  {
    getData10()
  }, [] )
  useEffect( () =>
  {
    getData11()
  }, [] )
  useEffect( () =>
  {
    getData12()
  }, [] )
  useEffect( () =>
  {
    getData13()
  }, [] )
  useEffect( () =>
  {
    getData14()
  }, [] )
  useEffect( () =>
  {
    getData15()
  }, [] )
  useEffect( () =>
  {
    getData16()
  }, [] )
  useEffect( () =>
  {
    getData17()
  }, [] )
  useEffect( () =>
  {
    getData18()
  }, [] )
  useEffect( () =>
  {
    getData19()
  }, [] )
  useEffect( () =>
  {
    getData20()
  }, [] )
  useEffect( () =>
  {
    getData21()
  }, [] )




  async function getData24()
  {
    var res = await fetch(`http://localhost:8080/twofour`)
    var data = await res.json()
    setTwofour(data)
  }
  async function getData25()
  {
    var res = await fetch(`http://localhost:8080/twofive`)
    var data = await res.json()
    setTwofive(data)
  }
  async function getData26()
  {
    var res = await fetch(`http://localhost:8080/twosix`)
    var data = await res.json()
    setTwosix(data)
  }
  async function getData27()
  {
    var res = await fetch(`http://localhost:8080/twoseven`)
    var data = await res.json()
    setTwoseven(data)
  }
  async function getData28()
  {
    var res = await fetch(`http://localhost:8080/twoeight`)
    var data = await res.json()
    setTwoeight(data)
  }
  async function getData29()
  {
    var res = await fetch(`http://localhost:8080/twonine`)
    var data = await res.json()
    setTwonine(data)
  }
  async function getData30()
  {
    var res = await fetch(`http://localhost:8080/threezero`)
    var data = await res.json()
    setThirty(data)
  }
  async function getData1()
  {
    var res = await fetch(`http://localhost:8080/one`)
    var data = await res.json()
    setOne(data)
  }
  async function getData2()
  {
    var res = await fetch(`http://localhost:8080/two`)
    var data = await res.json()
    setTwo(data)
  }
  async function getData3()
  {
    var res = await fetch(`http://localhost:8080/three`)
    var data = await res.json()
    setThree(data)
  }
  async function getData4()
  {
    var res = await fetch(`http://localhost:8080/four`)
    var data = await res.json()
    setFour(data)
  }
  async function getData5()
  {
    var res = await fetch(`http://localhost:8080/five`)
    var data = await res.json()
    setFive(data)
  }
  async function getData6()
  {
    var res = await fetch(`http://localhost:8080/six`)
    var data = await res.json()
    setSix(data)
  }
  async function getData7()
  {
    var res = await fetch(`http://localhost:8080/seven`)
    var data = await res.json()
    setSeven(data)
  }
  async function getData8()
  {
    var res = await fetch(`http://localhost:8080/eight`)
    var data = await res.json()
    setEight(data)
  }
  async function getData9()
  {
    var res = await fetch(`http://localhost:8080/nine`)
    var data = await res.json()
    setNine(data)
  }
  async function getData10()
  {
    var res = await fetch(`http://localhost:8080/ten`)
    var data = await res.json()
    setTen(data)
  }
  async function getData11()
  {
    var res = await fetch(`http://localhost:8080/eleven`)
    var data = await res.json()
    setEleven(data)
  }
  async function getData12()
  {
    var res = await fetch(`http://localhost:8080/twelve`)
    var data = await res.json()
    setTwelve(data)
  }
  async function getData13()
  {
    var res = await fetch(`http://localhost:8080/thirteen`)
    var data = await res.json()
    setThirteen(data)
  }
  async function getData14()
  {
    var res = await fetch(`http://localhost:8080/fourteen`)
    var data = await res.json()
    setFourteen(data)
  }
  async function getData15()
  {
    var res = await fetch(`http://localhost:8080/fifteen`)
    var data = await res.json()
    setFifteen(data)
  }
  async function getData16()
  {
    var res = await fetch(`http://localhost:8080/sixteen`)
    var data = await res.json()
    setSixteen(data)
  }
  async function getData17()
  {
    var res = await fetch(`http://localhost:8080/seventeen`)
    var data = await res.json()
    setSeventeen(data)
  }
  async function getData18()
  {
    var res = await fetch(`http://localhost:8080/eighteen`)
    var data = await res.json()
    setEighteen(data)
  }
  async function getData19()
  {
    var res = await fetch(`http://localhost:8080/nineteen`)
    var data = await res.json()
    setNineteen(data)
  }
  async function getData20()
  {
    var res = await fetch(`http://localhost:8080/twenty`)
    var data = await res.json()
    setTwenty(data)
  }
  async function getData21()
  {
    var res = await fetch(`http://localhost:8080/twentyone`)
    var data = await res.json()
    setTwentyone(data)
  }





  
    return (
        <div className="container" >
            <div className="headerss">
                <img className="image1" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"></img>
                <p className="span">APR 24 - MAY 21, 2022</p>
                <img  className="image2" src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"></img>
                <p className="today">Today</p>
                <img className="search" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNeJzJdqGD_fqnfD3Mx8nkIfzr23GRQ4uv1siNhcN4oBAAer-pIgBmn83hE4pJrlK_Vg&usqp=CAU"></img>
                <div className="create">
                    <p onClick={() => smallbox()}> + Create</p>
                </div>
            </div>
            <div className="days">
                <div>
                    <p className="day">SUNDAY</p>
                    <div className="xyz">
                      <p className="date">Apr 24</p>
                      <p onClick={() => {
                        const val = "http://localhost:8080/twofour"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {twofour.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                    <p className="day">MONDAY</p>
                    <div className="xyz">
                    <p className="date">25</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twofive"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {twofive.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )} 
                </div>
                <div>
                    <p className="day">TUESDAY</p>
                    <div className="xyz">
                      <p className="date">26</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twosix"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {twosix.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}  
                </div>
                <div>
                    <p className="day">WEDNESDAY</p>
                    <div className="xyz">
                      <p className="date">27</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twoseven"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div> 
                    {twoseven.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                    <p className="day">THURSDAY</p>
                    <div className="xyz">
                      <p className="date">28</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twoeight"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {twoeight.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )} 
                </div>
                <div>
                    <p className="day">FRIDAY</p>
                    <div className="xyz">
                      <p className="date">29</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twonine"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {twonine.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )} 
                </div>
                <div>
                    <p className="day">SATURDAY</p>
                    <div className="xyz">
                      <p className="date">30</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/threezero"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {thirty.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )} 
                </div>
                <div>
                   <div className="xyz">
                      <p className="date">May 1</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/one"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {one.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}                   
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 2</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/two"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {two.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date">3</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/three"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {three.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 4</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/four"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {four.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 5</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/five"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {five.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 6</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/six"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {six.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 7</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/seven"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {seven.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 8</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/eight"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {eight.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 9</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/nine"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {nine.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 10</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/ten"
                        changeblur(val)
                      }}  className="plus">+</p>
                    </div>
                    {ten.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 11</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/eleven"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {eleven.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 12</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twelve"
                        changeblur(val)
                      }}  className="plus">+</p>
                    </div>
                    {tweleve.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 13</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/thirteen"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {thirteen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 14</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/fourteen"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {fourteen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 15</p>
                      <p  onClick={() =>{
                        const val = "http://localhost:8080/fifteen"
                        changeblur(val)
                      }}  className="plus">+</p>
                    </div>
                    {fifteen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 16</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/sixteen"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {sixteen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 17</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/seventeen"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {seventeen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 18</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/eighteen"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {eighteen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 19</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/nineteen"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {nineteen.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 20</p>
                      <p onClick={() =>{
                        const val = "http://localhost:8080/twenty"
                        changeblur(val)
                      }} className="plus">+</p>
                    </div>
                    {twenty.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
                <div>
                <div className="xyz">
                      <p className="date"> 21</p>
                      <p onClick={() => {
                        const val = "http://localhost:8080/twentyone"
                        changeblur(val)
                      }}  className="plus">+</p>
                    </div>
                    {twentyone.map( (x) =>
                    (
                      <p>{x.note}</p>
                    ) )}
                </div>
            </div>
            
            
        </div>
    )
}