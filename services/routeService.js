// This is a mock service. In a real application, this would likely fetch data from a database.
module.exports = {
  getRouteData: function() {
    return [
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
      // Add more routes as needed
    ];
  }
};
