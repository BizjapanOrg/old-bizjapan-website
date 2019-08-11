var membergrowth = new Chartist.Line('.ct-chart-lines', {
  labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  series: [{
      name: 'series-3',
      data: [4, 31, 59, 90, 100, 145, 191, 216]
              }]
},{
  fullWidth: true,
  lineSmooth: false,
  chartPadding: {
    right: 20,
    left: 10
  },
  plugins: [
    Chartist.plugins.tooltip()
  ]
});

new Chartist.Pie('.ct-chart-pie-1',{
    labels: ['日本', '海外'],
    series: [174, 37 ]
    },{options},{
    labelOffset: 120,
    labelDirection: "explode"
});

new Chartist.Bar('.ct-chart-bar', {
  labels: ['東京大学', '慶應義塾大学', '早稲田大学', '国際基督教大学', '上智大学', 'その他',],
  series: [62.7, 17.6, 12.3, 3.4, 2.0, 2.0]
  }, {
  seriesBarDistance: 12,
  low: -10,
  high: 10
});

new Chartist.Pie('.ct-chart-pie-4',{
    labels: ['上智大学', '国際基督教大学', 'その他','東京大学', '慶應義塾大学', '早稲田大学'],
    series: [2.0, 3.4, 2.0, 62.7, 17.6, 12.3]
    },options,{
    labelOffset: 120,
    labelDirection: "explode"
});