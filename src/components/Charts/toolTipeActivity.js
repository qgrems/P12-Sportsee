/**
 * used to display tooltip in graph activity
 * @param {number} value used to display value of kg and kcal
 * @returns  tooltupe display
 */
export function CustomTooltipActivity({ active, payload, label }) {
    if (active && payload) {
        return (
            <div className='toolTipeActivity'>
                <div className='containerTextActivity'>
                    <p className='textActivity'>{payload[0].value}kg</p>
                </div>
                <div className='containerTextActivity'>
                    <p className='textActivity'>{payload[1].value}Kcal</p>
                </div>
            </div>
        )

    }
}