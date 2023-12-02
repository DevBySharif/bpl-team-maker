const Cart = ({ selectedActors }) => {
  console.log(selectedActors);
  return (
    <div>
      <h3 className="text-3xl font-bold text-white">
        All Actors: {selectedActors.length}
      </h3>
      <h4>Total cost : {selectedActors}</h4>
    </div>
  );
};

export default Cart;
