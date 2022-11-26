import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { useId } from '../../Hooks/activityHook';

const style = {
    top: "45%",
    left: "45%",
    lineHeight: "24px",
    transform: 'translate(0, -50%)'
};

/**
 * used to display score graph
 * @returns score graph
 */
export function GraphScore({ datas }) {

    const pourcentageValue = [{ value: datas.todayScore * 100 }]
    const angle = datas.todayScore * 360
    return (

        <ResponsiveContainer width="100%" height="100%">

            <RadialBarChart data={pourcentageValue} startAngle={90} endAngle={90 + angle} cx="50%" cy="50%" innerRadius="100" outerRadius="90%" barSize={10}>
                <RadialBar
                    dataKey="value"
                    name='todayScore'
                    minAngle={15}
                    fill="red"
                    cornerRadius={100}

                />
                <Legend
                    content={<Poucentage datas={datas} />}
                    iconSize={30}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />

            </RadialBarChart>
        </ResponsiveContainer>
    );
}

/**
 *  display and transform score in percentage
 * @returns display score in percentage
 */
export function Poucentage({ datas }) {
    if (datas) {
        return (
            <div className='containerpoucent'>
                <p className='poucentTextNumber'>{datas.todayScore * 100}%</p>
                <p className='poucentText'>de votre objectif</p>
            </div>
        )
    }
}