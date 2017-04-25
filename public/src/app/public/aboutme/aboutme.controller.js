/**
 * Created by Maciek on 18.01.2017.
 */

AboutMeCtrl.$inject = ['aboutmeElems'];
function AboutMeCtrl(aboutmeElems) {
  var aboutme = this;
  console.log(aboutmeElems.content[0].bio);
  aboutme.info = aboutmeElems.content;
};
export default AboutMeCtrl;