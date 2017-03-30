/**
 * Created by Maciek on 18.01.2017.
 */

AboutMeCtrl.$inject = ['elements'];
export default function AboutMeCtrl(elements) {
  var aboutme = this;

  aboutme.info = elements.content;

};