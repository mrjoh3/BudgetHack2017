

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
var health_data = [{"date": new Date("2011-08-28"),"value": 0.78},
                {"date": new Date("2012-08-28"),"value": 0.65},
                {"date": new Date("2013-08-28"),"value": 0.63},
                {"date": new Date("2014-08-28"),"value": 0.71},
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
                target: '#health-crt'
            });
