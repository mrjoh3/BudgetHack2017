




//https://stackoverflow.com/questions/11083345/creating-a-dynamic-grid-of-divs-with-javascript/11083754#11083754
function genDivs(plots, v){ // this is row at a time, v is div per row
    nrows = Math.floor(plots.length / v) + 1

    var e = document.body; // whatever you want to append the rows to:

    var outline = document.createElement("div");
    outline.className = 'col-md-10  center-block'

    for(var r = 0; r < nrows; r++){
      var row = document.createElement("div");
      row.className = "row data";
      for(var i = 0; i < v; i++){
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.id = plots.pop()
            //cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        outline.appendChild(row);
      }
      e.appendChild(outline);
    }


//http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
    }

//var divs = ['p0001','p0002','p0003', 'p0004','p0005','p0006',
//            'p0007','p0008','p0009','p0010','p0011','p0012']
var divs = Array.apply(0, Array(1220)).map(function(_,b) { return b + 1; })
    .map(function(d){return('p'+(d - 1).pad(4))})
    .reverse()


genDivs(divs, 2)




    MG.data_graphic({title: "Total output cost",
                     description: "Community Based Offender Supervision_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 59.5,
            "year": 2008
        },
        {
            "value": 70.700000000000003,
            "year": 2009
        },
        {
            "value": 74.099999999999994,
            "year": 2010
        },
        {
            "value": 85.0,
            "year": 2011
        },
        {
            "value": 95.5,
            "year": 2012
        },
        {
            "value": 114.3,
            "year": 2013
        },
        {
            "value": 114.2,
            "year": 2014
        },
        {
            "value": 127.5,
            "year": 2015
        },
        {
            "value": 159.19999999999999,
            "year": 2016
        },
        {
            "value": 201.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 65.400000000000006,
            "year": 2008
        },
        {
            "value": 65.400000000000006,
            "year": 2009
        },
        {
            "value": 81.799999999999997,
            "year": 2010
        },
        {
            "value": 95.099999999999994,
            "year": 2011
        },
        {
            "value": 121.8,
            "year": 2012
        },
        {
            "value": 123.2,
            "year": 2013
        },
        {
            "value": 128.30000000000001,
            "year": 2014
        },
        {
            "value": 153.30000000000001,
            "year": 2015
        },
        {
            "value": 165.69999999999999,
            "year": 2016
        },
        {
            "value": 202.40000000000001,
            "year": 2017
        },
        {
            "value": 262.19999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0000',
                     min_y: 53.55,
                     max_y: 288.42,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Rate of return to corrective services within two years of discharge from a community corrections order",
                     description: "Community Based Offender Supervision_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 21.300000000000001,
            "year": 2012
        },
        {
            "value": 22.0,
            "year": 2013
        },
        {
            "value": 20.800000000000001,
            "year": 2014
        },
        {
            "value": 24.899999999999999,
            "year": 2015
        },
        {
            "value": 28.899999999999999,
            "year": 2016
        },
        {
            "value": 33.399999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 24.0,
            "year": 2012
        },
        {
            "value": 24.0,
            "year": 2013
        },
        {
            "value": 24.0,
            "year": 2014
        },
        {
            "value": 24.0,
            "year": 2015
        },
        {
            "value": 24.0,
            "year": 2016
        },
        {
            "value": 28.0,
            "year": 2017
        },
        {
            "value": 33.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0001',
                     min_y: 18.72,
                     max_y: 36.74,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Successful completion of parole orders",
                     description: "Community Based Offender Supervision_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 54.5,
            "year": 2014
        },
        {
            "value": 56.100000000000001,
            "year": 2015
        },
        {
            "value": 54.899999999999999,
            "year": 2016
        },
        {
            "value": 74.799999999999997,
            "year": 2017
        }
    ],
    [
        {
            "value": 60.0,
            "year": 2014
        },
        {
            "value": 60.0,
            "year": 2015
        },
        {
            "value": 60.0,
            "year": 2016
        },
        {
            "value": 60.0,
            "year": 2017
        },
        {
            "value": 70.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0002',
                     min_y: 49.05,
                     max_y: 82.28,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Successful completion of reparation orders",
                     description: "Community Based Offender Supervision_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 51.700000000000003,
            "year": 2012
        },
        {
            "value": 64.5,
            "year": 2013
        },
        {
            "value": 72.700000000000003,
            "year": 2014
        },
        {
            "value": 72.700000000000003,
            "year": 2015
        },
        {
            "value": 72.099999999999994,
            "year": 2016
        },
        {
            "value": 70.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 61.0,
            "year": 2012
        },
        {
            "value": 61.0,
            "year": 2013
        },
        {
            "value": 61.0,
            "year": 2014
        },
        {
            "value": 61.0,
            "year": 2015
        },
        {
            "value": 73.0,
            "year": 2016
        },
        {
            "value": 73.0,
            "year": 2017
        },
        {
            "value": 73.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0003',
                     min_y: 46.53,
                     max_y: 80.3,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Successful completion of supervised court orders",
                     description: "Community Based Offender Supervision_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 62.700000000000003,
            "year": 2014
        },
        {
            "value": 60.899999999999999,
            "year": 2015
        },
        {
            "value": 61.700000000000003,
            "year": 2016
        },
        {
            "value": 60.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 62.0,
            "year": 2014
        },
        {
            "value": 62.0,
            "year": 2015
        },
        {
            "value": 62.0,
            "year": 2016
        },
        {
            "value": 62.0,
            "year": 2017
        },
        {
            "value": 64.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0004',
                     min_y: 54.0,
                     max_y: 70.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily offenders with reparation orders",
                     description: "Community Based Offender Supervision_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2725.0,
            "year": 2016
        },
        {
            "value": 2763.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 2635.0,
            "year": 2016
        },
        {
            "value": 2900.0,
            "year": 2017
        },
        {
            "value": 2900.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0005',
                     min_y: 2371.5,
                     max_y: 3190.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily offenders with supervised court orders",
                     description: "Community Based Offender Supervision_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 6012.0,
            "year": 2014
        },
        {
            "value": 7232.0,
            "year": 2015
        },
        {
            "value": 9753.0,
            "year": 2016
        },
        {
            "value": 10423.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 6498.0,
            "year": 2014
        },
        {
            "value": 6498.0,
            "year": 2015
        },
        {
            "value": 8745.0,
            "year": 2016
        },
        {
            "value": 11450.0,
            "year": 2017
        },
        {
            "value": 11450.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0006',
                     min_y: 5410.8,
                     max_y: 12595.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily prisoners on parole",
                     description: "Community Based Offender Supervision_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1338.0,
            "year": 2014
        },
        {
            "value": 1130.0,
            "year": 2015
        },
        {
            "value": 1007.0,
            "year": 2016
        },
        {
            "value": 908.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1300.0,
            "year": 2014
        },
        {
            "value": 1300.0,
            "year": 2015
        },
        {
            "value": 1123.0,
            "year": 2016
        },
        {
            "value": 1000.0,
            "year": 2017
        },
        {
            "value": 1000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0007',
                     min_y: 817.2,
                     max_y: 1471.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community-work hours performed",
                     description: "Community Based Offender Supervision_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 807200.0,
            "year": 2010
        },
        {
            "value": 795600.0,
            "year": 2011
        },
        {
            "value": 713100.0,
            "year": 2012
        },
        {
            "value": 604100.0,
            "year": 2013
        },
        {
            "value": 660400.0,
            "year": 2014
        },
        {
            "value": 739500.0,
            "year": 2015
        },
        {
            "value": 806700.0,
            "year": 2016
        },
        {
            "value": 782000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 850000.0,
            "year": 2010
        },
        {
            "value": 850000.0,
            "year": 2011
        },
        {
            "value": 850000.0,
            "year": 2012
        },
        {
            "value": 850000.0,
            "year": 2013
        },
        {
            "value": 850000.0,
            "year": 2014
        },
        {
            "value": 850000.0,
            "year": 2015
        },
        {
            "value": 850000.0,
            "year": 2016
        },
        {
            "value": 850000.0,
            "year": 2017
        },
        {
            "value": 850000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number',
                     target: '#p0008',
                     min_y: 543690.0,
                     max_y: 935000.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Offenders with a treatment or rehabilitation program condition who have been appropriately referred to a program within set timelines",
                     description: "Community Based Offender Supervision_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 91.400000000000006,
            "year": 2008
        },
        {
            "value": 93.0,
            "year": 2009
        },
        {
            "value": 94.0,
            "year": 2010
        },
        {
            "value": 94.5,
            "year": 2011
        },
        {
            "value": 93.400000000000006,
            "year": 2012
        },
        {
            "value": 93.400000000000006,
            "year": 2013
        },
        {
            "value": 97.0,
            "year": 2014
        },
        {
            "value": 95.099999999999994,
            "year": 2015
        },
        {
            "value": 95.5,
            "year": 2016
        },
        {
            "value": 91.900000000000006,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2008
        },
        {
            "value": 90.0,
            "year": 2009
        },
        {
            "value": 90.0,
            "year": 2010
        },
        {
            "value": 92.0,
            "year": 2011
        },
        {
            "value": 92.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0009',
                     min_y: 81.0,
                     max_y: 106.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Successful completion of violence related programs for family violence offenders in community corrections",
                     description: "Community Based Offender Supervision_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0010',
                     min_y: 72.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Criminal Law Support and Reform_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 21.100000000000001,
            "year": 2015
        },
        {
            "value": 58.299999999999997,
            "year": 2016
        },
        {
            "value": 67.700000000000003,
            "year": 2017
        }
    ],
    [
        {
            "value": 14.5,
            "year": 2015
        },
        {
            "value": 14.5,
            "year": 2016
        },
        {
            "value": 62.399999999999999,
            "year": 2017
        },
        {
            "value": 66.200000000000003,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0011',
                     min_y: 13.05,
                     max_y: 74.47,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Audited medico-legal death investigation reports with no significant diagnostic errors (VIFM)",
                     description: "Criminal Law Support and Reform_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 98.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 96.0,
            "year": 2010
        },
        {
            "value": 94.0,
            "year": 2011
        },
        {
            "value": 94.0,
            "year": 2012
        },
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 89.700000000000003,
            "year": 2014
        },
        {
            "value": 98.0,
            "year": 2015
        },
        {
            "value": 99.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0012',
                     min_y: 80.73,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Teachers and students who are satisfied with education programs delivered by VLRC",
                     description: "Criminal Law Support and Reform_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 88.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0013',
                     min_y: 76.5,
                     max_y: 96.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Clinical forensic medical services by the Victorian Institute of Forensic Medicine (VIFM)",
                     description: "Criminal Law Support and Reform_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2397.0,
            "year": 2013
        },
        {
            "value": 2201.0,
            "year": 2014
        },
        {
            "value": 2269.0,
            "year": 2015
        },
        {
            "value": 2483.0,
            "year": 2016
        },
        {
            "value": 2500.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0014',
                     min_y: 1980.9,
                     max_y: 2750.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community education and consultation sessions conducted by Victorian Law Reform Commission (VLRC)",
                     description: "Criminal Law Support and Reform_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 60.0,
            "year": 2008
        },
        {
            "value": 50.0,
            "year": 2009
        },
        {
            "value": 50.0,
            "year": 2010
        },
        {
            "value": 50.0,
            "year": 2011
        },
        {
            "value": 50.0,
            "year": 2012
        },
        {
            "value": 92.0,
            "year": 2013
        },
        {
            "value": 156.0,
            "year": 2014
        },
        {
            "value": 103.0,
            "year": 2015
        },
        {
            "value": 174.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 50.0,
            "year": 2008
        },
        {
            "value": 50.0,
            "year": 2009
        },
        {
            "value": 50.0,
            "year": 2010
        },
        {
            "value": 50.0,
            "year": 2011
        },
        {
            "value": 50.0,
            "year": 2012
        },
        {
            "value": 50.0,
            "year": 2013
        },
        {
            "value": 60.0,
            "year": 2014
        },
        {
            "value": 60.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0015',
                     min_y: 45.0,
                     max_y: 191.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Law reform projects conducted by VLRC",
                     description: "Criminal Law Support and Reform_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 5.0,
            "year": 2008
        },
        {
            "value": 4.0,
            "year": 2009
        },
        {
            "value": 4.0,
            "year": 2010
        },
        {
            "value": 4.0,
            "year": 2011
        },
        {
            "value": 2.0,
            "year": 2012
        },
        {
            "value": 3.0,
            "year": 2013
        },
        {
            "value": 6.0,
            "year": 2014
        },
        {
            "value": 5.0,
            "year": 2015
        },
        {
            "value": 4.0,
            "year": 2016
        },
        {
            "value": 3.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 4.0,
            "year": 2008
        },
        {
            "value": 4.0,
            "year": 2009
        },
        {
            "value": 4.0,
            "year": 2010
        },
        {
            "value": 4.0,
            "year": 2011
        },
        {
            "value": 4.0,
            "year": 2012
        },
        {
            "value": 3.0,
            "year": 2013
        },
        {
            "value": 3.0,
            "year": 2014
        },
        {
            "value": 3.0,
            "year": 2015
        },
        {
            "value": 3.0,
            "year": 2016
        },
        {
            "value": 3.0,
            "year": 2017
        },
        {
            "value": 3.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0016',
                     min_y: 1.8,
                     max_y: 6.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Medico-legal death investigations (VIFM)",
                     description: "Criminal Law Support and Reform_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 4550.0,
            "year": 2010
        },
        {
            "value": 4530.0,
            "year": 2011
        },
        {
            "value": 4954.0,
            "year": 2013
        },
        {
            "value": 6030.0,
            "year": 2014
        },
        {
            "value": 6224.0,
            "year": 2015
        },
        {
            "value": 6151.0,
            "year": 2016
        },
        {
            "value": 6200.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 4992.0,
            "year": 2010
        },
        {
            "value": 4992.0,
            "year": 2011
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0017',
                     min_y: 4077.0,
                     max_y: 6846.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of Sentencing Advisory Council (SAC) publications",
                     description: "Criminal Law Support and Reform_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 6.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 6.0,
            "year": 2017
        },
        {
            "value": 6.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0018',
                     min_y: 5.4,
                     max_y: 6.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Provision of expert forensic medical and scientific evidence in court (VIFM)",
                     description: "Criminal Law Support and Reform_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 257.0,
            "year": 2012
        },
        {
            "value": 227.0,
            "year": 2013
        },
        {
            "value": 211.0,
            "year": 2014
        },
        {
            "value": 191.0,
            "year": 2015
        },
        {
            "value": 174.0,
            "year": 2016
        },
        {
            "value": 250.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 250.0,
            "year": 2012
        },
        {
            "value": 250.0,
            "year": 2013
        },
        {
            "value": 250.0,
            "year": 2014
        },
        {
            "value": 250.0,
            "year": 2015
        },
        {
            "value": 250.0,
            "year": 2016
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0019',
                     min_y: 156.6,
                     max_y: 282.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Medical and scientific investigations on the body of the deceased completed within two days  (VIFM)",
                     description: "Criminal Law Support and Reform_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 57.0,
            "year": 2009
        },
        {
            "value": 76.0,
            "year": 2010
        },
        {
            "value": 81.200000000000003,
            "year": 2011
        },
        {
            "value": 81.0,
            "year": 2012
        },
        {
            "value": 82.0,
            "year": 2013
        },
        {
            "value": 72.400000000000006,
            "year": 2014
        },
        {
            "value": 76.700000000000003,
            "year": 2015
        },
        {
            "value": 79.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 65.0,
            "year": 2009
        },
        {
            "value": 65.0,
            "year": 2010
        },
        {
            "value": 65.0,
            "year": 2011
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0020',
                     min_y: 51.3,
                     max_y: 93.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Medico-legal death investigation reports issued within agreed period (VIFM)",
                     description: "Criminal Law Support and Reform_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 67.0,
            "year": 2008
        },
        {
            "value": 62.0,
            "year": 2009
        },
        {
            "value": 54.0,
            "year": 2010
        },
        {
            "value": 60.600000000000001,
            "year": 2011
        },
        {
            "value": 59.0,
            "year": 2012
        },
        {
            "value": 61.0,
            "year": 2013
        },
        {
            "value": 60.0,
            "year": 2014
        },
        {
            "value": 65.700000000000003,
            "year": 2015
        },
        {
            "value": 67.400000000000006,
            "year": 2016
        },
        {
            "value": 70.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 70.0,
            "year": 2008
        },
        {
            "value": 70.0,
            "year": 2009
        },
        {
            "value": 70.0,
            "year": 2010
        },
        {
            "value": 70.0,
            "year": 2011
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0021',
                     min_y: 48.6,
                     max_y: 77.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Dispute Resolution and Civil Justice Support Services_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 46.100000000000001,
            "year": 2015
        },
        {
            "value": 46.5,
            "year": 2016
        },
        {
            "value": 47.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 45.0,
            "year": 2015
        },
        {
            "value": 45.0,
            "year": 2016
        },
        {
            "value": 43.799999999999997,
            "year": 2017
        },
        {
            "value": 48.899999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0022',
                     min_y: 39.42,
                     max_y: 53.79,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Client satisfaction with quality of legal advice provided (VGSO)",
                     description: "Dispute Resolution and Civil Justice Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 77.0,
            "year": 2010
        },
        {
            "value": 88.0,
            "year": 2011
        },
        {
            "value": 86.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 78.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 88.0,
            "year": 2016
        },
        {
            "value": 84.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2010
        },
        {
            "value": 80.0,
            "year": 2011
        },
        {
            "value": 80.0,
            "year": 2012
        },
        {
            "value": 80.0,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0023',
                     min_y: 69.3,
                     max_y: 96.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Dispute resolution services provided in the Dispute Settlement Centre of Victoria (DSCV)",
                     description: "Dispute Resolution and Civil Justice Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 17708.0,
            "year": 2011
        },
        {
            "value": 20216.0,
            "year": 2012
        },
        {
            "value": 20216.0,
            "year": 2014
        },
        {
            "value": 22311.0,
            "year": 2015
        },
        {
            "value": 23038.0,
            "year": 2016
        },
        {
            "value": 23650.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 16400.0,
            "year": 2011
        },
        {
            "value": 16400.0,
            "year": 2012
        },
        {
            "value": 21500.0,
            "year": 2014
        },
        {
            "value": 21500.0,
            "year": 2015
        },
        {
            "value": 21500.0,
            "year": 2016
        },
        {
            "value": 21500.0,
            "year": 2017
        },
        {
            "value": 21500.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0024',
                     min_y: 14760.0,
                     max_y: 26015.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Overall client satisfaction rate (DSCV)",
                     description: "Dispute Resolution and Civil Justice Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 84.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0025',
                     min_y: 75.6,
                     max_y: 93.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Settlement rate of mediation (DSCV)",
                     description: "Dispute Resolution and Civil Justice Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 86.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0026',
                     min_y: 76.5,
                     max_y: 94.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Client satisfaction with timeliness of legal advice provided (VGSO)",
                     description: "Dispute Resolution and Civil Justice Support Services_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 77.0,
            "year": 2010
        },
        {
            "value": 88.0,
            "year": 2011
        },
        {
            "value": 86.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 78.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 84.0,
            "year": 2016
        },
        {
            "value": 81.599999999999994,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2010
        },
        {
            "value": 80.0,
            "year": 2011
        },
        {
            "value": 80.0,
            "year": 2012
        },
        {
            "value": 80.0,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0027',
                     min_y: 69.3,
                     max_y: 96.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Intake and mediation services conducted within agreed timeframes by the DSCV",
                     description: "Dispute Resolution and Civil Justice Support Services_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 84.0,
            "year": 2011
        },
        {
            "value": 87.0,
            "year": 2012
        },
        {
            "value": 87.0,
            "year": 2013
        },
        {
            "value": 87.0,
            "year": 2014
        },
        {
            "value": 86.0,
            "year": 2015
        },
        {
            "value": 84.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 82.0,
            "year": 2011
        },
        {
            "value": 82.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0028',
                     min_y: 73.8,
                     max_y: 95.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Emergency Management Capability_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 187.5,
            "year": 2008
        },
        {
            "value": 204.0,
            "year": 2009
        },
        {
            "value": 206.5,
            "year": 2010
        },
        {
            "value": 264.80000000000001,
            "year": 2011
        },
        {
            "value": 236.0,
            "year": 2012
        },
        {
            "value": 259.69999999999999,
            "year": 2013
        },
        {
            "value": 956.79999999999995,
            "year": 2014
        },
        {
            "value": 952.20000000000005,
            "year": 2015
        },
        {
            "value": 1041.7,
            "year": 2016
        },
        {
            "value": 1185.7,
            "year": 2017
        }
    ],
    [
        {
            "value": 200.0,
            "year": 2008
        },
        {
            "value": 200.0,
            "year": 2009
        },
        {
            "value": 217.5,
            "year": 2010
        },
        {
            "value": 232.59999999999999,
            "year": 2011
        },
        {
            "value": 273.89999999999998,
            "year": 2012
        },
        {
            "value": 296.80000000000001,
            "year": 2013
        },
        {
            "value": 871.29999999999995,
            "year": 2014
        },
        {
            "value": 933.10000000000002,
            "year": 2015
        },
        {
            "value": 955.39999999999998,
            "year": 2016
        },
        {
            "value": 1095.0,
            "year": 2017
        },
        {
            "value": 1138.7,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0029',
                     min_y: 168.75,
                     max_y: 1304.27,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Level 3 Incident Controller trained staff and volunteers",
                     description: "Emergency Management Capability_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 138.0,
            "year": 2013
        },
        {
            "value": 147.0,
            "year": 2014
        },
        {
            "value": 152.0,
            "year": 2015
        },
        {
            "value": 153.0,
            "year": 2016
        },
        {
            "value": 163.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 129.0,
            "year": 2013
        },
        {
            "value": 129.0,
            "year": 2014
        },
        {
            "value": 129.0,
            "year": 2015
        },
        {
            "value": 129.0,
            "year": 2016
        },
        {
            "value": 129.0,
            "year": 2017
        },
        {
            "value": 96.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0030',
                     min_y: 86.4,
                     max_y: 179.3,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Multi agency joint procurements of systems or equipment",
                     description: "Emergency Management Capability_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0031',
                     min_y: 1.8,
                     max_y: 2.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Road crash rescue accredited brigades/units",
                     description: "Emergency Management Capability_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 130.0,
            "year": 2013
        },
        {
            "value": 130.0,
            "year": 2014
        },
        {
            "value": 130.0,
            "year": 2015
        },
        {
            "value": 130.0,
            "year": 2016
        },
        {
            "value": 130.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 131.0,
            "year": 2013
        },
        {
            "value": 130.0,
            "year": 2014
        },
        {
            "value": 130.0,
            "year": 2015
        },
        {
            "value": 130.0,
            "year": 2016
        },
        {
            "value": 130.0,
            "year": 2017
        },
        {
            "value": 131.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0032',
                     min_y: 117.0,
                     max_y: 144.1,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Structural fire confined to room of origin",
                     description: "Emergency Management Capability_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 81.0,
            "year": 2013
        },
        {
            "value": 81.799999999999997,
            "year": 2014
        },
        {
            "value": 84.299999999999997,
            "year": 2015
        },
        {
            "value": 83.700000000000003,
            "year": 2016
        },
        {
            "value": 79.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0033',
                     min_y: 71.1,
                     max_y: 92.73,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Permanent operational staff",
                     description: "Emergency Management Capability_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2787.3000000000002,
            "year": 2014
        },
        {
            "value": 2906.0,
            "year": 2015
        },
        {
            "value": 3100.0,
            "year": 2016
        },
        {
            "value": 3259.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 2833.0,
            "year": 2014
        },
        {
            "value": 2833.0,
            "year": 2015
        },
        {
            "value": 2991.0,
            "year": 2016
        },
        {
            "value": 3203.0,
            "year": 2017
        },
        {
            "value": 3385.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0034',
                     min_y: 2508.57,
                     max_y: 3723.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Permanent support staff",
                     description: "Emergency Management Capability_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1524.0,
            "year": 2013
        },
        {
            "value": 1447.3,
            "year": 2014
        },
        {
            "value": 1401.0,
            "year": 2015
        },
        {
            "value": 1396.0,
            "year": 2016
        },
        {
            "value": 1405.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1385.0,
            "year": 2013
        },
        {
            "value": 1385.0,
            "year": 2014
        },
        {
            "value": 1385.0,
            "year": 2015
        },
        {
            "value": 1385.0,
            "year": 2016
        },
        {
            "value": 1359.0,
            "year": 2017
        },
        {
            "value": 1406.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0035',
                     min_y: 1223.1,
                     max_y: 1676.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Volunteers – Operational",
                     description: "Emergency Management Capability_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 41416.0,
            "year": 2013
        },
        {
            "value": 41557.0,
            "year": 2014
        },
        {
            "value": 38799.0,
            "year": 2015
        },
        {
            "value": 39381.0,
            "year": 2016
        },
        {
            "value": 39206.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0036',
                     min_y: 34919.1,
                     max_y: 45712.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Volunteers – Support",
                     description: "Emergency Management Capability_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 17312.0,
            "year": 2013
        },
        {
            "value": 20191.799999999999,
            "year": 2014
        },
        {
            "value": 22570.0,
            "year": 2015
        },
        {
            "value": 21877.0,
            "year": 2016
        },
        {
            "value": 21456.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0037',
                     min_y: 15580.8,
                     max_y: 24827.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Emergency response times meeting benchmarks – emergency medical response",
                     description: "Emergency Management Capability_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 93.5,
            "year": 2014
        },
        {
            "value": 94.200000000000003,
            "year": 2015
        },
        {
            "value": 94.599999999999994,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 90.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 90.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0038',
                     min_y: 81.0,
                     max_y: 104.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Emergency response times meeting benchmarks – road accident rescue response",
                     description: "Emergency Management Capability_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 91.0,
            "year": 2014
        },
        {
            "value": 92.900000000000006,
            "year": 2015
        },
        {
            "value": 91.5,
            "year": 2016
        },
        {
            "value": 88.700000000000003,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 90.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 90.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0039',
                     min_y: 79.83,
                     max_y: 102.19,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Emergency response times meeting benchmarks – structural fires ",
                     description: "Emergency Management Capability_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 88.299999999999997,
            "year": 2014
        },
        {
            "value": 87.700000000000003,
            "year": 2015
        },
        {
            "value": 87.900000000000006,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 90.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 90.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0040',
                     min_y: 78.93,
                     max_y: 99.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Gambling, Liquor and Racing_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 111.40000000000001,
            "year": 2011
        },
        {
            "value": 98.200000000000003,
            "year": 2012
        },
        {
            "value": 105.0,
            "year": 2013
        },
        {
            "value": 100.90000000000001,
            "year": 2014
        },
        {
            "value": 115.09999999999999,
            "year": 2015
        },
        {
            "value": 116.3,
            "year": 2016
        },
        {
            "value": 133.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 165.59999999999999,
            "year": 2011
        },
        {
            "value": 165.59999999999999,
            "year": 2012
        },
        {
            "value": 140.80000000000001,
            "year": 2013
        },
        {
            "value": 109.09999999999999,
            "year": 2014
        },
        {
            "value": 115.90000000000001,
            "year": 2015
        },
        {
            "value": 127.5,
            "year": 2016
        },
        {
            "value": 119.40000000000001,
            "year": 2017
        },
        {
            "value": 128.80000000000001,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0041',
                     min_y: 88.38,
                     max_y: 182.16,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Liquor and gambling licensing client satisfaction (VCGLR)",
                     description: "Gambling, Liquor and Racing_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 84.0,
            "year": 2014
        },
        {
            "value": 84.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0042',
                     min_y: 72.0,
                     max_y: 104.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Liquor and gambling approvals, licence, permit applications and variations determined by VCGLR",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 46574.0,
            "year": 2014
        },
        {
            "value": 46020.0,
            "year": 2015
        },
        {
            "value": 46400.0,
            "year": 2016
        },
        {
            "value": 46000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 43000.0,
            "year": 2014
        },
        {
            "value": 43000.0,
            "year": 2015
        },
        {
            "value": 46000.0,
            "year": 2016
        },
        {
            "value": 46000.0,
            "year": 2017
        },
        {
            "value": 46000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0043',
                     min_y: 38700.0,
                     max_y: 51231.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Liquor and gambling information and advice (VCGLR)",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 131620.0,
            "year": 2014
        },
        {
            "value": 133104.0,
            "year": 2015
        },
        {
            "value": 126188.0,
            "year": 2016
        },
        {
            "value": 128000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 128000.0,
            "year": 2014
        },
        {
            "value": 128000.0,
            "year": 2015
        },
        {
            "value": 128000.0,
            "year": 2016
        },
        {
            "value": 128000.0,
            "year": 2017
        },
        {
            "value": 128000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0044',
                     min_y: 113569.2,
                     max_y: 146414.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Liquor and gambling inspections completed by the VCGLR – metropolitan",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 11835.0,
            "year": 2016
        },
        {
            "value": 11260.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 11400.0,
            "year": 2016
        },
        {
            "value": 11400.0,
            "year": 2017
        },
        {
            "value": 11400.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0045',
                     min_y: 10134.0,
                     max_y: 13018.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Liquor and gambling inspections completed by the VCGLR – regional",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2512.0,
            "year": 2016
        },
        {
            "value": 1440.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1600.0,
            "year": 2016
        },
        {
            "value": 1600.0,
            "year": 2017
        },
        {
            "value": 1600.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0046',
                     min_y: 1296.0,
                     max_y: 2763.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Office of Liquor, Gaming and Racing briefings processed",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 823.0,
            "year": 2008
        },
        {
            "value": 992.0,
            "year": 2009
        },
        {
            "value": 971.0,
            "year": 2010
        },
        {
            "value": 946.0,
            "year": 2011
        },
        {
            "value": 876.0,
            "year": 2012
        },
        {
            "value": 759.0,
            "year": 2013
        },
        {
            "value": 715.0,
            "year": 2014
        },
        {
            "value": 648.0,
            "year": 2015
        },
        {
            "value": 700.0,
            "year": 2016
        },
        {
            "value": 700.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 700.0,
            "year": 2008
        },
        {
            "value": 700.0,
            "year": 2009
        },
        {
            "value": 900.0,
            "year": 2010
        },
        {
            "value": 900.0,
            "year": 2011
        },
        {
            "value": 900.0,
            "year": 2012
        },
        {
            "value": 900.0,
            "year": 2013
        },
        {
            "value": 700.0,
            "year": 2014
        },
        {
            "value": 700.0,
            "year": 2015
        },
        {
            "value": 700.0,
            "year": 2016
        },
        {
            "value": 700.0,
            "year": 2017
        },
        {
            "value": 700.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0047',
                     min_y: 583.2,
                     max_y: 1091.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Operations with co-regulators to identify licensees supplying alcohol to minors or persons who are intoxicated",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 35.0,
            "year": 2016
        },
        {
            "value": 30.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 20.0,
            "year": 2016
        },
        {
            "value": 20.0,
            "year": 2017
        },
        {
            "value": 20.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0048',
                     min_y: 18.0,
                     max_y: 38.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Racing industry development initiatives delivered by the Victorian Racing Industry Fund",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 7.0,
            "year": 2012
        },
        {
            "value": 7.0,
            "year": 2013
        },
        {
            "value": 7.0,
            "year": 2014
        },
        {
            "value": 7.0,
            "year": 2015
        },
        {
            "value": 7.0,
            "year": 2016
        },
        {
            "value": 7.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 7.0,
            "year": 2012
        },
        {
            "value": 7.0,
            "year": 2013
        },
        {
            "value": 7.0,
            "year": 2014
        },
        {
            "value": 7.0,
            "year": 2015
        },
        {
            "value": 7.0,
            "year": 2016
        },
        {
            "value": 7.0,
            "year": 2017
        },
        {
            "value": 7.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0049',
                     min_y: 6.3,
                     max_y: 7.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Racing matters processed (including licences, permits and grant applications)",
                     description: "Gambling, Liquor and Racing_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1994.0,
            "year": 2008
        },
        {
            "value": 667.0,
            "year": 2009
        },
        {
            "value": 183.0,
            "year": 2010
        },
        {
            "value": 226.0,
            "year": 2011
        },
        {
            "value": 297.0,
            "year": 2012
        },
        {
            "value": 284.0,
            "year": 2013
        },
        {
            "value": 288.0,
            "year": 2014
        },
        {
            "value": 269.0,
            "year": 2015
        },
        {
            "value": 299.0,
            "year": 2016
        },
        {
            "value": 292.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 800.0,
            "year": 2008
        },
        {
            "value": 800.0,
            "year": 2009
        },
        {
            "value": 160.0,
            "year": 2010
        },
        {
            "value": 225.0,
            "year": 2011
        },
        {
            "value": 225.0,
            "year": 2012
        },
        {
            "value": 240.0,
            "year": 2013
        },
        {
            "value": 274.0,
            "year": 2014
        },
        {
            "value": 274.0,
            "year": 2015
        },
        {
            "value": 274.0,
            "year": 2016
        },
        {
            "value": 274.0,
            "year": 2017
        },
        {
            "value": 274.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0050',
                     min_y: 144.0,
                     max_y: 2193.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Calls to VCGLR client services answered within 60 seconds",
                     description: "Gambling, Liquor and Racing_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 98.400000000000006,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 84.400000000000006,
            "year": 2016
        },
        {
            "value": 70.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 96.0,
            "year": 2014
        },
        {
            "value": 96.0,
            "year": 2015
        },
        {
            "value": 96.0,
            "year": 2016
        },
        {
            "value": 96.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0051',
                     min_y: 63.0,
                     max_y: 108.24,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Gamblers Help Service clients who receive a service within five days of referral (VRGF)",
                     description: "Gambling, Liquor and Racing_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 95.5,
            "year": 2008
        },
        {
            "value": 97.200000000000003,
            "year": 2009
        },
        {
            "value": 96.700000000000003,
            "year": 2010
        },
        {
            "value": 87.0,
            "year": 2011
        },
        {
            "value": 97.0,
            "year": 2012
        },
        {
            "value": 99.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 99.299999999999997,
            "year": 2016
        },
        {
            "value": 96.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2008
        },
        {
            "value": 90.0,
            "year": 2009
        },
        {
            "value": 90.0,
            "year": 2010
        },
        {
            "value": 90.0,
            "year": 2011
        },
        {
            "value": 90.0,
            "year": 2012
        },
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 98.0,
            "year": 2015
        },
        {
            "value": 98.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        },
        {
            "value": 96.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0052',
                     min_y: 78.3,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Liquor and gambling approvals, licence, permit applications and variations completed within set time (VCGLR)",
                     description: "Gambling, Liquor and Racing_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 94.200000000000003,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0053',
                     min_y: 72.0,
                     max_y: 103.62,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Infringements and Warrants_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 132.90000000000001,
            "year": 2008
        },
        {
            "value": 167.09999999999999,
            "year": 2009
        },
        {
            "value": 171.09999999999999,
            "year": 2010
        },
        {
            "value": 180.5,
            "year": 2011
        },
        {
            "value": 177.5,
            "year": 2012
        },
        {
            "value": 187.69999999999999,
            "year": 2013
        },
        {
            "value": 180.30000000000001,
            "year": 2014
        },
        {
            "value": 191.09999999999999,
            "year": 2015
        },
        {
            "value": 205.09999999999999,
            "year": 2016
        },
        {
            "value": 217.09999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 185.90000000000001,
            "year": 2008
        },
        {
            "value": 185.90000000000001,
            "year": 2009
        },
        {
            "value": 220.0,
            "year": 2010
        },
        {
            "value": 226.90000000000001,
            "year": 2011
        },
        {
            "value": 230.09999999999999,
            "year": 2012
        },
        {
            "value": 222.09999999999999,
            "year": 2013
        },
        {
            "value": 214.90000000000001,
            "year": 2014
        },
        {
            "value": 221.40000000000001,
            "year": 2015
        },
        {
            "value": 229.19999999999999,
            "year": 2016
        },
        {
            "value": 234.40000000000001,
            "year": 2017
        },
        {
            "value": 217.59999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0054',
                     min_y: 119.61,
                     max_y: 257.84,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Infringement notices processed",
                     description: "Infringements and Warrants_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2.2799999999999998,
            "year": 2008
        },
        {
            "value": 2.4900000000000002,
            "year": 2009
        },
        {
            "value": 2.7200000000000002,
            "year": 2010
        },
        {
            "value": 2.9399999999999999,
            "year": 2011
        },
        {
            "value": 3.52,
            "year": 2013
        },
        {
            "value": 3.0600000000000001,
            "year": 2014
        },
        {
            "value": 3.2999999999999998,
            "year": 2015
        },
        {
            "value": 3.1000000000000001,
            "year": 2016
        },
        {
            "value": 3.1000000000000001,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (million)' ,
                     target: '#p0055',
                     min_y: 2.052,
                     max_y: 3.872,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Warrants actioned",
                     description: "Infringements and Warrants_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 780770.0,
            "year": 2010
        },
        {
            "value": 1021235.0,
            "year": 2011
        },
        {
            "value": 1110586.0,
            "year": 2012
        },
        {
            "value": 1110586.0,
            "year": 2013
        },
        {
            "value": 964043.0,
            "year": 2014
        },
        {
            "value": 962721.0,
            "year": 2015
        },
        {
            "value": 1001880.0,
            "year": 2016
        },
        {
            "value": 995000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 770000.0,
            "year": 2010
        },
        {
            "value": 770000.0,
            "year": 2011
        },
        {
            "value": 800000.0,
            "year": 2012
        },
        {
            "value": 995000.0,
            "year": 2013
        },
        {
            "value": 995000.0,
            "year": 2014
        },
        {
            "value": 995000.0,
            "year": 2015
        },
        {
            "value": 995000.0,
            "year": 2016
        },
        {
            "value": 995000.0,
            "year": 2017
        },
        {
            "value": 995000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0056',
                     min_y: 693000.0,
                     max_y: 1221644.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Confiscated assets sold or destroyed within 90 days",
                     description: "Infringements and Warrants_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 85.0,
            "year": 2008
        },
        {
            "value": 88.0,
            "year": 2009
        },
        {
            "value": 92.0,
            "year": 2010
        },
        {
            "value": 92.0,
            "year": 2011
        },
        {
            "value": 86.599999999999994,
            "year": 2012
        },
        {
            "value": 88.599999999999994,
            "year": 2013
        },
        {
            "value": 97.200000000000003,
            "year": 2014
        },
        {
            "value": 75.400000000000006,
            "year": 2015
        },
        {
            "value": 84.099999999999994,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2008
        },
        {
            "value": 80.0,
            "year": 2009
        },
        {
            "value": 80.0,
            "year": 2010
        },
        {
            "value": 80.0,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0057',
                     min_y: 67.86,
                     max_y: 106.92,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Policing and Crime Prevention_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1731.5,
            "year": 2009
        },
        {
            "value": 1857.0999999999999,
            "year": 2010
        },
        {
            "value": 1959.7,
            "year": 2011
        },
        {
            "value": 2092.9000000000001,
            "year": 2012
        },
        {
            "value": 2291.0,
            "year": 2014
        },
        {
            "value": 2479.3000000000002,
            "year": 2015
        },
        {
            "value": 2620.0999999999999,
            "year": 2016
        },
        {
            "value": 2819.4000000000001,
            "year": 2017
        }
    ],
    [
        {
            "value": 1892.0999999999999,
            "year": 2009
        },
        {
            "value": 1892.0999999999999,
            "year": 2010
        },
        {
            "value": 1990.8,
            "year": 2011
        },
        {
            "value": 2088.6999999999998,
            "year": 2012
        },
        {
            "value": 2523.5,
            "year": 2014
        },
        {
            "value": 2523.5,
            "year": 2015
        },
        {
            "value": 2523.5,
            "year": 2016
        },
        {
            "value": 2728.8000000000002,
            "year": 2017
        },
        {
            "value": 3037.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0058',
                     min_y: 1558.35,
                     max_y: 3340.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community Crime Prevention grant payments properly acquitted",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0059',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Perceptions of safety – walking locally at night",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 50.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0060',
                     min_y: 45.0,
                     max_y: 55.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of community satisfied with policing services (general satisfaction)",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 69.700000000000003,
            "year": 2008
        },
        {
            "value": 67.200000000000003,
            "year": 2009
        },
        {
            "value": 66.099999999999994,
            "year": 2010
        },
        {
            "value": 73.0,
            "year": 2011
        },
        {
            "value": 75.900000000000006,
            "year": 2012
        },
        {
            "value": 78.200000000000003,
            "year": 2013
        },
        {
            "value": 76.900000000000006,
            "year": 2014
        },
        {
            "value": 77.799999999999997,
            "year": 2015
        },
        {
            "value": 74.799999999999997,
            "year": 2016
        },
        {
            "value": 75.099999999999994,
            "year": 2017
        }
    ],
    [
        {
            "value": 72.0,
            "year": 2008
        },
        {
            "value": 72.0,
            "year": 2009
        },
        {
            "value": 69.0,
            "year": 2010
        },
        {
            "value": 66.0,
            "year": 2011
        },
        {
            "value": 68.0,
            "year": 2012
        },
        {
            "value": 70.0,
            "year": 2013
        },
        {
            "value": 70.0,
            "year": 2014
        },
        {
            "value": 70.0,
            "year": 2015
        },
        {
            "value": 75.0,
            "year": 2016
        },
        {
            "value": 77.0,
            "year": 2017
        },
        {
            "value": 77.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0061',
                     min_y: 59.4,
                     max_y: 86.02,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of drivers tested by road safety cameras who comply with posted speed limits",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 99.700000000000003,
            "year": 2008
        },
        {
            "value": 99.599999999999994,
            "year": 2009
        },
        {
            "value": 99.700000000000003,
            "year": 2010
        },
        {
            "value": 99.799999999999997,
            "year": 2011
        },
        {
            "value": 99.799999999999997,
            "year": 2012
        },
        {
            "value": 99.900000000000006,
            "year": 2013
        },
        {
            "value": 99.900000000000006,
            "year": 2014
        },
        {
            "value": 99.5,
            "year": 2015
        },
        {
            "value": 99.900000000000006,
            "year": 2016
        },
        {
            "value": 99.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 99.0,
            "year": 2008
        },
        {
            "value": 99.0,
            "year": 2009
        },
        {
            "value": 99.0,
            "year": 2010
        },
        {
            "value": 99.0,
            "year": 2011
        },
        {
            "value": 99.5,
            "year": 2012
        },
        {
            "value": 99.5,
            "year": 2013
        },
        {
            "value": 99.5,
            "year": 2014
        },
        {
            "value": 99.5,
            "year": 2015
        },
        {
            "value": 99.5,
            "year": 2016
        },
        {
            "value": 99.5,
            "year": 2017
        },
        {
            "value": 99.5,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0062',
                     min_y: 89.1,
                     max_y: 109.89,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of drivers tested who comply with alcohol limits",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 99.5,
            "year": 2008
        },
        {
            "value": 99.0,
            "year": 2009
        },
        {
            "value": 99.700000000000003,
            "year": 2010
        },
        {
            "value": 99.700000000000003,
            "year": 2011
        },
        {
            "value": 99.799999999999997,
            "year": 2012
        },
        {
            "value": 99.799999999999997,
            "year": 2013
        },
        {
            "value": 99.799999999999997,
            "year": 2014
        },
        {
            "value": 99.799999999999997,
            "year": 2015
        },
        {
            "value": 99.799999999999997,
            "year": 2016
        },
        {
            "value": 99.799999999999997,
            "year": 2017
        }
    ],
    [
        {
            "value": 99.0,
            "year": 2008
        },
        {
            "value": 99.0,
            "year": 2009
        },
        {
            "value": 99.0,
            "year": 2010
        },
        {
            "value": 99.0,
            "year": 2011
        },
        {
            "value": 99.5,
            "year": 2012
        },
        {
            "value": 99.5,
            "year": 2013
        },
        {
            "value": 99.5,
            "year": 2014
        },
        {
            "value": 99.5,
            "year": 2015
        },
        {
            "value": 99.5,
            "year": 2016
        },
        {
            "value": 99.5,
            "year": 2017
        },
        {
            "value": 99.5,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0063',
                     min_y: 89.1,
                     max_y: 109.78,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of drivers tested who return clear result for prohibited drugs",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 98.299999999999997,
            "year": 2008
        },
        {
            "value": 99.0,
            "year": 2009
        },
        {
            "value": 98.900000000000006,
            "year": 2010
        },
        {
            "value": 97.900000000000006,
            "year": 2011
        },
        {
            "value": 96.0,
            "year": 2012
        },
        {
            "value": 96.200000000000003,
            "year": 2013
        },
        {
            "value": 92.200000000000003,
            "year": 2014
        },
        {
            "value": 94.299999999999997,
            "year": 2015
        },
        {
            "value": 90.900000000000006,
            "year": 2016
        },
        {
            "value": 91.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 97.0,
            "year": 2008
        },
        {
            "value": 97.0,
            "year": 2009
        },
        {
            "value": 97.0,
            "year": 2010
        },
        {
            "value": 97.0,
            "year": 2011
        },
        {
            "value": 98.0,
            "year": 2012
        },
        {
            "value": 98.0,
            "year": 2013
        },
        {
            "value": 94.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 93.0,
            "year": 2016
        },
        {
            "value": 93.0,
            "year": 2017
        },
        {
            "value": 93.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0064',
                     min_y: 81.0,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of successful prosecution outcomes",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 93.099999999999994,
            "year": 2008
        },
        {
            "value": 93.099999999999994,
            "year": 2009
        },
        {
            "value": 93.599999999999994,
            "year": 2010
        },
        {
            "value": 91.599999999999994,
            "year": 2011
        },
        {
            "value": 93.0,
            "year": 2012
        },
        {
            "value": 92.299999999999997,
            "year": 2013
        },
        {
            "value": 92.700000000000003,
            "year": 2014
        },
        {
            "value": 92.799999999999997,
            "year": 2015
        },
        {
            "value": 93.0,
            "year": 2016
        },
        {
            "value": 92.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 92.0,
            "year": 2008
        },
        {
            "value": 92.0,
            "year": 2009
        },
        {
            "value": 92.0,
            "year": 2010
        },
        {
            "value": 92.0,
            "year": 2011
        },
        {
            "value": 92.0,
            "year": 2012
        },
        {
            "value": 92.0,
            "year": 2013
        },
        {
            "value": 92.0,
            "year": 2014
        },
        {
            "value": 92.0,
            "year": 2015
        },
        {
            "value": 92.0,
            "year": 2016
        },
        {
            "value": 92.0,
            "year": 2017
        },
        {
            "value": 92.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0065',
                     min_y: 82.44,
                     max_y: 102.96,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of the community who have confidence in police (an integrity indicator)",
                     description: "Policing and Crime Prevention_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 82.400000000000006,
            "year": 2008
        },
        {
            "value": 82.0,
            "year": 2009
        },
        {
            "value": 81.900000000000006,
            "year": 2010
        },
        {
            "value": 84.099999999999994,
            "year": 2011
        },
        {
            "value": 85.099999999999994,
            "year": 2012
        },
        {
            "value": 86.0,
            "year": 2013
        },
        {
            "value": 86.099999999999994,
            "year": 2014
        },
        {
            "value": 88.700000000000003,
            "year": 2015
        },
        {
            "value": 85.400000000000006,
            "year": 2016
        },
        {
            "value": 85.400000000000006,
            "year": 2017
        }
    ],
    [
        {
            "value": 82.0,
            "year": 2008
        },
        {
            "value": 82.0,
            "year": 2009
        },
        {
            "value": 82.0,
            "year": 2010
        },
        {
            "value": 82.0,
            "year": 2011
        },
        {
            "value": 82.0,
            "year": 2012
        },
        {
            "value": 83.0,
            "year": 2013
        },
        {
            "value": 83.0,
            "year": 2014
        },
        {
            "value": 83.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 87.0,
            "year": 2017
        },
        {
            "value": 87.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0066',
                     min_y: 73.71,
                     max_y: 97.57,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community calls for assistance to which a Victoria Police response is dispatched",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 753417.0,
            "year": 2010
        },
        {
            "value": 884380.0,
            "year": 2011
        },
        {
            "value": 884380.0,
            "year": 2013
        },
        {
            "value": 811619.0,
            "year": 2014
        },
        {
            "value": 864020.0,
            "year": 2015
        },
        {
            "value": 906916.0,
            "year": 2016
        },
        {
            "value": 1005000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 795000.0,
            "year": 2010
        },
        {
            "value": 780000.0,
            "year": 2011
        },
        {
            "value": 800000.0,
            "year": 2013
        },
        {
            "value": 800000.0,
            "year": 2014
        },
        {
            "value": 800000.0,
            "year": 2015
        },
        {
            "value": 850000.0,
            "year": 2016
        },
        {
            "value": 1009700.0,
            "year": 2017
        },
        {
            "value": 1036000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0067',
                     min_y: 678075.3,
                     max_y: 1139600.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Crimes against property – excluding family violence related crime (rate per 100 000 population)",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 4583.3000000000002,
            "year": 2014
        },
        {
            "value": 4491.8999999999996,
            "year": 2015
        },
        {
            "value": 5130.0,
            "year": 2016
        },
        {
            "value": 5359.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0068',
                     min_y: 4042.71,
                     max_y: 5894.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Crimes against property – family violence related crime (rate per 100 000 population)",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 136.90000000000001,
            "year": 2014
        },
        {
            "value": 146.69999999999999,
            "year": 2015
        },
        {
            "value": 146.69999999999999,
            "year": 2016
        },
        {
            "value": 148.09999999999999,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0069',
                     min_y: 123.21,
                     max_y: 162.91,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Crimes against the person – excluding family violence related crime (rate per 100 000 population)",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 654.79999999999995,
            "year": 2014
        },
        {
            "value": 654.0,
            "year": 2015
        },
        {
            "value": 677.0,
            "year": 2016
        },
        {
            "value": 679.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0070',
                     min_y: 588.6,
                     max_y: 746.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Crimes against the person – family violence related crime (rate per 100 000 population)",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 481.89999999999998,
            "year": 2014
        },
        {
            "value": 509.0,
            "year": 2015
        },
        {
            "value": 587.5,
            "year": 2016
        },
        {
            "value": 585.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0071',
                     min_y: 433.71,
                     max_y: 646.25,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of alcohol screening tests conducted by booze and drug buses",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1098831.0,
            "year": 2013
        },
        {
            "value": 1150524.0,
            "year": 2014
        },
        {
            "value": 1136326.0,
            "year": 2015
        },
        {
            "value": 1076061.0,
            "year": 2016
        },
        {
            "value": 1100000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1100000.0,
            "year": 2013
        },
        {
            "value": 1100000.0,
            "year": 2014
        },
        {
            "value": 1100000.0,
            "year": 2015
        },
        {
            "value": 1100000.0,
            "year": 2016
        },
        {
            "value": 1100000.0,
            "year": 2017
        },
        {
            "value": 1100000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0072',
                     min_y: 968454.9,
                     max_y: 1265576.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of hours of family violence related education provided to police",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1700.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0073',
                     min_y: 1530.0,
                     max_y: 1870.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of prohibited drug screening tests conducted by booze and drug buses and highway patrol units",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 23245.0,
            "year": 2013
        },
        {
            "value": 42780.0,
            "year": 2014
        },
        {
            "value": 79986.0,
            "year": 2015
        },
        {
            "value": 100182.0,
            "year": 2016
        },
        {
            "value": 100000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100000.0,
            "year": 2013
        },
        {
            "value": 100000.0,
            "year": 2014
        },
        {
            "value": 100000.0,
            "year": 2015
        },
        {
            "value": 100000.0,
            "year": 2016
        },
        {
            "value": 100000.0,
            "year": 2017
        },
        {
            "value": 100000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0074',
                     min_y: 20920.5,
                     max_y: 110200.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Police record checks conducted to contribute to community safety",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 691029.0,
            "year": 2016
        },
        {
            "value": 716000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 635000.0,
            "year": 2016
        },
        {
            "value": 716000.0,
            "year": 2017
        },
        {
            "value": 703000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0075',
                     min_y: 571500.0,
                     max_y: 787600.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total persons reported injured in vehicle collisions",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 18527.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0076',
                     min_y: 16674.3,
                     max_y: 20379.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total reported road fatalities in vehicle collisions",
                     description: "Policing and Crime Prevention_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 278.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0077',
                     min_y: 250.2,
                     max_y: 305.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of crimes against the person resolved within 30 days",
                     description: "Policing and Crime Prevention_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 52.899999999999999,
            "year": 2008
        },
        {
            "value": 53.200000000000003,
            "year": 2009
        },
        {
            "value": 52.399999999999999,
            "year": 2010
        },
        {
            "value": 53.100000000000001,
            "year": 2011
        },
        {
            "value": 55.0,
            "year": 2012
        },
        {
            "value": 36.5,
            "year": 2013
        },
        {
            "value": 37.5,
            "year": 2014
        },
        {
            "value": 36.799999999999997,
            "year": 2015
        },
        {
            "value": 44.399999999999999,
            "year": 2016
        },
        {
            "value": 43.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 56.0,
            "year": 2008
        },
        {
            "value": 56.0,
            "year": 2009
        },
        {
            "value": 56.0,
            "year": 2010
        },
        {
            "value": 56.0,
            "year": 2011
        },
        {
            "value": 54.0,
            "year": 2012
        },
        {
            "value": 54.0,
            "year": 2013
        },
        {
            "value": 36.0,
            "year": 2014
        },
        {
            "value": 36.0,
            "year": 2015
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0078',
                     min_y: 32.4,
                     max_y: 61.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of property crime resolved within 30 days",
                     description: "Policing and Crime Prevention_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 19.100000000000001,
            "year": 2008
        },
        {
            "value": 21.5,
            "year": 2009
        },
        {
            "value": 20.399999999999999,
            "year": 2010
        },
        {
            "value": 19.699999999999999,
            "year": 2011
        },
        {
            "value": 18.800000000000001,
            "year": 2012
        },
        {
            "value": 19.300000000000001,
            "year": 2013
        },
        {
            "value": 20.699999999999999,
            "year": 2014
        },
        {
            "value": 20.5,
            "year": 2015
        },
        {
            "value": 25.100000000000001,
            "year": 2016
        },
        {
            "value": 22.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 20.0,
            "year": 2008
        },
        {
            "value": 20.0,
            "year": 2009
        },
        {
            "value": 20.0,
            "year": 2010
        },
        {
            "value": 20.0,
            "year": 2011
        },
        {
            "value": 21.0,
            "year": 2012
        },
        {
            "value": 21.0,
            "year": 2013
        },
        {
            "value": 19.0,
            "year": 2014
        },
        {
            "value": 19.0,
            "year": 2015
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0079',
                     min_y: 16.92,
                     max_y: 27.61,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Prisoner Supervision and Support_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 438.10000000000002,
            "year": 2008
        },
        {
            "value": 467.30000000000001,
            "year": 2009
        },
        {
            "value": 492.60000000000002,
            "year": 2010
        },
        {
            "value": 534.0,
            "year": 2011
        },
        {
            "value": 594.10000000000002,
            "year": 2012
        },
        {
            "value": 642.29999999999995,
            "year": 2013
        },
        {
            "value": 732.20000000000005,
            "year": 2014
        },
        {
            "value": 901.10000000000002,
            "year": 2015
        },
        {
            "value": 1000.6,
            "year": 2016
        },
        {
            "value": 1089.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 504.89999999999998,
            "year": 2008
        },
        {
            "value": 504.89999999999998,
            "year": 2009
        },
        {
            "value": 511.10000000000002,
            "year": 2010
        },
        {
            "value": 544.70000000000005,
            "year": 2011
        },
        {
            "value": 593.0,
            "year": 2012
        },
        {
            "value": 691.10000000000002,
            "year": 2013
        },
        {
            "value": 758.79999999999995,
            "year": 2014
        },
        {
            "value": 942.10000000000002,
            "year": 2015
        },
        {
            "value": 1056.0,
            "year": 2016
        },
        {
            "value": 1102.2,
            "year": 2017
        },
        {
            "value": 1302.7,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0080',
                     min_y: 394.29,
                     max_y: 1432.97,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of benchmark measures in prison services agreement achieved",
                     description: "Prisoner Supervision and Support_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 93.0,
            "year": 2008
        },
        {
            "value": 91.700000000000003,
            "year": 2009
        },
        {
            "value": 91.299999999999997,
            "year": 2010
        },
        {
            "value": 87.799999999999997,
            "year": 2011
        },
        {
            "value": 87.099999999999994,
            "year": 2012
        },
        {
            "value": 85.599999999999994,
            "year": 2013
        },
        {
            "value": 83.700000000000003,
            "year": 2014
        },
        {
            "value": 84.799999999999997,
            "year": 2015
        },
        {
            "value": 84.900000000000006,
            "year": 2016
        },
        {
            "value": 82.200000000000003,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2008
        },
        {
            "value": 90.0,
            "year": 2009
        },
        {
            "value": 90.0,
            "year": 2010
        },
        {
            "value": 90.0,
            "year": 2011
        },
        {
            "value": 90.0,
            "year": 2012
        },
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 90.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 90.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0081',
                     min_y: 73.98,
                     max_y: 102.3,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of eligible prisoners in employment",
                     description: "Prisoner Supervision and Support_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 89.099999999999994,
            "year": 2013
        },
        {
            "value": 88.099999999999994,
            "year": 2014
        },
        {
            "value": 89.299999999999997,
            "year": 2015
        },
        {
            "value": 87.5,
            "year": 2016
        },
        {
            "value": 88.400000000000006,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 89.0,
            "year": 2017
        },
        {
            "value": 89.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0082',
                     min_y: 76.5,
                     max_y: 98.23,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Rate of prisoner participation in education",
                     description: "Prisoner Supervision and Support_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 37.200000000000003,
            "year": 2012
        },
        {
            "value": 38.100000000000001,
            "year": 2013
        },
        {
            "value": 33.399999999999999,
            "year": 2014
        },
        {
            "value": 35.700000000000003,
            "year": 2015
        },
        {
            "value": 34.100000000000001,
            "year": 2016
        },
        {
            "value": 34.899999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 34.0,
            "year": 2012
        },
        {
            "value": 34.0,
            "year": 2013
        },
        {
            "value": 34.0,
            "year": 2014
        },
        {
            "value": 34.0,
            "year": 2015
        },
        {
            "value": 34.0,
            "year": 2016
        },
        {
            "value": 36.0,
            "year": 2017
        },
        {
            "value": 36.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0083',
                     min_y: 30.06,
                     max_y: 41.91,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Rate of return to prison within two years",
                     description: "Prisoner Supervision and Support_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 35.100000000000001,
            "year": 2012
        },
        {
            "value": 36.799999999999997,
            "year": 2013
        },
        {
            "value": 39.5,
            "year": 2014
        },
        {
            "value": 44.100000000000001,
            "year": 2015
        },
        {
            "value": 42.799999999999997,
            "year": 2016
        },
        {
            "value": 42.899999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 45.0,
            "year": 2012
        },
        {
            "value": 45.0,
            "year": 2013
        },
        {
            "value": 45.0,
            "year": 2014
        },
        {
            "value": 45.0,
            "year": 2015
        },
        {
            "value": 45.0,
            "year": 2016
        },
        {
            "value": 41.0,
            "year": 2017
        },
        {
            "value": 41.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0084',
                     min_y: 31.59,
                     max_y: 49.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily prison utilisation rate of total prison capacity",
                     description: "Prisoner Supervision and Support_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 92.299999999999997,
            "year": 2008
        },
        {
            "value": 91.299999999999997,
            "year": 2009
        },
        {
            "value": 92.299999999999997,
            "year": 2010
        },
        {
            "value": 92.400000000000006,
            "year": 2011
        },
        {
            "value": 94.799999999999997,
            "year": 2012
        },
        {
            "value": 94.5,
            "year": 2013
        },
        {
            "value": 96.799999999999997,
            "year": 2014
        },
        {
            "value": 90.200000000000003,
            "year": 2015
        },
        {
            "value": 91.0,
            "year": 2016
        },
        {
            "value": 93.599999999999994,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0085',
                     min_y: 81.18,
                     max_y: 106.48,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total annual daily average number of prisoners",
                     description: "Prisoner Supervision and Support_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 4492.0,
            "year": 2010
        },
        {
            "value": 4586.0,
            "year": 2011
        },
        {
            "value": 5120.0,
            "year": 2013
        },
        {
            "value": 5800.0,
            "year": 2014
        },
        {
            "value": 6350.0,
            "year": 2015
        },
        {
            "value": 6320.0,
            "year": 2016
        },
        {
            "value": 6791.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 6600.0,
            "year": 2010
        },
        {
            "value": 6600.0,
            "year": 2011
        },
        {
            "value": 6600.0,
            "year": 2013
        },
        {
            "value": 6600.0,
            "year": 2014
        },
        {
            "value": 6600.0,
            "year": 2015
        },
        {
            "value": 6600.0,
            "year": 2016
        },
        {
            "value": 6600.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0086',
                     min_y: 4042.8,
                     max_y: 7470.1,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Assessment of prisoners 'at risk' undertaken within two hours",
                     description: "Prisoner Supervision and Support_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 99.799999999999997,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0087',
                     min_y: 89.82,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Protection of Personal Identity and Individual/Community Rights_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 48.0,
            "year": 2015
        },
        {
            "value": 53.100000000000001,
            "year": 2016
        },
        {
            "value": 57.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 44.299999999999997,
            "year": 2015
        },
        {
            "value": 44.299999999999997,
            "year": 2016
        },
        {
            "value": 48.399999999999999,
            "year": 2017
        },
        {
            "value": 48.399999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0088',
                     min_y: 39.87,
                     max_y: 63.25,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Births, Deaths and Marriages registration transaction accuracy rate (BDM)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 0.29999999999999999,
            "year": 2008
        },
        {
            "value": 0.69999999999999996,
            "year": 2009
        },
        {
            "value": 0.40000000000000002,
            "year": 2010
        },
        {
            "value": 0.29999999999999999,
            "year": 2011
        },
        {
            "value": 0.20000000000000001,
            "year": 2012
        },
        {
            "value": 0.80000000000000004,
            "year": 2013
        },
        {
            "value": 99.0,
            "year": 2014
        },
        {
            "value": 99.0,
            "year": 2015
        },
        {
            "value": 99.900000000000006,
            "year": 2016
        },
        {
            "value": 99.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 0.90000000000000002,
            "year": 2008
        },
        {
            "value": 0.90000000000000002,
            "year": 2009
        },
        {
            "value": 0.90000000000000002,
            "year": 2010
        },
        {
            "value": 99.0,
            "year": 2011
        },
        {
            "value": 99.0,
            "year": 2012
        },
        {
            "value": 99.0,
            "year": 2013
        },
        {
            "value": 99.0,
            "year": 2014
        },
        {
            "value": 99.0,
            "year": 2015
        },
        {
            "value": 99.0,
            "year": 2016
        },
        {
            "value": 99.0,
            "year": 2017
        },
        {
            "value": 99.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0089',
                     min_y: 0.18,
                     max_y: 109.89,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Customer satisfaction rating: Conciliation delivered by VEOHRC",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 87.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0090',
                     min_y: 76.5,
                     max_y: 95.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Customer satisfaction rating: Education and consultancy sessions delivered by VEOHRC",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2009
        },
        {
            "value": 90.0,
            "year": 2010
        },
        {
            "value": 86.0,
            "year": 2011
        },
        {
            "value": 86.0,
            "year": 2012
        },
        {
            "value": 86.0,
            "year": 2013
        },
        {
            "value": 82.299999999999997,
            "year": 2014
        },
        {
            "value": 88.0,
            "year": 2015
        },
        {
            "value": 87.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2009
        },
        {
            "value": 85.0,
            "year": 2010
        },
        {
            "value": 85.0,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0091',
                     min_y: 72.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Advocacy matters opened by OPA",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 314.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0092',
                     min_y: 282.6,
                     max_y: 345.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community education sessions (OPA)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 122.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0093',
                     min_y: 90.0,
                     max_y: 134.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Complaint files received and handled by VEOHRC",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1054.0,
            "year": 2013
        },
        {
            "value": 1053.0,
            "year": 2014
        },
        {
            "value": 1060.0,
            "year": 2015
        },
        {
            "value": 865.0,
            "year": 2016
        },
        {
            "value": 700.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0094',
                     min_y: 630.0,
                     max_y: 1166.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Education and consultancy sessions delivered by VEOHRC",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 355.0,
            "year": 2016
        },
        {
            "value": 350.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 350.0,
            "year": 2016
        },
        {
            "value": 350.0,
            "year": 2017
        },
        {
            "value": 350.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0095',
                     min_y: 315.0,
                     max_y: 390.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Groups in negotiation towards resolution of Native Title claims (NTU)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2.0,
            "year": 2013
        },
        {
            "value": 2.0,
            "year": 2014
        },
        {
            "value": 2.0,
            "year": 2015
        },
        {
            "value": 2.0,
            "year": 2016
        },
        {
            "value": 2.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 2.0,
            "year": 2013
        },
        {
            "value": 2.0,
            "year": 2014
        },
        {
            "value": 2.0,
            "year": 2015
        },
        {
            "value": 2.0,
            "year": 2016
        },
        {
            "value": 2.0,
            "year": 2017
        },
        {
            "value": 2.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0096',
                     min_y: 1.8,
                     max_y: 2.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Information and advice provided by OPA",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 11194.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0097',
                     min_y: 10074.6,
                     max_y: 12313.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Information and advice provided by VEOHRC",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 8470.0,
            "year": 2013
        },
        {
            "value": 9157.0,
            "year": 2014
        },
        {
            "value": 9157.0,
            "year": 2015
        },
        {
            "value": 8171.0,
            "year": 2016
        },
        {
            "value": 8100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 9000.0,
            "year": 2013
        },
        {
            "value": 9000.0,
            "year": 2014
        },
        {
            "value": 9000.0,
            "year": 2015
        },
        {
            "value": 9000.0,
            "year": 2016
        },
        {
            "value": 9000.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0098',
                     min_y: 7290.0,
                     max_y: 10072.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "New guardianship and investigation orders of VCAT actioned by OPA",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2486.0,
            "year": 2010
        },
        {
            "value": 2755.0,
            "year": 2011
        },
        {
            "value": 2449.0,
            "year": 2012
        },
        {
            "value": 2449.0,
            "year": 2013
        },
        {
            "value": 2480.0,
            "year": 2014
        },
        {
            "value": 2643.0,
            "year": 2015
        }
    ],
    [
        {
            "value": 2510.0,
            "year": 2010
        },
        {
            "value": 2510.0,
            "year": 2011
        },
        {
            "value": 2510.0,
            "year": 2012
        },
        {
            "value": 2510.0,
            "year": 2013
        },
        {
            "value": 2510.0,
            "year": 2014
        },
        {
            "value": 2510.0,
            "year": 2015
        },
        {
            "value": 2510.0,
            "year": 2016
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0099',
                     min_y: 2204.1,
                     max_y: 3030.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Public Advocate auspiced volunteer interventions for people with a disability (OPA)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 6140.0,
            "year": 2016
        },
        {
            "value": 7709.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 7500.0,
            "year": 2016
        },
        {
            "value": 7500.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0100',
                     min_y: 5526.0,
                     max_y: 8479.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Settlement rate of conciliation (VEOHRC)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 65.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0101',
                     min_y: 58.5,
                     max_y: 71.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average number of days a guardianship or investigation order of VCAT is held on a wait list prior to being allocated to a delegated officer by the Public Advocate (OPA)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 31.0,
            "year": 2016
        },
        {
            "value": 44.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 20.0,
            "year": 2016
        },
        {
            "value": 30.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0102',
                     min_y: 18.0,
                     max_y: 48.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Complete applications for birth, death and marriage certificates processed within five days of receipt (BDM)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 94.0,
            "year": 2009
        },
        {
            "value": 94.0,
            "year": 2010
        },
        {
            "value": 94.0,
            "year": 2011
        },
        {
            "value": 94.299999999999997,
            "year": 2012
        },
        {
            "value": 96.900000000000006,
            "year": 2013
        },
        {
            "value": 97.099999999999994,
            "year": 2014
        },
        {
            "value": 94.400000000000006,
            "year": 2015
        },
        {
            "value": 95.299999999999997,
            "year": 2016
        },
        {
            "value": 97.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2008
        },
        {
            "value": 90.0,
            "year": 2009
        },
        {
            "value": 90.0,
            "year": 2010
        },
        {
            "value": 90.0,
            "year": 2011
        },
        {
            "value": 90.0,
            "year": 2012
        },
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 90.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0103',
                     min_y: 81.0,
                     max_y: 106.81,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of Native Title negotiations progressed in accordance with the Department’s annual work plan and timeframes monitored by the Federal Court (NTU)",
                     description: "Protection of Personal Identity and Individual/Community Rights_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0104',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "VEOHRC complaints finalised within six months",
                     description: "Protection of Personal Identity and Individual/Community Rights_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 89.0,
            "year": 2009
        },
        {
            "value": 90.0,
            "year": 2010
        },
        {
            "value": 89.799999999999997,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 65.0,
            "year": 2013
        },
        {
            "value": 82.299999999999997,
            "year": 2014
        },
        {
            "value": 86.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2009
        },
        {
            "value": 85.0,
            "year": 2010
        },
        {
            "value": 85.0,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0105',
                     min_y: 58.5,
                     max_y: 99.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Public Prosecutions and Legal Assistance_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 202.5,
            "year": 2015
        },
        {
            "value": 216.0,
            "year": 2016
        },
        {
            "value": 226.30000000000001,
            "year": 2017
        }
    ],
    [
        {
            "value": 208.19999999999999,
            "year": 2015
        },
        {
            "value": 208.19999999999999,
            "year": 2016
        },
        {
            "value": 224.59999999999999,
            "year": 2017
        },
        {
            "value": 249.90000000000001,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0106',
                     min_y: 182.25,
                     max_y: 274.89,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Guilty outcomes (guilty pleas and trial convictions) as a percentage of case completions (OPP)",
                     description: "Public Prosecutions and Legal Assistance_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 85.299999999999997,
            "year": 2010
        },
        {
            "value": 88.299999999999997,
            "year": 2011
        },
        {
            "value": 88.400000000000006,
            "year": 2012
        },
        {
            "value": 87.599999999999994,
            "year": 2013
        },
        {
            "value": 88.700000000000003,
            "year": 2014
        },
        {
            "value": 89.0,
            "year": 2015
        },
        {
            "value": 89.599999999999994,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2010
        },
        {
            "value": 85.0,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 86.0,
            "year": 2016
        },
        {
            "value": 86.0,
            "year": 2017
        },
        {
            "value": 87.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0107',
                     min_y: 76.5,
                     max_y: 99.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community legal education and information services (VLA) – excluding family violence related services",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 89993.0,
            "year": 2013
        },
        {
            "value": 112020.0,
            "year": 2014
        },
        {
            "value": 137668.0,
            "year": 2015
        },
        {
            "value": 126284.0,
            "year": 2016
        },
        {
            "value": 138000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90000.0,
            "year": 2013
        },
        {
            "value": 90000.0,
            "year": 2014
        },
        {
            "value": 90000.0,
            "year": 2015
        },
        {
            "value": 145000.0,
            "year": 2016
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0108',
                     min_y: 80993.7,
                     max_y: 159500.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community legal education and information services (VLA) – family violence related services",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 11500.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0109',
                     min_y: 10350.0,
                     max_y: 12650.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Duty lawyer services – excluding family violence related services (VLA)",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 70830.0,
            "year": 2010
        },
        {
            "value": 78174.0,
            "year": 2011
        },
        {
            "value": 71944.0,
            "year": 2012
        },
        {
            "value": 71944.0,
            "year": 2014
        },
        {
            "value": 83674.0,
            "year": 2015
        },
        {
            "value": 87162.0,
            "year": 2016
        },
        {
            "value": 89700.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 75000.0,
            "year": 2010
        },
        {
            "value": 75000.0,
            "year": 2011
        },
        {
            "value": 80000.0,
            "year": 2012
        },
        {
            "value": 74000.0,
            "year": 2014
        },
        {
            "value": 74000.0,
            "year": 2015
        },
        {
            "value": 80000.0,
            "year": 2016
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0110',
                     min_y: 63747.0,
                     max_y: 98670.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Family violence legal services (VLA)",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 32000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0111',
                     min_y: 28800.0,
                     max_y: 35200.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Grants of legal assistance provided by VLA – excluding family violence related",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 36963.0,
            "year": 2010
        },
        {
            "value": 42157.0,
            "year": 2011
        },
        {
            "value": 39782.0,
            "year": 2012
        },
        {
            "value": 39782.0,
            "year": 2013
        },
        {
            "value": 33463.0,
            "year": 2014
        },
        {
            "value": 34681.0,
            "year": 2015
        },
        {
            "value": 38345.0,
            "year": 2016
        },
        {
            "value": 42600.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 43000.0,
            "year": 2010
        },
        {
            "value": 43000.0,
            "year": 2011
        },
        {
            "value": 45000.0,
            "year": 2012
        },
        {
            "value": 33000.0,
            "year": 2013
        },
        {
            "value": 33000.0,
            "year": 2014
        },
        {
            "value": 33000.0,
            "year": 2015
        },
        {
            "value": 34900.0,
            "year": 2016
        },
        {
            "value": 35000.0,
            "year": 2017
        },
        {
            "value": 31800.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0112',
                     min_y: 28620.0,
                     max_y: 49500.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Judicial Officer sitting days requiring prosecutors – Office of Public Prosecutions (OPP)",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 9960.0,
            "year": 2010
        },
        {
            "value": 10181.0,
            "year": 2011
        },
        {
            "value": 9814.0,
            "year": 2013
        },
        {
            "value": 9421.0,
            "year": 2014
        },
        {
            "value": 9542.0,
            "year": 2015
        },
        {
            "value": 11464.0,
            "year": 2016
        },
        {
            "value": 10500.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 11250.0,
            "year": 2010
        },
        {
            "value": 10750.0,
            "year": 2011
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0113',
                     min_y: 8478.9,
                     max_y: 12610.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Legal advice and minor assistance for clients (VLA) – excluding family violence related services (VLA)",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 51598.0,
            "year": 2013
        },
        {
            "value": 46178.0,
            "year": 2014
        },
        {
            "value": 48806.0,
            "year": 2015
        },
        {
            "value": 40770.0,
            "year": 2016
        },
        {
            "value": 41000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 52000.0,
            "year": 2013
        },
        {
            "value": 52000.0,
            "year": 2014
        },
        {
            "value": 52000.0,
            "year": 2015
        },
        {
            "value": 52000.0,
            "year": 2016
        },
        {
            "value": 42000.0,
            "year": 2017
        },
        {
            "value": 38800.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0114',
                     min_y: 34920.0,
                     max_y: 57200.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of briefs prepared and hearings attended (OPP)",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 68265.0,
            "year": 2009
        },
        {
            "value": 69465.0,
            "year": 2010
        },
        {
            "value": 70837.0,
            "year": 2011
        },
        {
            "value": 70238.0,
            "year": 2013
        },
        {
            "value": 70254.0,
            "year": 2014
        },
        {
            "value": 70100.0,
            "year": 2015
        },
        {
            "value": 72610.0,
            "year": 2016
        },
        {
            "value": 73500.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 72500.0,
            "year": 2009
        },
        {
            "value": 72500.0,
            "year": 2010
        },
        {
            "value": 72500.0,
            "year": 2011
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0115',
                     min_y: 61438.5,
                     max_y: 80850.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of unique clients who accessed one or more of VLA’s legal services",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 86847.0,
            "year": 2016
        },
        {
            "value": 89000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 84000.0,
            "year": 2016
        },
        {
            "value": 84000.0,
            "year": 2017
        },
        {
            "value": 84000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0116',
                     min_y: 75600.0,
                     max_y: 97900.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of victim and witness consultations (OPP)",
                     description: "Public Prosecutions and Legal Assistance_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 6166.0,
            "year": 2010
        },
        {
            "value": 6389.0,
            "year": 2011
        },
        {
            "value": 11122.0,
            "year": 2013
        },
        {
            "value": 9525.0,
            "year": 2014
        },
        {
            "value": 10482.0,
            "year": 2015
        },
        {
            "value": 10620.0,
            "year": 2016
        },
        {
            "value": 10750.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 5000.0,
            "year": 2010
        },
        {
            "value": 6500.0,
            "year": 2011
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0117',
                     min_y: 4500.0,
                     max_y: 12234.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Applications for legal aid processed within 15 days (VLA)",
                     description: "Public Prosecutions and Legal Assistance_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 96.0,
            "year": 2008
        },
        {
            "value": 96.200000000000003,
            "year": 2009
        },
        {
            "value": 96.0,
            "year": 2010
        },
        {
            "value": 97.5,
            "year": 2011
        },
        {
            "value": 91.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 89.299999999999997,
            "year": 2014
        },
        {
            "value": 93.200000000000003,
            "year": 2015
        },
        {
            "value": 94.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0118',
                     min_y: 76.5,
                     max_y: 107.25,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of trials listed which did not proceed to adjournment on application of the Crown (OPP)",
                     description: "Public Prosecutions and Legal Assistance_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 98.400000000000006,
            "year": 2010
        },
        {
            "value": 99.299999999999997,
            "year": 2011
        },
        {
            "value": 99.0,
            "year": 2012
        },
        {
            "value": 98.799999999999997,
            "year": 2013
        },
        {
            "value": 99.099999999999994,
            "year": 2014
        },
        {
            "value": 98.900000000000006,
            "year": 2015
        },
        {
            "value": 98.599999999999994,
            "year": 2016
        },
        {
            "value": 99.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 99.0,
            "year": 2010
        },
        {
            "value": 99.0,
            "year": 2011
        },
        {
            "value": 99.0,
            "year": 2012
        },
        {
            "value": 99.0,
            "year": 2013
        },
        {
            "value": 99.0,
            "year": 2014
        },
        {
            "value": 99.0,
            "year": 2015
        },
        {
            "value": 99.0,
            "year": 2016
        },
        {
            "value": 99.0,
            "year": 2017
        },
        {
            "value": 99.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0119',
                     min_y: 88.56,
                     max_y: 109.23,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Regulation of the Victorian Consumer Marketplace_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 167.69999999999999,
            "year": 2011
        },
        {
            "value": 117.90000000000001,
            "year": 2012
        },
        {
            "value": 90.400000000000006,
            "year": 2013
        },
        {
            "value": 80.799999999999997,
            "year": 2014
        },
        {
            "value": 119.09999999999999,
            "year": 2015
        },
        {
            "value": 115.3,
            "year": 2016
        },
        {
            "value": 133.69999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 114.2,
            "year": 2011
        },
        {
            "value": 114.2,
            "year": 2012
        },
        {
            "value": 78.099999999999994,
            "year": 2013
        },
        {
            "value": 88.0,
            "year": 2014
        },
        {
            "value": 123.40000000000001,
            "year": 2015
        },
        {
            "value": 125.0,
            "year": 2016
        },
        {
            "value": 126.3,
            "year": 2017
        },
        {
            "value": 139.69999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0120',
                     min_y: 70.29,
                     max_y: 184.47,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Rate of compliance with key consumer laws",
                     description: "Regulation of the Victorian Consumer Marketplace_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 97.599999999999994,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0121',
                     min_y: 85.5,
                     max_y: 107.36,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Regulatory functions delivered within agreed timeframes",
                     description: "Regulation of the Victorian Consumer Marketplace_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 95.700000000000003,
            "year": 2016
        },
        {
            "value": 93.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 93.0,
            "year": 2017
        },
        {
            "value": 93.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0122',
                     min_y: 81.0,
                     max_y: 105.27,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Compliance activities, from compliance assistance through to court actions",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 9749.0,
            "year": 2012
        },
        {
            "value": 9749.0,
            "year": 2013
        },
        {
            "value": 10588.0,
            "year": 2014
        },
        {
            "value": 11344.0,
            "year": 2015
        },
        {
            "value": 9774.0,
            "year": 2016
        },
        {
            "value": 9911.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 9075.0,
            "year": 2012
        },
        {
            "value": 12000.0,
            "year": 2013
        },
        {
            "value": 12000.0,
            "year": 2014
        },
        {
            "value": 12000.0,
            "year": 2015
        },
        {
            "value": 9600.0,
            "year": 2016
        },
        {
            "value": 9600.0,
            "year": 2017
        },
        {
            "value": 9600.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0123',
                     min_y: 8167.5,
                     max_y: 13200.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Dispute resolution services provided by Domestic Building Dispute Resolution Victoria",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 3000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0124',
                     min_y: 2700.0,
                     max_y: 3300.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Information and advice provided to consumers, tenants and businesses: through other services including written correspondence, face to face and dispute assistance",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 84659.0,
            "year": 2013
        },
        {
            "value": 133729.0,
            "year": 2014
        },
        {
            "value": 129430.0,
            "year": 2015
        },
        {
            "value": 123309.0,
            "year": 2016
        },
        {
            "value": 117529.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 130000.0,
            "year": 2013
        },
        {
            "value": 130000.0,
            "year": 2014
        },
        {
            "value": 140000.0,
            "year": 2015
        },
        {
            "value": 123000.0,
            "year": 2016
        },
        {
            "value": 124300.0,
            "year": 2017
        },
        {
            "value": 114300.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0125',
                     min_y: 76193.1,
                     max_y: 154000.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Information and advice provided to consumers, tenants and businesses: through telephone service",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 409936.0,
            "year": 2012
        },
        {
            "value": 409936.0,
            "year": 2013
        },
        {
            "value": 390349.0,
            "year": 2014
        },
        {
            "value": 352369.0,
            "year": 2015
        },
        {
            "value": 349985.0,
            "year": 2016
        },
        {
            "value": 341481.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 606350.0,
            "year": 2012
        },
        {
            "value": 390000.0,
            "year": 2013
        },
        {
            "value": 390000.0,
            "year": 2014
        },
        {
            "value": 375000.0,
            "year": 2015
        },
        {
            "value": 346500.0,
            "year": 2016
        },
        {
            "value": 354500.0,
            "year": 2017
        },
        {
            "value": 325800.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0126',
                     min_y: 293220.0,
                     max_y: 666985.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Transactions undertaken: Residential Tenancies Bonds Authority (RTBA) transactions",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 406535.0,
            "year": 2013
        },
        {
            "value": 419135.0,
            "year": 2014
        },
        {
            "value": 432569.0,
            "year": 2015
        },
        {
            "value": 447934.0,
            "year": 2016
        },
        {
            "value": 453355.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 395000.0,
            "year": 2013
        },
        {
            "value": 395000.0,
            "year": 2014
        },
        {
            "value": 448000.0,
            "year": 2015
        },
        {
            "value": 433500.0,
            "year": 2016
        },
        {
            "value": 457000.0,
            "year": 2017
        },
        {
            "value": 469000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0127',
                     min_y: 355500.0,
                     max_y: 515900.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Transactions undertaken: registration and licensing transactions",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 61378.0,
            "year": 2012
        },
        {
            "value": 61378.0,
            "year": 2013
        },
        {
            "value": 67520.0,
            "year": 2014
        },
        {
            "value": 70679.0,
            "year": 2015
        },
        {
            "value": 88221.0,
            "year": 2016
        },
        {
            "value": 83741.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 600000.0,
            "year": 2012
        },
        {
            "value": 55000.0,
            "year": 2013
        },
        {
            "value": 55000.0,
            "year": 2014
        },
        {
            "value": 69500.0,
            "year": 2015
        },
        {
            "value": 69500.0,
            "year": 2016
        },
        {
            "value": 84000.0,
            "year": 2017
        },
        {
            "value": 86700.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0128',
                     min_y: 49500.0,
                     max_y: 660000.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victims of family violence assisted with financial counselling",
                     description: "Regulation of the Victorian Consumer Marketplace_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 2250.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0129',
                     min_y: 2025.0,
                     max_y: 2475.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Victims and Community Support Services_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 87.799999999999997,
            "year": 2015
        },
        {
            "value": 55.100000000000001,
            "year": 2016
        },
        {
            "value": 49.899999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 84.0,
            "year": 2015
        },
        {
            "value": 84.0,
            "year": 2016
        },
        {
            "value": 55.200000000000003,
            "year": 2017
        },
        {
            "value": 55.100000000000001,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0130',
                     min_y: 44.91,
                     max_y: 96.58,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Working with Children Checks: Assessment issued within three days of receiving CrimTrac clear notification",
                     description: "Victims and Community Support Services_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 98.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        },
        {
            "value": 98.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0131',
                     min_y: 88.2,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Working with Children Checks: Negative notices issued within three days of receiving the delegate's decision",
                     description: "Victims and Community Support Services_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0132',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Diversion initiatives established to support the Koorie community",
                     description: "Victims and Community Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 36.0,
            "year": 2008
        },
        {
            "value": 36.0,
            "year": 2009
        },
        {
            "value": 38.0,
            "year": 2010
        },
        {
            "value": 35.0,
            "year": 2011
        },
        {
            "value": 35.0,
            "year": 2012
        },
        {
            "value": 35.0,
            "year": 2013
        },
        {
            "value": 35.700000000000003,
            "year": 2014
        },
        {
            "value": 35.0,
            "year": 2015
        },
        {
            "value": 35.0,
            "year": 2016
        },
        {
            "value": 35.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 35.0,
            "year": 2008
        },
        {
            "value": 35.0,
            "year": 2009
        },
        {
            "value": 35.0,
            "year": 2010
        },
        {
            "value": 35.0,
            "year": 2011
        },
        {
            "value": 35.0,
            "year": 2012
        },
        {
            "value": 35.0,
            "year": 2013
        },
        {
            "value": 35.0,
            "year": 2014
        },
        {
            "value": 35.0,
            "year": 2015
        },
        {
            "value": 35.0,
            "year": 2016
        },
        {
            "value": 35.0,
            "year": 2017
        },
        {
            "value": 35.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0133',
                     min_y: 31.5,
                     max_y: 41.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Number of Working with Children Checks processed",
                     description: "Victims and Community Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 227.0,
            "year": 2008
        },
        {
            "value": 176.0,
            "year": 2009
        },
        {
            "value": 152.0,
            "year": 2010
        },
        {
            "value": 137.0,
            "year": 2011
        },
        {
            "value": 180.90000000000001,
            "year": 2012
        },
        {
            "value": 253.69999999999999,
            "year": 2013
        },
        {
            "value": 223.90000000000001,
            "year": 2014
        },
        {
            "value": 235.0,
            "year": 2015
        },
        {
            "value": 233.0,
            "year": 2016
        },
        {
            "value": 304.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (000)' ,
                     target: '#p0134',
                     min_y: 123.3,
                     max_y: 334.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victims receiving a service from the Victims Assistance Program (VSA)",
                     description: "Victims and Community Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 9662.0,
            "year": 2010
        },
        {
            "value": 9497.0,
            "year": 2011
        },
        {
            "value": 9038.0,
            "year": 2012
        },
        {
            "value": 9038.0,
            "year": 2013
        },
        {
            "value": 11468.0,
            "year": 2014
        },
        {
            "value": 11227.0,
            "year": 2015
        },
        {
            "value": 11022.0,
            "year": 2016
        },
        {
            "value": 12400.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 7500.0,
            "year": 2010
        },
        {
            "value": 7500.0,
            "year": 2011
        },
        {
            "value": 8500.0,
            "year": 2012
        },
        {
            "value": 11000.0,
            "year": 2013
        },
        {
            "value": 11000.0,
            "year": 2014
        },
        {
            "value": 11000.0,
            "year": 2015
        },
        {
            "value": 11000.0,
            "year": 2016
        },
        {
            "value": 12400.0,
            "year": 2017
        },
        {
            "value": 12400.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0135',
                     min_y: 6750.0,
                     max_y: 13640.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victims receiving a service from the Victims of Crime Helpline, Victims Register, Youth Justice Group Conferencing and Victims Support (VSA)",
                     description: "Victims and Community Support Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 9662.0,
            "year": 2010
        },
        {
            "value": 9497.0,
            "year": 2011
        },
        {
            "value": 9038.0,
            "year": 2012
        },
        {
            "value": 9038.0,
            "year": 2013
        },
        {
            "value": 11468.0,
            "year": 2014
        },
        {
            "value": 13723.0,
            "year": 2015
        },
        {
            "value": 23399.0,
            "year": 2016
        },
        {
            "value": 30000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 7500.0,
            "year": 2010
        },
        {
            "value": 7500.0,
            "year": 2011
        },
        {
            "value": 8500.0,
            "year": 2012
        },
        {
            "value": 10000.0,
            "year": 2013
        },
        {
            "value": 10000.0,
            "year": 2014
        },
        {
            "value": 10000.0,
            "year": 2015
        },
        {
            "value": 10000.0,
            "year": 2016
        },
        {
            "value": 17600.0,
            "year": 2017
        },
        {
            "value": 17600.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0136',
                     min_y: 6750.0,
                     max_y: 33000.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Youth Justice Community-Based Services_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 49.100000000000001,
            "year": 2008
        },
        {
            "value": 48.5,
            "year": 2009
        },
        {
            "value": 50.799999999999997,
            "year": 2010
        },
        {
            "value": 57.899999999999999,
            "year": 2011
        },
        {
            "value": 61.700000000000003,
            "year": 2012
        },
        {
            "value": 65.200000000000003,
            "year": 2013
        },
        {
            "value": 66.0,
            "year": 2014
        },
        {
            "value": 65.900000000000006,
            "year": 2015
        },
        {
            "value": 67.400000000000006,
            "year": 2016
        },
        {
            "value": 52.600000000000001,
            "year": 2017
        }
    ],
    [
        {
            "value": 50.299999999999997,
            "year": 2008
        },
        {
            "value": 50.299999999999997,
            "year": 2009
        },
        {
            "value": 50.700000000000003,
            "year": 2010
        },
        {
            "value": 58.700000000000003,
            "year": 2011
        },
        {
            "value": 64.799999999999997,
            "year": 2012
        },
        {
            "value": 66.0,
            "year": 2013
        },
        {
            "value": 68.700000000000003,
            "year": 2014
        },
        {
            "value": 69.299999999999997,
            "year": 2015
        },
        {
            "value": 69.900000000000006,
            "year": 2016
        },
        {
            "value": 71.599999999999994,
            "year": 2017
        },
        {
            "value": 61.899999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0137',
                     min_y: 43.65,
                     max_y: 78.76,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Community-based orders completed successfully",
                     description: "Youth Justice Community-Based Services_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 92.400000000000006,
            "year": 2011
        },
        {
            "value": 88.700000000000003,
            "year": 2012
        },
        {
            "value": 89.599999999999994,
            "year": 2013
        },
        {
            "value": 91.0,
            "year": 2014
        },
        {
            "value": 89.700000000000003,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 85.0,
            "year": 2014
        },
        {
            "value": 85.0,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 85.0,
            "year": 2017
        },
        {
            "value": 85.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0138',
                     min_y: 76.5,
                     max_y: 101.64,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily number of clients under community-based supervision",
                     description: "Youth Justice Community-Based Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 1368.0,
            "year": 2010
        },
        {
            "value": 1076.0,
            "year": 2011
        },
        {
            "value": 1076.0,
            "year": 2014
        },
        {
            "value": 1021.0,
            "year": 2015
        },
        {
            "value": 923.0,
            "year": 2016
        },
        {
            "value": 920.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1200.0,
            "year": 2010
        },
        {
            "value": 1200.0,
            "year": 2011
        },
        {
            "value": 1625.0,
            "year": 2014
        },
        {
            "value": 1625.0,
            "year": 2015
        },
        {
            "value": 1625.0,
            "year": 2016
        },
        {
            "value": 1625.0,
            "year": 2017
        },
        {
            "value": 1200.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0139',
                     min_y: 828.0,
                     max_y: 1787.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of youth justice clients under community-based supervision",
                     description: "Youth Justice Community-Based Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 88.0,
            "year": 2008
        },
        {
            "value": 90.400000000000006,
            "year": 2009
        },
        {
            "value": 88.700000000000003,
            "year": 2010
        },
        {
            "value": 88.5,
            "year": 2011
        },
        {
            "value": 88.5,
            "year": 2012
        },
        {
            "value": 87.5,
            "year": 2013
        },
        {
            "value": 88.0,
            "year": 2014
        },
        {
            "value": 87.799999999999997,
            "year": 2015
        },
        {
            "value": 85.0,
            "year": 2016
        },
        {
            "value": 89.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 85.0,
            "year": 2008
        },
        {
            "value": 85.0,
            "year": 2009
        },
        {
            "value": 85.0,
            "year": 2010
        },
        {
            "value": 85.0,
            "year": 2011
        },
        {
            "value": 85.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 88.5,
            "year": 2014
        },
        {
            "value": 88.5,
            "year": 2015
        },
        {
            "value": 88.5,
            "year": 2016
        },
        {
            "value": 89.0,
            "year": 2017
        },
        {
            "value": 89.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0140',
                     min_y: 76.5,
                     max_y: 99.44,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Young people on supervised orders who have a client assessment and plan completed within six weeks of the commencement of the order",
                     description: "Youth Justice Community-Based Services_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 96.0,
            "year": 2008
        },
        {
            "value": 95.900000000000006,
            "year": 2009
        },
        {
            "value": 95.700000000000003,
            "year": 2010
        },
        {
            "value": 96.099999999999994,
            "year": 2011
        },
        {
            "value": 94.5,
            "year": 2012
        },
        {
            "value": 96.099999999999994,
            "year": 2013
        },
        {
            "value": 96.0,
            "year": 2014
        },
        {
            "value": 96.5,
            "year": 2015
        },
        {
            "value": 97.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0141',
                     min_y: 85.05,
                     max_y: 106.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Youth Justice Custodial Services_Cost_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 52.200000000000003,
            "year": 2008
        },
        {
            "value": 56.100000000000001,
            "year": 2009
        },
        {
            "value": 56.200000000000003,
            "year": 2010
        },
        {
            "value": 60.700000000000003,
            "year": 2011
        },
        {
            "value": 64.0,
            "year": 2012
        },
        {
            "value": 67.200000000000003,
            "year": 2013
        },
        {
            "value": 70.700000000000003,
            "year": 2014
        },
        {
            "value": 68.299999999999997,
            "year": 2015
        },
        {
            "value": 85.700000000000003,
            "year": 2016
        },
        {
            "value": 100.7,
            "year": 2017
        }
    ],
    [
        {
            "value": 54.799999999999997,
            "year": 2008
        },
        {
            "value": 54.799999999999997,
            "year": 2009
        },
        {
            "value": 54.100000000000001,
            "year": 2010
        },
        {
            "value": 55.5,
            "year": 2011
        },
        {
            "value": 61.600000000000001,
            "year": 2012
        },
        {
            "value": 64.5,
            "year": 2013
        },
        {
            "value": 67.599999999999994,
            "year": 2014
        },
        {
            "value": 71.799999999999997,
            "year": 2015
        },
        {
            "value": 85.799999999999997,
            "year": 2016
        },
        {
            "value": 89.799999999999997,
            "year": 2017
        },
        {
            "value": 103.40000000000001,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0142',
                     min_y: 46.98,
                     max_y: 113.74,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Clients participating in community re-integration activities",
                     description: "Youth Justice Custodial Services_Quality_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 74.0,
            "year": 2008
        },
        {
            "value": 72.299999999999997,
            "year": 2009
        },
        {
            "value": 64.0,
            "year": 2010
        },
        {
            "value": 58.299999999999997,
            "year": 2011
        },
        {
            "value": 71.299999999999997,
            "year": 2012
        },
        {
            "value": 68.599999999999994,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 70.0,
            "year": 2015
        },
        {
            "value": 59.0,
            "year": 2016
        },
        {
            "value": 65.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 70.0,
            "year": 2008
        },
        {
            "value": 70.0,
            "year": 2009
        },
        {
            "value": 70.0,
            "year": 2010
        },
        {
            "value": 70.0,
            "year": 2011
        },
        {
            "value": 60.0,
            "year": 2012
        },
        {
            "value": 60.0,
            "year": 2013
        },
        {
            "value": 65.0,
            "year": 2014
        },
        {
            "value": 65.0,
            "year": 2015
        },
        {
            "value": 65.0,
            "year": 2016
        },
        {
            "value": 65.0,
            "year": 2017
        },
        {
            "value": 65.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0143',
                     min_y: 52.47,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Annual daily average number of young people in custody: male (under 15 years) and female",
                     description: "Youth Justice Custodial Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 18.0,
            "year": 2008
        },
        {
            "value": 14.0,
            "year": 2009
        },
        {
            "value": 18.699999999999999,
            "year": 2010
        },
        {
            "value": 14.4,
            "year": 2011
        },
        {
            "value": 14.6,
            "year": 2012
        },
        {
            "value": 14.699999999999999,
            "year": 2013
        },
        {
            "value": 10.199999999999999,
            "year": 2014
        },
        {
            "value": 18.600000000000001,
            "year": 2015
        },
        {
            "value": 17.899999999999999,
            "year": 2016
        },
        {
            "value": 20.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0144',
                     min_y: 9.18,
                     max_y: 22.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Annual daily average number of young people in custody: males (15 years plus)",
                     description: "Youth Justice Custodial Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 140.0,
            "year": 2008
        },
        {
            "value": 121.0,
            "year": 2009
        },
        {
            "value": 155.30000000000001,
            "year": 2010
        },
        {
            "value": 164.0,
            "year": 2011
        },
        {
            "value": 158.69999999999999,
            "year": 2012
        },
        {
            "value": 152.5,
            "year": 2013
        },
        {
            "value": 135.19999999999999,
            "year": 2014
        },
        {
            "value": 123.7,
            "year": 2015
        },
        {
            "value": 146.5,
            "year": 2016
        },
        {
            "value": 150.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0145',
                     min_y: 108.9,
                     max_y: 180.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily custodial centre utilisation rate: males (15 years plus)",
                     description: "Youth Justice Custodial Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 76.0,
            "year": 2008
        },
        {
            "value": 66.099999999999994,
            "year": 2009
        },
        {
            "value": 89.799999999999997,
            "year": 2010
        },
        {
            "value": 92.599999999999994,
            "year": 2011
        },
        {
            "value": 89.700000000000003,
            "year": 2012
        },
        {
            "value": 83.299999999999997,
            "year": 2013
        },
        {
            "value": 74.0,
            "year": 2014
        },
        {
            "value": 67.599999999999994,
            "year": 2015
        },
        {
            "value": 64.0,
            "year": 2016
        },
        {
            "value": 76.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 67.599999999999994,
            "year": 2008
        },
        {
            "value": 67.599999999999994,
            "year": 2009
        },
        {
            "value": 67.599999999999994,
            "year": 2010
        },
        {
            "value": 67.599999999999994,
            "year": 2011
        },
        {
            "value": 67.599999999999994,
            "year": 2012
        },
        {
            "value": 67.599999999999994,
            "year": 2013
        },
        {
            "value": 67.599999999999994,
            "year": 2014
        },
        {
            "value": 67.599999999999994,
            "year": 2015
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0146',
                     min_y: 57.6,
                     max_y: 101.86,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average daily custodial centre utilisation rate: males (under 15 years) and female",
                     description: "Youth Justice Custodial Services_Quantity_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 46.0,
            "year": 2008
        },
        {
            "value": 35.0,
            "year": 2009
        },
        {
            "value": 48.0,
            "year": 2010
        },
        {
            "value": 36.899999999999999,
            "year": 2011
        },
        {
            "value": 37.399999999999999,
            "year": 2012
        },
        {
            "value": 49.0,
            "year": 2013
        },
        {
            "value": 34.0,
            "year": 2014
        },
        {
            "value": 62.0,
            "year": 2015
        },
        {
            "value": 60.0,
            "year": 2016
        },
        {
            "value": 66.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0147',
                     min_y: 30.6,
                     max_y: 72.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Young people on custodial orders who have a client assessment and plan completed within six weeks of the commencement of the order",
                     description: "Youth Justice Custodial Services_Timeliness_Department of Justice and Regulation",
                     data:  [
    [
        {
            "value": 65.200000000000003,
            "year": 2008
        },
        {
            "value": 93.200000000000003,
            "year": 2009
        },
        {
            "value": 85.700000000000003,
            "year": 2010
        },
        {
            "value": 91.400000000000006,
            "year": 2011
        },
        {
            "value": 93.299999999999997,
            "year": 2012
        },
        {
            "value": 98.400000000000006,
            "year": 2013
        },
        {
            "value": 98.0,
            "year": 2014
        },
        {
            "value": 98.299999999999997,
            "year": 2015
        },
        {
            "value": 98.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0148',
                     min_y: 58.68,
                     max_y: 108.24,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Climate Change_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 44.399999999999999,
            "year": 2008
        },
        {
            "value": 88.5,
            "year": 2009
        },
        {
            "value": 76.200000000000003,
            "year": 2010
        },
        {
            "value": 44.700000000000003,
            "year": 2011
        },
        {
            "value": 54.299999999999997,
            "year": 2012
        },
        {
            "value": 47.700000000000003,
            "year": 2013
        },
        {
            "value": 40.299999999999997,
            "year": 2014
        },
        {
            "value": 117.0,
            "year": 2015
        }
    ],
    [
        {
            "value": 77.599999999999994,
            "year": 2008
        },
        {
            "value": 77.599999999999994,
            "year": 2009
        },
        {
            "value": 77.0,
            "year": 2010
        },
        {
            "value": 46.799999999999997,
            "year": 2011
        },
        {
            "value": 60.700000000000003,
            "year": 2012
        },
        {
            "value": 37.600000000000001,
            "year": 2013
        },
        {
            "value": 48.799999999999997,
            "year": 2014
        },
        {
            "value": 32.0,
            "year": 2015
        },
        {
            "value": 129.5,
            "year": 2016
        },
        {
            "value": 36.100000000000001,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0149',
                     min_y: 28.8,
                     max_y: 142.45,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Departmental stakeholder satisfaction with engagement in completed policy projects ",
                     description: "Climate Change_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 75.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 75.0,
            "year": 2017
        },
        {
            "value": 75.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0150',
                     min_y: 67.5,
                     max_y: 82.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victorian schools participating in the ResourceSmart Schools program",
                     description: "Climate Change_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 868.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 868.0,
            "year": 2017
        },
        {
            "value": 868.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0151',
                     min_y: 781.2,
                     max_y: 954.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of policy, advice and research on climate change within agreed timeframes",
                     description: "Climate Change_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0152',
                     min_y: 72.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Effective Water Management and Supply_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 359.89999999999998,
            "year": 2008
        },
        {
            "value": 388.39999999999998,
            "year": 2009
        },
        {
            "value": 380.60000000000002,
            "year": 2010
        },
        {
            "value": 276.30000000000001,
            "year": 2011
        },
        {
            "value": 273.10000000000002,
            "year": 2012
        },
        {
            "value": 261.69999999999999,
            "year": 2013
        },
        {
            "value": 273.80000000000001,
            "year": 2014
        },
        {
            "value": 377.5,
            "year": 2015
        },
        {
            "value": 384.60000000000002,
            "year": 2016
        },
        {
            "value": 426.60000000000002,
            "year": 2017
        }
    ],
    [
        {
            "value": 277.0,
            "year": 2008
        },
        {
            "value": 277.0,
            "year": 2009
        },
        {
            "value": 389.39999999999998,
            "year": 2010
        },
        {
            "value": 327.69999999999999,
            "year": 2011
        },
        {
            "value": 285.19999999999999,
            "year": 2012
        },
        {
            "value": 278.10000000000002,
            "year": 2013
        },
        {
            "value": 343.69999999999999,
            "year": 2014
        },
        {
            "value": 452.80000000000001,
            "year": 2015
        },
        {
            "value": 603.29999999999995,
            "year": 2016
        },
        {
            "value": 486.19999999999999,
            "year": 2017
        },
        {
            "value": 521.5,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0153',
                     min_y: 235.53,
                     max_y: 663.63,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Bulk and environmental entitlement records publicly available",
                     description: "Effective Water Management and Supply_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0154',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Manage Victoria's salinity impacts in the Murray Darling Basin so that Victoria is compliant with the Murray Darling Basin Agreement",
                     description: "Effective Water Management and Supply_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0155',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Area of waterway vegetation works undertaken to improve the health and resilience of waterways",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 3060.0,
            "year": 2014
        },
        {
            "value": 5153.0,
            "year": 2015
        },
        {
            "value": 8010.0,
            "year": 2016
        },
        {
            "value": 8500.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 3000.0,
            "year": 2014
        },
        {
            "value": 3000.0,
            "year": 2015
        },
        {
            "value": 3000.0,
            "year": 2016
        },
        {
            "value": 8500.0,
            "year": 2017
        },
        {
            "value": 8500.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'hectares' ,
                     target: '#p0156',
                     min_y: 2700.0,
                     max_y: 9350.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Cumulative other Victorian retail water entitlements (including licences to take and use water and other miscellaneous entitlements) recorded in the water register as the authoritative record",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 97.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 91.0,
            "year": 2016
        },
        {
            "value": 91.0,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0157',
                     min_y: 81.9,
                     max_y: 106.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Cumulative water savings (permanent reduction in irrigation distribution system delivery losses) realised through water recovery projects",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 192000.0,
            "year": 2008
        },
        {
            "value": 439308.0,
            "year": 2009
        },
        {
            "value": 439308.0,
            "year": 2010
        },
        {
            "value": 551900.0,
            "year": 2011
        },
        {
            "value": 626400.0,
            "year": 2012
        },
        {
            "value": 626400.0,
            "year": 2013
        },
        {
            "value": 652587.0,
            "year": 2014
        },
        {
            "value": 673856.0,
            "year": 2015
        },
        {
            "value": 681056.0,
            "year": 2016
        },
        {
            "value": 744021.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 429600.0,
            "year": 2008
        },
        {
            "value": 429600.0,
            "year": 2009
        },
        {
            "value": 554600.0,
            "year": 2010
        },
        {
            "value": 554600.0,
            "year": 2011
        },
        {
            "value": 609900.0,
            "year": 2012
        },
        {
            "value": 679600.0,
            "year": 2013
        },
        {
            "value": 679600.0,
            "year": 2014
        },
        {
            "value": 679600.0,
            "year": 2015
        },
        {
            "value": 749600.0,
            "year": 2016
        },
        {
            "value": 682056.0,
            "year": 2017
        },
        {
            "value": 802507.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'mega litres' ,
                     target: '#p0158',
                     min_y: 172800.0,
                     max_y: 882757.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "People engaged to increase the knowledge/capacity of waterway management",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 2499.0,
            "year": 2015
        },
        {
            "value": 8601.0,
            "year": 2016
        },
        {
            "value": 5000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 4500.0,
            "year": 2015
        },
        {
            "value": 4500.0,
            "year": 2016
        },
        {
            "value": 4500.0,
            "year": 2017
        },
        {
            "value": 4500.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0159',
                     min_y: 2249.1,
                     max_y: 9461.1,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Schools signed up to Schools Water Efficiency Program (SWEP)",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 1100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0160',
                     min_y: 990.0,
                     max_y: 1210.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Sites where works have been undertaken to improve in stream health",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 72.0,
            "year": 2015
        },
        {
            "value": 173.0,
            "year": 2016
        },
        {
            "value": 120.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 50.0,
            "year": 2015
        },
        {
            "value": 50.0,
            "year": 2016
        },
        {
            "value": 60.0,
            "year": 2017
        },
        {
            "value": 60.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0161',
                     min_y: 45.0,
                     max_y: 190.3,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Sites with environmental water managed to meet environmental objectives",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 179.0,
            "year": 2016
        },
        {
            "value": 160.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 160.0,
            "year": 2016
        },
        {
            "value": 160.0,
            "year": 2017
        },
        {
            "value": 160.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0162',
                     min_y: 144.0,
                     max_y: 196.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Water information products (including annual water accounts, water resource condition reports and water monitoring materials) delivered for greater accountability in sustainable water resource management",
                     description: "Effective Water Management and Supply_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 5.0,
            "year": 2010
        },
        {
            "value": 5.0,
            "year": 2011
        },
        {
            "value": 5.0,
            "year": 2012
        },
        {
            "value": 5.0,
            "year": 2013
        },
        {
            "value": 5.0,
            "year": 2014
        },
        {
            "value": 5.0,
            "year": 2015
        },
        {
            "value": 5.0,
            "year": 2016
        },
        {
            "value": 5.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 5.0,
            "year": 2010
        },
        {
            "value": 5.0,
            "year": 2011
        },
        {
            "value": 5.0,
            "year": 2012
        },
        {
            "value": 5.0,
            "year": 2013
        },
        {
            "value": 5.0,
            "year": 2014
        },
        {
            "value": 5.0,
            "year": 2015
        },
        {
            "value": 5.0,
            "year": 2016
        },
        {
            "value": 5.0,
            "year": 2017
        },
        {
            "value": 6.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0163',
                     min_y: 4.5,
                     max_y: 6.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Statutory obligations of Water Corporations complied with, including annual reports, audits and corporate plans",
                     description: "Effective Water Management and Supply_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2009
        },
        {
            "value": 93.0,
            "year": 2010
        },
        {
            "value": 100.0,
            "year": 2011
        },
        {
            "value": 100.0,
            "year": 2012
        },
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2009
        },
        {
            "value": 100.0,
            "year": 2010
        },
        {
            "value": 100.0,
            "year": 2011
        },
        {
            "value": 100.0,
            "year": 2012
        },
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0164',
                     min_y: 83.7,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Energy_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 69.599999999999994,
            "year": 2016
        },
        {
            "value": 126.40000000000001,
            "year": 2017
        }
    ],
    [
        {
            "value": 65.799999999999997,
            "year": 2016
        },
        {
            "value": 65.799999999999997,
            "year": 2017
        },
        {
            "value": 180.5,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0165',
                     min_y: 59.22,
                     max_y: 198.55,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key Australian Energy Market Commission funding milestones, in line with funding agreements and agreed project deliverables",
                     description: "Energy_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0166',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Users of the Victorian Energy Compare website who report a better understanding of their usage costs after using the website",
                     description: "Energy_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 50.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0167',
                     min_y: 45.0,
                     max_y: 55.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victoria is represented at each COAG Energy Council meeting",
                     description: "Energy_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0168',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of a pilot independent energy brokerage service for Victorian hardship and culturally and linguistically diverse (CALD) consumers",
                     description: "Energy_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0169',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the Powerline Bushfire Safety Work Program",
                     description: "Energy_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0170',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the Smart System, Microgrid and Storage trials program",
                     description: "Energy_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0171',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the Solar Trams Program",
                     description: "Energy_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0172',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the Victorian Energy Efficiency Target Scheme work program",
                     description: "Energy_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0173',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the energy efficiency and productivity work program",
                     description: "Energy_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0174',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the renewable energy work program",
                     description: "Energy_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0175',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Facilitate the delivery of key energy technology innovation milestones in line with grant agreements",
                     description: "Energy_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0176',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Environment and Biodiversity_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 130.59999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0177',
                     min_y: 117.54,
                     max_y: 143.66,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Completion of annual reporting and board appointment processes in accordance with legislation",
                     description: "Environment and Biodiversity_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 92.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0178',
                     min_y: 82.8,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of key milestones for the Keeping e-waste out of landfill program",
                     description: "Environment and Biodiversity_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0179',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Presentations made and scientific publications in peer reviewed journals",
                     description: "Environment and Biodiversity_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 97.0,
            "year": 2008
        },
        {
            "value": 97.0,
            "year": 2009
        },
        {
            "value": 98.0,
            "year": 2010
        },
        {
            "value": 98.0,
            "year": 2011
        },
        {
            "value": 65.0,
            "year": 2012
        },
        {
            "value": 60.0,
            "year": 2013
        },
        {
            "value": 64.0,
            "year": 2014
        },
        {
            "value": 64.0,
            "year": 2015
        },
        {
            "value": 63.0,
            "year": 2016
        },
        {
            "value": 60.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 96.0,
            "year": 2011
        },
        {
            "value": 96.0,
            "year": 2012
        },
        {
            "value": 60.0,
            "year": 2013
        },
        {
            "value": 60.0,
            "year": 2014
        },
        {
            "value": 60.0,
            "year": 2015
        },
        {
            "value": 60.0,
            "year": 2016
        },
        {
            "value": 60.0,
            "year": 2017
        },
        {
            "value": 60.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0180',
                     min_y: 54.0,
                     max_y: 107.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Area of revegetation protected or enhanced through departmental supported Landcare activities",
                     description: "Environment and Biodiversity_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 1718.0,
            "year": 2014
        },
        {
            "value": 1600.0,
            "year": 2015
        },
        {
            "value": 1602.0,
            "year": 2016
        },
        {
            "value": 1500.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1500.0,
            "year": 2014
        },
        {
            "value": 1500.0,
            "year": 2015
        },
        {
            "value": 1500.0,
            "year": 2016
        },
        {
            "value": 1500.0,
            "year": 2017
        },
        {
            "value": 1600.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'hectares ' ,
                     target: '#p0181',
                     min_y: 1350.0,
                     max_y: 1889.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Area protected from pest predators, weeds and herbivores",
                     description: "Environment and Biodiversity_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 180000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'hectare' ,
                     target: '#p0182',
                     min_y: 162000.0,
                     max_y: 198000.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Habitat managed for biodiversity in Victoria",
                     description: "Environment and Biodiversity_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 10000.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'hectare' ,
                     target: '#p0183',
                     min_y: 9000.0,
                     max_y: 11000.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victorian Landcare Groups supported by a facilitator",
                     description: "Environment and Biodiversity_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 440.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 395.0,
            "year": 2017
        },
        {
            "value": 435.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0184',
                     min_y: 355.5,
                     max_y: 484.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Native Vegetation Credit Extracts processed within 10 days",
                     description: "Environment and Biodiversity_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0185',
                     min_y: 81.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Planning referrals relating to native vegetation processed within statutory timeframes",
                     description: "Environment and Biodiversity_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 87.0,
            "year": 2011
        },
        {
            "value": 82.5,
            "year": 2012
        },
        {
            "value": 75.799999999999997,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 88.0,
            "year": 2015
        },
        {
            "value": 77.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2011
        },
        {
            "value": 90.0,
            "year": 2012
        },
        {
            "value": 80.0,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0186',
                     min_y: 68.22,
                     max_y: 99.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Wildlife Licence renewals processed by target dates",
                     description: "Environment and Biodiversity_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 97.0,
            "year": 2008
        },
        {
            "value": 97.0,
            "year": 2009
        },
        {
            "value": 98.0,
            "year": 2010
        },
        {
            "value": 98.0,
            "year": 2011
        },
        {
            "value": 99.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 96.0,
            "year": 2014
        },
        {
            "value": 99.0,
            "year": 2015
        },
        {
            "value": 96.0,
            "year": 2016
        },
        {
            "value": 96.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2008
        },
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 96.0,
            "year": 2011
        },
        {
            "value": 96.0,
            "year": 2012
        },
        {
            "value": 96.0,
            "year": 2013
        },
        {
            "value": 96.0,
            "year": 2014
        },
        {
            "value": 96.0,
            "year": 2015
        },
        {
            "value": 96.0,
            "year": 2016
        },
        {
            "value": 96.0,
            "year": 2017
        },
        {
            "value": 96.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0187',
                     min_y: 85.5,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Land Use Victoria_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 83.299999999999997,
            "year": 2014
        },
        {
            "value": 82.700000000000003,
            "year": 2015
        },
        {
            "value": 95.599999999999994,
            "year": 2016
        },
        {
            "value": 75.200000000000003,
            "year": 2017
        }
    ],
    [
        {
            "value": 76.700000000000003,
            "year": 2014
        },
        {
            "value": 77.299999999999997,
            "year": 2015
        },
        {
            "value": 65.799999999999997,
            "year": 2016
        },
        {
            "value": 77.0,
            "year": 2017
        },
        {
            "value": 80.400000000000006,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0188',
                     min_y: 59.22,
                     max_y: 105.16,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Audited Vicmap digital map base not requiring correction",
                     description: "Land Use Victoria_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 97.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 98.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        },
        {
            "value": 98.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0189',
                     min_y: 87.3,
                     max_y: 107.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Government owned properties sold, bought or leased within 10 per cent of valuation",
                     description: "Land Use Victoria_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2008
        },
        {
            "value": 80.0,
            "year": 2009
        },
        {
            "value": 80.0,
            "year": 2010
        },
        {
            "value": 80.0,
            "year": 2011
        },
        {
            "value": 80.0,
            "year": 2012
        },
        {
            "value": 85.0,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2008
        },
        {
            "value": 80.0,
            "year": 2009
        },
        {
            "value": 80.0,
            "year": 2010
        },
        {
            "value": 80.0,
            "year": 2011
        },
        {
            "value": 80.0,
            "year": 2012
        },
        {
            "value": 80.0,
            "year": 2013
        },
        {
            "value": 80.0,
            "year": 2014
        },
        {
            "value": 80.0,
            "year": 2015
        },
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0190',
                     min_y: 72.0,
                     max_y: 93.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Strategic Land Use Assessments delivered within agreed timeframes",
                     description: "Land Use Victoria_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0191',
                     min_y: 72.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Planning certificates issued",
                     description: "Land Use Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 40.700000000000003,
            "year": 2008
        },
        {
            "value": 33.0,
            "year": 2009
        },
        {
            "value": 37.700000000000003,
            "year": 2010
        },
        {
            "value": 37.0,
            "year": 2011
        },
        {
            "value": 38.0,
            "year": 2012
        },
        {
            "value": 42.0,
            "year": 2013
        },
        {
            "value": 50.0,
            "year": 2014
        },
        {
            "value": 55.5,
            "year": 2015
        },
        {
            "value": 57.0,
            "year": 2016
        },
        {
            "value": 57.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 45.0,
            "year": 2008
        },
        {
            "value": 45.0,
            "year": 2009
        },
        {
            "value": 30.0,
            "year": 2010
        },
        {
            "value": 35.0,
            "year": 2011
        },
        {
            "value": 35.0,
            "year": 2012
        },
        {
            "value": 35.0,
            "year": 2013
        },
        {
            "value": 35.0,
            "year": 2014
        },
        {
            "value": 50.0,
            "year": 2015
        },
        {
            "value": 55.0,
            "year": 2016
        },
        {
            "value": 55.0,
            "year": 2017
        },
        {
            "value": 60.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (‘000)' ,
                     target: '#p0192',
                     min_y: 27.0,
                     max_y: 66.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Property reports generated online",
                     description: "Land Use Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 3.2999999999999998,
            "year": 2016
        },
        {
            "value": 3.8999999999999999,
            "year": 2017
        }
    ],
    [
        {
            "value": 3.8999999999999999,
            "year": 2016
        },
        {
            "value": 3.8999999999999999,
            "year": 2017
        },
        {
            "value": 3.8999999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (million)' ,
                     target: '#p0193',
                     min_y: 2.97,
                     max_y: 4.29,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Property transfers, discharge of mortgages and registration of new mortgages",
                     description: "Land Use Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 779.0,
            "year": 2008
        },
        {
            "value": 667.0,
            "year": 2009
        },
        {
            "value": 742.0,
            "year": 2010
        },
        {
            "value": 722.0,
            "year": 2011
        },
        {
            "value": 680.0,
            "year": 2012
        },
        {
            "value": 670.0,
            "year": 2013
        },
        {
            "value": 748.0,
            "year": 2014
        },
        {
            "value": 792.29999999999995,
            "year": 2015
        },
        {
            "value": 855.0,
            "year": 2016
        },
        {
            "value": 840.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 750.0,
            "year": 2008
        },
        {
            "value": 750.0,
            "year": 2009
        },
        {
            "value": 640.0,
            "year": 2010
        },
        {
            "value": 720.0,
            "year": 2011
        },
        {
            "value": 760.0,
            "year": 2012
        },
        {
            "value": 680.0,
            "year": 2013
        },
        {
            "value": 650.0,
            "year": 2014
        },
        {
            "value": 700.0,
            "year": 2015
        },
        {
            "value": 750.0,
            "year": 2016
        },
        {
            "value": 800.0,
            "year": 2017
        },
        {
            "value": 800.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (‘000)' ,
                     target: '#p0194',
                     min_y: 576.0,
                     max_y: 940.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of title searches supplied (remotely) online",
                     description: "Land Use Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 94.400000000000006,
            "year": 2008
        },
        {
            "value": 96.0,
            "year": 2009
        },
        {
            "value": 97.0,
            "year": 2010
        },
        {
            "value": 97.0,
            "year": 2011
        },
        {
            "value": 96.0,
            "year": 2012
        },
        {
            "value": 96.0,
            "year": 2013
        },
        {
            "value": 98.0,
            "year": 2014
        },
        {
            "value": 98.0,
            "year": 2015
        },
        {
            "value": 99.0,
            "year": 2016
        },
        {
            "value": 99.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 93.0,
            "year": 2008
        },
        {
            "value": 93.0,
            "year": 2009
        },
        {
            "value": 93.0,
            "year": 2010
        },
        {
            "value": 96.0,
            "year": 2011
        },
        {
            "value": 96.0,
            "year": 2012
        },
        {
            "value": 96.0,
            "year": 2013
        },
        {
            "value": 96.0,
            "year": 2014
        },
        {
            "value": 96.0,
            "year": 2015
        },
        {
            "value": 98.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        },
        {
            "value": 98.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0195',
                     min_y: 83.7,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Title searches supplied",
                     description: "Land Use Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 2186.0,
            "year": 2008
        },
        {
            "value": 2207.0,
            "year": 2009
        },
        {
            "value": 2207.0,
            "year": 2010
        },
        {
            "value": 2215.0,
            "year": 2011
        },
        {
            "value": 2169.0,
            "year": 2012
        },
        {
            "value": 2169.0,
            "year": 2013
        },
        {
            "value": 2205.0,
            "year": 2014
        },
        {
            "value": 2242.0,
            "year": 2015
        },
        {
            "value": 2232.0,
            "year": 2016
        },
        {
            "value": 2220.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 2100.0,
            "year": 2008
        },
        {
            "value": 2100.0,
            "year": 2009
        },
        {
            "value": 2180.0,
            "year": 2010
        },
        {
            "value": 2180.0,
            "year": 2011
        },
        {
            "value": 2180.0,
            "year": 2012
        },
        {
            "value": 2180.0,
            "year": 2013
        },
        {
            "value": 2180.0,
            "year": 2014
        },
        {
            "value": 2220.0,
            "year": 2015
        },
        {
            "value": 2220.0,
            "year": 2016
        },
        {
            "value": 2220.0,
            "year": 2017
        },
        {
            "value": 2220.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (‘000)' ,
                     target: '#p0196',
                     min_y: 1890.0,
                     max_y: 2466.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Delivery of updated Vicmap Foundation Data within one week",
                     description: "Land Use Victoria_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 98.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0197',
                     min_y: 88.2,
                     max_y: 107.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Land dealings registered within five days",
                     description: "Land Use Victoria_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 98.5,
            "year": 2008
        },
        {
            "value": 96.0,
            "year": 2009
        },
        {
            "value": 99.0,
            "year": 2010
        },
        {
            "value": 98.0,
            "year": 2011
        },
        {
            "value": 98.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 99.0,
            "year": 2014
        },
        {
            "value": 99.0,
            "year": 2015
        },
        {
            "value": 99.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 93.0,
            "year": 2008
        },
        {
            "value": 93.0,
            "year": 2009
        },
        {
            "value": 93.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0198',
                     min_y: 83.7,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "New titles (subdivisions) created within three weeks",
                     description: "Land Use Victoria_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 96.200000000000003,
            "year": 2008
        },
        {
            "value": 93.0,
            "year": 2009
        },
        {
            "value": 97.0,
            "year": 2010
        },
        {
            "value": 97.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 94.0,
            "year": 2014
        },
        {
            "value": 89.0,
            "year": 2015
        },
        {
            "value": 78.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 93.0,
            "year": 2008
        },
        {
            "value": 93.0,
            "year": 2009
        },
        {
            "value": 93.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0199',
                     min_y: 70.2,
                     max_y: 106.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Update transactions for the Vicmap digital map base processed within the required timeframes",
                     description: "Land Use Victoria_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 99.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 98.0,
            "year": 2016
        },
        {
            "value": 98.0,
            "year": 2017
        },
        {
            "value": 98.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0200',
                     min_y: 88.2,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Local Government_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 44.5,
            "year": 2008
        },
        {
            "value": 46.0,
            "year": 2009
        },
        {
            "value": 45.899999999999999,
            "year": 2010
        },
        {
            "value": 52.700000000000003,
            "year": 2011
        },
        {
            "value": 52.700000000000003,
            "year": 2012
        },
        {
            "value": 60.799999999999997,
            "year": 2013
        },
        {
            "value": 59.100000000000001,
            "year": 2014
        },
        {
            "value": 60.799999999999997,
            "year": 2015
        },
        {
            "value": 120.09999999999999,
            "year": 2016
        },
        {
            "value": 125.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 44.299999999999997,
            "year": 2008
        },
        {
            "value": 44.299999999999997,
            "year": 2009
        },
        {
            "value": 41.700000000000003,
            "year": 2010
        },
        {
            "value": 58.200000000000003,
            "year": 2011
        },
        {
            "value": 58.5,
            "year": 2012
        },
        {
            "value": 57.700000000000003,
            "year": 2013
        },
        {
            "value": 57.200000000000003,
            "year": 2014
        },
        {
            "value": 59.700000000000003,
            "year": 2015
        },
        {
            "value": 112.09999999999999,
            "year": 2016
        },
        {
            "value": 114.40000000000001,
            "year": 2017
        },
        {
            "value": 92.099999999999994,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0201',
                     min_y: 37.53,
                     max_y: 138.05,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Average council satisfaction rating with the specific financial assistance support provided through the Local Government Financial and Accounting Support Team",
                     description: "Local Government_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 8.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'scale (1-10)' ,
                     target: '#p0202',
                     min_y: 7.2,
                     max_y: 8.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Councils with approved roadside weeds and pests control plan",
                     description: "Local Government_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 56.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0203',
                     min_y: 50.4,
                     max_y: 61.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "New policy and program initiatives with an accompanying comprehensive community and stakeholder engagement strategy",
                     description: "Local Government_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0204',
                     min_y: 72.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Submissions that fully meet the objectives within the Growing Suburbs Fund program guidelines",
                     description: "Local Government_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 60.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0205',
                     min_y: 54.0,
                     max_y: 66.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Meetings held annually with Victorian councils regarding the Victoria Grants Commission financial assistance grants allocation model",
                     description: "Local Government_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 19.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0206',
                     min_y: 17.1,
                     max_y: 20.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Meetings held with Local Government Mayoral Advisory Panel",
                     description: "Local Government_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 5.0,
            "year": 2016
        },
        {
            "value": 4.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 4.0,
            "year": 2016
        },
        {
            "value": 4.0,
            "year": 2017
        },
        {
            "value": 4.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0207',
                     min_y: 3.6,
                     max_y: 5.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victorian councils participating in emergency management planning in collaborative partnerships as part of the Municipal Emergency Management Enhancement Groups",
                     description: "Local Government_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0208',
                     min_y: 72.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Municipal Emergency Resource Program grant payments made within 21 days of completion of agreed milestones in the funding agreement",
                     description: "Local Government_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0209',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Projects completed in accordance with approved milestones within the Growing Suburbs Fund funding agreements",
                     description: "Local Government_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0210',
                     min_y: 72.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Public Library Services grant payments made within 21 days of completion of agreed milestones in the funding agreement",
                     description: "Local Government_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0211',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Roadside Weeds and Pests program grant payments made within 21 days of completion of agreed milestones in the funding agreement",
                     description: "Local Government_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0212',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Victoria Grants Commission allocations finalised to support the completion of Council Budgets within statutory timeframes",
                     description: "Local Government_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2010
        },
        {
            "value": 100.0,
            "year": 2011
        },
        {
            "value": 100.0,
            "year": 2012
        },
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2010
        },
        {
            "value": 100.0,
            "year": 2011
        },
        {
            "value": 100.0,
            "year": 2012
        },
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 100.0,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 100.0,
            "year": 2016
        },
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0213',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Management of Public Land and Forests_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 308.89999999999998,
            "year": 2013
        },
        {
            "value": 319.80000000000001,
            "year": 2014
        },
        {
            "value": 298.89999999999998,
            "year": 2015
        },
        {
            "value": 321.69999999999999,
            "year": 2016
        },
        {
            "value": 335.89999999999998,
            "year": 2017
        }
    ],
    [
        {
            "value": 300.60000000000002,
            "year": 2013
        },
        {
            "value": 300.60000000000002,
            "year": 2014
        },
        {
            "value": 290.89999999999998,
            "year": 2015
        },
        {
            "value": 304.19999999999999,
            "year": 2016
        },
        {
            "value": 321.80000000000001,
            "year": 2017
        },
        {
            "value": 187.09999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0214',
                     min_y: 168.39,
                     max_y: 369.49,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Level of compliance with environmental regulatory framework for commercial timber operations as required by the Forest Audit Program",
                     description: "Management of Public Land and Forests_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 92.0,
            "year": 2011
        },
        {
            "value": 99.0,
            "year": 2012
        },
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 93.0,
            "year": 2014
        },
        {
            "value": 93.0,
            "year": 2015
        },
        {
            "value": 82.0,
            "year": 2016
        },
        {
            "value": 80.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 90.0,
            "year": 2011
        },
        {
            "value": 90.0,
            "year": 2012
        },
        {
            "value": 90.0,
            "year": 2013
        },
        {
            "value": 90.0,
            "year": 2014
        },
        {
            "value": 90.0,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 90.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0215',
                     min_y: 72.0,
                     max_y: 108.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Publicly elected Committees of Management that have a current statutory appointment",
                     description: "Management of Public Land and Forests_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 91.700000000000003,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 83.0,
            "year": 2014
        },
        {
            "value": 91.0,
            "year": 2015
        },
        {
            "value": 93.0,
            "year": 2016
        },
        {
            "value": 94.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 90.0,
            "year": 2016
        },
        {
            "value": 90.0,
            "year": 2017
        },
        {
            "value": 90.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0216',
                     min_y: 74.7,
                     max_y: 104.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Recreational facilities in state forests with a life expectancy greater than five years",
                     description: "Management of Public Land and Forests_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 70.0,
            "year": 2009
        },
        {
            "value": 75.0,
            "year": 2010
        },
        {
            "value": 71.0,
            "year": 2011
        },
        {
            "value": 70.0,
            "year": 2012
        },
        {
            "value": 72.0,
            "year": 2013
        },
        {
            "value": 54.0,
            "year": 2014
        },
        {
            "value": 79.0,
            "year": 2015
        },
        {
            "value": 81.0,
            "year": 2016
        },
        {
            "value": 78.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 80.0,
            "year": 2009
        },
        {
            "value": 80.0,
            "year": 2010
        },
        {
            "value": 70.0,
            "year": 2011
        },
        {
            "value": 70.0,
            "year": 2012
        },
        {
            "value": 70.0,
            "year": 2013
        },
        {
            "value": 70.0,
            "year": 2014
        },
        {
            "value": 60.0,
            "year": 2015
        },
        {
            "value": 60.0,
            "year": 2016
        },
        {
            "value": 75.0,
            "year": 2017
        },
        {
            "value": 75.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0217',
                     min_y: 48.6,
                     max_y: 89.1,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Coastal protection infrastructure projects delivered",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 6.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0218',
                     min_y: 5.4,
                     max_y: 6.6,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Crown land leases directly managed by the Department",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 500.0,
            "year": 2009
        },
        {
            "value": 684.0,
            "year": 2010
        },
        {
            "value": 695.0,
            "year": 2011
        },
        {
            "value": 702.0,
            "year": 2012
        },
        {
            "value": 704.0,
            "year": 2013
        },
        {
            "value": 685.0,
            "year": 2014
        },
        {
            "value": 687.0,
            "year": 2015
        },
        {
            "value": 696.0,
            "year": 2016
        },
        {
            "value": 701.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 500.0,
            "year": 2009
        },
        {
            "value": 500.0,
            "year": 2010
        },
        {
            "value": 684.0,
            "year": 2011
        },
        {
            "value": 684.0,
            "year": 2012
        },
        {
            "value": 684.0,
            "year": 2013
        },
        {
            "value": 684.0,
            "year": 2014
        },
        {
            "value": 684.0,
            "year": 2015
        },
        {
            "value": 684.0,
            "year": 2016
        },
        {
            "value": 684.0,
            "year": 2017
        },
        {
            "value": 700.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0219',
                     min_y: 450.0,
                     max_y: 774.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Crown land licenses directly managed by the Department",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 40.0,
            "year": 2009
        },
        {
            "value": 43.0,
            "year": 2010
        },
        {
            "value": 43.299999999999997,
            "year": 2011
        },
        {
            "value": 43.899999999999999,
            "year": 2012
        },
        {
            "value": 44.0,
            "year": 2013
        },
        {
            "value": 44.0,
            "year": 2014
        },
        {
            "value": 44.0,
            "year": 2015
        },
        {
            "value": 44.0,
            "year": 2016
        },
        {
            "value": 44.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 40.0,
            "year": 2009
        },
        {
            "value": 40.0,
            "year": 2010
        },
        {
            "value": 43.0,
            "year": 2011
        },
        {
            "value": 43.0,
            "year": 2012
        },
        {
            "value": 43.0,
            "year": 2013
        },
        {
            "value": 43.0,
            "year": 2014
        },
        {
            "value": 43.0,
            "year": 2015
        },
        {
            "value": 43.0,
            "year": 2016
        },
        {
            "value": 43.0,
            "year": 2017
        },
        {
            "value": 44.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (000)' ,
                     target: '#p0220',
                     min_y: 36.0,
                     max_y: 48.4,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Participants in Coastcare activities",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 10.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (000)' ,
                     target: '#p0221',
                     min_y: 9.0,
                     max_y: 11.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Specimens curated in the State Botanical Collection",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 18000.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 12100.0,
            "year": 2017
        },
        {
            "value": 12100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0222',
                     min_y: 10890.0,
                     max_y: 19800.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Visitors to Zoos Victoria at Melbourne, Werribee and Healesville",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 1.46,
            "year": 2009
        },
        {
            "value": 1.8,
            "year": 2010
        },
        {
            "value": 1.3999999999999999,
            "year": 2011
        },
        {
            "value": 1.8,
            "year": 2012
        },
        {
            "value": 2.0,
            "year": 2013
        },
        {
            "value": 2.0299999999999998,
            "year": 2014
        },
        {
            "value": 2.29,
            "year": 2015
        },
        {
            "value": 2.4500000000000002,
            "year": 2016
        },
        {
            "value": 2.3300000000000001,
            "year": 2017
        }
    ],
    [
        {
            "value": 1.3700000000000001,
            "year": 2009
        },
        {
            "value": 1.3,
            "year": 2010
        },
        {
            "value": 1.3,
            "year": 2011
        },
        {
            "value": 1.6000000000000001,
            "year": 2012
        },
        {
            "value": 1.8500000000000001,
            "year": 2013
        },
        {
            "value": 1.8899999999999999,
            "year": 2014
        },
        {
            "value": 1.95,
            "year": 2015
        },
        {
            "value": 1.95,
            "year": 2016
        },
        {
            "value": 2.4900000000000002,
            "year": 2017
        },
        {
            "value": 2.6000000000000001,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (million)' ,
                     target: '#p0223',
                     min_y: 1.17,
                     max_y: 2.86,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Visitors to the Royal Botanic Gardens in Melbourne and Cranbourne",
                     description: "Management of Public Land and Forests_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 1.8,
            "year": 2016
        },
        {
            "value": 1.8,
            "year": 2017
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (million)' ,
                     target: '#p0224',
                     min_y: 1.62,
                     max_y: 1.98,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Rent reviews of Department managed Crown land leases undertaken within specified time frames",
                     description: "Management of Public Land and Forests_Timeliness_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 98.799999999999997,
            "year": 2012
        },
        {
            "value": 100.0,
            "year": 2013
        },
        {
            "value": 89.799999999999997,
            "year": 2014
        },
        {
            "value": 100.0,
            "year": 2015
        },
        {
            "value": 94.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 95.0,
            "year": 2009
        },
        {
            "value": 95.0,
            "year": 2010
        },
        {
            "value": 95.0,
            "year": 2011
        },
        {
            "value": 95.0,
            "year": 2012
        },
        {
            "value": 95.0,
            "year": 2013
        },
        {
            "value": 95.0,
            "year": 2014
        },
        {
            "value": 95.0,
            "year": 2015
        },
        {
            "value": 95.0,
            "year": 2016
        },
        {
            "value": 95.0,
            "year": 2017
        },
        {
            "value": 95.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'percent' ,
                     target: '#p0225',
                     min_y: 80.82,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Parks Victoria_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 176.69999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0226',
                     min_y: 159.03,
                     max_y: 194.37,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Significant built bay assets managed by Parks Victoria rated in average to excellent condition",
                     description: "Parks Victoria_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 82.0,
            "year": 2016
        },
        {
            "value": 82.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 75.0,
            "year": 2016
        },
        {
            "value": 75.0,
            "year": 2017
        },
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0227',
                     min_y: 67.5,
                     max_y: 90.2,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Significant built park assets managed by Parks Victoria rated in average to excellent condition",
                     description: "Parks Victoria_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 88.0,
            "year": 2016
        },
        {
            "value": 88.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 88.0,
            "year": 2016
        },
        {
            "value": 88.0,
            "year": 2017
        },
        {
            "value": 88.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0228',
                     min_y: 79.2,
                     max_y: 96.8,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Area treated to minimise the impact of pest plants, pest animals and over abundant native animals in parks managed by Parks Victoria",
                     description: "Parks Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 964.0,
            "year": 2012
        },
        {
            "value": 1201.0,
            "year": 2013
        },
        {
            "value": 1201.0,
            "year": 2014
        },
        {
            "value": 1700.0,
            "year": 2015
        },
        {
            "value": 1100.0,
            "year": 2016
        },
        {
            "value": 1100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 1100.0,
            "year": 2012
        },
        {
            "value": 1309.0,
            "year": 2013
        },
        {
            "value": 1100.0,
            "year": 2014
        },
        {
            "value": 1100.0,
            "year": 2015
        },
        {
            "value": 1100.0,
            "year": 2016
        },
        {
            "value": 1100.0,
            "year": 2017
        },
        {
            "value": 1100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'hectares (000)' ,
                     target: '#p0229',
                     min_y: 867.6,
                     max_y: 1870.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total area of estate managed by Parks Victoria",
                     description: "Parks Victoria_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 4104.0,
            "year": 2016
        },
        {
            "value": 4111.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 4104.0,
            "year": 2016
        },
        {
            "value": 4104.0,
            "year": 2017
        },
        {
            "value": 4104.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'hectares (000)' ,
                     target: '#p0230',
                     min_y: 3693.6,
                     max_y: 4522.1,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Total output cost",
                     description: "Planning, Building and Heritage_Cost_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 134.09999999999999,
            "year": 2008
        },
        {
            "value": 135.40000000000001,
            "year": 2009
        },
        {
            "value": 126.7,
            "year": 2010
        },
        {
            "value": 165.5,
            "year": 2011
        },
        {
            "value": 128.80000000000001,
            "year": 2012
        },
        {
            "value": 87.200000000000003,
            "year": 2013
        },
        {
            "value": 93.400000000000006,
            "year": 2014
        },
        {
            "value": 83.5,
            "year": 2015
        },
        {
            "value": 81.799999999999997,
            "year": 2016
        },
        {
            "value": 158.5,
            "year": 2017
        }
    ],
    [
        {
            "value": 151.59999999999999,
            "year": 2008
        },
        {
            "value": 151.59999999999999,
            "year": 2009
        },
        {
            "value": 152.19999999999999,
            "year": 2010
        },
        {
            "value": 154.0,
            "year": 2011
        },
        {
            "value": 134.30000000000001,
            "year": 2012
        },
        {
            "value": 104.7,
            "year": 2013
        },
        {
            "value": 105.90000000000001,
            "year": 2014
        },
        {
            "value": 109.3,
            "year": 2015
        },
        {
            "value": 120.0,
            "year": 2016
        },
        {
            "value": 156.09999999999999,
            "year": 2017
        },
        {
            "value": 194.59999999999999,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,
                     target: '#p0231',
                     min_y: 73.62,
                     max_y: 214.06,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Amendments that are correct upon submission for approval",
                     description: "Planning, Building and Heritage_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 5.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 20.0,
            "year": 2017
        },
        {
            "value": 25.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0232',
                     min_y: 4.5,
                     max_y: 27.5,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Environment effects statements, referrals and assessments are completed effectively and within the timeframes necessary to meet targets in the Ministerial Guidelines",
                     description: "Planning, Building and Heritage_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2016
        },
        {
            "value": 70.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 70.0,
            "year": 2016
        },
        {
            "value": 70.0,
            "year": 2017
        },
        {
            "value": 70.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0233',
                     min_y: 63.0,
                     max_y: 88.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Projects delivered through  the Planning support for councils initiative to meet agreed project objectives",
                     description: "Planning, Building and Heritage_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 100.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 100.0,
            "year": 2017
        },
        {
            "value": 100.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0234',
                     min_y: 90.0,
                     max_y: 110.0,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Proportion of planning applications that proceed through VicSmart",
                     description: "Planning, Building and Heritage_Quality_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 7.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 7.0,
            "year": 2017
        },
        {
            "value": 7.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'per cent' ,
                     target: '#p0235',
                     min_y: 6.3,
                     max_y: 7.7,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Conservation projects funded for ‘at risk’ State significant heritage places and objects",
                     description: "Planning, Building and Heritage_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 24.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 24.0,
            "year": 2017
        },
        {
            "value": 29.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0236',
                     min_y: 21.6,
                     max_y: 31.9,
                     legend: ['actual', 'target']
                     });



    MG.data_graphic({title: "Local governments undertaking work to support strategic planning for coastal settlements and areas",
                     description: "Planning, Building and Heritage_Quantity_Department of Environment, Land, Water and Planning",
                     data:  [
    [
        {
            "value": 9.0,
            "year": 2012
        },
        {
            "value": 9.0,
            "year": 2013
        },
        {
            "value": 9.0,
            "year": 2014
        },
        {
            "value": 9.0,
            "year": 2015
        },
        {
            "value": 9.0,
            "year": 2016
        },
        {
            "value": 15.0,
            "year": 2017
        }
    ],
    [
        {
            "value": 9.0,
            "year": 2012
        },
        {
            "value": 9.0,
            "year": 2013
        },
        {
            "value": 9.0,
            "year": 2014
        },
        {
            "value": 9.0,
            "year": 2015
        },
        {
            "value": 9.0,
            "year": 2016
        },
        {
            "value": 9.0,
            "year": 2017
        },
        {
            "value": 15.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, left: 100, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     target: '#p0237',
                     min_y: 8.1,
                     max_y: 16.5,
                     legend: ['actual', 'target']
                     });
