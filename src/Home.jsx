import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://68e4ced08e116898997cfcc8.mockapi.io/Example")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
};
export default Home;
