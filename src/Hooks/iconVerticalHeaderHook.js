import { useState, useEffect } from 'react'
import { data } from '../data/verticalHeader'

/**
 *  Used to retrieve icons sport
 * @returns icons sport
 */
export function useIconHook() {

    const [icon, setIcon] = useState([])
    useEffect(() => {
        setIcon(data)
    }, [icon])
    return icon
}