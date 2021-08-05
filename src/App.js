import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allcategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allcategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItem(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Food-Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
