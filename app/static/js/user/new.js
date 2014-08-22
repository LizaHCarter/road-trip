/* global geocode */

(function(){
  'use strict';

  $(document).ready(function(){
    $('button[type=submit]').click(addTrip);
  });

  function addTrip(e){
    var begin = $('#begin').val();
    geocode(begin, function(name, lat, lng){
      $('#begin').val(name);
      $('#latA').val(lat);
      $('#lngA').val(lng);

      $('form').submit();
    });

    var end = $('#end').val();
    geocode(end, function(name, lat, lng){
      $('#end').val(name);
      $('#latB').val(lat);
      $('#lngB').val(lng);

      $('form').submit();
    });
    e.preventDefault();
  }
})();
