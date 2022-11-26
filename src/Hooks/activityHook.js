import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// API
import { getActivity, getAverage, getPerformance, getUser } from '../API/userApi'


//Api Mock
// import { getActivity, getUser, getAverage, getPerformance } from '../API/userApiMock'

//constructor
import { activity } from '../Constructor/activity';
import { average } from '../Constructor/average';
import { performance } from '../Constructor/performance';
import { user } from '../Constructor/user';

/**
 * Hook
 * @returns dataAverage, dataPerformance, dataId, dataActivity
 */
export function useData() {
    let { id } = useParams();

    const [dataAverage, setDataAverage] = useState([])
    const [dataPerformance, setDataPerformance] = useState([]);
    const [dataId, setDataId] = useState({});
    const [dataActivity, setDataActivity] = useState([]);

    const axeXActivity = [1, 2, 3, 4, 5, 6, 7]
    const axeXAverage = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    const axeXPerformance = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']


    useEffect(() => {
        let i = 0

        getActivity(id)
            .then(data => {
                if (data.sessions) {
                    data.sessions.map(elem => {
                        elem.axeX = axeXActivity[i]
                        i++

                        return elem
                    })

                }
                setDataActivity(new activity(data))
            }, [])
    }, [id])

    useEffect(() => {
        let i = 0
        getAverage(id)
            .then(data => {
                if (data.sessions) {
                    data.sessions.map(elem => {
                        elem.axeX = axeXAverage[i]
                        i++
                        return elem
                    })

                }
                setDataAverage(new average(data))
            }, [])
    }, [id])

    useEffect(() => {
        let i = 0
        getPerformance(id)
            .then(data => {
                if (data.data) {
                    data.data.map(elem => {
                        elem.axeX = axeXPerformance[i]
                        i++
                        return elem
                    })

                }
                setDataPerformance(new performance(data))
            }, [])
    }, [id])

    useEffect(() => {
        getUser(id)
            .then(data => {
                setDataId(new user(data))
            },)
    }, [id])

    return [dataAverage, dataPerformance, dataId, dataActivity]
}