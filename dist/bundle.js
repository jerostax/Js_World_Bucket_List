!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let o;n.r(t);const r=[{id:1,imagePath:"assets/image_rio.jpg",description:"Vivre à Rio",done:!1,link:"https://bresil.marcovasco.fr/voyage-rio-de-janeiro.html?gclid=Cj0KCQjwj_XpBRCCARIsAItJiuRdV7I3ZG0EKzSg6aud1J5f6mLkyx9R-fBENwkDIC16dvs82cjNt3gaAk3VEALw_wcB",coordinates:{lat:-22.951891,lng:-43.210494}},{id:2,imagePath:"assets/image_new-york.jpg",description:"Visiter New-York",done:!1,link:"https://usa.marcovasco.fr/voyage-new-york.html?gclid=Cj0KCQjwj_XpBRCCARIsAItJiuS6RNcCJKggFX20jzgyPtozxrecvjKY1ehiKFIGApMdXtAE3DW_qBoaAu3MEALw_wcB",coordinates:{lat:40.689217,lng:-74.044547}},{id:3,imagePath:"assets/image_patagonie.jpg",description:"Visiter la Patagonie",done:!1,link:"https://www.directours.com/d/les-ameriques/argentine/patagonie?gclid=Cj0KCQjwj_XpBRCCARIsAItJiuTHENOR1SSr-TMvmHAQWfEM0jdkpxeHNR5Uyh0SS7nin3fWWcG1c9AaAuTBEALw_wcB",coordinates:{lat:-51.011758,lng:-73.475845}}];function i(){r.forEach(function(e){!function(e){new google.maps.Marker({position:e.coordinates,map:o,icon:e.done?"assets/marker-done.png":"assets/marker.png"})}(e)})}window.init=function(){o=new google.maps.Map(document.getElementById("map"),{center:{lat:48.855262,lng:2.346055},zoom:2.5}),i()}}]);
//# sourceMappingURL=bundle.js.map