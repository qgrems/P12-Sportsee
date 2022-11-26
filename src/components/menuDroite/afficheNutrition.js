import { useIconNutriHook } from '../../Hooks/nutriIconHook'
import { IconNutrition } from './iconNutrition'
import { NameOfUnit } from './nameUnit'
import { Unit } from './unit'

/**
 * diplay icons and unit of icons
 * @param {datas} datas 
 * @returns display of Icons and number/unit of score nutritions
 */
export function AfficheNutrition(datas) {
    const icon = useIconNutriHook()
    const data = datas.data
    const allNutri = []
    return (
        <div className="containeKcal">
            {
                function () {
                    for (let i in data) {
                        allNutri.push(
                            <>
                                <div className='containeAllLogo'>
                                    <div className='containeLogoUnit'>
                                        <IconNutrition icon={icon[i] === undefined ? "" : icon[i]} key={icon[i]}></IconNutrition>
                                        <div>
                                            <p className='textIcon' key={data[i]}>{data[i]}<Unit icon={icon[i] === undefined ? "" : icon[i]}></Unit></p>
                                            <NameOfUnit icon={icon[i] === undefined ? "" : icon[i]} key={icon[i]}></NameOfUnit>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    return allNutri
                }()
            }
        </div>
    )
}