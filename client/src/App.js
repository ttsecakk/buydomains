import { useEffect } from "react";
import { namecheapApi } from "./api/namecheap";
import axios from "axios";
import Namecheap from "./components/Namecheap/Namecheap";

function App() {
  const params = new URLSearchParams();
  console.log(params.toString());

  // useEffect(() => {
  //   namecheapApi.get(`?${params}`).then((response) => {
  //     console.log(response);
  //   });
  // }, [params]);

  return (
    <div className="App">
      <Namecheap />
    </div>
  );
}

export default App;
