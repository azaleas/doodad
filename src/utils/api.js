import axios from 'axios';

const API_STEM = 'https://5961ca8d8492d90011f12d01.mockapi.io/doodad';

const config = {
    headers: {"content-type": "application/json"},
};

const api = {
    
    fetchHomeAppliances(){
        const URL = `${API_STEM}/home`;
        return axios.get(URL)
            .then((response) => response.data)
            .catch(function(err){
                console.warn("Error in fetchHomeAppliances", err);
            })
    },

    fetchRoomsData(){
        const URL = `${API_STEM}/rooms/`;
        return axios.get(URL)
            .then((response) => response.data)
            .catch(function(err){
                console.warn("Error in fetchRoomsData", err);
            })
    },

    fetchRoomData(id){
        const URL = `${API_STEM}/rooms/${id}`;
        return axios.get(URL)
            .then((response) => response.data)
            .catch(function(err){
                console.warn("Error in fetchRoomData", err);
            })
    },


    fetchRoomApplianceData(id){
        const URL = `${API_STEM}/rooms/${id}/appliances`;
        return axios.get(URL)
            .then((response) => response.data)
            .catch(function(err){
                console.warn("Error in fetchRoomApplianceData", err);
            })
    },

    updateAppliance(data, applianceId, roomId){
        const URL = `${API_STEM}/rooms/${roomId}/appliances/${applianceId}`;
        
        return axios.put(
                URL,
                {
                    "data": data,
                },
                config
            )
        .then((response) => response.data)
        .catch(function(err){
            console.warn("Error in fetchRoomData", err);
        })      
    },

    updateHomeAppliance(data, applianceId){
        
        const URL = `${API_STEM}/home/${applianceId}`;
        
        return axios.put(
                URL,
                {
                    "data": data,
                },
                config
            )
        .then((response) => response.data)
        .catch(function(err){
            console.warn("Error in updateHomeAppliance", err);
        })      
    },

    createRoom(title){
        const URL = `${API_STEM}/rooms`;
        
        return axios.post(
                URL,
                {
                    "name": title,
                },
                config
            )
        .then((response) => response.data)
        .catch(function(err){
            console.warn("Error in createRoom", err);
        })      
    },

    createHomeAppliance(data){
        const URL = `${API_STEM}/home`;
        
        return axios.post(
                URL,
                {
                    "name": data.name,
                    "data": data.data,
                },
                config
            )
        .then((response) => response.data)
        .catch(function(err){
            console.warn("Error in createHomeAppliance", err);
        })      
    }
};

export default api;