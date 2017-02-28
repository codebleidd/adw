/**
 * Created by Maciek on 18.01.2017.
 */
(function(){
  'use strict';
  define([],
  function () {
    AboutMeCtrl.$inject = ['elements'];
    function AboutMeCtrl(elements) {
      var aboutme = this;

      aboutme.info = elements;

    };
    return AboutMeCtrl;
  });

}());