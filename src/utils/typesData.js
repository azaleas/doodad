/*
    This data is used to create the 
    options for create appliance form.
    It uses base appliances as properties.

    So, if new base appliance gets created, 
    it has to be added here as a property with 
    a definition and default values.

    Some components are used for multiple appliances.
    Like base temperature appliance is used for room temperature
    and water temperature. This sub types must be specified here as well.
    
*/

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