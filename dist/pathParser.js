Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.matchPath=void 0;var _pathToRegexp=_interopRequireDefault(require("path-to-regexp"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _iterableToArray(iter){if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){if(!((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var compilePathToRegex=function compilePathToRegex(path){var keys=[];var re=(0,_pathToRegexp.default)(path,keys);return{re:re,keys:keys};};var matchPath=function matchPath(path,url){var _url$split=url.split('?'),_url$split2=_slicedToArray(_url$split,1),urlCleaned=_url$split2[0];var urlToMatch=!urlCleaned.endsWith('/')?urlCleaned+"/":urlCleaned;var _compilePathToRegex=compilePathToRegex(path),re=_compilePathToRegex.re,keys=_compilePathToRegex.keys;var match=re.exec(urlToMatch);if(!match){return null;}var _match=_toArray(match),compiledUrl=_match[0],values=_match.slice(1);if(urlToMatch!==compiledUrl){return null;}var params=keys.reduce(function(acc,key,index){return _extends({},acc,_defineProperty({},key.name,values[index]));},{});return{path:path,params:params};};exports.matchPath=matchPath;var pathParser=function pathParser(url){var possibleMatchingpaths=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];return possibleMatchingpaths.map(function(path){return matchPath(path,url);}).find(function(obj){return obj;});};var _default=pathParser;exports.default=_default;