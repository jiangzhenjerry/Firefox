// ==UserScript==
// @name        Google I'm Feeling Lucky Redirect Workaround
// @version     0.3
// @description Google I'm Feeling Lucky Redirect Workaround
// @include     https://www.google.com/url?*
// ==/UserScript==
(async function() {
	'use strict';
	function parseURI() {
		const url = location.search;
		const query = url.substr(1);
		const result = {};
		query.split("&").forEach(function(part) {
			var item = part.split("=");
			result[item[0]] = decodeURIComponent(item[1]);
		});
		return result;
	}
	var uriParams = parseURI();
	if (!uriParams.iflsig && !uriParams.psig && uriParams.q !== '') {
		location.href = uriParams.q;
	}
})();