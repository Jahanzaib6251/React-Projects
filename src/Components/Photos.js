import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
const Photos = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState('');
    const BaseApi = "https://api.unsplash.com/photos/?client_id=PnZ559yFk3ZGfi5XB5O5BkpKG5eKEV9DFfgVCQQ5GMM";
    
      // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get(BaseApi);
      setMyData(res.data);
      console.log("This is my data", res.data)
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Photos</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((e) => {
          const { id } = e;
          return (
            <div key={id} className="card">
                <img src={e.urls.thumb} alt="unsplash images" />
                <h2>{e.slug}</h2>
                <hr/>
                <h4>{e.description}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Photos