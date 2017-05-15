

// EDUCATION

//   var chart = c3.generate({
//         bindto: '#' + 'edu-crt',
//         size: {
//             width: 720
//         },
//         data: {
//             x: 'year',
//             type: 'area',
//             columns: [
//                 ['year', 2011, 2012, 2013, 2014, 2015],
//                 ['primary', 315707, 321752, 330272, 339318, 348862],
//                 ['secondary', 224222, 223254, 223170, 224231, 226619]
//             ],
//             groups: [['primary', 'secondary']]
//         }
//     });

var ed_data = [
    [
     {"date": new Date("2008-06-30"),"value": .693},
     {"date": new Date("2009-06-30"),"value": .715},
     {"date": new Date("2010-06-30"),"value": .698},
     {"date": new Date("2011-06-30"),"value": .705},
     {"date": new Date("2012-06-30"),"value": .706},
     {"date": new Date("2013-06-30"),"value": .612},
     {"date": new Date("2014-06-30"),"value": .731},
     {"date": new Date("2015-06-30"),"value": .750},
     {"date": new Date("2016-06-30"),"value": .708}
 ],
    [
     {"date": new Date("2008-06-30"),"value": .631},
     {"date": new Date("2009-06-30"),"value": .646},
     {"date": new Date("2010-06-30"),"value": .650},
     {"date": new Date("2011-06-30"),"value": .633},
     {"date": new Date("2012-06-30"),"value": .644},
     {"date": new Date("2013-06-30"),"value": .616},
     {"date": new Date("2014-06-30"),"value": .659},
     {"date": new Date("2015-06-30"),"value": .648},
     {"date": new Date("2016-06-30"),"value": .642}
 ],
   [
    {"date": new Date("2008-06-30"),"value": .626},
    {"date": new Date("2009-06-30"),"value": .620},
    {"date": new Date("2010-06-30"),"value": .617},
    {"date": new Date("2011-06-30"),"value": .623},
    {"date": new Date("2012-06-30"),"value": .645},
    {"date": new Date("2013-06-30"),"value": .606},
    {"date": new Date("2014-06-30"),"value": .647},
    {"date": new Date("2015-06-30"),"value": .650},
    {"date": new Date("2016-06-30"),"value": .624}
    ]
];

        MG.data_graphic({
                title: "NAPLAN",
                description: "Literacy Mean Scores. (<a href='http://reports.acara.edu.au/Home/TimeSeries'>source</a>)",
                data: ed_data,
                format: 'percentage',
                width: 600,
                height: 200,
                right: 140,
                target: '#edu-crt',
                min_y: .5,
                yax_count: 3,
                legend: ['Year 5','Year 7','Year 9']//,
                //interpolate: d3.curveStep
            });


var ed_spend = [
    [
    {"date": new Date("2007-06-30"),"value": 8979000000},
    {"date": new Date("2008-06-30"),"value": 9634000000},
     {"date": new Date("2009-06-30"),"value": 10606000000},
     {"date": new Date("2010-06-30"),"value": 11944000000},
     {"date": new Date("2011-06-30"),"value": 12298000000},
     {"date": new Date("2012-06-30"),"value": 12560000000},
     {"date": new Date("2013-06-30"),"value": 12701000000},
     {"date": new Date("2014-06-30"),"value": 13009000000},
     {"date": new Date("2015-06-30"),"value": 13351000000},
     {"date": new Date("2016-06-30"),"value": 13601000000}
 ]
];

MG.data_graphic({
        title: "Spending",
        description: "Total operating expenses on education, by purpose. (<a href='http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/5518.0.55.0012015-16?OpenDocument'>source</a>)",
        data: ed_spend,
        width: 600,
        height: 200,
        right: 140,
        target: '#edu-spend',
        yax_units: '$',
        yax_count: 3
        //interpolate: d3.curveStep
    });

// HEALTH
var health_data = [{"date": new Date("2011-06-30"),"value": 0.48},
                {"date": new Date("2012-06-30"),"value": 0.65},
                {"date": new Date("2013-06-30"),"value": 0.53},
                {"date": new Date("2014-06-30"),"value": 0.81},
                {"date": new Date("2015-06-30"),"value": 0.69}
                ];

        MG.data_graphic({
                title: "PROM's",
                description: "patient-reported outcomes measures (PROM's) are to be implimented in 2017 <a href='https://www2.health.vic.gov.au/hospitals-and-health-services/quality-safety-service/collecting-patient-reported-outcome-measures/reports'>source</a>",
                data: health_data,
                format: 'percentage',
                width: 600,
                height: 200,
                right: 140,
                yax_count: 3,
                target: '#health-crt',
                legend: ['Health','Roads','Community',
                         'Education','Public Transport','Gender Equality',
                         'Regions','Family Violence']
            });


// LIVE UPDATE

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



var lv = [[{"n": 0,"value": 1.0}],
               [{"n": 0,"value": 0.85}],
               [{"n": 0,"value": 0.7}],
               [{"n": 0,"value": 0.55}],
               [{"n": 0,"value": 0.4}],
               [{"n": 0,"value": 0.25}],
               [{"n": 0,"value": 0.1}],
               [{"n": 0,"value": 0.0}]
              ];

var pal = palette('tol-rainbow', 8).map(function(p){return '#' + p});

MG.data_graphic({
  data: lv,
  height: 300,
  width: 1000,
  right: 140,
  colors: pal,
  x_label: 'Number of Respondants',
  target: '#live-plot',
  x_accessor: 'n',
  y_accessor: 'value'
})

function updatePlot(lv, pal, step) {
    // lv is the data, p priority, n the iteration
    var start = lv[0].length
    var vals = [1.0, 0.85, 0.7, 0.55, 0.4, 0.25, 0.1, 0.0];
    var tmp;


    for (n = start; n < start + step; n++) {

        tmp = shuffleArray(vals)

        for (p = 0; p < 8; p++) {
            var nv = tmp[p] + lv[p][n-1].value;
            lv[p].push({'n': n, 'value': nv})
        }

        MG.data_graphic({
          data: lv,
          height: 300,
          width: 1000,
          right: 140,
          colors: pal,
          target: '#live-plot',
          x_accessor: 'n',
          y_accessor: 'value',
          legend: ['Health','Roads','Community',
                   'Education','Public Transport','Gender Equality',
                   'Regions','Family Violence']
        })
    }
}

updatePlot(lv = lv, pal = pal, step = 10)
