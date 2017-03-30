/**
 * Created by Maciek on 16.01.2017.
 */

HomePageCtrl.$inject = ['elements'];

export default function HomePageCtrl(elements) {
  var home = this;

  home.jumbotron = elements.jumbotron.text;
  home.specialInfos = elements.special_infos.infos;

};
