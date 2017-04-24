/**
 * Created by Maciek on 18.01.2017.
 */

AboutMeCtrl.$inject = ['aboutmeElmes'];

export default AboutMeCtrl;

function AboutMeCtrl(aboutmeElmes) {
  var aboutme = this;
  aboutme.info = aboutmeElmes.content;
};