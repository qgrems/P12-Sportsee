import { TriageNutrition } from "./nutrition";


export function KeyDatas({ datas }) {

    return (
        <>
            {
                <TriageNutrition data={datas.keyData === undefined ? "" : datas.keyData} key={datas.keyData}></TriageNutrition>
            }

        </>
    )

}