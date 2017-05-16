
// TOTALS

var pop_data = [
    [{"date": new Date("1990-06-30"),"value": 4379000},
    {"date": new Date("1991-06-30"),"value": 4420000},
    {"date": new Date("1992-06-30"),"value": 4450000},
    {"date": new Date("1993-06-30"),"value": 4463000},
    {"date": new Date("1994-06-30"),"value": 4473000},
    {"date": new Date("1995-06-30"),"value": 4498000},
    {"date": new Date("1996-06-30"),"value": 4535000},
    {"date": new Date("1997-06-30"),"value": 4569000},
    {"date": new Date("1998-06-30"),"value": 4607000},
        {"date": new Date("1999-06-30"),"value": 4652000},
        {"date": new Date("2000-06-30"),"value": 4704000},
        {"date": new Date("2001-06-30"),"value": 4764000},
        {"date": new Date("2002-06-30"),"value": 4818000},
        {"date": new Date("2003-06-30"),"value": 4874000},
        {"date": new Date("2004-06-30"),"value": 4927000},
        {"date": new Date("2005-06-30"),"value": 4989000},
        {"date": new Date("2006-06-30"),"value": 5061000},
        {"date": new Date("2007-06-30"),"value": 5154000},
        {"date": new Date("2008-06-30"),"value": 5256000},
     {"date": new Date("2009-06-30"),"value": 5372000},
     {"date": new Date("2010-06-30"),"value": 5461000},
     {"date": new Date("2011-06-30"),"value": 5538000},
     {"date": new Date("2012-06-30"),"value": 5633000},
     {"date": new Date("2013-06-30"),"value": 5734000},
     {"date": new Date("2014-06-30"),"value": 5838000},
     {"date": new Date("2015-06-30"),"value": 5947000},
     {"date": new Date("2016-06-30"),"value": 6070000}
 ]
 ]

 MG.data_graphic({
         title: "Victoria's Population",
         description: "The population of Victoria is predicted to reach 10 million by 2050 (<a href='https://www.data.vic.gov.au/data/dataset/state-budget-2017-18-macroeconomic-indicators'>source</a>)",
         data: pop_data,
         width: 600,
         height: 200,
         right: 140,
         yax_count: 3,
         markers: markers,
         min_y: 4000000,
         target: '#pop'
     });


var tot_data = [
    [
     {"date": new Date("2008-06-30"),"value": 43563000000},
     {"date": new Date("2009-06-30"),"value": 45449000000},
     {"date": new Date("2010-06-30"),"value": 51162000000},
     {"date": new Date("2011-06-30"),"value": 53253000000},
     {"date": new Date("2012-06-30"),"value": 54458000000},
     {"date": new Date("2013-06-30"),"value": 54203000000},
     {"date": new Date("2014-06-30"),"value": 60274000000},
     {"date": new Date("2015-06-30"),"value": 61054000000},
     {"date": new Date("2016-06-30"),"value": 64657000000},
     {"date": new Date("2017-06-30"),"value": 68713000000},
     {"date": new Date("2018-06-30"),"value": 70791000000},
     {"date": new Date("2019-06-30"),"value": 75014000000},
     {"date": new Date("2020-06-30"),"value": 76471000000},
     {"date": new Date("2021-06-30"),"value": 79608000000}
 ],
    [
     {"date": new Date("2008-06-30"),"value": 41925000000},
     {"date": new Date("2009-06-30"),"value": 45573000000},
     {"date": new Date("2010-06-30"),"value": 51007000000},
     {"date": new Date("2011-06-30"),"value": 53765000000},
     {"date": new Date("2012-06-30"),"value": 55705000000},
     {"date": new Date("2013-06-30"),"value": 57323000000},
     {"date": new Date("2014-06-30"),"value": 59486000000},
     {"date": new Date("2015-06-30"),"value": 61665000000},
     {"date": new Date("2016-06-30"),"value": 63012000000},
     {"date": new Date("2017-06-30"),"value": 69396000000},
     {"date": new Date("2018-06-30"),"value": 72901000000},
     {"date": new Date("2019-06-30"),"value": 75811000000},
     {"date": new Date("2020-06-30"),"value": 76978000000},
     {"date": new Date("2021-06-30"),"value": 79470000000}
 ]];

 var markers = [{
     'date': new Date('2017-06-30'),
     'label': 'This Budget'
 }];

 MG.data_graphic({
         title: "Budget Totals",
         description: "Consolidated comprehensive operating statement for the financial year ended 30 June - State of Victoria (<a href='https://www.data.vic.gov.au/data/dataset/state-budget-2017-18-whole-of-state-consolidated-comprehensive-operating-statement'>source</a>)",
         data: tot_data,
         width: 600,
         height: 200,
         right: 140,
         yax_count: 3,
         yax_units: '$',
         markers: markers,
         min_y: 40000000000,
         target: '#total-crt',
         legend: ['Revenue','Spending']
     });


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
var health_data = [
    {"date": new Date("2010-06-30"),"value": 0.69},
    {"date": new Date("2011-06-30"),"value": 0.48},
    {"date": new Date("2012-06-30"),"value": 0.65},
    {"date": new Date("2013-06-30"),"value": 0.53},
    {"date": new Date("2014-06-30"),"value": 0.81},
    {"date": new Date("2015-06-30"),"value": 0.69},
    {"date": new Date("2016-06-30"),"value": 0.55}
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
        target: '#health-crt'
    });


    var health_spend = [
        [
        {"date": new Date("2007-06-30"),"value": 8998000000},
        {"date": new Date("2008-06-30"),"value": 9726000000},
         {"date": new Date("2009-06-30"),"value": 10578000000},
         {"date": new Date("2010-06-30"),"value": 11533000000},
         {"date": new Date("2011-06-30"),"value": 12013000000},
         {"date": new Date("2012-06-30"),"value": 12544000000},
         {"date": new Date("2013-06-30"),"value": 12976000000},
         {"date": new Date("2014-06-30"),"value": 13602000000},
         {"date": new Date("2015-06-30"),"value": 14273000000},
         {"date": new Date("2016-06-30"),"value": 15165000000}
     ]
    ];

    MG.data_graphic({
            title: "Spending",
            description: "Victoria Government Spending on Health. (<a href='http://www.abs.gov.au/AUSSTATS/subscriber.nsf/log?openagent&55120do004_201516.xls&5512.0&Data%20Cubes&B92604E9993AC1D9CA25810E001EFE78&0&2015-16&27.04.2017&Latest'>source</a>)",
            data: health_spend,
            width: 600,
            height: 200,
            right: 140,
            target: '#health-spend',
            yax_units: '$',
            yax_count: 3
            //interpolate: d3.curveStep
        });

