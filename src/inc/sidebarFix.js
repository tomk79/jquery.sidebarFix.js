/**
 * sidebarFix.js (standalone)
 * @author Tomoya Koyanagi <tomk79@gmail.com>
 */
module.exports = function(query, opt){

	const $ = require('jquery');
	const sidebarFix = require('./jquerySidebarFix.js');
	sidebarFix($);

    $(query).sidebarFix( opt );

};
