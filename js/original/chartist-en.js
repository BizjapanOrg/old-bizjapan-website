var ct_member = new Chartist.Line('.ct-chart-lines', {
    labels: ['2012', '13', '14', '15', '16', '17', '18', '19'],
    series: [{
        name: 'series-3',
        data: [4, 31, 59, 90, 100, 145, 191, 216]
                }]
    },{
    fullWidth: true,
    lineSmooth: false,
    chartPadding: {
      right: 42,
      left: 10
    }
  });
  
  var ct_nationality = new Chartist.Pie('.ct-chart-pie-nationality',{
      labels: ['Japan', 'Oversea'],
      series: [174, 37 ]
      },{
        fullWidth: true
      },{
      labelOffset: 120,
      labelDirection: "explode"
  });
  
  var ct_university = new Chartist.Bar('#ct-university', {
    labels: ['UTokyo', 'Keio', 'Waseda', 'ICU', 'Sophia', 'Others',],
    series: [[62.7, 17.6, 12.3, 3.4, 2.0, 2.0]]
    },{
      fullWidth: true,
      chartPadding: {
        bottom:50,
        top:50
      }
    },{
    seriesBarDistance: 12,
    low: -10,
    high: 10
    },{
      labels:10
  });
  
  