// COMMUNITY
var comm_data = [
{"date": new Date("2010-06-30"),"value": 0.69},
{"date": new Date("2011-06-30"),"value": 0.48},
{"date": new Date("2012-06-30"),"value": 0.65},
{"date": new Date("2013-06-30"),"value": 0.53},
{"date": new Date("2014-06-30"),"value": 0.81},
{"date": new Date("2015-06-30"),"value": 0.69},
{"date": new Date("2016-06-30"),"value": 0.55}
];

MG.data_graphic({
    title: "Community Outcomes",
    description: "still need to find a good measure. (<a href='#'>source</a>",
    data: health_data,
    format: 'percentage',
    width: 600,
    height: 200,
    right: 140,
    yax_count: 3,
    target: '#community-crt'
});



var comm_spend = [
    [
    {"date": new Date("2007-06-30"),"value": 1950000000},
    {"date": new Date("2008-06-30"),"value": 2321000000},
     {"date": new Date("2009-06-30"),"value": 2375000000},
     {"date": new Date("2010-06-30"),"value": 2859000000},
     {"date": new Date("2011-06-30"),"value": 2751000000},
     {"date": new Date("2012-06-30"),"value": 2960000000},
     {"date": new Date("2013-06-30"),"value": 2010000000},
     {"date": new Date("2014-06-30"),"value": 2074000000},
     {"date": new Date("2015-06-30"),"value": 2555000000},
     {"date": new Date("2016-06-30"),"value": 2195000000}
 ]
];

MG.data_graphic({
        title: "Spending",
        description: "Victoria Government Spending on Community and Housing. (<a href='http://www.abs.gov.au/AUSSTATS/subscriber.nsf/log?openagent&55120do004_201516.xls&5512.0&Data%20Cubes&B92604E9993AC1D9CA25810E001EFE78&0&2015-16&27.04.2017&Latest'>source</a>)",
        data: comm_spend,
        width: 600,
        height: 200,
        right: 140,
        target: '#community-spend',
        yax_units: '$',
        yax_count: 3
        //interpolate: d3.curveStep
    });




// Roads


var road_spend = [
    [
    {"date": new Date("2007-06-30"),"value": 1472000000},
    {"date": new Date("2008-06-30"),"value": 1745000000},
     {"date": new Date("2009-06-30"),"value": 1951000000},
     {"date": new Date("2010-06-30"),"value": 1945000000},
     {"date": new Date("2011-06-30"),"value": 2070000000},
     {"date": new Date("2012-06-30"),"value": 2175000000},
     {"date": new Date("2013-06-30"),"value": 2055000000},
     {"date": new Date("2014-06-30"),"value": 2187000000},
     {"date": new Date("2015-06-30"),"value": 2204000000},
     {"date": new Date("2016-06-30"),"value": 2315000000}
 ]
];

MG.data_graphic({
        title: "Spending",
        description: "Victoria Government Spending on Road Transport. (<a href='http://www.abs.gov.au/AUSSTATS/subscriber.nsf/log?openagent&55120do004_201516.xls&5512.0&Data%20Cubes&B92604E9993AC1D9CA25810E001EFE78&0&2015-16&27.04.2017&Latest'>source</a>)",
        data: road_spend,
        width: 600,
        height: 200,
        right: 140,
        target: '#road-spend',
        yax_units: '$',
        yax_count: 3
        //interpolate: d3.curveStep
    });



    var road_toll = [
        [
        {"date": new Date("2006-06-30"),"value": 396},
        {"date": new Date("2007-06-30"),"value": 352},
        {"date": new Date("2008-06-30"),"value": 363},
         {"date": new Date("2009-06-30"),"value": 347},
         {"date": new Date("2010-06-30"),"value": 341},
         {"date": new Date("2011-06-30"),"value": 335},
         {"date": new Date("2012-06-30"),"value": 307},
         {"date": new Date("2013-06-30"),"value": 274},
         {"date": new Date("2014-06-30"),"value": 333},
         {"date": new Date("2015-06-30"),"value": 304}
     ]
    ];

    MG.data_graphic({
            title: "Traffic Accident Deaths",
            description: "Causes of Death Victoria: Traffic Accident. (<a href='http://www.abs.gov.au/AUSSTATS/subscriber.nsf/log?openagent&3303_3%20underlying%20causes%20of%20death%20(victoria).xls&3303.0&Data%20Cubes&B076FDDDF60F393CCA25803B0017FB45&0&2015&28.09.2016&Latest'>source</a>)",
            data: road_toll,
            width: 600,
            height: 200,
            right: 140,
            target: '#road-toll',
            yax_count: 3
            //interpolate: d3.curveStep
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
