import axios from "axios";

/**
 * Api used to recover correct id
 * @param {number} id l'id used to recover correct datas
 * @returns return  the corresponding datas to the id
 */
export function getUser(id) {

    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/user/${id}`)
            .then(data => {
                resolve(data.data.data)

            })
            .catch((err) => {
                resolve("")
                alert(err.message)
            })

    })

}
/**
 * Api used to recover datas of activity with correct id
 * @param {number} id 'id used to recover datas of activity
 * @returns return  activity datas with the correct id
 */
export function getActivity(id) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/user/${id}/activity`)
            .then(data => {
                resolve(data.data.data)
            })
            .catch(() => {
                resolve("")
            })
    })

}
/**
 * Api used to recover datas of average with correct id 
 * @param {number} id 'id used to recover datas of average
 * @returns  return  average datas with the correct id
 */
export function getAverage(id) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/user/${id}/average-sessions`)
            .then(data => {
                resolve(data.data.data)
            })
            .catch(() => {
                resolve("")
            })
    })

}
/**
 * Api used to recover datas of performance with correct id 
 * @param {number} id 'id used to recover datas of performance
 * @returns  return  performance datas with the correct id
 */
export function getPerformance(id) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/user/${id}/performance`)
            .then(data => {
                resolve(data.data.data)
            })
            .catch(() => {
                resolve("")
            })
    })

}