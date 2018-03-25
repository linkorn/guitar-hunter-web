// import 'event-source-polyfill';
import from from 'core-js/library/fn/array/from';
import assign from 'core-js/library/fn/object/assign';
import startsWith from 'core-js/library/fn/string/virtual/starts-with';
import FormData from 'formdata-polyfill';

Array.from = from;
Object.assign = assign;
String.prototype.startsWith = startsWith;
