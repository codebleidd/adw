/**
 * Created by Maciek on 16.01.2017.
 */

PublicCtrl.$inject = ['credentials'];
function PublicCtrl(credentials) {
  var $ctrl = this;
  $ctrl.address = credentials.address;
  $ctrl.contact = credentials.contact;
};
export default PublicCtrl;