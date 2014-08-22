/* global geocode */

(function(){
  'use strict';

  $(document).ready(function(){
    $('button[type=submit]').click(addTrip);
  });

  function addTrip(e){
    var begin = $('#begin').val(),
        end   = $('#end').val();
    geocode(begin, function(begin, latA, lngA){
      geocode(end, function(end, latB, lngB){
        $('#begin').val(begin);
        $('#latA').val(latA);
        $('#lngA').val(lngA);
        $('#end').val(end);
        $('#latB').val(latB);
        $('#lngB').val(lngB);

        $('form').submit();
      });
    });

    e.preventDefault();
  }
})();
