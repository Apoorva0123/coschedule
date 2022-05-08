import { createContext, useState } from "react"

export const BlurContext = createContext()

export const BlurContextProvider = ({children}) =>
{
    const [blur , setBlur] = useState(false)

    const [url , setUrl] = useState("")

    const changeblur = (val) =>
    {
        setUrl(val)
        // console.log(val)
        setBlur(!blur)
    }

    

    return<BlurContext.Provider value = { {blur,changeblur,url } }>{children}</BlurContext.Provider>

}