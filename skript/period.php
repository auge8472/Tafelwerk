<?php
include("../skript/config.php");

if (isset($_GET["elem"]))
   {
   $elem = intval($_GET["elem"]);
   if (file_exists($periode) and is_integer($elem) and ($elem>=1 and $elem<=108))
      {
      $daten = file($periode);
      $nr = $elem - 1;
      $zeile = explode("|",$daten[$nr]);
      $elem = str_pad($elem,3,"0",STR_PAD_LEFT);
?>
<div id="data"><h3><?php echo $zeile[2]; ?></h3>
<div id="elementblock" class="<?php echo trim($zeile[7]); ?>">
<span id="ordnungszahl" title="Ordnungszahl"><?php echo $zeile[0]; ?></span>
<span id="symbol" title="Symbol: <?php echo $zeile[2]; ?>"><?php echo $zeile[1]; ?></span>
<span id="atommasse" title="Atommasse"><?php echo $zeile[4]; ?></span>
<span id="elektronennegativitaet" title="Elektronennegativitätswert"><?php echo $zeile[3]; ?></span>
</div>
<p>Ordnungszahl:<br>
<span class="perdat"><?php echo $zeile[0]; ?></span><br>
Name:<br>
<span class="perdat"><?php echo $zeile[2]; ?></span><br>
Symbol:<br>
<span class="perdat"><?php echo $zeile[1]; ?></span><br>
Elektronen-<br>negativit&auml;tswert:<br>
<span class="perdat"><?php echo $zeile[3]; ?></span><br>
Atommasse:<br>
<span class="perdat"><?php echo $zeile[4]; ?></span><br>
h&auml;ufige Neutronenanzahl:<br>
<span class="perdat"><?php echo $zeile[5]; ?></span><br>
Elektronen je Schale:<br>
<span class="perdat"><?php echo $zeile[6]; ?></span><br>
<?php
      if (substr($zeile[6], -1) == "*")
         {
         echo "<br>\n* ".$elemab;
	}
?>
</p></div>
<?php
      }
   }
?>