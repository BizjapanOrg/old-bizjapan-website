var data = {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    series: [{
        name: 'series-3',
        data: [4, 31, 59, 90, 100, 145, 191, 216]
                }]
};
var options = {
    height: "100%",
    width: "100%"
};
new Chartist.Line('.ct-chart-lines', data, options);

new Chartist.Pie('.ct-chart-pie-1',{
    labels: ['ヨーロッパ', '台湾', 'その他', '日本', '中国', 'アメリカ', '韓国', 'シンガポール',],
    series: [3, 3, 4, 174, 12, 5, 5, 5, ]
    },options,{
    labelOffset: 120,
    labelDirection: "explode"
});

new Chartist.Pie('.ct-chart-pie-4',{
    labels: ['上智大学', '国際基督教大学', 'その他','東京大学', '慶應義塾大学', '早稲田大学'],
    series: [2.0, 3.4, 2.0, 62.7, 17.6, 12.3]
    },options,{
    labelOffset: 120,
    labelDirection: "explode"
});