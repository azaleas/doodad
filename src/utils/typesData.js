const types = {
    switch: {
        definition: 'Switch (Lights, Doors, etc.)',
        value: false,
    },
    range: {
        definition: 'Range (Curtains, Windows, etc.)',
        value: '0',
    },
    temperature: {
        definition: 'Temperature (Room, Water, Pool etc.)',
        subTypes: {
            room: {
                value: '25',
                degrees: 'C',
            },
            water: {
                value: '25',
                degrees: 'C',
            },
            pool: {
                value: '20',
                degrees: 'C'
            }
        }
    },
    machine: {
        definition: 'Machine (Washing Machine, Dishwasher, etc.)',
        subTypes: {
            washingmachine: {
                value: false,
                mode: "",
            },
            dishwasher: {
                value: false,
                mode: "",
            }
        }
    }
};

export default types;