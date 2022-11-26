
/**
 * display name of People
 * @param {datas} name 
 * @returns diplay of name user
 */
export function NameOfPeople({ datas }) {
    return (
        <>
            <div className="containerName">
                <h1 className="HelloText">Bonjour</h1>
                <h1 className="NameText">{datas}</h1>
            </div>
            <p className="congratulation">Félicitaion ! Vous avez explosé vos objectifs hier</p>
        </>


    )

}