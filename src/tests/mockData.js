const mockData = {
    homeData: [
      {
        "id": "1",
        "createdAt": 1499588798,
        "name": "Home Alarm",
        "data": {
          "type": "switch",
          "value": false
        }
      },
      {
        "id": "2",
        "createdAt": 1499588738,
        "name": "Swimming Pool Temperature",
        "data": {
          "type": "pool-temperature",
          "value": "93",
          "degrees": "F"
        }
      },
      {
        "id": "3",
        "createdAt": 1499588678,
        "name": "Swimming Pool Cover",
        "data": {
          "type": "switch",
          "value": false
        }
      }
    ],

    updateHomeData: {
        "id": "1",
        "createdAt": 1499588798,
        "name": "Home Alarm",
        "data": {
            "type": "switch",
            "value": true
        }
    },

    roomsData: [
      {
        "id": "1",
        "createdAt": 1499582838,
        "name": "Living Room"
      },
      {
        "id": "2",
        "createdAt": 1499582778,
        "name": "Guest Room"
      },
      {
        "id": "3",
        "createdAt": 1499582718,
        "name": "Parent Bedroom"
      }
    ]
};

export default mockData;