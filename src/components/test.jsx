import { useEffect, useState } from "react"
import "./test.css"
import {BlurContext} from "../context/blurcontext.jsx"
import { useContext } from "react";

export const Test = () =>
{

    const [ name , setName ] = useState("bcircle")

    const {changeblur} = useContext(BlurContext)

    const [text , setText] = useState("")

    const {url} = useContext(BlurContext)
    // console.log(url)

    function handleAdd()
    {
        const payload = {
            note : text
        }
        fetch(url , {
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            },
            method : "POST"
        })
        changeblur()
    }

    function closing()
    {
        changeblur()
    }

    
    function purple(){
        setName("bcirclep")
        var multiple = document.querySelector(".multiple")
        multiple.classList.toggle("active")    
    }

    function blue(){
        setName("bcircleb")
        var multiple = document.querySelector(".multiple")
        multiple.classList.toggle("active")
    }

   
    function orange(){
        setName("bcircleo")
        var multiple = document.querySelector(".multiple")
        multiple.classList.toggle("active")
    }


    function color()
    {
        var circle = document.querySelector(`.${name}`)
        circle.classList.toggle("active")
        var multiple = document.querySelector(".multiple")
        multiple.classList.toggle("active")
    }

    function white(){
        setName("bcirclew")
        var multiple = document.querySelector(".multiple")
        multiple.classList.toggle("active")
    }

    return (
        <div className="boxcontainer" >
            <div className="boxheader">
                <p className="boxnote">Create A New Note</p>
                <p className="cut" onClick={() => closing()}>X</p>
            </div>
            <p className="bnote">NOTE</p>
            <textarea className="btext"  placeholder="Enter note details..." 
            onChange={ (e) => setText(e.target.value)}
            ></textarea>
            <div className="blast">
                <div>
                   <p className="bbdate">DATE</p>
                    <input  className="bdate" type="date"></input>
                </div>
                <div className="bvisible">
                    <p className="bbvisible">Visibility</p>
                    <p className="bbbv">Note is private : Make public</p>
                </div>
            </div>
            <hr className="bline"></hr>
            <div>
                <button  onClick={() => color()} className={name}></button>               
            </div>
            <div className="multiple">
                <div onClick={() => purple()}>
                <div className="purple"></div>
                <p>Color Lable 1</p>
                </div>
                <div onClick={() => blue()}>
                <div className="blue"></div>
                <p>Color Lable 2</p>
                </div>
                <div  onClick={() => orange()}>
                <div className="orange"></div>
                <p>Color Lable 3</p>
                </div>
                <div  onClick={() => white()}>
                <div className="nocolor"></div>
                <p>No Lable</p>
                </div>
            </div>   
            <div className="bfinal">
                <div onClick={() => handleAdd()}>
                Add Note
                </div>
                
            </div>   
        </div>   
    )
}