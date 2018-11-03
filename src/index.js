import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import doggies from './dogGetter';

const createDogCards = (dogs) => {
  let newString = '';
  dogs.forEach((dog) => {
    newString += `
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">$${dog['add-on-price'].toFixed(0)}</span>
          <span class="card-author subtle"></span>
          <h2 class="card-title">${dog.name}</h2>
          <span class="card-description subtle">${dog.specialSkill}</span>
          <div class="card-read"><span class="subtle">Color</span>${dog.color}</div>
        </div>
        <img src="${dog.gif}" alt="" class="card-media">
      </div>`;
  });
  $('#catdog').html(newString);
};

doggies.getDogs()
  .then((data) => {
    createDogCards(data.data.dogs);
  })
  .catch((error) => {
    console.error(error);
  });

$('#catdog').show();
