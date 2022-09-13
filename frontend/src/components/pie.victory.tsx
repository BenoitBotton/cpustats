import React from "react"
import { VictoryLabel, VictoryPie } from "victory"


type PieData = {
    name: string
    value: number
}[]

export const PieVictoryComponent = ({ pieData }: { pieData: PieData }) => {

    return (
        <>
            <h2 >CPU Usage - Victory</h2>
            <svg viewBox="0 0 400 400" width="100%" height="400">
                <VictoryPie
                    standalone={false}
                    width={400} height={400}
                    data={pieData}
                    x="name"
                    y="value"
                    animate={{
                        duration: 1000
                    }}
                    innerRadius={120}
                    cornerRadius={20}
                    startAngle={160}
                    endAngle={-160}
                    labels={() => null}
                    colorScale={['transparent', '#F26D22']}
                />
                <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={200} y={200}
                    style={{ fontSize: 30, fill: '#999', fontFamily: 'candara' }}

                    text={
                        pieData.filter((pieData: { name: string }) => pieData.name == "L2").map((filterdData: { value: any }) => filterdData.value + "%")
                    }
                />
            </svg>
        </>
    )

}