
import { AfficheNutrition } from "./afficheNutrition"

/**
 * Create new tab with all count
 * @param {data} data of count 
 * @returns a new tab with calorie count, proteincount, carbhydratecount and lipid count for AfficheNutrition
 */
export function TriageNutrition(data) {

    const dat = data.data
    const datas = []
    datas.push(dat.calorieCount)
    datas.push(dat.proteinCount)
    datas.push(dat.carbohydrateCount)
    datas.push(dat.lipidCount)

    return (
        <AfficheNutrition data={datas} key={datas}></AfficheNutrition>
    )

}