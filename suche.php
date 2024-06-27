<?php

if (isset($_GET['suchbegriff']) and !empty($_GET['suchbegriff'])) {
	$suchbegriffe = explode(" ", $_GET['suchbegriff']);
	$ergebnisse = [];
	//$test = print_r($suchbegriffe, true);
	$suchmatrix = file_get_contents("data/suche/suchmatrix.json");
	$suchmatrix = json_decode($suchmatrix, true);
	foreach ($suchbegriffe as $begriff) {
		foreach ($suchmatrix as $item) {
			if (mb_strtolower($begriff) == $item["begriff"]) {
				$ergebnisse[$begriff] = $item["fundstellen"];
				break;
			}
		}
	}
}

?><!DOCTYPE html>
<html lang="de">
 <head>
  <meta charset="utf-8">
  <title>Suche – Mein kleines Tafelwerk</title>
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
  <link rel="stylesheet" media="all" href="data/css/standard.css">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/data/grafik/favicon-192.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/data/grafik/favicon-192.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/data/grafik/favicon-96.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/data/grafik/favicon-32.png">
 </head>
 <body>
  <header>
   <h1><span class="main-title">Mein kleines Tafelwerk</span><span class="sub-title">Suchergebnisse</span></h1>
  </header>
  <nav>
   <h2>Hauptnavigation</h2>
   <ul>
    <li><a href="index.html">Übersicht</a></li>
    <li><a href="allgemein/index.html">Maßeinheiten</a></li>
    <li><a href="astronomie/index.html">Astronomie</a></li>
    <li><a href="chemie/index.html">Chemie</a></li>
    <li><a href="geometrie/index.html">Geometrie</a></li>
    <li><a href="physik/index.html">Physik</a></li>
    <li><a href="impressum.html">Impressum</a></li>
   </ul>
  </nav>
  <main>
   <ul id="breadcrumb">
    <li><a href="index.html">Übersicht</a></li>
    <li><a>Suche</a></li>
   </ul>
   <!--section id="testausgabe">
    <h2>Testausgabe</h2>
    <pre>
<?php // echo htmlspecialchars($test); ?>
    </pre>
   </section-->
   <section id="suchformular">
    <h2>Suche</h2>
    <form action="suche.php" method="get">
     <div>
      <label for="sucheingabe">Sucheingabe</label>
      <input type="search" size="48" id="sucheingabe" name="suchbegriff">
     </div>
     <div>
      <button>Absenden</button>
     </div>
    </form>
   </section>
   <section id="suchergebnisse">
    <h2>Suchergebnisse</h2>
<?php if (empty($ergebnisse)): ?>
    <p>Zu dem erfragten Suchbegriff „<?php echo htmlspecialchars($_GET['suchbegriff']); ?>“ wurden leider nichts gefunden.</p>
<?php else: ?>
    <ul>
<?php foreach ($ergebnisse as $key => $ergebnis): ?>
     <li>
      <b><?php echo htmlspecialchars($key); ?></b>
      <ul>
<?php foreach ($ergebnis as $eintrag): ?>
       <li><a href="<?php echo htmlspecialchars($eintrag["url"]); ?>"><?php echo htmlspecialchars($eintrag["titel"]); ?></a></li>
<?php endforeach; ?>
      </ul>
     </li>
<?php endforeach; ?>
    </ul>
<?php endif; ?>
   </section>
  </main>
  <footer>
   <ul>
    <li>© seit 2000, H. August. Lizenz: <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Lizenzvertrag, CC-BY-SA" src="data/grafik/cc-by-sa-4.0.png"></a></li>
    <li><a href="https://liberapay.com/Auge/donate"><img alt="Donate using Liberapay" src="/data/grafik/liberapay-donate.svg"></a></li>
   </ul>
  </footer>
 </body>
</html>
