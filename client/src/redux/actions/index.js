import axios from 'axios';

export function getMaterias () {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/materias");
        return dispatch ({
            type: "GET_MATERIAS",
            payload: json.data
        })
    }
}