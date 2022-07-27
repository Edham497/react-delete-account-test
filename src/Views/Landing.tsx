import { useMemo, useState } from "react";

const Landing = () => {
  const [index, setIndex] = useState<number>(0);
  const powIndex = useMemo(() => index * index, [index]);

  const increment = () => {
    setIndex((i) => i + 1);
  };

  return (
    <div className="App">
      <div>
        <label>Index</label>
        <label>{index}</label>
      </div>
      <div>
        <label>PowIndex</label>
        <label>{powIndex}</label>
      </div>
      <button onClick={increment}>add</button>
    </div>
  );
};
export default Landing;
