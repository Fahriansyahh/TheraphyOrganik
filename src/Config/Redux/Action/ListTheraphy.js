import axios from "axios";

export const GetAllToApiList = (setListToApi) => {
  axios
    .get(
      "https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/ListTheraphy/v1/GetAll"
    )
    .then((res) => {
      const data = res.data.data;
      setListToApi(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getByidToApiList = (selectedTheraphy) => {
  axios
    .get(
      `https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/ListTheraphy/v1/getById/${selectedTheraphy}`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteToApi = (toast, a) => {
  axios
    .delete(
      `https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/ListTheraphy/v1/deleted/${a}`
    )
    .then((res) => {
      const title = res.data.response.title;
      toast(`Theraphy ${title} telah di deleted`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((err) => {
      toast("data gagal di deleted");
    });
};
