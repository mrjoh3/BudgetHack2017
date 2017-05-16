

function genDivs(plots, v){ // this is row at a time, v is div per row
    nrows = Math.floor(plots.length / v) + 1

  var e = document.body; // whatever you want to append the rows to:

  for(var r = 0; r < nrows; r++){
      var row = document.createElement("div");
      row.className = "row";
      for(var i = 0; i < v; i++){
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.id = plots.pop()
            //cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
      }
  }


var divs = ['p0001','p0002','p0003', 'p0004','p0005','p0006',
            'p0007','p0008','p0009','p0010','p0011','p0012']


genDivs(divs, 3)








//Department of Justice and Regulation Output Performance Measures 2017-18

MG.data_graphic({title: 'Total output cost',
                     description: 'Community Based Offender Supervision:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0001",
                     yax_count: 3, missing_is_hidden: true,
                     xax_format: d3.format(',.2r'),
                     yax_units: '$m' ,
                     min_y: 59.5,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Rate of return to corrective services within two years of discharge from a community corrections order',
                     description: 'Community Based Offender Supervision:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0002",
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 20.8,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: `Successful completion of parole orders`,
                     description: `Community Based Offender Supervision:Quality:Department of Justice and Regulation`,
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0003",
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',
                     min_y: 54.5,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: `Successful completion of reparation orders`,
                     description: `Community Based Offender Supervision:Quality:Department of Justice and Regulation`,
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0004",
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',
                     min_y: 51.7,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: `Successful completion of supervised court orders`,
                     description: `Community Based Offender Supervision:Quality:Department of Justice and Regulation`,
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0005",
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',
                     min_y: 60.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Average daily offenders with reparation orders',
                     description: 'Community Based Offender Supervision:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0006",
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     min_y: 2635.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Average daily offenders with supervised court orders',
                     description: 'Community Based Offender Supervision:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0007",
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     min_y: 6012.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Average daily prisoners on parole',
                     description: 'Community Based Offender Supervision:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0008",
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,
                     min_y: 908.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Community-work hours performed',
                     description: 'Community Based Offender Supervision:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0009",
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number',
                     min_y: 604100.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Offenders with a treatment or rehabilitation program condition who have been appropriately referred to a program within set timelines',
                     description: 'Community Based Offender Supervision:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0010",
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',
                     min_y: 90.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Successful completion of violence related programs for family violence offenders in community corrections',
                     description: 'Community Based Offender Supervision:Timeliness:Department of Justice and Regulation',
                     data:  [
    [
        {
            "value": 80.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0011",
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 80.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Total output cost',
                     description: 'Criminal Law Support and Reform:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     target: "#p0012",
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million',
                     min_y: 14.5,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Audited medico-legal death investigation reports with no significant diagnostic errors (VIFM)',
                     description: 'Criminal Law Support and Reform:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',
                     min_y: 89.7,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Teachers and students who are satisfied with education programs delivered by VLRC',
                     description: 'Criminal Law Support and Reform:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 85.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Clinical forensic medical services by the Victorian Institute of Forensic Medicine (VIFM)',
                     description: 'Criminal Law Support and Reform:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 2201.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Community education and consultation sessions conducted by Victorian Law Reform Commission (VLRC)',
                     description: 'Criminal Law Support and Reform:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 50.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Law reform projects conducted by VLRC',
                     description: 'Criminal Law Support and Reform:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 2.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Medico-legal death investigations (VIFM)',
                     description: 'Criminal Law Support and Reform:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 4530.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Number of Sentencing Advisory Council (SAC) publications',
                     description: 'Criminal Law Support and Reform:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 6.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Provision of expert forensic medical and scientific evidence in court (VIFM)',
                     description: 'Criminal Law Support and Reform:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 174.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Medical and scientific investigations on the body of the deceased completed within two days (VIFM)',
                     description: 'Criminal Law Support and Reform:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 57.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Medico-legal death investigation reports issued within agreed period (VIFM)',
                     description: 'Criminal Law Support and Reform:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 54.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Total output cost',
                     description: 'Dispute Resolution and Civil Justice Support Services:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,

                     min_y: 43.8,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Client satisfaction with quality of legal advice provided (VGSO)',
                     description: 'Dispute Resolution and Civil Justice Support Services:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 77.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Dispute resolution services provided in the Dispute Settlement Centre of Victoria (DSCV)',
                     description: 'Dispute Resolution and Civil Justice Support Services:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 16400.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Overall client satisfaction rate (DSCV)',
                     description: 'Dispute Resolution and Civil Justice Support Services:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 84.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Settlement rate of mediation (DSCV)',
                     description: 'Dispute Resolution and Civil Justice Support Services:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 85.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Client satisfaction with timeliness of legal advice provided (VGSO)',
                     description: 'Dispute Resolution and Civil Justice Support Services:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 77.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Intake and mediation services conducted within agreed timeframes by the DSCV',
                     description: 'Dispute Resolution and Civil Justice Support Services:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 82.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Total output cost',
                     description: 'Emergency Management Capability:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,

                     min_y: 187.5,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Level 3 Incident Controller trained staff and volunteers',
                     description: 'Emergency Management Capability:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 96.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Multi agency joint procurements of systems or equipment',
                     description: 'Emergency Management Capability:Quality:Department of Justice and Regulation',
                     data:  [
    [
        {
            "value": 2.0,
            "year": 2018
        }
    ]
],
                     width: 600,
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 2.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Road crash rescue accredited brigades/units',
                     description: 'Emergency Management Capability:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 130.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Structural fire confined to room of origin',
                     description: 'Emergency Management Capability:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 79.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Permanent operational staff',
                     description: 'Emergency Management Capability:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 2787.3,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Permanent support staff',
                     description: 'Emergency Management Capability:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 1359.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Volunteers – Operational',
                     description: 'Emergency Management Capability:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 38799.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Volunteers – Support',
                     description: 'Emergency Management Capability:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 17312.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Emergency response times meeting benchmarks – emergency medical response',
                     description: 'Emergency Management Capability:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 90.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Emergency response times meeting benchmarks – road accident rescue response',
                     description: 'Emergency Management Capability:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 88.7,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Emergency response times meeting benchmarks – structural fires ',
                     description: 'Emergency Management Capability:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 87.7,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Total output cost',
                     description: 'Gambling, Liquor and Racing:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,

                     min_y: 98.2,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Liquor and gambling licensing client satisfaction (VCGLR)',
                     description: 'Gambling, Liquor and Racing:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 80.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Liquor and gambling approvals, licence, permit applications and variations determined by VCGLR',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 43000.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Liquor and gambling information and advice (VCGLR)',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 126188.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Liquor and gambling inspections completed by the VCGLR – metropolitan',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 11260.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Liquor and gambling inspections completed by the VCGLR – regional',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 1440.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Office of Liquor, Gaming and Racing briefings processed',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 648.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Operations with co-regulators to identify licensees supplying alcohol to minors or persons who are intoxicated',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 20.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Racing industry development initiatives delivered by the Victorian Racing Industry Fund',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 7.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Racing matters processed (including licences, permits and grant applications)',
                     description: 'Gambling, Liquor and Racing:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 160.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Calls to VCGLR client services answered within 60 seconds',
                     description: 'Gambling, Liquor and Racing:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 70.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Gamblers Help Service clients who receive a service within five days of referral (VRGF)',
                     description: 'Gambling, Liquor and Racing:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 87.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Liquor and gambling approvals, licence, permit applications and variations completed within set time (VCGLR)',
                     description: 'Gambling, Liquor and Racing:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 80.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Total output cost',
                     description: 'Infringements and Warrants:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,

                     min_y: 132.9,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Infringement notices processed',
                     description: 'Infringements and Warrants:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number (million)' ,

                     min_y: 2.28,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Warrants actioned',
                     description: 'Infringements and Warrants:Quantity:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: 'number' ,

                     min_y: 770000.0,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Confiscated assets sold or destroyed within 90 days',
                     description: 'Infringements and Warrants:Timeliness:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 75.4,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Total output cost',
                     description: 'Policing and Crime Prevention:Cost:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     yax_units: '$million' ,

                     min_y: 1731.5,
                     legend: ['actual', 'target']
                     });

//-----------------


    MG.data_graphic({title: 'Community Crime Prevention grant payments properly acquitted',
                     description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation',
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
                     height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
                     yax_count: 3, missing_is_hidden: true,
                     format: 'percentage',

                     min_y: 100.0,
                     legend: ['actual', 'target']
                     });

//-----------------
//
//
//     MG.data_graphic({title: 'Perceptions of safety – walking locally at night,
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 50.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 50.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of community satisfied with policing services (general satisfaction),
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 69.700000000000003,
//             "year": 2008
//         },
//         {
//             "value": 67.200000000000003,
//             "year": 2009
//         },
//         {
//             "value": 66.099999999999994,
//             "year": 2010
//         },
//         {
//             "value": 73.0,
//             "year": 2011
//         },
//         {
//             "value": 75.900000000000006,
//             "year": 2012
//         },
//         {
//             "value": 78.200000000000003,
//             "year": 2013
//         },
//         {
//             "value": 76.900000000000006,
//             "year": 2014
//         },
//         {
//             "value": 77.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 74.799999999999997,
//             "year": 2016
//         },
//         {
//             "value": 75.099999999999994,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 72.0,
//             "year": 2008
//         },
//         {
//             "value": 72.0,
//             "year": 2009
//         },
//         {
//             "value": 69.0,
//             "year": 2010
//         },
//         {
//             "value": 66.0,
//             "year": 2011
//         },
//         {
//             "value": 68.0,
//             "year": 2012
//         },
//         {
//             "value": 70.0,
//             "year": 2013
//         },
//         {
//             "value": 70.0,
//             "year": 2014
//         },
//         {
//             "value": 70.0,
//             "year": 2015
//         },
//         {
//             "value": 75.0,
//             "year": 2016
//         },
//         {
//             "value": 77.0,
//             "year": 2017
//         },
//         {
//             "value": 77.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 66.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of drivers tested by road
// safety cameras who comply with posted speed limits,
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 99.700000000000003,
//             "year": 2008
//         },
//         {
//             "value": 99.599999999999994,
//             "year": 2009
//         },
//         {
//             "value": 99.700000000000003,
//             "year": 2010
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2011
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2012
//         },
//         {
//             "value": 99.900000000000006,
//             "year": 2013
//         },
//         {
//             "value": 99.900000000000006,
//             "year": 2014
//         },
//         {
//             "value": 99.5,
//             "year": 2015
//         },
//         {
//             "value": 99.900000000000006,
//             "year": 2016
//         },
//         {
//             "value": 99.5,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 99.0,
//             "year": 2008
//         },
//         {
//             "value": 99.0,
//             "year": 2009
//         },
//         {
//             "value": 99.0,
//             "year": 2010
//         },
//         {
//             "value": 99.0,
//             "year": 2011
//         },
//         {
//             "value": 99.5,
//             "year": 2012
//         },
//         {
//             "value": 99.5,
//             "year": 2013
//         },
//         {
//             "value": 99.5,
//             "year": 2014
//         },
//         {
//             "value": 99.5,
//             "year": 2015
//         },
//         {
//             "value": 99.5,
//             "year": 2016
//         },
//         {
//             "value": 99.5,
//             "year": 2017
//         },
//         {
//             "value": 99.5,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 99.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of drivers tested who comply with alcohol limits,
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 99.5,
//             "year": 2008
//         },
//         {
//             "value": 99.0,
//             "year": 2009
//         },
//         {
//             "value": 99.700000000000003,
//             "year": 2010
//         },
//         {
//             "value": 99.700000000000003,
//             "year": 2011
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2012
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2013
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2014
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2016
//         },
//         {
//             "value": 99.799999999999997,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 99.0,
//             "year": 2008
//         },
//         {
//             "value": 99.0,
//             "year": 2009
//         },
//         {
//             "value": 99.0,
//             "year": 2010
//         },
//         {
//             "value": 99.0,
//             "year": 2011
//         },
//         {
//             "value": 99.5,
//             "year": 2012
//         },
//         {
//             "value": 99.5,
//             "year": 2013
//         },
//         {
//             "value": 99.5,
//             "year": 2014
//         },
//         {
//             "value": 99.5,
//             "year": 2015
//         },
//         {
//             "value": 99.5,
//             "year": 2016
//         },
//         {
//             "value": 99.5,
//             "year": 2017
//         },
//         {
//             "value": 99.5,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 99.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of drivers tested who return clear result for prohibited drugs,
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 98.299999999999997,
//             "year": 2008
//         },
//         {
//             "value": 99.0,
//             "year": 2009
//         },
//         {
//             "value": 98.900000000000006,
//             "year": 2010
//         },
//         {
//             "value": 97.900000000000006,
//             "year": 2011
//         },
//         {
//             "value": 96.0,
//             "year": 2012
//         },
//         {
//             "value": 96.200000000000003,
//             "year": 2013
//         },
//         {
//             "value": 92.200000000000003,
//             "year": 2014
//         },
//         {
//             "value": 94.299999999999997,
//             "year": 2015
//         },
//         {
//             "value": 90.900000000000006,
//             "year": 2016
//         },
//         {
//             "value": 91.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 97.0,
//             "year": 2008
//         },
//         {
//             "value": 97.0,
//             "year": 2009
//         },
//         {
//             "value": 97.0,
//             "year": 2010
//         },
//         {
//             "value": 97.0,
//             "year": 2011
//         },
//         {
//             "value": 98.0,
//             "year": 2012
//         },
//         {
//             "value": 98.0,
//             "year": 2013
//         },
//         {
//             "value": 94.0,
//             "year": 2014
//         },
//         {
//             "value": 90.0,
//             "year": 2015
//         },
//         {
//             "value": 93.0,
//             "year": 2016
//         },
//         {
//             "value": 93.0,
//             "year": 2017
//         },
//         {
//             "value": 93.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 90.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of successful prosecution outcomes,
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 93.099999999999994,
//             "year": 2008
//         },
//         {
//             "value": 93.099999999999994,
//             "year": 2009
//         },
//         {
//             "value": 93.599999999999994,
//             "year": 2010
//         },
//         {
//             "value": 91.599999999999994,
//             "year": 2011
//         },
//         {
//             "value": 93.0,
//             "year": 2012
//         },
//         {
//             "value": 92.299999999999997,
//             "year": 2013
//         },
//         {
//             "value": 92.700000000000003,
//             "year": 2014
//         },
//         {
//             "value": 92.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 93.0,
//             "year": 2016
//         },
//         {
//             "value": 92.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 92.0,
//             "year": 2008
//         },
//         {
//             "value": 92.0,
//             "year": 2009
//         },
//         {
//             "value": 92.0,
//             "year": 2010
//         },
//         {
//             "value": 92.0,
//             "year": 2011
//         },
//         {
//             "value": 92.0,
//             "year": 2012
//         },
//         {
//             "value": 92.0,
//             "year": 2013
//         },
//         {
//             "value": 92.0,
//             "year": 2014
//         },
//         {
//             "value": 92.0,
//             "year": 2015
//         },
//         {
//             "value": 92.0,
//             "year": 2016
//         },
//         {
//             "value": 92.0,
//             "year": 2017
//         },
//         {
//             "value": 92.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 91.6,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of the community who have confidence in police (an integrity indicator),
//                      description: 'Policing and Crime Prevention:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 82.400000000000006,
//             "year": 2008
//         },
//         {
//             "value": 82.0,
//             "year": 2009
//         },
//         {
//             "value": 81.900000000000006,
//             "year": 2010
//         },
//         {
//             "value": 84.099999999999994,
//             "year": 2011
//         },
//         {
//             "value": 85.099999999999994,
//             "year": 2012
//         },
//         {
//             "value": 86.0,
//             "year": 2013
//         },
//         {
//             "value": 86.099999999999994,
//             "year": 2014
//         },
//         {
//             "value": 88.700000000000003,
//             "year": 2015
//         },
//         {
//             "value": 85.400000000000006,
//             "year": 2016
//         },
//         {
//             "value": 85.400000000000006,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 82.0,
//             "year": 2008
//         },
//         {
//             "value": 82.0,
//             "year": 2009
//         },
//         {
//             "value": 82.0,
//             "year": 2010
//         },
//         {
//             "value": 82.0,
//             "year": 2011
//         },
//         {
//             "value": 82.0,
//             "year": 2012
//         },
//         {
//             "value": 83.0,
//             "year": 2013
//         },
//         {
//             "value": 83.0,
//             "year": 2014
//         },
//         {
//             "value": 83.0,
//             "year": 2015
//         },
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 87.0,
//             "year": 2017
//         },
//         {
//             "value": 87.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 81.9,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Community calls for assistance to which a Victoria Police response is dispatched,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 753417.0,
//             "year": 2010
//         },
//         {
//             "value": 884380.0,
//             "year": 2011
//         },
//         {
//             "value": 884380.0,
//             "year": 2013
//         },
//         {
//             "value": 811619.0,
//             "year": 2014
//         },
//         {
//             "value": 864020.0,
//             "year": 2015
//         },
//         {
//             "value": 906916.0,
//             "year": 2016
//         },
//         {
//             "value": 1005000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 795000.0,
//             "year": 2010
//         },
//         {
//             "value": 780000.0,
//             "year": 2011
//         },
//         {
//             "value": 800000.0,
//             "year": 2013
//         },
//         {
//             "value": 800000.0,
//             "year": 2014
//         },
//         {
//             "value": 800000.0,
//             "year": 2015
//         },
//         {
//             "value": 850000.0,
//             "year": 2016
//         },
//         {
//             "value": 1009700.0,
//             "year": 2017
//         },
//         {
//             "value": 1036000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 753417.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Crimes against property – excluding family violence related crime (rate per 100 000 population),
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 4583.3000000000002,
//             "year": 2014
//         },
//         {
//             "value": 4491.8999999999996,
//             "year": 2015
//         },
//         {
//             "value": 5130.0,
//             "year": 2016
//         },
//         {
//             "value": 5359.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 4491.9,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Crimes against property – family violence related crime (rate per 100 000 population),
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 136.90000000000001,
//             "year": 2014
//         },
//         {
//             "value": 146.69999999999999,
//             "year": 2015
//         },
//         {
//             "value": 146.69999999999999,
//             "year": 2016
//         },
//         {
//             "value": 148.09999999999999,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 136.9,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Crimes against the person – excluding family violence related crime (rate per 100 000 population),
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 654.79999999999995,
//             "year": 2014
//         },
//         {
//             "value": 654.0,
//             "year": 2015
//         },
//         {
//             "value": 677.0,
//             "year": 2016
//         },
//         {
//             "value": 679.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 654.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Crimes against the person – family violence related crime (rate per 100 000 population),
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 481.89999999999998,
//             "year": 2014
//         },
//         {
//             "value": 509.0,
//             "year": 2015
//         },
//         {
//             "value": 587.5,
//             "year": 2016
//         },
//         {
//             "value": 585.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 481.9,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of alcohol screening tests conducted by booze and drug buses,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 1098831.0,
//             "year": 2013
//         },
//         {
//             "value": 1150524.0,
//             "year": 2014
//         },
//         {
//             "value": 1136326.0,
//             "year": 2015
//         },
//         {
//             "value": 1076061.0,
//             "year": 2016
//         },
//         {
//             "value": 1100000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 1100000.0,
//             "year": 2013
//         },
//         {
//             "value": 1100000.0,
//             "year": 2014
//         },
//         {
//             "value": 1100000.0,
//             "year": 2015
//         },
//         {
//             "value": 1100000.0,
//             "year": 2016
//         },
//         {
//             "value": 1100000.0,
//             "year": 2017
//         },
//         {
//             "value": 1100000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 1076061.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of hours of family violence related education provided to police,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 1700.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 1700.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of prohibited drug screening tests conducted by booze and drug buses and highway patrol units,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 23245.0,
//             "year": 2013
//         },
//         {
//             "value": 42780.0,
//             "year": 2014
//         },
//         {
//             "value": 79986.0,
//             "year": 2015
//         },
//         {
//             "value": 100182.0,
//             "year": 2016
//         },
//         {
//             "value": 100000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 100000.0,
//             "year": 2013
//         },
//         {
//             "value": 100000.0,
//             "year": 2014
//         },
//         {
//             "value": 100000.0,
//             "year": 2015
//         },
//         {
//             "value": 100000.0,
//             "year": 2016
//         },
//         {
//             "value": 100000.0,
//             "year": 2017
//         },
//         {
//             "value": 100000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 23245.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Police record checks conducted to contribute to community safety,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 691029.0,
//             "year": 2016
//         },
//         {
//             "value": 716000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 635000.0,
//             "year": 2016
//         },
//         {
//             "value": 716000.0,
//             "year": 2017
//         },
//         {
//             "value": 703000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 635000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total persons reported injured in vehicle collisions,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 18527.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 18527.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total reported road fatalities in vehicle collisions,
//                      description: 'Policing and Crime Prevention:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 278.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 278.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of crimes against the person resolved within 30 days,
//                      description: 'Policing and Crime Prevention:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 52.899999999999999,
//             "year": 2008
//         },
//         {
//             "value": 53.200000000000003,
//             "year": 2009
//         },
//         {
//             "value": 52.399999999999999,
//             "year": 2010
//         },
//         {
//             "value": 53.100000000000001,
//             "year": 2011
//         },
//         {
//             "value": 55.0,
//             "year": 2012
//         },
//         {
//             "value": 36.5,
//             "year": 2013
//         },
//         {
//             "value": 37.5,
//             "year": 2014
//         },
//         {
//             "value": 36.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 44.399999999999999,
//             "year": 2016
//         },
//         {
//             "value": 43.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 56.0,
//             "year": 2008
//         },
//         {
//             "value": 56.0,
//             "year": 2009
//         },
//         {
//             "value": 56.0,
//             "year": 2010
//         },
//         {
//             "value": 56.0,
//             "year": 2011
//         },
//         {
//             "value": 54.0,
//             "year": 2012
//         },
//         {
//             "value": 54.0,
//             "year": 2013
//         },
//         {
//             "value": 36.0,
//             "year": 2014
//         },
//         {
//             "value": 36.0,
//             "year": 2015
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 36.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of property crime resolved within 30 days,
//                      description: 'Policing and Crime Prevention:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 19.100000000000001,
//             "year": 2008
//         },
//         {
//             "value": 21.5,
//             "year": 2009
//         },
//         {
//             "value": 20.399999999999999,
//             "year": 2010
//         },
//         {
//             "value": 19.699999999999999,
//             "year": 2011
//         },
//         {
//             "value": 18.800000000000001,
//             "year": 2012
//         },
//         {
//             "value": 19.300000000000001,
//             "year": 2013
//         },
//         {
//             "value": 20.699999999999999,
//             "year": 2014
//         },
//         {
//             "value": 20.5,
//             "year": 2015
//         },
//         {
//             "value": 25.100000000000001,
//             "year": 2016
//         },
//         {
//             "value": 22.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 20.0,
//             "year": 2008
//         },
//         {
//             "value": 20.0,
//             "year": 2009
//         },
//         {
//             "value": 20.0,
//             "year": 2010
//         },
//         {
//             "value": 20.0,
//             "year": 2011
//         },
//         {
//             "value": 21.0,
//             "year": 2012
//         },
//         {
//             "value": 21.0,
//             "year": 2013
//         },
//         {
//             "value": 19.0,
//             "year": 2014
//         },
//         {
//             "value": 19.0,
//             "year": 2015
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 18.8,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Prisoner Supervision and Support:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 438.10000000000002,
//             "year": 2008
//         },
//         {
//             "value": 467.30000000000001,
//             "year": 2009
//         },
//         {
//             "value": 492.60000000000002,
//             "year": 2010
//         },
//         {
//             "value": 534.0,
//             "year": 2011
//         },
//         {
//             "value": 594.10000000000002,
//             "year": 2012
//         },
//         {
//             "value": 642.29999999999995,
//             "year": 2013
//         },
//         {
//             "value": 732.20000000000005,
//             "year": 2014
//         },
//         {
//             "value": 901.10000000000002,
//             "year": 2015
//         },
//         {
//             "value": 1000.6,
//             "year": 2016
//         },
//         {
//             "value": 1089.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 504.89999999999998,
//             "year": 2008
//         },
//         {
//             "value": 504.89999999999998,
//             "year": 2009
//         },
//         {
//             "value": 511.10000000000002,
//             "year": 2010
//         },
//         {
//             "value": 544.70000000000005,
//             "year": 2011
//         },
//         {
//             "value": 593.0,
//             "year": 2012
//         },
//         {
//             "value": 691.10000000000002,
//             "year": 2013
//         },
//         {
//             "value": 758.79999999999995,
//             "year": 2014
//         },
//         {
//             "value": 942.10000000000002,
//             "year": 2015
//         },
//         {
//             "value": 1056.0,
//             "year": 2016
//         },
//         {
//             "value": 1102.2,
//             "year": 2017
//         },
//         {
//             "value": 1302.7,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 438.1,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of benchmark measures in prison services agreement achieved,
//                      description: 'Prisoner Supervision and Support:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 93.0,
//             "year": 2008
//         },
//         {
//             "value": 91.700000000000003,
//             "year": 2009
//         },
//         {
//             "value": 91.299999999999997,
//             "year": 2010
//         },
//         {
//             "value": 87.799999999999997,
//             "year": 2011
//         },
//         {
//             "value": 87.099999999999994,
//             "year": 2012
//         },
//         {
//             "value": 85.599999999999994,
//             "year": 2013
//         },
//         {
//             "value": 83.700000000000003,
//             "year": 2014
//         },
//         {
//             "value": 84.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 84.900000000000006,
//             "year": 2016
//         },
//         {
//             "value": 82.200000000000003,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 90.0,
//             "year": 2008
//         },
//         {
//             "value": 90.0,
//             "year": 2009
//         },
//         {
//             "value": 90.0,
//             "year": 2010
//         },
//         {
//             "value": 90.0,
//             "year": 2011
//         },
//         {
//             "value": 90.0,
//             "year": 2012
//         },
//         {
//             "value": 90.0,
//             "year": 2013
//         },
//         {
//             "value": 90.0,
//             "year": 2014
//         },
//         {
//             "value": 90.0,
//             "year": 2015
//         },
//         {
//             "value": 90.0,
//             "year": 2016
//         },
//         {
//             "value": 90.0,
//             "year": 2017
//         },
//         {
//             "value": 90.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'percent' ,
//
//                      min_y: 82.2,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of eligible prisoners in employment,
//                      description: 'Prisoner Supervision and Support:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 89.099999999999994,
//             "year": 2013
//         },
//         {
//             "value": 88.099999999999994,
//             "year": 2014
//         },
//         {
//             "value": 89.299999999999997,
//             "year": 2015
//         },
//         {
//             "value": 87.5,
//             "year": 2016
//         },
//         {
//             "value": 88.400000000000006,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 85.0,
//             "year": 2014
//         },
//         {
//             "value": 85.0,
//             "year": 2015
//         },
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 89.0,
//             "year": 2017
//         },
//         {
//             "value": 89.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 85.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Rate of prisoner participation in education,
//                      description: 'Prisoner Supervision and Support:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 37.200000000000003,
//             "year": 2012
//         },
//         {
//             "value": 38.100000000000001,
//             "year": 2013
//         },
//         {
//             "value": 33.399999999999999,
//             "year": 2014
//         },
//         {
//             "value": 35.700000000000003,
//             "year": 2015
//         },
//         {
//             "value": 34.100000000000001,
//             "year": 2016
//         },
//         {
//             "value": 34.899999999999999,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 34.0,
//             "year": 2012
//         },
//         {
//             "value": 34.0,
//             "year": 2013
//         },
//         {
//             "value": 34.0,
//             "year": 2014
//         },
//         {
//             "value": 34.0,
//             "year": 2015
//         },
//         {
//             "value": 34.0,
//             "year": 2016
//         },
//         {
//             "value": 36.0,
//             "year": 2017
//         },
//         {
//             "value": 36.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 33.4,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Rate of return to prison within two years,
//                      description: 'Prisoner Supervision and Support:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 35.100000000000001,
//             "year": 2012
//         },
//         {
//             "value": 36.799999999999997,
//             "year": 2013
//         },
//         {
//             "value": 39.5,
//             "year": 2014
//         },
//         {
//             "value": 44.100000000000001,
//             "year": 2015
//         },
//         {
//             "value": 42.799999999999997,
//             "year": 2016
//         },
//         {
//             "value": 42.899999999999999,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 45.0,
//             "year": 2012
//         },
//         {
//             "value": 45.0,
//             "year": 2013
//         },
//         {
//             "value": 45.0,
//             "year": 2014
//         },
//         {
//             "value": 45.0,
//             "year": 2015
//         },
//         {
//             "value": 45.0,
//             "year": 2016
//         },
//         {
//             "value": 41.0,
//             "year": 2017
//         },
//         {
//             "value": 41.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 35.1,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Average daily prison utilisation rate of total prison capacity,
//                      description: 'Prisoner Supervision and Support:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 92.299999999999997,
//             "year": 2008
//         },
//         {
//             "value": 91.299999999999997,
//             "year": 2009
//         },
//         {
//             "value": 92.299999999999997,
//             "year": 2010
//         },
//         {
//             "value": 92.400000000000006,
//             "year": 2011
//         },
//         {
//             "value": 94.799999999999997,
//             "year": 2012
//         },
//         {
//             "value": 94.5,
//             "year": 2013
//         },
//         {
//             "value": 96.799999999999997,
//             "year": 2014
//         },
//         {
//             "value": 90.200000000000003,
//             "year": 2015
//         },
//         {
//             "value": 91.0,
//             "year": 2016
//         },
//         {
//             "value": 93.599999999999994,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'percent' ,
//
//                      min_y: 90.2,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total annual daily average number of prisoners,
//                      description: 'Prisoner Supervision and Support:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 4492.0,
//             "year": 2010
//         },
//         {
//             "value": 4586.0,
//             "year": 2011
//         },
//         {
//             "value": 5120.0,
//             "year": 2013
//         },
//         {
//             "value": 5800.0,
//             "year": 2014
//         },
//         {
//             "value": 6350.0,
//             "year": 2015
//         },
//         {
//             "value": 6320.0,
//             "year": 2016
//         },
//         {
//             "value": 6791.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 6600.0,
//             "year": 2010
//         },
//         {
//             "value": 6600.0,
//             "year": 2011
//         },
//         {
//             "value": 6600.0,
//             "year": 2013
//         },
//         {
//             "value": 6600.0,
//             "year": 2014
//         },
//         {
//             "value": 6600.0,
//             "year": 2015
//         },
//         {
//             "value": 6600.0,
//             "year": 2016
//         },
//         {
//             "value": 6600.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 4492.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Assessment of prisoners 'at risk' undertaken within two hours,
//                      description: 'Prisoner Supervision and Support:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 99.799999999999997,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 100.0,
//             "year": 2017
//         },
//         {
//             "value": 100.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 99.8,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 48.0,
//             "year": 2015
//         },
//         {
//             "value": 53.100000000000001,
//             "year": 2016
//         },
//         {
//             "value": 57.5,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 44.299999999999997,
//             "year": 2015
//         },
//         {
//             "value": 44.299999999999997,
//             "year": 2016
//         },
//         {
//             "value": 48.399999999999999,
//             "year": 2017
//         },
//         {
//             "value": 48.399999999999999,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 44.3,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Births, Deaths and Marriages registration transaction accuracy rate (BDM),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 0.29999999999999999,
//             "year": 2008
//         },
//         {
//             "value": 0.69999999999999996,
//             "year": 2009
//         },
//         {
//             "value": 0.40000000000000002,
//             "year": 2010
//         },
//         {
//             "value": 0.29999999999999999,
//             "year": 2011
//         },
//         {
//             "value": 0.20000000000000001,
//             "year": 2012
//         },
//         {
//             "value": 0.80000000000000004,
//             "year": 2013
//         },
//         {
//             "value": 99.0,
//             "year": 2014
//         },
//         {
//             "value": 99.0,
//             "year": 2015
//         },
//         {
//             "value": 99.900000000000006,
//             "year": 2016
//         },
//         {
//             "value": 99.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 0.90000000000000002,
//             "year": 2008
//         },
//         {
//             "value": 0.90000000000000002,
//             "year": 2009
//         },
//         {
//             "value": 0.90000000000000002,
//             "year": 2010
//         },
//         {
//             "value": 99.0,
//             "year": 2011
//         },
//         {
//             "value": 99.0,
//             "year": 2012
//         },
//         {
//             "value": 99.0,
//             "year": 2013
//         },
//         {
//             "value": 99.0,
//             "year": 2014
//         },
//         {
//             "value": 99.0,
//             "year": 2015
//         },
//         {
//             "value": 99.0,
//             "year": 2016
//         },
//         {
//             "value": 99.0,
//             "year": 2017
//         },
//         {
//             "value": 99.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 0.2,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Customer satisfaction rating: Conciliation delivered by VEOHRC,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 87.0,
//             "year": 2016
//         },
//         {
//             "value": 85.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 85.0,
//             "year": 2017
//         },
//         {
//             "value": 85.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 85.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Customer satisfaction rating: Education and consultancy sessions delivered by VEOHRC,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 100.0,
//             "year": 2009
//         },
//         {
//             "value": 90.0,
//             "year": 2010
//         },
//         {
//             "value": 86.0,
//             "year": 2011
//         },
//         {
//             "value": 86.0,
//             "year": 2012
//         },
//         {
//             "value": 86.0,
//             "year": 2013
//         },
//         {
//             "value": 82.299999999999997,
//             "year": 2014
//         },
//         {
//             "value": 88.0,
//             "year": 2015
//         },
//         {
//             "value": 87.0,
//             "year": 2016
//         },
//         {
//             "value": 80.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2009
//         },
//         {
//             "value": 85.0,
//             "year": 2010
//         },
//         {
//             "value": 85.0,
//             "year": 2011
//         },
//         {
//             "value": 85.0,
//             "year": 2012
//         },
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 85.0,
//             "year": 2014
//         },
//         {
//             "value": 85.0,
//             "year": 2015
//         },
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 85.0,
//             "year": 2017
//         },
//         {
//             "value": 85.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 80.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Advocacy matters opened by OPA,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 314.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 314.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Community education sessions (OPA),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 122.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 100.0,
//             "year": 2017
//         },
//         {
//             "value": 100.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 100.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Complaint files received and handled by VEOHRC,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 1054.0,
//             "year": 2013
//         },
//         {
//             "value": 1053.0,
//             "year": 2014
//         },
//         {
//             "value": 1060.0,
//             "year": 2015
//         },
//         {
//             "value": 865.0,
//             "year": 2016
//         },
//         {
//             "value": 700.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 700.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Education and consultancy sessions delivered by VEOHRC,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 355.0,
//             "year": 2016
//         },
//         {
//             "value": 350.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 350.0,
//             "year": 2016
//         },
//         {
//             "value": 350.0,
//             "year": 2017
//         },
//         {
//             "value": 350.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 350.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Groups in negotiation towards resolution of Native Title claims (NTU),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 2.0,
//             "year": 2013
//         },
//         {
//             "value": 2.0,
//             "year": 2014
//         },
//         {
//             "value": 2.0,
//             "year": 2015
//         },
//         {
//             "value": 2.0,
//             "year": 2016
//         },
//         {
//             "value": 2.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 2.0,
//             "year": 2013
//         },
//         {
//             "value": 2.0,
//             "year": 2014
//         },
//         {
//             "value": 2.0,
//             "year": 2015
//         },
//         {
//             "value": 2.0,
//             "year": 2016
//         },
//         {
//             "value": 2.0,
//             "year": 2017
//         },
//         {
//             "value": 2.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 2.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Information and advice provided by OPA,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 11194.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 11194.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Information and advice provided by VEOHRC,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 8470.0,
//             "year": 2013
//         },
//         {
//             "value": 9157.0,
//             "year": 2014
//         },
//         {
//             "value": 9157.0,
//             "year": 2015
//         },
//         {
//             "value": 8171.0,
//             "year": 2016
//         },
//         {
//             "value": 8100.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 9000.0,
//             "year": 2013
//         },
//         {
//             "value": 9000.0,
//             "year": 2014
//         },
//         {
//             "value": 9000.0,
//             "year": 2015
//         },
//         {
//             "value": 9000.0,
//             "year": 2016
//         },
//         {
//             "value": 9000.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 8100.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'New guardianship and investigation orders of VCAT actioned by OPA,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 2486.0,
//             "year": 2010
//         },
//         {
//             "value": 2755.0,
//             "year": 2011
//         },
//         {
//             "value": 2449.0,
//             "year": 2012
//         },
//         {
//             "value": 2449.0,
//             "year": 2013
//         },
//         {
//             "value": 2480.0,
//             "year": 2014
//         },
//         {
//             "value": 2643.0,
//             "year": 2015
//         }
//     ],
//     [
//         {
//             "value": 2510.0,
//             "year": 2010
//         },
//         {
//             "value": 2510.0,
//             "year": 2011
//         },
//         {
//             "value": 2510.0,
//             "year": 2012
//         },
//         {
//             "value": 2510.0,
//             "year": 2013
//         },
//         {
//             "value": 2510.0,
//             "year": 2014
//         },
//         {
//             "value": 2510.0,
//             "year": 2015
//         },
//         {
//             "value": 2510.0,
//             "year": 2016
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 2449.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Public Advocate auspiced volunteer interventions for people with a disability (OPA),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 6140.0,
//             "year": 2016
//         },
//         {
//             "value": 7709.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 7500.0,
//             "year": 2016
//         },
//         {
//             "value": 7500.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 6140.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Settlement rate of conciliation (VEOHRC),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 65.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 65.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Average number of days a guardianship or investigation order of VCAT is held on a wait list prior to being allocated to a delegated officer by the Public Advocate (OPA),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 31.0,
//             "year": 2016
//         },
//         {
//             "value": 44.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 20.0,
//             "year": 2016
//         },
//         {
//             "value": 30.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 20.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Complete applications for birth, death and marriage certificates processed within five days of receipt (BDM),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 95.0,
//             "year": 2008
//         },
//         {
//             "value": 94.0,
//             "year": 2009
//         },
//         {
//             "value": 94.0,
//             "year": 2010
//         },
//         {
//             "value": 94.0,
//             "year": 2011
//         },
//         {
//             "value": 94.299999999999997,
//             "year": 2012
//         },
//         {
//             "value": 96.900000000000006,
//             "year": 2013
//         },
//         {
//             "value": 97.099999999999994,
//             "year": 2014
//         },
//         {
//             "value": 94.400000000000006,
//             "year": 2015
//         },
//         {
//             "value": 95.299999999999997,
//             "year": 2016
//         },
//         {
//             "value": 97.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 90.0,
//             "year": 2008
//         },
//         {
//             "value": 90.0,
//             "year": 2009
//         },
//         {
//             "value": 90.0,
//             "year": 2010
//         },
//         {
//             "value": 90.0,
//             "year": 2011
//         },
//         {
//             "value": 90.0,
//             "year": 2012
//         },
//         {
//             "value": 90.0,
//             "year": 2013
//         },
//         {
//             "value": 90.0,
//             "year": 2014
//         },
//         {
//             "value": 90.0,
//             "year": 2015
//         },
//         {
//             "value": 95.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         },
//         {
//             "value": 95.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 90.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of Native Title negotiations progressed in accordance with the Department’s annual work plan and timeframes monitored by the Federal Court (NTU),
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 100.0,
//             "year": 2013
//         },
//         {
//             "value": 100.0,
//             "year": 2014
//         },
//         {
//             "value": 100.0,
//             "year": 2015
//         },
//         {
//             "value": 100.0,
//             "year": 2016
//         },
//         {
//             "value": 100.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 100.0,
//             "year": 2013
//         },
//         {
//             "value": 100.0,
//             "year": 2014
//         },
//         {
//             "value": 100.0,
//             "year": 2015
//         },
//         {
//             "value": 100.0,
//             "year": 2016
//         },
//         {
//             "value": 100.0,
//             "year": 2017
//         },
//         {
//             "value": 100.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 100.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'VEOHRC complaints finalised within six months,
//                      description: 'Protection of Personal Identity and Individual/Community Rights:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 89.0,
//             "year": 2009
//         },
//         {
//             "value": 90.0,
//             "year": 2010
//         },
//         {
//             "value": 89.799999999999997,
//             "year": 2011
//         },
//         {
//             "value": 85.0,
//             "year": 2012
//         },
//         {
//             "value": 65.0,
//             "year": 2013
//         },
//         {
//             "value": 82.299999999999997,
//             "year": 2014
//         },
//         {
//             "value": 86.0,
//             "year": 2015
//         },
//         {
//             "value": 80.0,
//             "year": 2016
//         },
//         {
//             "value": 80.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2009
//         },
//         {
//             "value": 85.0,
//             "year": 2010
//         },
//         {
//             "value": 85.0,
//             "year": 2011
//         },
//         {
//             "value": 85.0,
//             "year": 2012
//         },
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 85.0,
//             "year": 2014
//         },
//         {
//             "value": 85.0,
//             "year": 2015
//         },
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 85.0,
//             "year": 2017
//         },
//         {
//             "value": 85.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 65.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Public Prosecutions and Legal Assistance:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 202.5,
//             "year": 2015
//         },
//         {
//             "value": 216.0,
//             "year": 2016
//         },
//         {
//             "value": 226.30000000000001,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 208.19999999999999,
//             "year": 2015
//         },
//         {
//             "value": 208.19999999999999,
//             "year": 2016
//         },
//         {
//             "value": 224.59999999999999,
//             "year": 2017
//         },
//         {
//             "value": 249.90000000000001,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 202.5,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Guilty outcomes (guilty pleas and trial convictions) as a percentage of case completions (OPP),
//                      description: 'Public Prosecutions and Legal Assistance:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 85.299999999999997,
//             "year": 2010
//         },
//         {
//             "value": 88.299999999999997,
//             "year": 2011
//         },
//         {
//             "value": 88.400000000000006,
//             "year": 2012
//         },
//         {
//             "value": 87.599999999999994,
//             "year": 2013
//         },
//         {
//             "value": 88.700000000000003,
//             "year": 2014
//         },
//         {
//             "value": 89.0,
//             "year": 2015
//         },
//         {
//             "value": 89.599999999999994,
//             "year": 2016
//         },
//         {
//             "value": 90.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2010
//         },
//         {
//             "value": 85.0,
//             "year": 2011
//         },
//         {
//             "value": 85.0,
//             "year": 2012
//         },
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 85.0,
//             "year": 2014
//         },
//         {
//             "value": 85.0,
//             "year": 2015
//         },
//         {
//             "value": 86.0,
//             "year": 2016
//         },
//         {
//             "value": 86.0,
//             "year": 2017
//         },
//         {
//             "value": 87.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 85.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Community legal education and
// information services (VLA) – excluding
// family violence related services,
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 89993.0,
//             "year": 2013
//         },
//         {
//             "value": 112020.0,
//             "year": 2014
//         },
//         {
//             "value": 137668.0,
//             "year": 2015
//         },
//         {
//             "value": 126284.0,
//             "year": 2016
//         },
//         {
//             "value": 138000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 90000.0,
//             "year": 2013
//         },
//         {
//             "value": 90000.0,
//             "year": 2014
//         },
//         {
//             "value": 90000.0,
//             "year": 2015
//         },
//         {
//             "value": 145000.0,
//             "year": 2016
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 89993.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Community legal education and
// information services (VLA) – family
// violence related services,
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 11500.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 11500.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Duty lawyer services – excluding family violence related services (VLA),
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 70830.0,
//             "year": 2010
//         },
//         {
//             "value": 78174.0,
//             "year": 2011
//         },
//         {
//             "value": 71944.0,
//             "year": 2012
//         },
//         {
//             "value": 71944.0,
//             "year": 2014
//         },
//         {
//             "value": 83674.0,
//             "year": 2015
//         },
//         {
//             "value": 87162.0,
//             "year": 2016
//         },
//         {
//             "value": 89700.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 75000.0,
//             "year": 2010
//         },
//         {
//             "value": 75000.0,
//             "year": 2011
//         },
//         {
//             "value": 80000.0,
//             "year": 2012
//         },
//         {
//             "value": 74000.0,
//             "year": 2014
//         },
//         {
//             "value": 74000.0,
//             "year": 2015
//         },
//         {
//             "value": 80000.0,
//             "year": 2016
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 70830.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Family violence legal services (VLA),
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 32000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 32000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Grants of legal assistance provided by VLA – excluding family violence related,
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 36963.0,
//             "year": 2010
//         },
//         {
//             "value": 42157.0,
//             "year": 2011
//         },
//         {
//             "value": 39782.0,
//             "year": 2012
//         },
//         {
//             "value": 39782.0,
//             "year": 2013
//         },
//         {
//             "value": 33463.0,
//             "year": 2014
//         },
//         {
//             "value": 34681.0,
//             "year": 2015
//         },
//         {
//             "value": 38345.0,
//             "year": 2016
//         },
//         {
//             "value": 42600.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 43000.0,
//             "year": 2010
//         },
//         {
//             "value": 43000.0,
//             "year": 2011
//         },
//         {
//             "value": 45000.0,
//             "year": 2012
//         },
//         {
//             "value": 33000.0,
//             "year": 2013
//         },
//         {
//             "value": 33000.0,
//             "year": 2014
//         },
//         {
//             "value": 33000.0,
//             "year": 2015
//         },
//         {
//             "value": 34900.0,
//             "year": 2016
//         },
//         {
//             "value": 35000.0,
//             "year": 2017
//         },
//         {
//             "value": 31800.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 31800.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Judicial Officer sitting days requiring prosecutors – Office of Public Prosecutions (OPP),
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 9960.0,
//             "year": 2010
//         },
//         {
//             "value": 10181.0,
//             "year": 2011
//         },
//         {
//             "value": 9814.0,
//             "year": 2013
//         },
//         {
//             "value": 9421.0,
//             "year": 2014
//         },
//         {
//             "value": 9542.0,
//             "year": 2015
//         },
//         {
//             "value": 11464.0,
//             "year": 2016
//         },
//         {
//             "value": 10500.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 11250.0,
//             "year": 2010
//         },
//         {
//             "value": 10750.0,
//             "year": 2011
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 9421.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Legal advice and minor assistance for clients (VLA) – excluding family violence related services (VLA),
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 51598.0,
//             "year": 2013
//         },
//         {
//             "value": 46178.0,
//             "year": 2014
//         },
//         {
//             "value": 48806.0,
//             "year": 2015
//         },
//         {
//             "value": 40770.0,
//             "year": 2016
//         },
//         {
//             "value": 41000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 52000.0,
//             "year": 2013
//         },
//         {
//             "value": 52000.0,
//             "year": 2014
//         },
//         {
//             "value": 52000.0,
//             "year": 2015
//         },
//         {
//             "value": 52000.0,
//             "year": 2016
//         },
//         {
//             "value": 42000.0,
//             "year": 2017
//         },
//         {
//             "value": 38800.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 38800.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of briefs prepared and hearings attended (OPP),
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 68265.0,
//             "year": 2009
//         },
//         {
//             "value": 69465.0,
//             "year": 2010
//         },
//         {
//             "value": 70837.0,
//             "year": 2011
//         },
//         {
//             "value": 70238.0,
//             "year": 2013
//         },
//         {
//             "value": 70254.0,
//             "year": 2014
//         },
//         {
//             "value": 70100.0,
//             "year": 2015
//         },
//         {
//             "value": 72610.0,
//             "year": 2016
//         },
//         {
//             "value": 73500.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 72500.0,
//             "year": 2009
//         },
//         {
//             "value": 72500.0,
//             "year": 2010
//         },
//         {
//             "value": 72500.0,
//             "year": 2011
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 68265.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of unique clients who accessed one or more of VLA’s legal services,
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 86847.0,
//             "year": 2016
//         },
//         {
//             "value": 89000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 84000.0,
//             "year": 2016
//         },
//         {
//             "value": 84000.0,
//             "year": 2017
//         },
//         {
//             "value": 84000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 84000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of victim and witness consultations (OPP),
//                      description: 'Public Prosecutions and Legal Assistance:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 6166.0,
//             "year": 2010
//         },
//         {
//             "value": 6389.0,
//             "year": 2011
//         },
//         {
//             "value": 11122.0,
//             "year": 2013
//         },
//         {
//             "value": 9525.0,
//             "year": 2014
//         },
//         {
//             "value": 10482.0,
//             "year": 2015
//         },
//         {
//             "value": 10620.0,
//             "year": 2016
//         },
//         {
//             "value": 10750.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 5000.0,
//             "year": 2010
//         },
//         {
//             "value": 6500.0,
//             "year": 2011
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 5000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Applications for legal aid processed within 15 days (VLA),
//                      description: 'Public Prosecutions and Legal Assistance:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 96.0,
//             "year": 2008
//         },
//         {
//             "value": 96.200000000000003,
//             "year": 2009
//         },
//         {
//             "value": 96.0,
//             "year": 2010
//         },
//         {
//             "value": 97.5,
//             "year": 2011
//         },
//         {
//             "value": 91.0,
//             "year": 2012
//         },
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 89.299999999999997,
//             "year": 2014
//         },
//         {
//             "value": 93.200000000000003,
//             "year": 2015
//         },
//         {
//             "value": 94.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 95.0,
//             "year": 2008
//         },
//         {
//             "value": 95.0,
//             "year": 2009
//         },
//         {
//             "value": 95.0,
//             "year": 2010
//         },
//         {
//             "value": 95.0,
//             "year": 2011
//         },
//         {
//             "value": 95.0,
//             "year": 2012
//         },
//         {
//             "value": 95.0,
//             "year": 2013
//         },
//         {
//             "value": 95.0,
//             "year": 2014
//         },
//         {
//             "value": 95.0,
//             "year": 2015
//         },
//         {
//             "value": 95.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         },
//         {
//             "value": 95.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 85.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of trials listed which did not proceed to adjournment on application of the Crown (OPP),
//                      description: 'Public Prosecutions and Legal Assistance:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 98.400000000000006,
//             "year": 2010
//         },
//         {
//             "value": 99.299999999999997,
//             "year": 2011
//         },
//         {
//             "value": 99.0,
//             "year": 2012
//         },
//         {
//             "value": 98.799999999999997,
//             "year": 2013
//         },
//         {
//             "value": 99.099999999999994,
//             "year": 2014
//         },
//         {
//             "value": 98.900000000000006,
//             "year": 2015
//         },
//         {
//             "value": 98.599999999999994,
//             "year": 2016
//         },
//         {
//             "value": 99.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 99.0,
//             "year": 2010
//         },
//         {
//             "value": 99.0,
//             "year": 2011
//         },
//         {
//             "value": 99.0,
//             "year": 2012
//         },
//         {
//             "value": 99.0,
//             "year": 2013
//         },
//         {
//             "value": 99.0,
//             "year": 2014
//         },
//         {
//             "value": 99.0,
//             "year": 2015
//         },
//         {
//             "value": 99.0,
//             "year": 2016
//         },
//         {
//             "value": 99.0,
//             "year": 2017
//         },
//         {
//             "value": 99.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 98.4,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 167.69999999999999,
//             "year": 2011
//         },
//         {
//             "value": 117.90000000000001,
//             "year": 2012
//         },
//         {
//             "value": 90.400000000000006,
//             "year": 2013
//         },
//         {
//             "value": 80.799999999999997,
//             "year": 2014
//         },
//         {
//             "value": 119.09999999999999,
//             "year": 2015
//         },
//         {
//             "value": 115.3,
//             "year": 2016
//         },
//         {
//             "value": 133.69999999999999,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 114.2,
//             "year": 2011
//         },
//         {
//             "value": 114.2,
//             "year": 2012
//         },
//         {
//             "value": 78.099999999999994,
//             "year": 2013
//         },
//         {
//             "value": 88.0,
//             "year": 2014
//         },
//         {
//             "value": 123.40000000000001,
//             "year": 2015
//         },
//         {
//             "value": 125.0,
//             "year": 2016
//         },
//         {
//             "value": 126.3,
//             "year": 2017
//         },
//         {
//             "value": 139.69999999999999,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 78.1,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Rate of compliance with key consumer laws,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 97.599999999999994,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 95.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         },
//         {
//             "value": 95.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 95.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Regulatory functions delivered within agreed timeframes,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 95.700000000000003,
//             "year": 2016
//         },
//         {
//             "value": 93.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 90.0,
//             "year": 2016
//         },
//         {
//             "value": 93.0,
//             "year": 2017
//         },
//         {
//             "value": 93.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 90.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Compliance activities, from compliance assistance through to court actions,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 9749.0,
//             "year": 2012
//         },
//         {
//             "value": 9749.0,
//             "year": 2013
//         },
//         {
//             "value": 10588.0,
//             "year": 2014
//         },
//         {
//             "value": 11344.0,
//             "year": 2015
//         },
//         {
//             "value": 9774.0,
//             "year": 2016
//         },
//         {
//             "value": 9911.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 9075.0,
//             "year": 2012
//         },
//         {
//             "value": 12000.0,
//             "year": 2013
//         },
//         {
//             "value": 12000.0,
//             "year": 2014
//         },
//         {
//             "value": 12000.0,
//             "year": 2015
//         },
//         {
//             "value": 9600.0,
//             "year": 2016
//         },
//         {
//             "value": 9600.0,
//             "year": 2017
//         },
//         {
//             "value": 9600.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 9075.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Dispute resolution services provided by Domestic Building Dispute Resolution Victoria,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 3000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 3000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Information and advice provided to consumers, tenants and businesses: through other services including written correspondence, face to face and dispute assistance,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 84659.0,
//             "year": 2013
//         },
//         {
//             "value": 133729.0,
//             "year": 2014
//         },
//         {
//             "value": 129430.0,
//             "year": 2015
//         },
//         {
//             "value": 123309.0,
//             "year": 2016
//         },
//         {
//             "value": 117529.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 130000.0,
//             "year": 2013
//         },
//         {
//             "value": 130000.0,
//             "year": 2014
//         },
//         {
//             "value": 140000.0,
//             "year": 2015
//         },
//         {
//             "value": 123000.0,
//             "year": 2016
//         },
//         {
//             "value": 124300.0,
//             "year": 2017
//         },
//         {
//             "value": 114300.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 84659.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Information and advice provided to consumers, tenants and businesses: through telephone service,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 409936.0,
//             "year": 2012
//         },
//         {
//             "value": 409936.0,
//             "year": 2013
//         },
//         {
//             "value": 390349.0,
//             "year": 2014
//         },
//         {
//             "value": 352369.0,
//             "year": 2015
//         },
//         {
//             "value": 349985.0,
//             "year": 2016
//         },
//         {
//             "value": 341481.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 606350.0,
//             "year": 2012
//         },
//         {
//             "value": 390000.0,
//             "year": 2013
//         },
//         {
//             "value": 390000.0,
//             "year": 2014
//         },
//         {
//             "value": 375000.0,
//             "year": 2015
//         },
//         {
//             "value": 346500.0,
//             "year": 2016
//         },
//         {
//             "value": 354500.0,
//             "year": 2017
//         },
//         {
//             "value": 325800.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 325800.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Transactions undertaken: Residential Tenancies Bonds Authority (RTBA) transactions,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 406535.0,
//             "year": 2013
//         },
//         {
//             "value": 419135.0,
//             "year": 2014
//         },
//         {
//             "value": 432569.0,
//             "year": 2015
//         },
//         {
//             "value": 447934.0,
//             "year": 2016
//         },
//         {
//             "value": 453355.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 395000.0,
//             "year": 2013
//         },
//         {
//             "value": 395000.0,
//             "year": 2014
//         },
//         {
//             "value": 448000.0,
//             "year": 2015
//         },
//         {
//             "value": 433500.0,
//             "year": 2016
//         },
//         {
//             "value": 457000.0,
//             "year": 2017
//         },
//         {
//             "value": 469000.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 395000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Transactions undertaken: registration and licensing transactions,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 61378.0,
//             "year": 2012
//         },
//         {
//             "value": 61378.0,
//             "year": 2013
//         },
//         {
//             "value": 67520.0,
//             "year": 2014
//         },
//         {
//             "value": 70679.0,
//             "year": 2015
//         },
//         {
//             "value": 88221.0,
//             "year": 2016
//         },
//         {
//             "value": 83741.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 600000.0,
//             "year": 2012
//         },
//         {
//             "value": 55000.0,
//             "year": 2013
//         },
//         {
//             "value": 55000.0,
//             "year": 2014
//         },
//         {
//             "value": 69500.0,
//             "year": 2015
//         },
//         {
//             "value": 69500.0,
//             "year": 2016
//         },
//         {
//             "value": 84000.0,
//             "year": 2017
//         },
//         {
//             "value": 86700.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 55000.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Victims of family violence assisted with financial counselling,
//                      description: 'Regulation of the Victorian Consumer Marketplace:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 2250.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 2250.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Victims and Community Support Services:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 87.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 55.100000000000001,
//             "year": 2016
//         },
//         {
//             "value": 49.899999999999999,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 84.0,
//             "year": 2015
//         },
//         {
//             "value": 84.0,
//             "year": 2016
//         },
//         {
//             "value": 55.200000000000003,
//             "year": 2017
//         },
//         {
//             "value": 55.100000000000001,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 49.9,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Working with Children Checks: Assessment issued within three days of receiving CrimTrac clear notification,
//                      description: 'Victims and Community Support Services:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 100.0,
//             "year": 2016
//         },
//         {
//             "value": 98.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 98.0,
//             "year": 2016
//         },
//         {
//             "value": 98.0,
//             "year": 2017
//         },
//         {
//             "value": 98.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 98.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Working with Children Checks: Negative notices issued within three days of receiving the delegate's decision,
//                      description: 'Victims and Community Support Services:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 100.0,
//             "year": 2016
//         },
//         {
//             "value": 100.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 100.0,
//             "year": 2016
//         },
//         {
//             "value": 100.0,
//             "year": 2017
//         },
//         {
//             "value": 100.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 100.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Diversion initiatives established to support the Koorie community,
//                      description: 'Victims and Community Support Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 36.0,
//             "year": 2008
//         },
//         {
//             "value": 36.0,
//             "year": 2009
//         },
//         {
//             "value": 38.0,
//             "year": 2010
//         },
//         {
//             "value": 35.0,
//             "year": 2011
//         },
//         {
//             "value": 35.0,
//             "year": 2012
//         },
//         {
//             "value": 35.0,
//             "year": 2013
//         },
//         {
//             "value": 35.700000000000003,
//             "year": 2014
//         },
//         {
//             "value": 35.0,
//             "year": 2015
//         },
//         {
//             "value": 35.0,
//             "year": 2016
//         },
//         {
//             "value": 35.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 35.0,
//             "year": 2008
//         },
//         {
//             "value": 35.0,
//             "year": 2009
//         },
//         {
//             "value": 35.0,
//             "year": 2010
//         },
//         {
//             "value": 35.0,
//             "year": 2011
//         },
//         {
//             "value": 35.0,
//             "year": 2012
//         },
//         {
//             "value": 35.0,
//             "year": 2013
//         },
//         {
//             "value": 35.0,
//             "year": 2014
//         },
//         {
//             "value": 35.0,
//             "year": 2015
//         },
//         {
//             "value": 35.0,
//             "year": 2016
//         },
//         {
//             "value": 35.0,
//             "year": 2017
//         },
//         {
//             "value": 35.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 35.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Number of Working with Children Checks processed,
//                      description: 'Victims and Community Support Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 227.0,
//             "year": 2008
//         },
//         {
//             "value": 176.0,
//             "year": 2009
//         },
//         {
//             "value": 152.0,
//             "year": 2010
//         },
//         {
//             "value": 137.0,
//             "year": 2011
//         },
//         {
//             "value": 180.90000000000001,
//             "year": 2012
//         },
//         {
//             "value": 253.69999999999999,
//             "year": 2013
//         },
//         {
//             "value": 223.90000000000001,
//             "year": 2014
//         },
//         {
//             "value": 235.0,
//             "year": 2015
//         },
//         {
//             "value": 233.0,
//             "year": 2016
//         },
//         {
//             "value": 304.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number
// (000)' ,
//
//                      min_y: 137.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Victims receiving a service from the Victims Assistance Program (VSA),
//                      description: 'Victims and Community Support Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 9662.0,
//             "year": 2010
//         },
//         {
//             "value": 9497.0,
//             "year": 2011
//         },
//         {
//             "value": 9038.0,
//             "year": 2012
//         },
//         {
//             "value": 9038.0,
//             "year": 2013
//         },
//         {
//             "value": 11468.0,
//             "year": 2014
//         },
//         {
//             "value": 11227.0,
//             "year": 2015
//         },
//         {
//             "value": 11022.0,
//             "year": 2016
//         },
//         {
//             "value": 12400.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 7500.0,
//             "year": 2010
//         },
//         {
//             "value": 7500.0,
//             "year": 2011
//         },
//         {
//             "value": 8500.0,
//             "year": 2012
//         },
//         {
//             "value": 11000.0,
//             "year": 2013
//         },
//         {
//             "value": 11000.0,
//             "year": 2014
//         },
//         {
//             "value": 11000.0,
//             "year": 2015
//         },
//         {
//             "value": 11000.0,
//             "year": 2016
//         },
//         {
//             "value": 12400.0,
//             "year": 2017
//         },
//         {
//             "value": 12400.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 7500.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Victims receiving a service from the Victims of Crime Helpline, Victims Register, Youth Justice Group Conferencing and Victims Support (VSA),
//                      description: 'Victims and Community Support Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 9662.0,
//             "year": 2010
//         },
//         {
//             "value": 9497.0,
//             "year": 2011
//         },
//         {
//             "value": 9038.0,
//             "year": 2012
//         },
//         {
//             "value": 9038.0,
//             "year": 2013
//         },
//         {
//             "value": 11468.0,
//             "year": 2014
//         },
//         {
//             "value": 13723.0,
//             "year": 2015
//         },
//         {
//             "value": 23399.0,
//             "year": 2016
//         },
//         {
//             "value": 30000.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 7500.0,
//             "year": 2010
//         },
//         {
//             "value": 7500.0,
//             "year": 2011
//         },
//         {
//             "value": 8500.0,
//             "year": 2012
//         },
//         {
//             "value": 10000.0,
//             "year": 2013
//         },
//         {
//             "value": 10000.0,
//             "year": 2014
//         },
//         {
//             "value": 10000.0,
//             "year": 2015
//         },
//         {
//             "value": 10000.0,
//             "year": 2016
//         },
//         {
//             "value": 17600.0,
//             "year": 2017
//         },
//         {
//             "value": 17600.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 7500.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Youth Justice Community-Based Services:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 49.100000000000001,
//             "year": 2008
//         },
//         {
//             "value": 48.5,
//             "year": 2009
//         },
//         {
//             "value": 50.799999999999997,
//             "year": 2010
//         },
//         {
//             "value": 57.899999999999999,
//             "year": 2011
//         },
//         {
//             "value": 61.700000000000003,
//             "year": 2012
//         },
//         {
//             "value": 65.200000000000003,
//             "year": 2013
//         },
//         {
//             "value": 66.0,
//             "year": 2014
//         },
//         {
//             "value": 65.900000000000006,
//             "year": 2015
//         },
//         {
//             "value": 67.400000000000006,
//             "year": 2016
//         },
//         {
//             "value": 52.600000000000001,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 50.299999999999997,
//             "year": 2008
//         },
//         {
//             "value": 50.299999999999997,
//             "year": 2009
//         },
//         {
//             "value": 50.700000000000003,
//             "year": 2010
//         },
//         {
//             "value": 58.700000000000003,
//             "year": 2011
//         },
//         {
//             "value": 64.799999999999997,
//             "year": 2012
//         },
//         {
//             "value": 66.0,
//             "year": 2013
//         },
//         {
//             "value": 68.700000000000003,
//             "year": 2014
//         },
//         {
//             "value": 69.299999999999997,
//             "year": 2015
//         },
//         {
//             "value": 69.900000000000006,
//             "year": 2016
//         },
//         {
//             "value": 71.599999999999994,
//             "year": 2017
//         },
//         {
//             "value": 61.899999999999999,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 48.5,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Community-based orders completed successfully,
//                      description: 'Youth Justice Community-Based Services:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 92.400000000000006,
//             "year": 2011
//         },
//         {
//             "value": 88.700000000000003,
//             "year": 2012
//         },
//         {
//             "value": 89.599999999999994,
//             "year": 2013
//         },
//         {
//             "value": 91.0,
//             "year": 2014
//         },
//         {
//             "value": 89.700000000000003,
//             "year": 2015
//         },
//         {
//             "value": 90.0,
//             "year": 2016
//         },
//         {
//             "value": 85.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2011
//         },
//         {
//             "value": 85.0,
//             "year": 2012
//         },
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 85.0,
//             "year": 2014
//         },
//         {
//             "value": 85.0,
//             "year": 2015
//         },
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 85.0,
//             "year": 2017
//         },
//         {
//             "value": 85.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 85.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Average daily number of clients under community-based supervision,
//                      description: 'Youth Justice Community-Based Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 1368.0,
//             "year": 2010
//         },
//         {
//             "value": 1076.0,
//             "year": 2011
//         },
//         {
//             "value": 1076.0,
//             "year": 2014
//         },
//         {
//             "value": 1021.0,
//             "year": 2015
//         },
//         {
//             "value": 923.0,
//             "year": 2016
//         },
//         {
//             "value": 920.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 1200.0,
//             "year": 2010
//         },
//         {
//             "value": 1200.0,
//             "year": 2011
//         },
//         {
//             "value": 1625.0,
//             "year": 2014
//         },
//         {
//             "value": 1625.0,
//             "year": 2015
//         },
//         {
//             "value": 1625.0,
//             "year": 2016
//         },
//         {
//             "value": 1625.0,
//             "year": 2017
//         },
//         {
//             "value": 1200.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 920.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Proportion of youth justice clients under community-based supervision,
//                      description: 'Youth Justice Community-Based Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 88.0,
//             "year": 2008
//         },
//         {
//             "value": 90.400000000000006,
//             "year": 2009
//         },
//         {
//             "value": 88.700000000000003,
//             "year": 2010
//         },
//         {
//             "value": 88.5,
//             "year": 2011
//         },
//         {
//             "value": 88.5,
//             "year": 2012
//         },
//         {
//             "value": 87.5,
//             "year": 2013
//         },
//         {
//             "value": 88.0,
//             "year": 2014
//         },
//         {
//             "value": 87.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 85.0,
//             "year": 2016
//         },
//         {
//             "value": 89.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 85.0,
//             "year": 2008
//         },
//         {
//             "value": 85.0,
//             "year": 2009
//         },
//         {
//             "value": 85.0,
//             "year": 2010
//         },
//         {
//             "value": 85.0,
//             "year": 2011
//         },
//         {
//             "value": 85.0,
//             "year": 2012
//         },
//         {
//             "value": 85.0,
//             "year": 2013
//         },
//         {
//             "value": 88.5,
//             "year": 2014
//         },
//         {
//             "value": 88.5,
//             "year": 2015
//         },
//         {
//             "value": 88.5,
//             "year": 2016
//         },
//         {
//             "value": 89.0,
//             "year": 2017
//         },
//         {
//             "value": 89.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 85.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Young people on supervised orders who have a client assessment and plan completed within six weeks of the commencement of the order,
//                      description: 'Youth Justice Community-Based Services:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 96.0,
//             "year": 2008
//         },
//         {
//             "value": 95.900000000000006,
//             "year": 2009
//         },
//         {
//             "value": 95.700000000000003,
//             "year": 2010
//         },
//         {
//             "value": 96.099999999999994,
//             "year": 2011
//         },
//         {
//             "value": 94.5,
//             "year": 2012
//         },
//         {
//             "value": 96.099999999999994,
//             "year": 2013
//         },
//         {
//             "value": 96.0,
//             "year": 2014
//         },
//         {
//             "value": 96.5,
//             "year": 2015
//         },
//         {
//             "value": 97.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 95.0,
//             "year": 2008
//         },
//         {
//             "value": 95.0,
//             "year": 2009
//         },
//         {
//             "value": 95.0,
//             "year": 2010
//         },
//         {
//             "value": 95.0,
//             "year": 2011
//         },
//         {
//             "value": 95.0,
//             "year": 2012
//         },
//         {
//             "value": 95.0,
//             "year": 2013
//         },
//         {
//             "value": 95.0,
//             "year": 2014
//         },
//         {
//             "value": 95.0,
//             "year": 2015
//         },
//         {
//             "value": 95.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         },
//         {
//             "value": 95.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 94.5,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Total output cost,
//                      description: 'Youth Justice Custodial Services:Cost:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 52.200000000000003,
//             "year": 2008
//         },
//         {
//             "value": 56.100000000000001,
//             "year": 2009
//         },
//         {
//             "value": 56.200000000000003,
//             "year": 2010
//         },
//         {
//             "value": 60.700000000000003,
//             "year": 2011
//         },
//         {
//             "value": 64.0,
//             "year": 2012
//         },
//         {
//             "value": 67.200000000000003,
//             "year": 2013
//         },
//         {
//             "value": 70.700000000000003,
//             "year": 2014
//         },
//         {
//             "value": 68.299999999999997,
//             "year": 2015
//         },
//         {
//             "value": 85.700000000000003,
//             "year": 2016
//         },
//         {
//             "value": 100.7,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 54.799999999999997,
//             "year": 2008
//         },
//         {
//             "value": 54.799999999999997,
//             "year": 2009
//         },
//         {
//             "value": 54.100000000000001,
//             "year": 2010
//         },
//         {
//             "value": 55.5,
//             "year": 2011
//         },
//         {
//             "value": 61.600000000000001,
//             "year": 2012
//         },
//         {
//             "value": 64.5,
//             "year": 2013
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2014
//         },
//         {
//             "value": 71.799999999999997,
//             "year": 2015
//         },
//         {
//             "value": 85.799999999999997,
//             "year": 2016
//         },
//         {
//             "value": 89.799999999999997,
//             "year": 2017
//         },
//         {
//             "value": 103.40000000000001,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: '$million' ,
//
//                      min_y: 52.2,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Clients participating in community re-integration activities,
//                      description: 'Youth Justice Custodial Services:Quality:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 74.0,
//             "year": 2008
//         },
//         {
//             "value": 72.299999999999997,
//             "year": 2009
//         },
//         {
//             "value": 64.0,
//             "year": 2010
//         },
//         {
//             "value": 58.299999999999997,
//             "year": 2011
//         },
//         {
//             "value": 71.299999999999997,
//             "year": 2012
//         },
//         {
//             "value": 68.599999999999994,
//             "year": 2013
//         },
//         {
//             "value": 80.0,
//             "year": 2014
//         },
//         {
//             "value": 70.0,
//             "year": 2015
//         },
//         {
//             "value": 59.0,
//             "year": 2016
//         },
//         {
//             "value": 65.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 70.0,
//             "year": 2008
//         },
//         {
//             "value": 70.0,
//             "year": 2009
//         },
//         {
//             "value": 70.0,
//             "year": 2010
//         },
//         {
//             "value": 70.0,
//             "year": 2011
//         },
//         {
//             "value": 60.0,
//             "year": 2012
//         },
//         {
//             "value": 60.0,
//             "year": 2013
//         },
//         {
//             "value": 65.0,
//             "year": 2014
//         },
//         {
//             "value": 65.0,
//             "year": 2015
//         },
//         {
//             "value": 65.0,
//             "year": 2016
//         },
//         {
//             "value": 65.0,
//             "year": 2017
//         },
//         {
//             "value": 65.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 58.3,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Annual daily average number of young people in custody: male (under 15 years) and female,
//                      description: 'Youth Justice Custodial Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 18.0,
//             "year": 2008
//         },
//         {
//             "value": 14.0,
//             "year": 2009
//         },
//         {
//             "value": 18.699999999999999,
//             "year": 2010
//         },
//         {
//             "value": 14.4,
//             "year": 2011
//         },
//         {
//             "value": 14.6,
//             "year": 2012
//         },
//         {
//             "value": 14.699999999999999,
//             "year": 2013
//         },
//         {
//             "value": 10.199999999999999,
//             "year": 2014
//         },
//         {
//             "value": 18.600000000000001,
//             "year": 2015
//         },
//         {
//             "value": 17.899999999999999,
//             "year": 2016
//         },
//         {
//             "value": 20.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      yax_units: 'number' ,
//
//                      min_y: 10.2,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Annual daily average number of young people in custody: males (15 years plus),
//                      description: 'Youth Justice Custodial Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 140.0,
//             "year": 2008
//         },
//         {
//             "value": 121.0,
//             "year": 2009
//         },
//         {
//             "value": 155.30000000000001,
//             "year": 2010
//         },
//         {
//             "value": 164.0,
//             "year": 2011
//         },
//         {
//             "value": 158.69999999999999,
//             "year": 2012
//         },
//         {
//             "value": 152.5,
//             "year": 2013
//         },
//         {
//             "value": 135.19999999999999,
//             "year": 2014
//         },
//         {
//             "value": 123.7,
//             "year": 2015
//         },
//         {
//             "value": 146.5,
//             "year": 2016
//         },
//         {
//             "value": 150.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 121.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Average daily custodial centre utilisation rate: males (15 years plus),
//                      description: 'Youth Justice Custodial Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 76.0,
//             "year": 2008
//         },
//         {
//             "value": 66.099999999999994,
//             "year": 2009
//         },
//         {
//             "value": 89.799999999999997,
//             "year": 2010
//         },
//         {
//             "value": 92.599999999999994,
//             "year": 2011
//         },
//         {
//             "value": 89.700000000000003,
//             "year": 2012
//         },
//         {
//             "value": 83.299999999999997,
//             "year": 2013
//         },
//         {
//             "value": 74.0,
//             "year": 2014
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2015
//         },
//         {
//             "value": 64.0,
//             "year": 2016
//         },
//         {
//             "value": 76.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 67.599999999999994,
//             "year": 2008
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2009
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2010
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2011
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2012
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2013
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2014
//         },
//         {
//             "value": 67.599999999999994,
//             "year": 2015
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 64.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Average daily custodial centre utilisation rate: males (under 15 years) and female,
//                      description: 'Youth Justice Custodial Services:Quantity:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 46.0,
//             "year": 2008
//         },
//         {
//             "value": 35.0,
//             "year": 2009
//         },
//         {
//             "value": 48.0,
//             "year": 2010
//         },
//         {
//             "value": 36.899999999999999,
//             "year": 2011
//         },
//         {
//             "value": 37.399999999999999,
//             "year": 2012
//         },
//         {
//             "value": 49.0,
//             "year": 2013
//         },
//         {
//             "value": 34.0,
//             "year": 2014
//         },
//         {
//             "value": 62.0,
//             "year": 2015
//         },
//         {
//             "value": 60.0,
//             "year": 2016
//         },
//         {
//             "value": 66.0,
//             "year": 2017
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 34.0,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
//
//
//     MG.data_graphic({title: 'Young people on custodial orders who have a client assessment and plan completed within six weeks of the commencement of the order,
//                      description: 'Youth Justice Custodial Services:Timeliness:Department of Justice and Regulation,
//                      data:  [
//     [
//         {
//             "value": 65.200000000000003,
//             "year": 2008
//         },
//         {
//             "value": 93.200000000000003,
//             "year": 2009
//         },
//         {
//             "value": 85.700000000000003,
//             "year": 2010
//         },
//         {
//             "value": 91.400000000000006,
//             "year": 2011
//         },
//         {
//             "value": 93.299999999999997,
//             "year": 2012
//         },
//         {
//             "value": 98.400000000000006,
//             "year": 2013
//         },
//         {
//             "value": 98.0,
//             "year": 2014
//         },
//         {
//             "value": 98.299999999999997,
//             "year": 2015
//         },
//         {
//             "value": 98.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         }
//     ],
//     [
//         {
//             "value": 95.0,
//             "year": 2008
//         },
//         {
//             "value": 95.0,
//             "year": 2009
//         },
//         {
//             "value": 95.0,
//             "year": 2010
//         },
//         {
//             "value": 95.0,
//             "year": 2011
//         },
//         {
//             "value": 95.0,
//             "year": 2012
//         },
//         {
//             "value": 95.0,
//             "year": 2013
//         },
//         {
//             "value": 95.0,
//             "year": 2014
//         },
//         {
//             "value": 95.0,
//             "year": 2015
//         },
//         {
//             "value": 95.0,
//             "year": 2016
//         },
//         {
//             "value": 95.0,
//             "year": 2017
//         },
//         {
//             "value": 95.0,
//             "year": 2018
//         }
//     ]
// ],
//                      width: 600,
//                      height: 200, right: 140, x_accessor: 'year', y_accessor: 'value',
//                      yax_count: 3, missing_is_hidden: true,
//                      format: 'percentage',
//
//                      min_y: 65.2,
//                      legend: ['actual', 'target']
//                      });
//
// //-----------------
