import Ember from 'ember';
import moment from 'moment';
export function formatUnixTime(params/*, hash*/) {
  let value = params[0] || "";
  let date = value == "" ? "NA" : moment.unix(value).format("HH:MM DD/MM/YYYY") ;
  return date;
}

export default Ember.Helper.helper(formatUnixTime);
