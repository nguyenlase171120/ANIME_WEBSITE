import { useState, useEfect } from "react";
import Hotmovie_children from "./Hotmovie_children";

function Hotmovie_container() {
  const [listMovie, setListMovie] = useState([]);

  return (
    <div className="ml-[30px]">
      <Hotmovie_children />
    </div>
  );
}

export default Hotmovie_container;
