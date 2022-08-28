import React from 'react'
import {MDBContainer} from 'mdbreact'
import {Doughnut} from 'react-chartjs-2'
 class PieChart extends React.Component
 {
     state= {
         pie: {
             labels : ['France','Italy','Japan','Canada'],
             datasets : [
                 {
                     data : [25,28,20,25],
                    backgroundColor :[
                      '#80E2FF',
                      '#F49FA8',
                      '#FFDF94',
                      '#B5B3FB',
                    ]
                 }
             ]
         }
     }
     render()
     {
         return(
             <MDBContainer style={{ width:'72%'}}>
                 <Doughnut style={{ transform:'scale(.9)'}} data={this.state.pie} options={{responsive:true, plugins: {
    legend: {
      display: true, 
      position: 'bottom',
      labels: {
        usePointStyle: true,
        boxHeight:8
      }
    }
  }
  }} />
             </MDBContainer>
         );
     }
 }
 export default PieChart;