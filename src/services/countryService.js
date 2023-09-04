import axiosInstance from "../utils/axios-instance";

function getAllCountries() {
    return axiosInstance.get('/all')
        .then((response) => {
            return response.data
        })
        .catch((error => {
            throw error
        }))
}

export {
    getAllCountries
}