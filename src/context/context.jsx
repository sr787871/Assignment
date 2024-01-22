/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'

const API_URL = `https://api.tvmaze.com/search/shows?q=all` ; 
const API_URL_2 = `https://api.tvmaze.com/search/shows`

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(true)
    const [showList, setShowList] = useState([])
    const getShows = async (url)=>{
        try {
            const res = await fetch(url)
            const data = await res.json()
            setIsLoading(false)
            setShowList(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        getShows(API_URL)
    },[])

    const getShowDetails = async (url)=>{
        try {
            const res = await fetch(url)
            const data = await res.json()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getShowDetails(API_URL_2)
    },[])

    return <AppContext.Provider value={{isLoading,showList}}>{children}</AppContext.Provider>
}

//global custom hook

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

// eslint-disable-next-line react-refresh/only-export-components
export {AppContext , AppProvider , useGlobalContext};