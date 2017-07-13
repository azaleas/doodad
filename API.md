#### To mock the api, [mockAPI](http://www.mockapi.io) was used.

----------
## Home

### List Home Appliances

 * URL: http://5961ca8d8492d90011f12d01.mockapi.io/doodad/home
 * HTTP Method: GET
 
#### Example Response

    [
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
      },
      ...
    ]

### Update home appliances

 * http://5961ca8d8492d90011f12d01.mockapi.io/doodad/home/\<applianceId\>
 * HTTP Method: Put
 * headers: {"content-type": "application/json"}
 
#### Example Request

    {
        "data": {
            "type": "switch",
            "value": true
        }
    }
    
#### Example Response

    {
        "id": "1",
        "createdAt": 1499588798,
        "name": "Home Alarm",
        "data": {
            "type": "switch",
            "value": true
        }
    }   

### Create Home Appliance

 * URL: http://5961ca8d8492d90011f12d01.mockapi.io/doodad/home
 * HTTP Method: POST
 * headers: {"content-type": "application/json"}
 
#### Example Request

    {
        "name": "Home Alarm"
        "data": {
            "type": "switch",
            "value": false
        }
    }
    
#### Example Response

    {
        "id": "1",
        "createdAt": 1499588798,
        "name": "Home Alarm",
        "data": {
            "type": "switch",
            "value": false
        }
    }   

## Rooms

### List Rooms

 * URL: http://5961ca8d8492d90011f12d01.mockapi.io/doodad/rooms
 * HTTP Method: GET
 
#### Example Response

    [
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
      },
      ...
    ]

### Create Room

 * URL: http://5961ca8d8492d90011f12d01.mockapi.io/doodad/rooms
 * HTTP Method: POST
 * headers: {"content-type": "application/json"}
 
#### Example Request

    {
        "name": "Living Room"
    }
    
#### Example Response

    {
        "id": "1",
        "createdAt": 1499588798,
        "name": "Living Room",
    }   
    
### List Room Appliances

 * URL: http://5961ca8d8492d90011f12d01.mockapi.io/doodad/rooms/\<roomId\>/appliances
 * HTTP Method: GET
 
#### Example Response

    [
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
        },
      ...
    ]

### Update room appliances

 * http://5961ca8d8492d90011f12d01.mockapi.io/doodad/rooms/\<roomId\>/appliances/\<applianceId\>
 * HTTP Method: Put
 * headers: {"content-type": "application/json"}
 
#### Example Request

    {
        "data": {
            "type": "switch",
            "value": true
        }
    }
    
#### Example Response

    {
        "id": "1",
        "roomId": "1",
        "createdAt": 1499582826,
        "name": "Lights",
        "data": {
            "type": "switch",
            "value": true
        }
    }   

### Create Room Appliance

 * URL: http://5961ca8d8492d90011f12d01.mockapi.io/doodad/rooms/\<roomId\>
 * HTTP Method: POST
 * headers: {"content-type": "application/json"}
 
#### Example Request

    {
        "name": "Lights"
        "data": {
            "type": "switch",
            "value": false
        }
    }
    
#### Example Response

    {
        "id": "1",
        "roomId": "1",
        "createdAt": 1499582826,
        "name": "Lights",
        "data": {
            "type": "switch",
            "value": false
        }
    }  