<?php
$hier = $_SERVER["PHP_SELF"];
//$dbpfad = "http://tafelwerk.auge8472.de/text/";
$periode = "../text/periode.txt";

$mess_per = "Benutzen Sie ein Element der nebenstehenden Graphik als Link und an dieser Stelle erscheinen die Informationen zum Element.";

$error1 = "Daten konnten nicht geladen werden.";

$elemab = "Es bestehen Abweichungen in der Anordnung der neu hinzukommenden Elektronen bzw. die Anordnung derselben ist nicht gesichert!";

$template['xml']['doctype'] = '<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">';
$template['xml']['content'] = 'application/xhtml+xml; charset=UTF-8';
$template['xml']['physik']['elektrizitaet'] = $_SERVER["DOCUMENT_ROOT"].'/formeln/mathml/template.physik.elektrizitaet.html';

$template['html']['doctype'] = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">';
$template['html']['content'] = 'text/html; charset=UTF-8';
$template['html']['physik']['elektrizitaet'] = $_SERVER["DOCUMENT_ROOT"].'/formeln/html/template.physik.elektrizitaet.html';

?>