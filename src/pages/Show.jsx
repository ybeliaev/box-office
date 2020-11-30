import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

const Show = () => {
  const { id } = useParams(); // this is {id: ..} from path="/show/:id" after ..show/

  const [show, setShow] = useState(null);

  //https://www.tvmaze.com/api#show-main-information
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`).then((results) => {
      setShow(results);
    });
  }, [id]);
  console.log("show: ", show);
  return <div>This is show page</div>;
};

export default Show;
