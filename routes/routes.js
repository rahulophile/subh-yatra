var express = require('express');
var router = express.Router();

// Expanded sample route data with more routes and bus information
const routes = [
    { 
        id: 1, 
        number: '101', 
        start: 'City Center', 
        end: 'Airport', 
        stops: 15,
        buses: [
            { busNumber: 'B101A', status: 'On Time', delay: 0 },
            { busNumber: 'B101B', status: 'Late', delay: 10 },
            { busNumber: 'B101C', status: 'On Time', delay: 0 }
        ]
    },
    { 
        id: 2, 
        number: '202', 
        start: 'North Station', 
        end: 'South Beach', 
        stops: 20,
        buses: [
            { busNumber: 'B202A', status: 'On Time', delay: 0 },
            { busNumber: 'B202B', status: 'Late', delay: 15 }
        ]
    },
    {
        id: 3,
        number: '303',
        start: 'West Park',
        end: 'East Village',
        stops: 12,
        buses: [
            { busNumber: 'B303A', status: 'On Time', delay: 0 },
            { busNumber: 'B303B', status: 'On Time', delay: 0 },
            { busNumber: 'B303C', status: 'Late', delay: 5 }
        ]
    },
    {
        id: 4,
        number: '404',
        start: 'Central Station',
        end: 'University Campus',
        stops: 8,
        buses: [
            { busNumber: 'B404A', status: 'Late', delay: 7 },
            { busNumber: 'B404B', status: 'On Time', delay: 0 }
        ]
    },
    {
        id: 5,
        number: '505',
        start: 'Shopping Mall',
        end: 'Business Park',
        stops: 10,
        buses: [
            { busNumber: 'B505A', status: 'On Time', delay: 0 },
            { busNumber: 'B505B', status: 'Late', delay: 12 },
            { busNumber: 'B505C', status: 'On Time', delay: 0 }
        ]
    },
    {
        id: 6,
        number: '606',
        start: 'Sports Complex',
        end: 'Downtown',
        stops: 14,
        buses: [
            { busNumber: 'B606A', status: 'On Time', delay: 0 },
            { busNumber: 'B606B', status: 'On Time', delay: 0 }
        ]
    },
    {
        id: 7,
        number: '707',
        start: 'Riverside',
        end: 'Mountain View',
        stops: 18,
        buses: [
            { busNumber: 'B707A', status: 'Late', delay: 20 },
            { busNumber: 'B707B', status: 'On Time', delay: 0 },
            { busNumber: 'B707C', status: 'Late', delay: 8 }
        ]
    },
    {
        id: 8,
        number: '808',
        start: 'Tech Hub',
        end: 'Residential Area',
        stops: 11,
        buses: [
            { busNumber: 'B808A', status: 'On Time', delay: 0 },
            { busNumber: 'B808B', status: 'Late', delay: 6 }
        ]
    },
    {
        id: 9,
        number: '909',
        start: 'Cultural Center',
        end: 'Industrial Zone',
        stops: 13,
        buses: [
            { busNumber: 'B909A', status: 'On Time', delay: 0 },
            { busNumber: 'B909B', status: 'On Time', delay: 0 },
            { busNumber: 'B909C', status: 'Late', delay: 15 }
        ]
    },
    {
        id: 10,
        number: '1010',
        start: 'Suburban Area',
        end: 'City Hall',
        stops: 16,
        buses: [
            { busNumber: 'B1010A', status: 'Late', delay: 9 },
            { busNumber: 'B1010B', status: 'On Time', delay: 0 },
            { busNumber: 'B1010C', status: 'On Time', delay: 0 }
        ]
    }
];

router.get('/', function(req, res, next) {
  res.render('routes', { title: 'Bus Routes', routes: routes });
});

module.exports = router;
