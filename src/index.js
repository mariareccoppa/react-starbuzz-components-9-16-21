import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './MenuItem';


const menuElement = (
  <div>
    <MenuItem name = 'House Blend' price = {1.49}>A smooth, mild blend of coffees from Mexico, Bolivia and Guatemala.</MenuItem>
    <MenuItem name = 'Mocha Cafe Latte' price = {2.35}>Espresso, steamed milk and chocolate syrup.</MenuItem>
    <MenuItem name = 'Cappuccino' price = {1.89}>A mixture of espresso, steamed milk and foam.</MenuItem>
    <MenuItem name = 'Chai Tea' price = {1.85}>A spicy drink made with black tea, spices, milk and honey.</MenuItem>
  </div>
);

ReactDOM.render(menuElement, document.getElementById('root'));
