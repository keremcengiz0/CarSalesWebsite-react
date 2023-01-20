import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdvertDetail = () => {
  const { advertId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    axios
      .get(`/adverts/${advertId}`)
      .then((response) => {
        const { advertDto } = response.data;
        setIsLoaded(true);
        setAdvert(advertDto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {advert && (
        <>
          <h1>{advert.title}</h1>
          <p>{advert.description}</p>
          <img src={advert.images[0].imageUrl} alt={advert.title} />
          ...
        </>
      )}
    </div>
  );
};

export default AdvertDetail;
