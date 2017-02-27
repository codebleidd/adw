/**
 * Created by Maciek on 16.01.2017.
 */
(function (define) {
  'use strict';

  define([],
    function () {
    HomePageCtrl.$inject = ['elements'];
    function HomePageCtrl(elements) {
      var home = this;

      home.jumbotron = elements.jumbotron.text;
      home.specialInfos = elements.special_infos.infos;
      console.log(home.specialInfos[0].content);

    };

    return HomePageCtrl;

    });

}(define));