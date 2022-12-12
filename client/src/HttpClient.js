import axios from "axios";

// Isso é somente uma instância pra usar o Axios enviando os Cookies junto!
export default axios.create({
    withCredentials: true,
  });