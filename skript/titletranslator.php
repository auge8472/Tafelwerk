<?php

$inputArray = array(
"Vorsätze für Maßeinheiten – Mein kleines Tafelwerk", "Nichtmetrische Maße – Mein kleines Tafelwerk", "Übersicht Maßeinheiten – Mein kleines Tafelwerk");

echo '<pre>';
foreach ($inputArray as $entry) {
	echo urlencode($entry) . "\n";
}
echo '</pre>';

?>
