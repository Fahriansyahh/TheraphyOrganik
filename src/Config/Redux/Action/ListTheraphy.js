import axios from "axios"

export const GetAllToApiList = (setListToApi) => {
    axios.get("http://localhost:4000/ListTheraphy/v1/GetAll").then(res => {
        const data = res.data.data
        setListToApi(data)
    }).catch(err => {
        console.log(err)
    })
}

export const getByidToApiList = (selectedTheraphy) => {
    axios.get(`http://localhost:4000/ListTheraphy/v1/getById/${selectedTheraphy}`).then((res) => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}