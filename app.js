

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

var ed_data = [[{"date": new Date("2011-08-28"),"value": 315707},
                {"date": new Date("2012-08-28"),"value": 321752},
                {"date": new Date("2013-08-28"),"value": 330272},
                {"date": new Date("2014-08-28"),"value": 339318},
                {"date": new Date("2015-08-28"),"value": 348862}
               ],
               [{"date": new Date("2011-08-28"),"value": 224222},
                {"date": new Date("2012-08-28"),"value": 223254},
                {"date": new Date("2013-08-28"),"value": 223170},
                {"date": new Date("2014-08-28"),"value": 224231},
                {"date": new Date("2015-08-28"),"value": 226619}
                ]];

        MG.data_graphic({
                title: "Student Numbers",
                description: "This line chart contains multiple lines.",
                data: ed_data,
                width: 1000,
                height: 200,
                right: 140,
                target: '#edu-crt',
                yax_count: 3,
                legend: ['primary','secondary']//,
                //interpolate: d3.curveStep
            });


// HEALTH
var health_data = [{"date": new Date("2011-08-28"),"value": 0.48},
                {"date": new Date("2012-08-28"),"value": 0.65},
                {"date": new Date("2013-08-28"),"value": 0.53},
                {"date": new Date("2014-08-28"),"value": 0.81},
                {"date": new Date("2015-08-28"),"value": 0.69}
                ];

        MG.data_graphic({
                title: "PROM's",
                description: "patient-reported outcomes measures (PROM's)",
                data: health_data,
                format: 'percentage',
                width: 1000,
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
