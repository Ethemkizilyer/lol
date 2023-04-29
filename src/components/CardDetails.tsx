import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id }: { id?: string | undefined } = useParams();
  console.log(id);
  const [data,setData]= useState([])

  useEffect(() => {
    getChampData(id);
    // console.log(data[0].title)
  }, []);

  const getChampData = async (id: string | undefined) => {
    try {
      const response = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${id}.json`
      );
      const results = await response.data.data;
      setData(Object.values(results));
      console.log(Object.values(results))
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  return <div>
sdf
  </div>;
};

export default CardDetails;
