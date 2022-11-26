import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { usePerformance } from '../../Hooks/activityHook';

/**
 * used to display performance graph
 * @returns performance graph
 */
export function PerformanceCharts({ datas }) {

    return (
        <ResponsiveContainer outerRadius={90} width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={datas.data}>
                <PolarGrid stroke="white" radialLines={false} />
                <PolarAngleAxis dataKey="axeX" stroke="white" tickLine={false} dy={3} />
                <Radar dataKey="value" name="Midewke" stroke="#FF0101" fill="#FF0101" fillOpacity={0.8} />
            </RadarChart>
        </ResponsiveContainer>
    );
}
