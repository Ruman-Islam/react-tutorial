import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import Count1 from "./components/Count1";
import Count2 from "./components/Count2";
import Title from "./components/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleUpdateCount1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const handleUpdateCount2 = useCallback(() => {
    setCount2((prev) => prev + 5);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i += 1;
    }

    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <span>{isEven ? "Even" : "Odd"}</span>
      <Count1 count={count1} title="Count 1" />
      <br />
      <Button onUpdateCount={handleUpdateCount1}>Increase count by 1</Button>
      <br />
      <br />
      <Count2 count={count2} title="Count 2" />
      <br />
      <Button onUpdateCount={handleUpdateCount2}>Increase count by 5</Button>
      <br />
      <br />
    </>
  );
}

export default App;
