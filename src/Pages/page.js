
import { useData } from "../Hooks/activityHook";
import { ContainerGraph } from "../components/layout/containerGraph";
import { Header } from "../components/layout/header";
import { VerticalHeader } from "../components/layout/verticalHeader";
import { NameOfPeople } from "../components/name";


export function Page() {
    const [dataAverage, dataPerformance, dataId, dataActivity] = useData()
    return (
        <>
            <Header></Header>
            <VerticalHeader></VerticalHeader>
            <NameOfPeople datas={dataId.userInfos === undefined ? "" : dataId.userInfos.firstName}></NameOfPeople>
            <ContainerGraph dataId={dataId} dataActivity={dataActivity} dataAverage={dataAverage} dataPerformance={dataPerformance} ></ContainerGraph>
        </>
    )
}