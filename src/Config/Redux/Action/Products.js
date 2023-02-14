import axios from 'axios';
export const ApiProductsGetQuery = (queryPage, setPageNum, setProject) => {
    axios.get(`http://localhost:4000/Products/v1/getAll?page=${queryPage}&toPage=10`)
        .then(res => {
            const data = res.data
            setPageNum(data.pageNum)
            setProject(data.data)
        })
        .catch(err => console.log(err))
}
export const ApiProductsGetId = (id, setModal) => {
    axios.get(`http://localhost:4000/Products/v1/getByid/${id}`).then(res => {
        const dataModal = res.data.Products.Products
        setModal(dataModal)
    }).catch(err => {
        console.log(err)
    })
}

export const ApiKategory = (setKategory) => {
    axios.get("http://localhost:4000/Products/v1/KategoryAll")
        .then(res => {
            const data = res.data.data
            setKategory(data)
        }).catch(err => {
            console.log(err)
        })
}

export const ApiKategoryGet = (KategoryId, queryPage, setPageNum, setProject) => {
    axios.get(`http://localhost:4000/Products/v1/kategory/${KategoryId}?page=${queryPage}&toPage=10`)
        .then(res => {
            const data = res.data
            setPageNum(data.pageNum)
            setProject(data.data)
        }).catch(err => {
            console.log(err)
        })
}