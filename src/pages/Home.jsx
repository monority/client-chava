import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { state } = location;
  const [reload, setReload] = useState(state?.reload);

  const checkReload = () => {
    if (reload) {
      window.location.reload();
      setReload(false);
    }
  };

  useEffect(() => {
    checkReload();
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="wraps">

        </div>
      </div>
    </div>
  );
};

export default Home;
