// (function(define){
//   'use strict';
//
//   define([],
//   function () {
//     return {
//       templateUrl: 'src/app/public/aboutme/aboutme.elem.template.html',
//       bindings: {
//         info: '<'
//       }
//     }
//   });
//
// }(define));
var AboutmeElem = {
  template: require('Public/aboutme/aboutme.elem.template.html'),
  bindings: {
    info: '<'
  };
export default AboutmeElem;