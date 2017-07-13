**Doodad - Smart Home Control Panel Demo**
----------

Built with:

 - **React**
 - **react-router** (for routing)
 - **axios** (for API interaction)
 - **Semantic UI** (for fast prototyping)

----------

#### Local Setup:

 - Clone or download (and extract the zip) the project.
 - Run **npm install** in root directory (where package.json is located) to install project dependencies. It might take some time to install all the node dependencies, so keep it calm and cool.
 - Run **npm start** to start the local development server.
 - To create a build version of the app, run **npm run build**. This will create a build folder, ready for deployment.
 - To run the tests, run **npm test**

#### Constraints & User Stories:

 Create a Home Control Panel Demo where user can:

 - Update home appliance values
 - Create new home appliances
 - Update room appliance values
 - Create new room appliances
 - Create new rooms 

The solution:

 - has to be *extensible* (there might be many rooms, with different numbers and sets of appliances)
 - must be documented, so that additional controllers/components that react to events can be created in the future;
 - must have a HTTP-based API interaction. For example, the heating component retrieves the current temperature from the `server` and also sends the desired one back to the `server` via API.
 - can use a static file with data for simplicity or mock the server data responses. 
 - can use vanilla JS or any JS framework;
 - will be viewed in 2 major browsers;

#### App Structure:

App was built with React and **create-react-app** cli. The root component for the app is 'App' Container. It's responsible to render the global 'Header' Component and routed components. Routing for the app is provided by 'React Router' module. 

'Header' Component is a global, which has a navigation menu and 'add' button, with options to create new room, room appliance or home appliance. These options change, depending on the location in the App. For example, 'add new room appliance' is only visible when user visits the individual room.

The 'Main' Component renders Home and Rooms blocks. These take the user to home and rooms routes respectively. 

In 'Home' Container, all home appliances (outer appliances) are fetched. Then, the data fetched is passed to 'ApplianceComponent' to render. 

In 'Rooms' Container an API call is made to fetch all the rooms data. The response data is passed to 'RoomsComponent' to render the list of rooms available. This list is created as links, which take the user to individual room appliances. The routing for this links render 'Room' Container, which, when rendered, fetches individual room appliances from the API. Then, the data fetched is passed to 'ApplianceComponent' to render.

'ApplianceComponent' is a stateless(presentation only) component. Depending on props received from its parent, it selects which appliance component needs to be rendered. It also acts as a bridge between the parent component(that will update the appliance data) and the base appliance component, which passes the data, that needs to be updated, to a parent component.

Appliance components(located at /src/components/appliances) are the base components. For example, for appliance that uses on/off (open/close) functionality, the 'SwitchComponent' is used. Some base components, like 'TemperatureComponent' and 'MachineComponent' receive additional props, depending on appliance functionality. For example, 'TemperatureComponent' can be used to control Room and Water temperatures. As an additional props, it receives the min and max temperature values, depending on what needs to be controlled.

The base appliance components send to 'ApplianceComponent' the data that needs to be updated, along with applianceId and roomId(if used for rooms).

The data structure for the appliances has a 'data' property, which is an object:

```
data: {
    type: "pool-temperature",
    value: "37",
    degrees: "C"
}
```
So, depending on the type value, a base appliance component is chosen, and to update the appliance, this data object is sent back to API with updated values and only type property remains untouched.

Adding new rooms and appliances is done via header dropdown element.

Creating new rooms is done via 'CreateRoomContainer', which collects the form data and sends the POST request to the Server. After a successful response, user is redirected to newly created room to add appliances.

Creating new appliances is done via 'CreateApplianceContainer'. It is used to create both home and room appliances and depending on the option selected, it uses certain props, like roomId. This container is called via 'CreateHomeApplianceComponent' and 'CreateRoomApplianceComponent' respectively (located at components/create_appliance). Both these components are stateless.

#### Base Appliances:

Depending on the server data, appliance components are created in '/src/components/appliances' folder. Appliances share the same header, which renders appliance title and current status. Both of these are sent as props from the base appliance. 

All base appliances are presented as Modal boxes, which gets shown once the user clicks on an appliance. 

Currently, there are 4 base appliances created: Switch, Range, Temperature and Machine. The last two receive additional props, depending on which type of appliance will be using them.

Depending on the needs and new appliances sent by the server, new base appliances can be created in this folder ***(copying and modifying an existing base appliance will be better)***. Base appliances share the same design structure and logic. They present the appliance data (value and modes) and collect the updated values and create the new data object with these values, to send to the server.

To create appliances for home(outside) or room(inside),  'typesData' file was created (located at '/src/utils' folder). This file presents the appliance description and default values. So, when user clicks on 'add new>room appliance', user is presented with a modal form, which gets it's data from 'typesData' file. Appliance types and subtypes are presented as dropdown lists. Once user fills in the form, a data object is created which contains the title of the appliance and the data properties(like type and value of appliance). This object is sent to the server. 

Both create appliances and rooms have a client side form validation.

----------

#### Tests:
Located at '/src/tests' folder. This folder tries to keep the same file structure for containers and component. API calls were mocked with Jest. 'mockData' file contains the possible responses from the server.

App was tested on browsers: 
 - Chrome
 - Firefox
 - YandexBrowser
 - Opera