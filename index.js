'use strict';

$('#search').click(function getRandomDrink() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
})


function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').empty();
  for (let i = 0; i < responseJson.drinks.length; i++){
    $('.results').append(
    `<php><h3>${responseJson.drinks[i].strDrink}</p>
    <img src="${responseJson.drinks[i].strDrinkThumb}/preview">
    <p>Category: ${responseJson.drinks[i].strIBA}</p>
    <p>Ingredients:
    ${responseJson.drinks[i].strMeasure1} ${responseJson.drinks[i].strIngredient1},  ${responseJson.drinks[i].strMeasure2} ${responseJson.drinks[i].strIngredient2},  ${responseJson.drinks[i].strMeasure3} ${responseJson.drinks[i].strIngredient3},  ${responseJson.drinks[i].strMeasure4} ${responseJson.drinks[i].strIngredient4}</p>
    <p>${responseJson.drinks[i].strInstructions}</p>
    </ph>`
  )};
  $('.results').removeClass('hidden');
};

/*function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status === 'success') {
    $('.notfound').hide();
    $('.results').show();
    $('.results, .results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`)
  }
  else {
    handleNot(responseJson);
  }
}*/



function handleNot(responseJson) {
  $('.results').hide();
  $('.notfound').show();
  $('.notfound').html(
    `<h1> ${responseJson.message}</h1>`);
}

function watchForm() {
  $('search').submit(event => {
    event.preventDefault();
    let userInput = $('.breed').val();
    getRandomDrink();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});