class Graph {
  
  constructor() { 
    this.x=0;
    let _this = this;
  }


  async gettt() {
    let response = await fetch('../../status1');
    let res = await response.json();
    console.log(">>>yVal",res);

    return res; 
  }

 //------------------------------RANDOM PLOT--------------------------------//
  async plotRandom(){
        var dps = []; 
        var dps1 = [];
        var cost = [];// dataPoints
        var chart = new CanvasJS.Chart("chartContainer1", {	
        //  theme : "dark1",
          animationEnabled: true,
          animationDuration: 2000,
          legend: 
          {
            dockInsidePlotArea: true,
            verticalAlign: "top",
            horizontalAlign: "right"               
          },
          title :{
            text: "Load vs Time Graph"
          },
           axisX:{
            title: "Time in hour",
            gridColor: "lightblue" ,
            gridThickness: 2    
           },
          axisY: {
            includeZero: false,
            title: "Load in kW",
         //   interval : 1
          },      
          data: [{
            showInLegend: true, 
            name: "series0",
            legendText: "Load",
            type: "line",
            dataPoints: dps
          },{
            showInLegend: true, 
            name: "series1",
            legendText: "Feed",
            type : "line",
            dataPoints : dps1
          }]  
        });

        var xVal = 1;
        var yVal = 1; 
        var updateInterval = 1000;
        var dataLength = 20; // number of dataPoints visible at any point

        async function get() {
          let response = await fetch('../../status1');
          let res = await response.json();
          return res; 
        }     
        
    var updateChart = async function (count) {
        
          count = count || 1;

          for (var j = 0; j < count; j++) {
            yVal = (Math.abs(Math.random())%5)*5;
            //console.log(">>>yVal",typeof yVal);
            //let res = await get();
            let yVal1 = (Math.abs(Math.random())%5)*5;
            dps.push({
              x: xVal,// xVal,
              y: yVal
            });
            dps1.push({
              x:xVal,
              y:yVal1
            });
            xVal++;
          }
        
          if (dps.length > dataLength) {
               dps.shift();
          }
          if (dps1.length > dataLength) {
               dps1.shift();
          }
          if (cost.length > dataLength) {
               cost.shift();
          }
          chart.render();
        };
        
        updateChart(dataLength);
        setInterval(function(){updateChart()}, updateInterval);
        
    }
 //------------------------------------------------------------------------------//
 async plotRandomBar(){
  var dps = []; 
  var dps1 = [];// dataPoints
  var chart = new CanvasJS.Chart("plotRandom", {	
    legend: 
    {
      dockInsidePlotArea: true,
      verticalAlign: "top",
      horizontalAlign: "right"               
    },
    title :{
      text: "Load vs Time Graph"
    },
     axisX:{
      title: "time in hour",
      gridDashType: "dot",
      gridThickness: 2
     },
    axisY: {
      includeZero: false,
      title: "Load in kW",
   //   interval : 1
    },      
    data: [{
      showInLegend: true, 
      name: "series0",
      legendText: "Load",
      type: "line",
      dataPoints: dps
    },{
      showInLegend: true, 
      name: "series1",
      legendText: "Feed",
      type : "line",
      dataPoints : dps1
    }]  
  });
  
  var xVal = 1;
  var yVal = 1; 
  var updateInterval = 1000;
  var dataLength = 20; // number of dataPoints visible at any point

  async function get() {
    let response = await fetch('http://localhost:8081/status');
    let res = await response.json();
    return res["last_value"]; 
  }

  
  var updateChart = async function (count) {
  
    count = count || 1;
  
    for (var j = 0; j < count; j++) {
      yVal = (Math.abs(Math.random())%5)*5;
      //console.log(">>>yVal",typeof yVal);
      let res = await get();
      let yVal1 = parseInt(res,10);
      dps.push({
        x: xVal,// xVal,
        y: yVal
      });
      dps1.push({
        x:xVal,
        y:yVal1
      })
      xVal++;
    }
  
    if (dps.length > dataLength) {
         dps.shift();
    }
    if (dps1.length > dataLength) {
      dps1.shift();
 }
    chart.render();
  };
  
  updateChart(dataLength);
  setInterval(function(){updateChart()}, updateInterval);
  
}
}