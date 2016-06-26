var JM = {
  // All pages
  common: {
    init: function() {
    }
  },
  home: {
  	init: function() {
  	}
  },
};

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = JM;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');
    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);
