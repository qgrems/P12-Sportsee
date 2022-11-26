
import sporsee from '../../assets/sporsee.png'
import { useIconHook } from '../../Hooks/iconVerticalHeaderHook'

/**
 * display logo Sportsee
 * @returns logo Sportsee
 */
export function VerticalHeader() {
    const datas = useIconHook()
    return (
        <div className="verticalheader">
            <div className='containerLogo'>
                {
                    datas.map((data) =>
                        <img src={data.icon} className="logoSport " alt={data.name} />
                    )
                }
            </div>
            <img src={sporsee} className="logoCopiryght" alt="Copiryght" />
        </div>
    )
}