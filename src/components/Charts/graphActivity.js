import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltipActivity } from '../Charts/toolTipeActivity'

/**
 * used to display activity graph
 * @returns activity graph
 */
export default function GraphActivity({ datas }) {
    let j = 0
    let kilograMax = 0
    let kilogramMin = 0
    if (datas.sessions) {
        datas.sessions.map(element => {
            let kilogramPlusun = datas.sessions[j].kilogram
            if (kilograMax < kilogramPlusun) {
                kilograMax = kilogramPlusun
                kilogramMin = kilograMax
                j++
            }
            else {
                kilograMax = kilograMax
                kilogramMin = kilogramPlusun
                j++
            }
        })
        kilograMax = kilograMax + 4
        kilogramMin = kilogramMin - 4
        console.log(kilograMax)
        console.log(kilogramMin)
    }
    return (
        <>
            <ResponsiveContainer width="100%" height="95%">
                <BarChart
                    width={100}
                    height={100}
                    data={datas.sessions}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={10}
                >
                    <Tooltip wrapperStyle={{ outline: 'none' }} content={<CustomTooltipActivity />} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="axeX" />
                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickCount={3} domain={[kilogramMin, kilograMax]} />
                    <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tickCount={false} domain={[10, 600]} />
                    <Legend
                        formatter={(value, entry, index) => <span className="text-color-legends">{value}</span>}
                        align='right' verticalAlign='top' iconType="circle" wrapperStyle={{
                            marginTop: "-20px"
                        }} />
                    <Bar yAxisId="right" dataKey="kilogram" name='Poids (kg)' fill="black" radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="left" dataKey="calories" name='Calories brûlées (Kcal)' fill="red" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );

}

