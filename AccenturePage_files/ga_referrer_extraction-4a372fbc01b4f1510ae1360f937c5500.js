function addFirstUTMSourceToDataLayer(){var e=sessionStorage.getItem("first_utm_source");window.dataLayer&&void 0!=e&&window.dataLayer.push({event:"first_utm_source",value:e})}function updateGAWithFirstUTMSource(){var e=sessionStorage.getItem("first_utm_source");void 0!=e&&ga("set","referrer",e)}window.addEventListener("load",function(){if(window.ga){try{var e=window.ga.getAll()[0].b.data.values[":referrer"]}catch(t){return}var r=sessionStorage.getItem("first_utm_source");void 0!=e&&null==r&&sessionStorage.setItem("first_utm_source",e)}addFirstUTMSourceToDataLayer()});