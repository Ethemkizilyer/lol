import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CaardDetails.scss";
import { Tooltip } from "@mui/material";

const CardDetails = () => {
  const { id }: { id?: string | undefined } = useParams();
  console.log(id);
  const [data, setData] = useState([]);

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
      console.log(Object.values(results));
      return results;
    } catch (error) {
      console.log(error);
    }
  };
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  console.log(data[0]);
  return (
    <div className="home">
      <div className="card_details">
        <div
          className="card_details_main"
          style={{
            backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data[0]?.id}_0.jpg')`,
          }}
        >
          <div className="card_details_main_title">
            <h2>{data[0]?.title}</h2>
            <h1>{data[0]?.id}</h1>
            <div className="card_details_main_title_tags">
              {data[0]?.tags.map((tag: string) => {
                return (
                  <Tooltip title={`${tag}`} arrow key={`${tag}`}>
                    <img
                      src={`/tags/${tag}.png`}
                      alt={`${id + tag}`}
                      key={`${id + tag}`}
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
        <div className="card_details_info">
          <div className="card_details_info_lore">
            <h3>LORE</h3>
            <p className="card_details_info_lore_p">
              {!seeMore ? data[0]?.blurb : data[0]?.lore}
              <button onClick={handleSeeMore}>
                {!seeMore ? "SEE MORE" : "SEE LESS"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
