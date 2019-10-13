var ct_member = new Chartist.Line(
  '.ct-chart-lines',
  {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    series: [
      {
        name: 'series-3',
        data: [4, 31, 59, 90, 100, 145, 191, 216]
      }
    ]
  },
  {
    fullWidth: true,
    lineSmooth: false,
    chartPadding: {
      right: 42,
      left: 10
    }
  }
);

var ct_nationality = new Chartist.Pie(
  '.ct-chart-pie-nationality',
  {
    labels: ['Japan', 'Oversea'],
    series: [174, 37]
  },
  {
    fullWidth: true
  },
  {
    labelOffset: 120,
    labelDirection: 'explode'
  }
);

var ct_university = new Chartist.Bar(
  '#ct-university',
  {
    labels: ['UTokyo', 'KeioU', 'WasedaU', 'ICU', 'SophiaU', 'Others'],
    series: [[62.7, 17.6, 12.3, 3.4, 2.0, 2.0]]
  },
  {
    fullWidth: true,
    chartPadding: {
      bottom: 10
    }
  },
  {
    seriesBarDistance: 12,
    low: -10,
    high: 10
  },
  {
    labels: 10
  }
);
