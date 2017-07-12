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
    ],

    roomApplianceData: [
        {
            id: "1",
            roomId: "1",
            createdAt: 1499582826,
            name: "Lights",
            data: {
                type: "switch",
                value: true
            },
            roomInfo: {
                id: "1",
                createdAt: 1499582838,
                name: "Living Room"
            }
        },
        {
            id: "2",
            roomId: "1",
            createdAt: 1499582766,
            name: "Window 1",
            data: {
                type: "range",
                value: 30
            },
            roomInfo: {
                id: "1",
                createdAt: 1499582838,
                name: "Living Room"
            }
        }
    ],

    applianceUpdateData: {
        "id": "1",
        "roomId": "1",
        "createdAt": 1499582826,
        "name": "Lights",
        "data": {
            "type": "switch",
            "value": false
        }
    },

    applianceRangeData: {
        id: "2",
        roomId: "1",
        createdAt: 1499582766,
        name: "Window 1",
        data: {
            type: "range",
            value: 30
        }
    },

    applianceTemperatureData: {
        id: "6",
        roomId: "1",
        createdAt: 1499582526,
        name: "Room Temperature",
        data: {
            type: "room-temperature",
            value: "25",
            degrees: "C"
        }
    },

    applianceMachineData: {
        id: "38",
        roomId: "8",
        createdAt: 1499581367,
        name: "Washing Machine",
        data: {
            type: "washingmachine-switch",
            value: true,
            mode: "eco"
        }
    },
};

export default mockData;