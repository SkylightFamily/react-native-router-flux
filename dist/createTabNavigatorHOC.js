Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNavigation=require("react-navigation");var _default=function _default(NavigationView){return function(routeConfigs){var navigationConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var router=(0,_reactNavigation.TabRouter)(routeConfigs,navigationConfig);return(0,_reactNavigation.createNavigator)(NavigationView,router,navigationConfig);};};exports.default=_default;