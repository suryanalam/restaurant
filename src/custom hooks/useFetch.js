import { useContext, useEffect } from "react";
import axios from "axios";
import { CustomContext } from "../contexts/CustomContext";

export const useFetch = (url) => {
  const {setMenuItems} = useContext(CustomContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resData = await axios.get(url);
        console.log("response from api", resData.data.data);

        if (resData.status === 200) {
          setMenuItems(resData.data.data);
        }
        else{
          setMenuItems([]);
        }
      } catch (err) {
        console.log(err,'while fetching data from api');
      }
    };
    fetchData();
  }, [url, setMenuItems]);
};