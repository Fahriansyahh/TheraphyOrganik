import axios from 'axios';

export const SignInUserApi = (FullName, Password, setCondition, setValue, toast) => {
    axios.get(`http://localhost:4000/User/v1/Auth?FullName=${FullName}&Password=${Password}`).then(res => {
        toast(`Hallo ${res.data.data.User.FullName} Anda Telah login`)
        const id = res.data.data._id
        localStorage.setItem('IdUser', `${id}`);
        setCondition(true)
        setTimeout(function () {
            window.location.reload()
        }, 2000)
    }).catch(err => {
        setValue(err.response.data.data.err)
        setCondition(false)
    })
}
export const SignUpUserApi = (data, setCondition, setErrors, toast) => {
    axios.post("http://localhost:4000/User/v1/Created", data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }).then(response => {
        setCondition(true)
        toast("akun anda berhasil di buat")
        setTimeout(function () {
            window.location.reload()
        }, 1000)
    }).catch(err => {
        setErrors(err.response.data.data.err)
        setCondition(false)
    })
}

export const PesananApi = (data, setError, toast) => {
    const Id = localStorage.getItem("IdUser")
    axios.put(`http://localhost:4000/User/v1/updatePesan/${Id}`, data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }).then(() => {
        setError(false)
        toast("Check gmail Anda Untuk Pembayaran ini Perlu Proses Beberapa Menit")
    }).catch(err => {
        setError(false)
        console.log(err)
    })
}

export const GetIdUserApi = (setData) => {
    const id = localStorage.getItem("IdUser")
    axios.get(`http://localhost:4000/User/v1/GetById/${id}`).then(res => {
        setData(res.data.data.User)
    }).catch(err => {
        console.log(err)
    })
}

export const UpdateUserApi = (update, setCheck, setError, toast) => {
    const Id = localStorage.getItem("IdUser")
    axios.put(`http://localhost:4000/User/v1/updateUser/${Id}`, update, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }).then((res) => {
        toast("Update Berhasil !")
        setCheck(true)
    }).catch(err => {
        setCheck(false)
        console.log(err)
        setError(err.response.data.data.err)
    })

}