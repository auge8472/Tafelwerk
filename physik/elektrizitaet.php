<?php

require_once($_SERVER["DOCUMENT_ROOT"].'/skript/funcs.general.php');
require_once($_SERVER["DOCUMENT_ROOT"].'/skript/config.php');

$accept = getHttpAccept();

$content = file_get_contents($template[$accept]['physik']['elektrizitaet']);
header('Content-Type: '. $template[$accept]['content']);

echo $template[$accept]['doctype'];
?>

<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<title>Physik - Elektrizizät .:tafelwerk.auge8472.de:.</title>
<meta http-equiv="content-type" content="<?php echo $template[$accept]['content']; ?>" />
<meta name="description" content="Kleines Tafelwerk, Tabellen und Formeln" />
<meta name="author" content="auge8472, H. August" />
<meta name="keywords" content="Mathematik, Mathe, Chemie, Geometrie, Physik, Tafelwerk, Tabellen, Formeln" />
<meta name="generator" content="Bluefish 2.2.1" />
<link rel="stylesheet" href="../css/neu.css" type="text/css" media="all" />
<link rel="SHORTCUT ICON" href="../favicon.ico" />
</head>
<body>
<h1 id="top">Physik</h1>
<div id="links">
<ul id="navi">
<li><a href="../index.html">Übersicht</a></li><!--
--><li><a href="../astronomie/solarsystem.html">Astronomie</a></li><!--
--><!--li>Chemie</li--><!--
--><li><a href="../geometrie/geomet00.html">Geometrie</a></li><!--
--><li><a href="physik00.html">Physik</a></li><!--
--></ul>
<ul id="ext">
<li><a title="externer Link: Hauptseite dieser Domain" href="http://www.auge8472.de/">www.auge8472.de</a></li><!--
--><li><a href="http://www.auge8472.de/forum/">Forum</a></li><!--
--><li><a title="externer Link: Entwicklung einer Datenbank für Veranstaltungen" href="http://termindbase.auge8472.de/">Veranstaltungs-db</a></li><!--
--></ul>
</div>
<div id="cont">
<h2>Elektrizität</h2>
<h3>Übersicht</h3>
<p>&quot;Strom ist, wenn's kribbelt.&quot; Die Elektrizität ist für uns so alltäglich, wie die Tatsache, dass es morgens hell und abends dunkel wird.<br />Dabei wird ausgenutzt, daß die Elektronen der äußeren Schale eines Atoms &quot;untreu&quot; sein können und von einem Atom zu einem anderen wechseln können. Atome, die mehr oder weniger Elektronen als Protonen besitzen, nennt man Ionen. Diese versuchen das Ungleichgewicht ihrer Ladung auszugleichen. Wenn sich zwei Ionen finden, von denen Eines positiv und das Andere negativ geladen ist, wechselt das überflüssige Elektron vom negativen zum positiven Ion.<br /><span class="bold">Merke:</span> Elektrischer Strom fließt vom negativen zum positiven Pol.<br />Dabei fließt ein Strom und übrig bleiben zwei Atome mit ausgeglichener Ladung.</p>
<h3>Inhalt</h3>
<?php echo $content; ?>
<p><a href="#top">zurück zum Anfang</a></p>
</div>
</body>
</html>