import { useEffect } from "react";
import { useLocation } from "react-router";

// Composant permettant de lors de la navigation d'un composant à l'autre de remettre la navigation au top de la page pour éviter d'arriver
// sur les pages en bas (react prend en compte la même position lors de la navigation)
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;