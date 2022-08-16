import React from "react";

const Menu1 = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, desc, price } = item;
        return (
          <article key={id} >
           
            <div >
              <header>
                <h4>{title}</h4>
                <h4 >${price}</h4>
              </header>
              <p >{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu1;