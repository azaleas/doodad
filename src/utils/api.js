const API_STEM = 'https://5961ca8d8492d90011f12d01.mockapi.io/doodad';

const api = {
    fetchRoomsData(){
        let URL = `${API_STEM}/rooms/`;
        return fetch(URL)
            .then((response) => response.json())
            .then((responseJSON) => responseJSON)
            .catch(function(err){
                console.warn("Error in fetchRoomsData", err);
            })
    },

    fetchRoomData(id){
        let URL = `${API_STEM}/rooms/${id}/appliances`;
        return fetch(URL)
            .then((response) => response.json())
            .then((responseJSON) => responseJSON)
            .catch(function(err){
                console.warn("Error in fetchRoomData", err);
            })
    }
};

export default api;