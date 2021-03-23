/**
 * sidebarFix.js
 * @author Tomoya Koyanagi <tomk79@gmail.com>
 */
(function(){
	const $ = require('jquery');
	const sidebarFix = require('./inc/sidebarFix.js');
	sidebarFix($);
	window.sidebarFix = function( query, opt ){
		$(query).sidebarFix( opt );
	}
})();
