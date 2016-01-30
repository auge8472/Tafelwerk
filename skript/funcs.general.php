<?php

/**
 * checks if a client accepts XML or not
 *
 * @return string
 */
function getHttpAccept() {
	if (!empty($_SERVER["HTTP_ACCEPT"])
		and strpos($_SERVER["HTTP_ACCEPT"], 'application/xhtml+xml') !== false) {
			return 'xml';
			} else {
			return 'html';
			}
	} # End: getHttpAccept

?>