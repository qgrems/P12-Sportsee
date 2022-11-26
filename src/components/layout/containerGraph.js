import GraphActivity from "../Charts/graphActivity";
import { PerformanceCharts } from "../Charts/graphPerformance";
import { GraphScore } from "../Charts/graphScore";
import AverageCharts from "../Charts/LineGraph";
import { KeyDatas } from "../../components/menuDroite/keyDatas";

/**
 * used to call graph for display
 * @param {datas} id used to recover datas of all graph
 * @returns display all graph
 */
export function ContainerGraph({ dataId, dataActivity, dataAverage, dataPerformance }) {

    return (
        <section className="containerMain">
            <div className="containerGraph">
                <div className="graphActivity">
                    <div>
                        <h3 className='titleActivity'>Activité quotidienne</h3>
                    </div>
                    <GraphActivity datas={dataActivity}></GraphActivity>
                </div>
                <div className="allGraph">
                    <div className="graphAverage">
                        <div className="containerTitle">
                            <h3 className='titleAverage'>Durée moyenne des sessions</h3>
                        </div>
                        <AverageCharts datas={dataAverage}></AverageCharts>
                    </div>
                    <div className="graphPerformance">
                        <PerformanceCharts datas={dataPerformance}></PerformanceCharts>
                    </div>
                    <div className="graphScore">
                        <div>
                            <h3 className='titleActivity'>Score</h3>
                        </div>
                        <GraphScore datas={dataId}></GraphScore>
                    </div>
                </div>
            </div>
            <KeyDatas datas={dataId}></KeyDatas>
        </section>
    )
}