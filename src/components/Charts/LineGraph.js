import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useAverage } from '../../Hooks/activityHook';

/**
 * used to display average graph
 * @returns  average graph
 */
export default function AverageCharts({ datas }) {

    return (
        <ResponsiveContainer width="100%" height="100%" >
            <AreaChart
                width={100}
                height={100}
                data={datas.sessions}
                margin={{
                    top: 50,
                    right: 20,
                    left: -45,
                    bottom: 95,
                    stroke: 'white'
                }}


            >
                <defs>
                    <linearGradient id="colorLength">
                        <stop offset="0%" stopColor='#ff3d3d' stopOpacity={0.5} />
                        <stop offset="100%" stopColor='#ff3d3d' stopOpacity={0.5} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="axeX"
                    axisLine={false}
                    tickLine={false}
                    tickCount={false}
                    stroke="white"

                />
                <YAxis
                    dataKey="sessionLength"
                    axisLine={false}
                    tickLine={false}
                    tickCount={false}
                />
                <Area dataKey="sessionLength" type="monotone" stroke="white" strokeWidth={2} fillOpacity={1} dot={false} fill="url(#colorLength)" />
                <Tooltip cursor={{ fill: "#10ff4c" }} wrapperStyle={{ outline: 'none' }} content={<CustomTooltipLine />} />
            </AreaChart>
        </ResponsiveContainer>
    );
    function CustomTooltipLine({ active, payload, label }) {

        if (active) {

            return (
                <div className='toolTipeLine'>
                    <p className='textLine'>{payload[0].value}min</p>
                </div>
            )

        }
    }
}

