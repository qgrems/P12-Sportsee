/**
 * display icons
 * @param {icons} icons 
 * @returns icons
 */
export function IconNutrition(icons) {
    const icon = icons.icon.icon
    return (
        <img className="iconeSize" src={icon} alt="calories" />
    )
}