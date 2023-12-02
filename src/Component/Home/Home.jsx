import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handlerBtnSelect = (actor) => {
    const isExist = selectedActors.find((item) => item.id == actor.id);
    console.log(actor);
    let cost = actor.salary;
    if (isExist) {
      alert("Already selected");
    } else {
      selectedActors.forEach((item) => {
        cost = cost + item.salary;
      });
    }
  };

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-2 gap-3">
        {allActors.map((actor) => (
          <div key={actor.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded-full"
                src={actor.image}
                alt={actor.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{actor.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <p>Salary: ${actor.salary}</p>
                <p>Role: {actor.role}</p>
              </div>
              <button
                onClick={() => handlerBtnSelect(actor)}
                className="btn btn-success"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Cart selectedActors={selectedActors}></Cart>
      </div>
    </div>
  );
};

export default Home;
