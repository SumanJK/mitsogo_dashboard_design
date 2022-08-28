import React from 'react'
import {Line} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'



class AreaChart extends React.Component
{
    state= {
        dataLine : {
            labels: ['Jan','Feb','Mar','Apr','May','June'],
            datasets:[
                {
                    label : 'first one',
                    fill : true,
                    backgroundColor : '#fb00ff59',
                    borderColor: "rgba(240, 26, 229,0.9)",
                    pointBackgroundColor: "rgb(255,255,255)",
                    pointHoverBackgroundColor: "rgb(0,0,0)",
                    pointBorderColor:"rgba(240, 26, 229,0.9)" ,
                    pointRadius : 4,
                    pointHoverRadius: 8,
                    data: [5,7,18,13,17, 14]
                },
                {
                    label : 'second one',
                    fill: true,
                    backgroundColor: "#1ad3f04c",
                    borderColor: "#1ad3f0e5",
                    pointBackgroundColor: "rgb(255,255,255)",
                    pointHoverBackgroundColor: "rgb(0,0,0)",
                    pointBorderColor:"#1ae5f0e5",
                    pointRadius : 4,
                    pointHoverRadius: 8,
                    data : [5,10,7,20,11, 25]
                }
            ]
        }
    }
    render()
    {
        return(
            <MDBContainer style={{ width:'72%', height:'60%', transform:'scale(1.25)'}}  >
                <Line style={{ height:'100%'}} data={this.state.dataLine} options={{maintainAspectRatio: true,
    responsive:true,
    plugins: {
      legend: {
        display: true, 
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxHeight:6
        }
      }
    }
     }}/>
            </MDBContainer>
        );
    }
}
export default AreaChart;