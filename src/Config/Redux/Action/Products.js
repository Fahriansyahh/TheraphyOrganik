import axios from "axios";
export const ApiProductsGetQuery = (queryPage, setPageNum, setProject) => {
  axios
    .get(
      `https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/Products/v1/getAll?page=${queryPage}&toPage=10`
    )
    .then((res) => {
      const data = res.data;
      setPageNum(data.pageNum);
      setProject(data.data);
    })
    .catch((err) => console.log(err));
};
export const ApiProductsGetId = (id, setModal) => {
  axios
    .get(
      `https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/Products/v1/getByid/${id}`
    )
    .then((res) => {
      const dataModal = res.data.Products.Products;
      setModal(dataModal);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const ApiKategory = (setKategory) => {
  axios
    .get(
      "https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/Products/v1/KategoryAll"
    )
    .then((res) => {
      const data = res.data.data;
      setKategory(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const ApiKategoryGet = (
  KategoryId,
  queryPage,
  setPageNum,
  setProject
) => {
  axios
    .get(
      `https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/Products/v1/kategory/${KategoryId}?page=${queryPage}&toPage=10`
    )
    .then((res) => {
      const data = res.data;
      setPageNum(data.pageNum);
      setProject(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
