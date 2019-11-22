import { MarsPhoto, DailyPhoto, AsteroidFinder } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework
(async () => {
  let marsphoto = new MarsPhoto();
  const response = await marsphoto.getMarsPhoto();
  getElements(response);
})();

const getElements = function(response) {
  $('#marsPhotos').attr("src", response.photos[4].img_src);
};




(async () => {
  let dailyPhoto = new DailyPhoto();
  const response2 = await dailyPhoto.getDailyPhoto();
  getElements2(response2);
})();

const getElements2 = function(response2) {
  $('#dailyDesc').text(response2.explanation);
  $('#dailyPhotos').attr('src', response2.url);
};








$(document).ready(function(){
  $('form#asteroid1').submit(function(event){
    let startDayInput = parseInt($('input#startDay').val());
    let startMonthInput = parseInt($('input#startMonth').val());
    let startYearInput = parseInt($('input#startYear').val());
    let endDayInput = parseInt($('input#endDay').val());
    let endMonthInput = parseInt($('input#endMonth').val());
    let endYearInput = parseInt($('input#endYear').val());
    event.preventDefault();
    (async () => {
      let asteroidFinder = new AsteroidFinder();
      const response3 = await asteroidFinder.getAsteroidFinder(startYearInput, startMonthInput, startDayInput, endYearInput, endMonthInput, endDayInput);
      getElements3(response3);
    })();

    const getElements3 = function(response3) {
      if (response3.element_count) {
        $('.asteroidOutput').show();
        $('#asteroid').text(response3.element_count);
      } else {
        $('#asteroid').text(response3.error_message);
      }
    };

  });
});
