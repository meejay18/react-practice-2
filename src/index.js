import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1
      // style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 dishes to choose from. All from our
            stone oven, all organic , all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We are currently working on the menu come back later </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients=" Tomato mozarella spinach and ricotta cheese "
        photoName=" pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza funghi"
        ingredients="garlic lemmon chicken and tomato"
        photoName="pizzas/funghi.jpg"
        price={20}
      />
      <Pizza
        name="Pizza Salamino "
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
        soldOut={true}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
        soldOut={false}
      /> */}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients} </p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span> {pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  console.log(hour);
  console.log(openHour);
  console.log(closeHour);

  // if (isOpen) {
  //   alert("We are currently open");
  // } else {
  //   alert("Sorry we are closed");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are open from {openHour}:00 to {closeHour}:00 Thank you😇😇❤️❤️
        </p>
      )}
    </footer>
  );
};

const Order = function ({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are currently from {openHour} to {closeHour}.00 Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;
