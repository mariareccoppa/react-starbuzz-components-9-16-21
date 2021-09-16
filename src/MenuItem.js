import React from 'react';

function MenuItem(props) {
  // Copy/paste what appears in one of the menu elements, replacing name1 with props.name, price1 with props.price, and description with props.children (children is the content of the HTML element, i.e., what appears between the open and closing tags, here it'll be the description appearing between the <p> and </p>)
  return (  
  <div>
  <h2>
    {props.name}, $ {props.price}
    </h2>
    <p>{props.children}</p>
  </div>
  );
  }


export default MenuItem;
