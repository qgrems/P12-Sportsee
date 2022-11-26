import { useState, useEffect } from 'react'
import { data } from '../data/nutritionIcon'

/**
 *  Used to retrieve icons nutritions
 * @returns  icons nutritions
 */
export function useIconNutriHook() {

    const [iconNutri, setIconNutri] = useState([])
    useEffect(() => {
        setIconNutri(data)
    }, [iconNutri])
    return iconNutri
}