// Einsteiger-Teil (A1 + A2): wird vor die B2-Inhalte in den Lernpfad gesetzt.
// Formate wie in vocab.js und grammar.js.
(() => {
const T = rows => '<table class="t">' + rows.map(r => '<tr>' + r.split('|').map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';

const V = [
{id:'a01',title:'Hallo & Danke',icon:'👋',words:`
hola|hallo|¡Hola! Soy Paco.
buenos días|guten Morgen|Buenos días, señora García.
buenas tardes|guten Tag (nachmittags)|Buenas tardes a todos.
buenas noches|guten Abend, gute Nacht|Buenas noches, hasta mañana.
adiós|tschüss, auf Wiedersehen|Adiós, nos vemos el lunes.
hasta luego|bis später|Me voy. ¡Hasta luego!
por favor|bitte|Un café, por favor.
gracias|danke|Muchas gracias por todo.
de nada|gern geschehen|—Gracias. —De nada.
perdón|Entschuldigung|Perdón, ¿dónde está el baño?
lo siento|es tut mir leid|Lo siento, llego tarde.
sí|ja|Sí, claro.
no|nein, nicht|No, gracias.
¿Qué tal?|Wie geht's?|Hola, Ana, ¿qué tal?
bien|gut (Wie geht's? – …)|Estoy muy bien.
mal|schlecht|Hoy estoy un poco mal.
me llamo|ich heiße|Me llamo Nico.
mucho gusto|freut mich|Soy Laura. —Mucho gusto.
el señor|der Herr|El señor López no está.
la señora|die Dame, Frau (Anrede)|La señora Ruiz es mi profesora.`},
{id:'a02',title:'Zahlen',icon:'🔢',words:`
uno|eins|Solo quiero uno.
dos|zwei|Tengo dos hermanos.
tres|drei|Son las tres.
cuatro|vier|Somos cuatro en casa.
cinco|fünf|Vuelvo en cinco minutos.
seis|sechs|Me levanto a las seis.
siete|sieben|La semana tiene siete días.
ocho|acht|Trabajo ocho horas.
nueve|neun|La clase empieza a las nueve.
diez|zehn|Cuesta diez euros.
once|elf|Mi hija tiene once años.
doce|zwölf|El año tiene doce meses.
quince|fünfzehn|Llego en quince minutos.
veinte|zwanzig|Tengo veinte euros.
treinta|dreißig|El mes tiene treinta días.
cincuenta|fünfzig|Mi padre tiene cincuenta años.
cien|hundert|Hay cien personas.
mil|tausend|Cuesta mil euros.
el número|die Nummer, die Zahl|¿Cuál es tu número de teléfono?
primero|erster, zuerst|Primero desayuno.`},
{id:'a03',title:'Familie & Menschen',icon:'👨‍👩‍👧',words:`
la familia|die Familie|Mi familia es grande.
la madre|die Mutter|Mi madre se llama Eva.
el padre|der Vater|Mi padre trabaja mucho.
el hermano|der Bruder|Tengo un hermano.
la hermana|die Schwester|Mi hermana vive en Berlín.
el hijo|der Sohn|Su hijo tiene tres años.
la hija|die Tochter|Tienen una hija.
el abuelo|der Großvater|Mi abuelo es muy simpático.
la abuela|die Großmutter|Mi abuela cocina muy bien.
el amigo|der Freund (Kumpel)|Pablo es mi amigo.
el hombre|der Mann|Ese hombre es mi profesor.
la mujer|die Frau|Es una mujer muy inteligente.
el niño|das Kind, der Junge|El niño juega en el parque.
el chico|der Junge|Ese chico es mi primo.
la gente|die Leute|Hay mucha gente en la calle.
el marido|der Ehemann|Su marido es médico.
el tío|der Onkel|Mi tío vive en Chile.
el primo|der Cousin|Mi primo tiene mi edad.
el vecino|der Nachbar|El vecino es muy simpático.
el novio|der feste Freund|Su novio es español.`},
{id:'a04',title:'Essen & Trinken',icon:'🍎',words:`
el agua|das Wasser|Un vaso de agua, por favor.
el pan|das Brot|Compro pan todos los días.
la leche|die Milch|Tomo café con leche.
el café|der Kaffee, das Café|Quiero un café solo.
el té|der Tee|¿Quieres un té?
la fruta|das Obst|Como mucha fruta.
la manzana|der Apfel|Como una manzana al día.
la verdura|das Gemüse|La verdura es sana.
la carne|das Fleisch|No como carne.
el pescado|der Fisch (zum Essen)|Hoy hay pescado.
el queso|der Käse|Me gusta el queso.
el huevo|das Ei|Desayuno dos huevos.
el arroz|der Reis|Arroz con pollo.
el pollo|das Hähnchen|El pollo está muy rico.
la cerveza|das Bier|Una cerveza, por favor.
el vino|der Wein|¿Vino tinto o blanco?
el desayuno|das Frühstück|El desayuno es a las ocho.
la comida|das Essen, das Mittagessen|La comida está lista.
la cena|das Abendessen|La cena es a las nueve.
tener hambre|Hunger haben|Tengo mucha hambre.`},
{id:'a05',title:'Zuhause',icon:'🏡',words:`
la casa|das Haus, das Zuhause|Estoy en casa.
el piso|die Wohnung, das Stockwerk|Vivo en un piso pequeño.
la habitación|das Zimmer|Mi habitación es grande.
la cocina|die Küche|Comemos en la cocina.
el baño|das Bad, die Toilette|¿Dónde está el baño?
el salón|das Wohnzimmer|Vemos la tele en el salón.
la puerta|die Tür|Abre la puerta, por favor.
la ventana|das Fenster|Cierra la ventana.
la mesa|der Tisch|El libro está en la mesa.
la silla|der Stuhl|Necesitamos otra silla.
la cama|das Bett|Me voy a la cama.
el sofá|das Sofa|El gato duerme en el sofá.
la llave|der Schlüssel|No encuentro la llave.
la nevera|der Kühlschrank|La leche está en la nevera.
el jardín|der Garten|La casa tiene jardín.
la ducha|die Dusche|La ducha está a la derecha.
el armario|der Schrank|La ropa está en el armario.
la lámpara|die Lampe|Enciende la lámpara.
el suelo|der Boden|El móvil está en el suelo.
la escalera|die Treppe|Sube por la escalera.`},
{id:'a06',title:'Tage & Zeit',icon:'📅',words:`
lunes|Montag|El lunes trabajo.
martes|Dienstag|El martes tengo clase.
miércoles|Mittwoch|Nos vemos el miércoles.
jueves|Donnerstag|El jueves voy al médico.
viernes|Freitag|¡Por fin es viernes!
sábado|Samstag|El sábado salimos.
domingo|Sonntag|El domingo descanso.
hoy|heute|Hoy hace sol.
mañana|morgen|Mañana no trabajo.
ayer|gestern|Ayer fui al cine.
la semana|die Woche|Esta semana tengo mucho trabajo.
el mes|der Monat|El mes que viene viajo.
el año|das Jahr|Tengo treinta años.
el día|der Tag|¡Que tengas un buen día!
la hora|die Stunde, die Uhrzeit|¿Qué hora es?
ahora|jetzt|Ahora no puedo.
siempre|immer|Siempre desayuno en casa.
nunca|nie|Nunca bebo café.
tarde|spät|Es muy tarde.
temprano|früh|Me levanto temprano.`},
{id:'a07',title:'Die wichtigsten Verben',icon:'🔑',words:`
ser|sein (wer oder was man ist)|Quiero ser médico.
estar|sein (wo und wie man ist)|¿Dónde quieres estar?
tener|haben|Quiero tener un perro.
hacer|machen|¿Qué quieres hacer?
ir|gehen, fahren|Quiero ir a España.
venir|kommen|¿Puedes venir mañana?
querer|wollen, lieben|Quiero un café.
poder|können|¿Puedo entrar?
saber|wissen, können|No lo sé.
decir|sagen|¿Qué quieres decir?
ver|sehen|Quiero ver esa película.
dar|geben|¿Me puedes dar agua?
poner|stellen, legen|¿Dónde puedo poner esto?
salir|hinausgehen, ausgehen|Quiero salir esta noche.
llegar|ankommen|Voy a llegar tarde.
necesitar|brauchen|Necesito ayuda.
creer|glauben|Creo que sí.
conocer|kennen, kennenlernen|Quiero conocer Madrid.
pensar|denken|Tengo que pensar.
buscar|suchen|Busco la estación.`},
{id:'a08',title:'Verben für den Alltag',icon:'🏃‍♂️',words:`
hablar|sprechen|Hablo un poco de español.
comer|essen|Comemos a las dos.
beber|trinken|Bebo mucha agua.
vivir|wohnen, leben|Vivo en Alemania.
trabajar|arbeiten|Trabajo en una oficina.
estudiar|lernen, studieren|Estudio español.
aprender|lernen (etwas Neues)|Aprendo rápido.
leer|lesen|Leo un libro.
escribir|schreiben|Escribo un mensaje.
escuchar|hören, zuhören|Escucho música.
comprar|kaufen|Compro pan.
pagar|bezahlen|¿Puedo pagar con tarjeta?
abrir|öffnen|La tienda abre a las diez.
cerrar|schließen|El banco cierra a las dos.
empezar|anfangen|La clase empieza ahora.
terminar|beenden, aufhören|Termino a las seis.
esperar|warten, hoffen|Espero el autobús.
llamar|anrufen, rufen|Te llamo mañana.
ayudar|helfen|¿Me puedes ayudar?
entender|verstehen|No entiendo la pregunta.`},
{id:'a09',title:'Stadt & Wege',icon:'🧭',words:`
la ciudad|die Stadt|Berlín es una ciudad grande.
la calle|die Straße|Vivo en esta calle.
la plaza|der Platz|Nos vemos en la plaza.
el centro|das Zentrum|El hotel está en el centro.
la tienda|der Laden|La tienda está cerrada.
el supermercado|der Supermarkt|Voy al supermercado.
el banco|die Bank|El banco está cerca.
la farmacia|die Apotheke|¿Hay una farmacia por aquí?
el hospital|das Krankenhaus|El hospital está lejos.
la estación|der Bahnhof, die Station|¿Dónde está la estación?
el autobús|der Bus|Voy en autobús.
el tren|der Zug|El tren sale a las tres.
el coche|das Auto|No tengo coche.
el metro|die U-Bahn|Voy al trabajo en metro.
a la derecha|rechts|El baño está a la derecha.
a la izquierda|links|Gira a la izquierda.
todo recto|geradeaus|Sigue todo recto.
cerca|in der Nähe, nah|La playa está cerca.
lejos|weit weg|Mi casa está lejos.
aquí|hier|Vivo aquí.`},
{id:'a10',title:'Farben & Eigenschaften',icon:'🌈',words:`
rojo|rot|Tengo un coche rojo.
azul|blau|El mar es azul.
verde|grün|Me gusta el té verde.
amarillo|gelb|El sol es amarillo.
blanco|weiß|Una camisa blanca.
negro|schwarz|Un café negro, por favor.
grande|groß|Es una casa grande.
pequeño|klein|Mi piso es pequeño.
bueno|gut|Es un buen amigo.
malo|schlecht, böse|Es una mala idea.
nuevo|neu|Tengo un móvil nuevo.
viejo|alt|Es un libro viejo.
bonito|schön, hübsch|¡Qué bonito!
feo|hässlich|Es un edificio feo.
caro|teuer|Es muy caro.
barato|billig|Este hotel es barato.
fácil|leicht, einfach|El español es fácil.
difícil|schwierig|No es difícil.
rápido|schnell|El tren es rápido.
lento|langsam|Internet va muy lento.`},
{id:'a11',title:'Kleidung & Einkaufen',icon:'👕',words:`
la ropa|die Kleidung|Compro ropa nueva.
la camiseta|das T-Shirt|Llevo una camiseta blanca.
la camisa|das Hemd|Necesito una camisa.
los pantalones|die Hose|Estos pantalones son caros.
la falda|der Rock|Lleva una falda roja.
el vestido|das Kleid|Es un vestido muy bonito.
los zapatos|die Schuhe|Mis zapatos son nuevos.
la chaqueta|die Jacke|Coge la chaqueta, hace frío.
el abrigo|der Mantel|En invierno llevo abrigo.
el jersey|der Pullover|Me gusta tu jersey.
el dinero|das Geld|No tengo dinero.
el precio|der Preis|¿Cuál es el precio?
la tarjeta|die Karte (zum Bezahlen)|¿Puedo pagar con tarjeta?
en efectivo|bar|Pago en efectivo.
¿Cuánto cuesta?|Wie viel kostet das?|Perdón, ¿cuánto cuesta?
el mercado|der Markt|Compro fruta en el mercado.
abierto|geöffnet|¿Está abierto?
cerrado|geschlossen|El museo está cerrado.
llevar|tragen, mitnehmen|Hoy llevo zapatos nuevos.
vender|verkaufen|Aquí venden pan.`},
{id:'a12',title:'Körper & Befinden',icon:'🙂',words:`
la cabeza|der Kopf|Me duele la cabeza.
la mano|die Hand|Dame la mano.
el pie|der Fuß|Voy a pie.
el ojo|das Auge|Tiene los ojos azules.
la boca|der Mund|Abre la boca.
la nariz|die Nase|Tengo la nariz fría.
la oreja|das Ohr|Me duele la oreja.
el brazo|der Arm|Me duele el brazo.
la pierna|das Bein|Tengo las piernas cansadas.
la espalda|der Rücken|Me duele la espalda.
el estómago|der Magen, der Bauch|Me duele el estómago.
el corazón|das Herz|Tiene un gran corazón.
el pelo|das Haar|Tiene el pelo largo.
el diente|der Zahn|Me lavo los dientes.
enfermo|krank|Estoy enfermo.
cansado|müde|Estoy muy cansado.
el médico|der Arzt|Voy al médico.
el dolor|der Schmerz|Tengo dolor de cabeza.
tener sed|Durst haben|Tengo mucha sed.
tener sueño|müde sein, schläfrig sein|Tengo sueño.`},
{id:'a13',title:'Fragewörter & kleine Wörter',icon:'❓',words:`
qué|was|¿Qué es esto?
quién|wer|¿Quién es?
dónde|wo|¿Dónde vives?
cuándo|wann|¿Cuándo vienes?
cómo|wie|¿Cómo te llamas?
por qué|warum|¿Por qué no vienes?
cuánto|wie viel|¿Cuánto es?
cuál|welcher, welche|¿Cuál es tu nombre?
y|und|Pan y agua.
o|oder|¿Té o café?
pero|aber|Es caro, pero bueno.
porque|weil|No voy porque estoy cansado.
con|mit|Café con leche.
sin|ohne|Agua sin gas.
también|auch|Yo también.
muy|sehr|Es muy bonito.
mucho|viel|Trabajo mucho.
poco|wenig|Hablo un poco de español.
más|mehr|Quiero más agua.
menos|weniger|Ahora trabajo menos.`},
{id:'a14',title:'Im Restaurant',icon:'🍽️',words:`
el restaurante|das Restaurant|Cenamos en un restaurante.
el bar|die Bar, die Kneipe|Tomamos algo en el bar.
el camarero|der Kellner|El camarero es muy simpático.
la carta|die Speisekarte|La carta, por favor.
la cuenta|die Rechnung (im Lokal)|La cuenta, por favor.
el plato|der Teller, das Gericht|Es mi plato favorito.
el vaso|das Glas|Un vaso de agua.
la botella|die Flasche|Una botella de vino.
el postre|der Nachtisch|¿Qué hay de postre?
la ensalada|der Salat|Una ensalada para mí.
la sopa|die Suppe|La sopa está caliente.
el bocadillo|das belegte Brötchen|Un bocadillo de queso.
las patatas fritas|die Pommes|Pollo con patatas fritas.
el zumo|der Saft|Un zumo de naranja.
el azúcar|der Zucker|Café sin azúcar.
la sal|das Salz|¿Me pasas la sal?
pedir|bestellen, bitten|¿Qué vas a pedir?
tomar|nehmen, trinken|¿Qué quieres tomar?
rico|lecker, reich|¡Qué rico!
quisiera|ich hätte gern|Quisiera una mesa para dos.`},
{id:'a15',title:'Wetter & Natur',icon:'☀️',words:`
el tiempo|das Wetter, die Zeit|¿Qué tiempo hace?
el sol|die Sonne|Hoy hace sol.
la lluvia|der Regen|No me gusta la lluvia.
el viento|der Wind|Hace mucho viento.
la nieve|der Schnee|Hay nieve en la montaña.
el calor|die Hitze, die Wärme|Hace mucho calor.
el frío|die Kälte|Hace frío.
el cielo|der Himmel|El cielo está azul.
llover|regnen|Va a llover.
el mar|das Meer|Vivo cerca del mar.
la playa|der Strand|Vamos a la playa.
la montaña|der Berg, das Gebirge|Me gusta la montaña.
el río|der Fluss|El río es muy largo.
el árbol|der Baum|Hay un árbol en el jardín.
la flor|die Blume|Compro flores.
el perro|der Hund|Tengo un perro.
el gato|die Katze|El gato duerme.
la primavera|der Frühling|En primavera hay flores.
el verano|der Sommer|En verano voy a la playa.
el invierno|der Winter|En invierno hace frío.`},
{id:'a16',title:'Freizeit & Hobbys',icon:'🎸',words:`
el tiempo libre|die Freizeit|¿Qué haces en tu tiempo libre?
la música|die Musik|Escucho música.
el libro|das Buch|Leo un libro.
la película|der Film|Vemos una película.
el cine|das Kino|Vamos al cine.
el deporte|der Sport|Hago deporte.
el fútbol|der Fußball|Juego al fútbol.
la fiesta|die Party, das Fest|Hay una fiesta el sábado.
el fin de semana|das Wochenende|¡Buen fin de semana!
las vacaciones|der Urlaub, die Ferien|Estoy de vacaciones.
jugar|spielen|Los niños quieren jugar.
bailar|tanzen|Me gusta bailar.
cantar|singen|No sé cantar.
nadar|schwimmen|Voy a nadar.
cocinar|kochen|Me gusta cocinar.
viajar|reisen|Quiero viajar a Perú.
pasear|spazieren gehen|Vamos a pasear.
descansar|sich ausruhen|Necesito descansar.
ver la tele|fernsehen|Por la noche veo la tele.
tocar la guitarra|Gitarre spielen|Mi hermano sabe tocar la guitarra.`},
{id:'a17',title:'Mein Tagesablauf',icon:'⏰',words:`
levantarse|aufstehen|Me levanto a las siete.
despertarse|aufwachen|Me despierto temprano.
ducharse|sich duschen|Me ducho por la mañana.
vestirse|sich anziehen|Me visto rápido.
desayunar|frühstücken|Desayuno en casa.
cenar|zu Abend essen|Cenamos a las nueve.
acostarse|ins Bett gehen|Me acuesto tarde.
dormir|schlafen|Duermo ocho horas.
volver|zurückkommen|Vuelvo a casa a las seis.
limpiar|putzen|Limpio la casa.
lavar|waschen|Lavo la ropa.
preparar|vorbereiten, zubereiten|Preparo la cena.
el trabajo|die Arbeit|Voy al trabajo.
la oficina|das Büro|Estoy en la oficina.
la clase|der Unterricht, die Klasse|Tengo clase de español.
el móvil|das Handy|¿Dónde está mi móvil?
el ordenador|der Computer|Trabajo con el ordenador.
normalmente|normalerweise|Normalmente como en casa.
a veces|manchmal|A veces voy en bici.
después|danach, später|Después voy al gimnasio.`},
{id:'a18',title:'Reise-Basics',icon:'🧳',words:`
el viaje|die Reise|¡Buen viaje!
el hotel|das Hotel|El hotel está en el centro.
el aeropuerto|der Flughafen|Voy al aeropuerto en taxi.
el avión|das Flugzeug|Viajo en avión.
el billete|die Fahrkarte, das Ticket|Un billete para Madrid, por favor.
la maleta|der Koffer|Mi maleta es roja.
el pasaporte|der Reisepass|Aquí está mi pasaporte.
el mapa|die Landkarte, der Stadtplan|¿Tiene un mapa de la ciudad?
el país|das Land|España es un país bonito.
el idioma|die Sprache|Hablo dos idiomas.
España|Spanien|Voy a España en verano.
Alemania|Deutschland|Soy de Alemania.
alemán|deutsch, Deutsch|Soy alemán.
español|spanisch, Spanisch|Aprendo español.
el turista|der Tourist|Hay muchos turistas.
reservar|reservieren, buchen|Quiero reservar una habitación.
visitar|besuchen, besichtigen|Quiero visitar el museo.
la foto|das Foto|¿Puedes hacer una foto?
no entiendo|ich verstehe nicht|Perdón, no entiendo.
más despacio|langsamer|Más despacio, por favor.`}
];

const G = [
{id:'b01',title:'Aussprache: So klingt Spanisch',icon:'👄',
 intro:'Gute Nachricht: Spanisch wird fast genau so gesprochen, wie es geschrieben wird. Du musst nur eine Handvoll Buchstaben neu lernen.',
 sections:[
  {h:'Diese Buchstaben klingen anders',t:T(['<b>h</b>|immer stumm: <i>hola</i> = „ola"','<b>j</b>|wie ch in „Bach": <i>jamón</i>','<b>ll</b>|wie j in „ja": <i>me llamo</i>','<b>ñ</b>|wie nj: <i>España</i>','<b>v</b>|fast wie b: <i>vino</i>','<b>qu</b>|wie k: <i>queso</i>','<b>z</b> und <b>ce, ci</b>|in Spanien wie englisches th: <i>zapato, cine</i>','<b>r / rr</b>|gerollt: <i>perro</i>'])},
  {h:'Wo wird betont?',t:'<p>Meist auf der <b>vorletzten</b> Silbe: <i>CA-sa, ha-BLA-mos</i>.</p><p>Steht ein <b>Akzent</b>, wird genau dort betont: <i>ca-FÉ, MÚ-si-ca</i>.</p>'},
  {h:'Die verdrehten Satzzeichen',t:'<p>Fragen und Ausrufe bekommen vorne ein umgedrehtes Zeichen:<br><i>¿Qué tal?</i> · <i>¡Hola!</i></p><p>So weißt du schon am Satzanfang, wie du ihn betonen musst.</p>'}
 ],
 examples:[['Hola, me llamo Paco.','Hallo, ich heiße Paco.'],['¿Qué tal?','Wie geht\'s?'],['Soy de España.','Ich komme aus Spanien.']],
 tip:'Tippe überall auf den Lautsprecher 🔊 und sprich laut nach – so gewöhnt sich dein Mund am schnellsten daran.',
 ex:[
 'Das „h" in „hola" ist ___.|stumm|ein deutsches h|ein ch|Das h wird im Spanischen nie gesprochen.',
 'Das „ñ" in „España" klingt wie ___.|nj|n|ng|ñ = nj, wie in „Lasagne".',
 'Das „ll" in „me llamo" klingt wie ___.|j (wie in „ja")|l|sch|ll klingt wie ein deutsches j.',
 'Das „j" in „jamón" klingt wie ___.|ch (wie in „Bach")|j (wie in „ja")|sch|Das spanische j kratzt im Hals wie unser ch.',
 'Das „v" in „vino" klingt fast wie ___.|b|w|f|v und b klingen im Spanischen gleich.',
 'Eine spanische Frage beginnt mit ___.|¿|?|¡|Vorne das umgedrehte, hinten das normale Fragezeichen.',
 'Das „qu" in „queso" klingt wie ___.|k|kw|kuh|Das u ist stumm: „keso".',
 'Bei „café" liegt die Betonung auf ___.|der letzten Silbe|der ersten Silbe|keiner Silbe|Der Akzent zeigt, wo betont wird.']},

{id:'b02',title:'el & la: Artikel und Mehrzahl',icon:'🏷️',
 intro:'Im Spanischen gibt es nur zwei Geschlechter – kein „das". Und meistens verrät schon die Endung, welches es ist.',
 sections:[
  {h:'der/die und ein/eine',t:T(['|<b>männlich</b>|<b>weiblich</b>','der / die|el libro|la casa','ein / eine|un libro|una casa','Mehrzahl|los libros|las casas'])},
  {h:'Die Faustregel',t:'<p>Endung <b>-o</b> → männlich: <i>el vino, el amigo</i><br>Endung <b>-a</b> → weiblich: <i>la mesa, la amiga</i></p><p>Bekannte Ausnahmen: <i>el día, el problema, la mano</i>.</p>'},
  {h:'Mehrzahl',t:'<p>Endet das Wort auf Vokal → <b>+s</b>: <i>casa → casas</i><br>Endet es auf Konsonant → <b>+es</b>: <i>ciudad → ciudades</i></p>'}
 ],
 examples:[['La casa es grande.','Das Haus ist groß.'],['Tengo un hermano y una hermana.','Ich habe einen Bruder und eine Schwester.'],['Los amigos de Ana son simpáticos.','Die Freunde von Ana sind nett.']],
 tip:'Lerne jedes Nomen gleich mit Artikel: nicht „casa", sondern „la casa". Das deutsche Geschlecht hilft dir nicht!',
 ex:[
 '___ casa es grande.|La|El|Los|casa endet auf -a → weiblich.',
 '___ libro es nuevo.|El|La|Las|libro endet auf -o → männlich.',
 'Tengo ___ hermana.|una|un|unos|hermana ist weiblich → una.',
 '___ amigos de Ana son simpáticos.|Los|Las|El|Männliche Mehrzahl → los.',
 '___ día es bonito.|El|La|Las|Ausnahme: el día – obwohl es auf -a endet.',
 'Die Mehrzahl von „ciudad" ist ___.|ciudades|ciudads|ciudadas|Konsonant am Ende → +es.',
 'Me duele ___ mano.|la|el|los|Ausnahme: la mano – obwohl es auf -o endet.',
 'Quiero ___ café, por favor.|un|una|unas|café ist männlich → un.']},

{id:'b03',title:'Ich bin … – das Verb ser',icon:'🙋',
 intro:'Mit „ser" sagst du, wer du bist, woher du kommst und was du machst. Dein allererstes Verb!',
 sections:[
  {h:'ser = sein',t:T(['yo|<b>soy</b>|ich bin','tú|<b>eres</b>|du bist','él / ella / usted|<b>es</b>|er / sie ist, Sie sind','nosotros|<b>somos</b>|wir sind','vosotros|<b>sois</b>|ihr seid','ellos / ellas|<b>son</b>|sie sind'])},
  {h:'„Ich" kannst du weglassen',t:'<p>Die Verbform verrät schon die Person. Deshalb sagt man meist nur:<br><i>Soy Nico.</i> statt <i>Yo soy Nico.</i></p>'},
  {h:'du oder Sie?',t:'<p><b>tú</b> = du (Freunde, Familie, Gleichaltrige)<br><b>usted</b> = Sie (höflich) – mit der Form von él/ella: <i>¿Es usted el señor López?</i></p>'},
  {h:'Wofür ser?',t:'<p>Name: <i>Soy Ana.</i><br>Herkunft: <i>Soy de Alemania.</i><br>Beruf: <i>Soy profesor.</i><br>Eigenschaft: <i>Soy alto.</i></p>'}
 ],
 examples:[['Soy de Alemania.','Ich bin aus Deutschland.'],['Ella es mi hermana.','Sie ist meine Schwester.'],['Somos amigos.','Wir sind Freunde.']],
 tip:'Beim Beruf gibt es keinen Artikel: „Soy profesor" – nicht „Soy un profesor".',
 ex:[
 'Yo ___ Nico.|soy|eres|es|yo → soy.',
 '¿Tú ___ de Alemania?|eres|soy|son|tú → eres.',
 'Ella ___ profesora.|es|eres|somos|ella → es.',
 'Nosotros ___ amigos.|somos|son|sois|nosotros → somos.',
 'Mis padres ___ de Berlín.|son|es|somos|mis padres = sie (Mehrzahl) → son.',
 '¿Vosotros ___ estudiantes?|sois|son|somos|vosotros → sois.',
 '¿De dónde ___ usted?|es|eres|sois|usted nimmt die Form von él/ella → es.',
 'Madrid ___ una ciudad grande.|es|son|eres|Eine Stadt = Einzahl → es.']},

{id:'b04',title:'estar & hay: wo und wie',icon:'📍',
 intro:'Spanisch hat zwei Wörter für „sein". „estar" nimmst du für Orte und fürs Befinden – und „hay" heißt „es gibt".',
 sections:[
  {h:'estar',t:T(['yo|<b>estoy</b>','tú|<b>estás</b>','él / ella / usted|<b>está</b>','nosotros|<b>estamos</b>','vosotros|<b>estáis</b>','ellos / ellas|<b>están</b>'])},
  {h:'ser oder estar?',t:'<p><b>ser</b> = was jemand oder etwas IST:<br><i>Soy Nico. Soy alto.</i></p><p><b>estar</b> = WO etwas ist und WIE es einem gerade geht:<br><i>Estoy en casa. Estoy cansado.</i></p>'},
  {h:'hay = es gibt',t:'<p><i>Hay un banco en esta calle.</i> – Es gibt eine Bank …</p><p>Suchst du etwas Bestimmtes (el, la, mi …), nimm <b>estar</b>:<br><i>¿Dónde <b>está</b> el banco?</i><br>Ist es irgendeins (un, una, dos …), nimm <b>hay</b>:<br><i>¿<b>Hay</b> un banco por aquí?</i></p>'}
 ],
 examples:[['Estoy en casa.','Ich bin zu Hause.'],['¿Dónde está el baño?','Wo ist die Toilette?'],['Hay un bar en la plaza.','Es gibt eine Bar am Platz.']],
 tip:'Auf „¿Cómo estás?" antwortest du immer mit estar: „Estoy bien."',
 ex:[
 '¿Cómo ___? —Bien, gracias. (tú)|estás|eres|hay|Wie es dir geht → estar.',
 'Madrid ___ en España.|está|es|hay|Wo etwas liegt → estar.',
 'En mi calle ___ un supermercado.|hay|está|es|„Es gibt" → hay.',
 'Yo ___ cansado hoy.|estoy|soy|hay|Befinden gerade jetzt → estar.',
 'Mi hermano ___ alto.|es|está|hay|Feste Eigenschaft → ser.',
 '¿Dónde ___ el baño?|está|hay|es|Etwas Bestimmtes (el baño) → estar.',
 '¿___ un banco cerca de aquí?|Hay|Está|Es|Irgendeine Bank → hay.',
 'Nosotros ___ en casa.|estamos|somos|hay|Ort → estar.']},

{id:'b05',title:'Die Gegenwart: -ar, -er, -ir',icon:'⚙️',
 intro:'Fast alle spanischen Verben enden auf -ar, -er oder -ir. Kennst du die drei Muster, kannst du hunderte Verben benutzen.',
 sections:[
  {h:'So geht\'s',t:'<p>Schneide <b>-ar / -er / -ir</b> ab und häng die passende Endung an:</p>'+T(['|<b>hablar</b>|<b>comer</b>|<b>vivir</b>','yo|habl<b>o</b>|com<b>o</b>|viv<b>o</b>','tú|habl<b>as</b>|com<b>es</b>|viv<b>es</b>','él / ella|habl<b>a</b>|com<b>e</b>|viv<b>e</b>','nosotros|habl<b>amos</b>|com<b>emos</b>|viv<b>imos</b>','vosotros|habl<b>áis</b>|com<b>éis</b>|viv<b>ís</b>','ellos|habl<b>an</b>|com<b>en</b>|viv<b>en</b>'])},
  {h:'Was dir hilft',t:'<p>„ich" endet immer auf <b>-o</b>.<br>„du" endet immer auf <b>-s</b>.<br>„sie" (Mehrzahl) endet immer auf <b>-n</b>.</p>'},
  {h:'Eine Form, zwei Bedeutungen',t:'<p><i>Hablo español</i> heißt „Ich spreche Spanisch" und auch „Ich spreche gerade Spanisch".</p>'}
 ],
 examples:[['Hablo un poco de español.','Ich spreche ein bisschen Spanisch.'],['Vivimos en Berlín.','Wir wohnen in Berlin.'],['¿Comes carne?','Isst du Fleisch?']],
 tip:'-er und -ir sind fast gleich. Nur bei „wir" und „ihr" unterscheiden sie sich.',
 ex:[
 'Yo ___ español. (hablar)|hablo|hablas|habla|ich → -o.',
 '¿Tú ___ carne? (comer)|comes|como|come|du → -es.',
 'Ella ___ en Madrid. (vivir)|vive|vivo|vives|sie → -e.',
 'Nosotros ___ mucho. (trabajar)|trabajamos|trabajan|trabajáis|wir → -amos.',
 'Ellos ___ agua. (beber)|beben|bebemos|bebe|sie (Mehrzahl) → -en.',
 '¿Vosotros ___ aquí? (vivir)|vivís|vivimos|viven|ihr → -ís.',
 'Yo ___ un libro. (leer)|leo|lee|lees|ich → -o.',
 'Mi madre ___ la radio. (escuchar)|escucha|escucho|escuchan|meine Mutter = sie → -a.']},

{id:'b06',title:'tener & ir: haben und gehen',icon:'🚶',
 intro:'Zwei kleine Verben, mit denen du dein Alter sagst, von Hunger erzählst und sogar über die Zukunft sprichst.',
 sections:[
  {h:'Die Formen',t:T(['|<b>tener</b> (haben)|<b>ir</b> (gehen)','yo|tengo|voy','tú|tienes|vas','él / ella|tiene|va','nosotros|tenemos|vamos','vosotros|tenéis|vais','ellos|tienen|van'])},
  {h:'tener: mehr als „haben"',t:'<p>Alter: <i>Tengo 30 años.</i> (wörtlich: Ich habe 30 Jahre.)<br>Hunger, Durst: <i>Tengo hambre. Tengo sed.</i><br>Müssen: <b>tener que</b> + Grundform: <i>Tengo que trabajar.</i></p>'},
  {h:'ir a: wohin und die Zukunft',t:'<p>Wohin: <i>Voy <b>a</b> Madrid. Voy <b>al</b> cine.</i> (a + el = <b>al</b>)</p><p>Zukunft: <b>ir a</b> + Grundform:<br><i>Voy a comer.</i> – Ich werde essen.</p>'}
 ],
 examples:[['Tengo dos hermanos.','Ich habe zwei Geschwister.'],['Mañana voy a trabajar.','Morgen werde ich arbeiten.'],['Tengo que ir al médico.','Ich muss zum Arzt gehen.']],
 tip:'Mit „voy a + Verb" hast du sofort eine Zukunftsform – ganz ohne neue Endungen.',
 ex:[
 'Yo ___ dos hermanos.|tengo|tiene|tienes|yo → tengo.',
 '¿Cuántos años ___? (tú)|tienes|eres|estás|Das Alter sagt man mit tener!',
 'Mañana ___ al cine. (yo)|voy|va|vas|yo → voy.',
 'Tengo ___ estudiar.|que|de|a|müssen = tener que.',
 'Vamos ___ comer paella.|a|que|de|ir a + Grundform = Zukunft.',
 'Ella ___ hambre.|tiene|es|está|Hunger „hat" man: tener hambre.',
 'Voy ___ supermercado.|al|a el|en el|a + el verschmilzt zu al.',
 '¿Qué ___ a hacer mañana? (vosotros)|vais|van|vamos|vosotros → vais.']},

{id:'b07',title:'Nein sagen & Fragen stellen',icon:'🙅',
 intro:'Verneinen ist auf Spanisch herrlich einfach – und für Fragen musst du nicht einmal die Wörter umstellen.',
 sections:[
  {h:'Verneinen: „no" vor das Verb',t:'<p><i>Hablo francés.</i> → <i><b>No</b> hablo francés.</i></p><p>„no" heißt „nein" und „nicht": <i>No, no quiero.</i> – Nein, ich will nicht.</p>'},
  {h:'Doppelt hält besser',t:'<p>Anders als im Deutschen bleibt das „no" stehen:</p><p><i>No tengo <b>nada</b>.</i> – Ich habe nichts.<br><i>No voy <b>nunca</b>.</i> – Ich gehe nie.<br><i>No hay <b>nadie</b>.</i> – Es ist niemand da.</p>'},
  {h:'Fragen',t:'<p>Ja/Nein-Fragen: gleicher Satz, nur die Stimme geht hoch:<br><i>¿Hablas español?</i></p><p>Fragewörter tragen immer einen Akzent:<br>qué (was) · quién (wer) · dónde (wo) · cuándo (wann) · cómo (wie) · cuánto (wie viel) · por qué (warum)</p>'},
  {h:'por qué und porque',t:'<p><i>¿<b>Por qué</b> no vienes?</i> – Warum …?<br><i><b>Porque</b> estoy cansado.</i> – Weil …</p>'}
 ],
 examples:[['No hablo francés.','Ich spreche kein Französisch.'],['¿Dónde vives?','Wo wohnst du?'],['No tengo nada.','Ich habe nichts.']],
 tip:'Für „kein" gibt es kein eigenes Wort: einfach „no" vor das Verb – „No tengo coche."',
 ex:[
 'Yo ___ hablo francés.|no|ni|sin|Verneinung: no vor das Verb.',
 'No tengo ___.|nada|algo|no|„nichts" = no … nada.',
 '¿___ te llamas?|Cómo|Qué|Quién|„Wie heißt du?" → cómo.',
 '¿___ vives? —En Berlín.|Dónde|Cuándo|Quién|Antwort ist ein Ort → dónde.',
 '¿___ es tu cumpleaños? —En mayo.|Cuándo|Dónde|Cuánto|Antwort ist ein Zeitpunkt → cuándo.',
 '¿___ cuesta el café?|Cuánto|Cómo|Cuál|„Wie viel?" → cuánto.',
 'No voy ___ al gimnasio.|nunca|nadie|nada|„nie" = no … nunca.',
 '¿___ es ese chico? —Es mi hermano.|Quién|Qué|Dónde|Frage nach einer Person → quién.',
 '¿Por qué no vienes? —___ estoy cansado.|Porque|Por qué|Pero|Antwort mit „weil" → porque (ein Wort).']},

{id:'b08',title:'Adjektive & mein, dein, sein',icon:'🎨',
 intro:'Im Spanischen passt sich das Adjektiv an das Nomen an – und steht meistens dahinter.',
 sections:[
  {h:'Das Adjektiv steht hinten',t:'<p><i>una casa <b>blanca</b></i> – ein weißes Haus<br><i>un coche <b>rojo</b></i> – ein rotes Auto</p>'},
  {h:'Es passt sich an',t:T(['|<b>Einzahl</b>|<b>Mehrzahl</b>','männlich|rojo|rojos','weiblich|roja|rojas'])+'<p>Adjektive auf <b>-e</b> oder Konsonant haben nur eine Form für beide Geschlechter: <i>grande, verde, azul, fácil</i>. Mehrzahl: <i>grandes, azules</i>.</p>'},
  {h:'mein, dein, sein',t:T(['mein|<b>mi</b> libro|<b>mis</b> libros','dein|<b>tu</b> libro|<b>tus</b> libros','sein / ihr / Ihr|<b>su</b> libro|<b>sus</b> libros','unser|<b>nuestro</b> / nuestra|nuestros / nuestras'])+'<p>Achtung: <b>tu</b> = dein, <b>tú</b> (mit Akzent) = du.</p>'}
 ],
 examples:[['Tengo un coche rojo.','Ich habe ein rotes Auto.'],['Mis padres viven en Bonn.','Meine Eltern wohnen in Bonn.'],['Es una ciudad muy bonita.','Es ist eine sehr schöne Stadt.']],
 tip:'Schau immer auf das Nomen: Ist es weiblich und Mehrzahl, bekommt das Adjektiv -as.',
 ex:[
 'Una casa ___.|blanca|blanco|blancos|casa ist weiblich, Einzahl → blanca.',
 'Los coches ___.|rojos|rojo|rojas|männlich, Mehrzahl → rojos.',
 '___ hermanos viven en Bonn. (meine)|Mis|Mi|Yo|Mehrzahl → mis.',
 'Las chicas son ___.|simpáticas|simpáticos|simpática|weiblich, Mehrzahl → -as.',
 'Tengo un amigo ___.|español|española|españoles|männlich, Einzahl → español.',
 '¿Es ___ libro? (dein)|tu|tus|tú|dein = tu (ohne Akzent).',
 'Dos camisetas ___.|verdes|verde|verdas|Adjektive auf -e bekommen nur ein -s.',
 '___ casa es pequeña. (unser)|Nuestra|Nuestro|Nuestras|casa ist weiblich → nuestra.']},

{id:'b09',title:'me gusta: Das mag ich',icon:'😍',
 intro:'„Ich mag" funktioniert auf Spanisch andersherum: Wörtlich sagst du „Mir gefällt …".',
 sections:[
  {h:'gusta oder gustan?',t:'<p>Eine Sache oder eine Tätigkeit → <b>gusta</b>:<br><i>Me gusta el café. Me gusta bailar.</i></p><p>Mehrere Sachen → <b>gustan</b>:<br><i>Me gustan los gatos.</i></p>'},
  {h:'Wem gefällt es?',t:T(['<b>me</b> gusta|ich mag','<b>te</b> gusta|du magst','<b>le</b> gusta|er / sie mag, Sie mögen','<b>nos</b> gusta|wir mögen','<b>os</b> gusta|ihr mögt','<b>les</b> gusta|sie mögen'])},
  {h:'Nicht mögen, lieben, zustimmen',t:'<p><i><b>No</b> me gusta el té.</i> – Ich mag keinen Tee.<br><i>Me <b>encanta</b> la playa.</i> – Ich liebe den Strand.</p><p>—Me gusta el fútbol. —<i>A mí <b>también</b>.</i> (Ich auch.)<br>—No me gusta. —<i>A mí <b>tampoco</b>.</i> (Ich auch nicht.)</p>'}
 ],
 examples:[['Me gusta mucho la música.','Ich mag Musik sehr.'],['¿Te gusta bailar?','Tanzt du gern?'],['No me gustan las verduras.','Ich mag kein Gemüse.']],
 tip:'Denk an „Mir gefällt": Das Verb richtet sich nach der Sache, nicht nach dir.',
 ex:[
 'Me ___ el chocolate.|gusta|gustan|gusto|Eine Sache → gusta.',
 'Me ___ los gatos.|gustan|gusta|gusto|Mehrere Sachen → gustan.',
 '¿___ gusta bailar? (dir)|Te|Tú|Me|dir → te.',
 'A Ana ___ gusta el té.|le|la|se|ihr → le.',
 'Nos ___ viajar.|gusta|gustan|gustamos|Eine Tätigkeit (Grundform) → gusta.',
 'No me ___ las verduras.|gustan|gusta|gusto|las verduras = Mehrzahl → gustan.',
 'Me ___ la música española. (lieben)|encanta|encantan|encanto|encantar funktioniert wie gustar.',
 '—Me gusta el fútbol. —A mí ___.|también|tampoco|tan|Zustimmen bei etwas Positivem → también.']},

{id:'b10',title:'Verben mit Eigenleben',icon:'🥾',
 intro:'Einige der häufigsten Verben verändern in der Gegenwart ihren Stamm. Es gibt aber nur drei Muster – und eine Stiefel-Regel.',
 sections:[
  {h:'Drei Stammwechsel',t:T(['<b>e → ie</b>|querer: qu<b>ie</b>ro, qu<b>ie</b>res, qu<b>ie</b>re','<b>o → ue</b>|poder: p<b>ue</b>do, p<b>ue</b>des, p<b>ue</b>de','<b>e → i</b>|pedir: p<b>i</b>do, p<b>i</b>des, p<b>i</b>de'])+'<p>Genauso: <i>empezar, entender, pensar, cerrar</i> (ie) · <i>dormir, volver, costar</i> (ue)</p>'},
  {h:'Die Stiefel-Regel',t:'<p>Bei <b>nosotros</b> und <b>vosotros</b> bleibt alles normal:<br><i>queremos, queréis · podemos, podéis</i></p>'},
  {h:'Nur „ich" ist anders',t:'<p>hacer → <b>hago</b> · poner → <b>pongo</b> · salir → <b>salgo</b><br>saber → <b>sé</b> · ver → <b>veo</b> · dar → <b>doy</b> · conocer → <b>conozco</b></p><p>Der Rest ist regelmäßig: <i>haces, hace …</i></p>'}
 ],
 examples:[['Quiero un café con leche.','Ich möchte einen Milchkaffee.'],['¿Puedes ayudarme?','Kannst du mir helfen?'],['No sé dónde está.','Ich weiß nicht, wo es ist.']],
 tip:'„Quiero …" und „¿Puedo …?" sind deine zwei wichtigsten Sätze im Urlaub.',
 ex:[
 'Yo ___ un café. (querer)|quiero|quero|quiere|e → ie: quiero.',
 '¿___ ayudarme? (poder, tú)|Puedes|Podes|Puede|o → ue: puedes.',
 'Nosotros ___ ir a la playa. (querer)|queremos|quieremos|quieren|Bei nosotros gibt es keinen Stammwechsel.',
 'Yo ___ deporte. (hacer)|hago|haco|hace|hacer → yo hago.',
 'Ella ___ ocho horas. (dormir)|duerme|dorme|duermo|o → ue: duerme.',
 'Yo no ___ dónde está. (saber)|sé|sabo|sabe|saber → yo sé.',
 '¿A qué hora ___ la clase? (empezar)|empieza|empeza|empiezo|e → ie: empieza.',
 'Yo ___ de casa a las ocho. (salir)|salgo|salo|sale|salir → yo salgo.']},

{id:'b11',title:'me levanto: Verben mit „sich"',icon:'🪥',
 intro:'Aufstehen, duschen, heißen: Viele Alltagsverben haben im Spanischen ein kleines „sich" dabei.',
 sections:[
  {h:'Das kleine Wort vor dem Verb',t:T(['yo|<b>me</b> levanto','tú|<b>te</b> levantas','él / ella|<b>se</b> levanta','nosotros|<b>nos</b> levantamos','vosotros|<b>os</b> levantáis','ellos|<b>se</b> levantan'])+'<p>In der Grundform hängt „se" hinten dran: <i>levantar<b>se</b>, duchar<b>se</b>, llamar<b>se</b></i>.</p>'},
  {h:'Du kennst schon eins',t:'<p><i>Me llamo Paco.</i> heißt wörtlich: „Ich nenne mich Paco."</p>'},
  {h:'Nach einem anderen Verb',t:'<p>Dann hängt das kleine Wort an die Grundform:<br><i>Quiero duchar<b>me</b>.</i> – Ich will mich duschen.<br><i>Tengo que levantar<b>me</b>.</i></p>'}
 ],
 examples:[['Me levanto a las siete.','Ich stehe um sieben auf.'],['¿Cómo te llamas?','Wie heißt du?'],['Nos acostamos muy tarde.','Wir gehen sehr spät ins Bett.']],
 tip:'me – te – se – nos – os – se: Sag die Reihe ein paarmal laut, dann sitzt sie.',
 ex:[
 'Yo ___ levanto a las siete.|me|se|te|yo → me.',
 '¿Cómo ___ llamas?|te|se|me|tú → te.',
 'Ella ___ ducha por la mañana.|se|le|la|ella → se.',
 'Nosotros ___ acostamos tarde.|nos|os|se|nosotros → nos.',
 'Mis hijos ___ despiertan temprano.|se|les|os|ellos → se.',
 'Quiero ___ ahora. (ducharse, yo)|ducharme|me duchar|ducharse|Nach quiero hängt „me" an die Grundform.',
 '¿A qué hora ___ levantáis?|os|se|nos|vosotros → os.',
 'Me ___ Paco.|llamo|llama|llamas|yo → llamo.']},

{id:'b12',title:'Was machst du gerade?',icon:'⏱️',
 intro:'Wenn etwas genau in diesem Moment passiert, nimmt das Spanische „estar" plus eine -ndo-Form.',
 sections:[
  {h:'estar + -ando / -iendo',t:'<p>-ar-Verben → <b>-ando</b>: hablar → habl<b>ando</b><br>-er / -ir-Verben → <b>-iendo</b>: comer → com<b>iendo</b>, vivir → viv<b>iendo</b></p><p><i>Estoy comiendo.</i> – Ich esse gerade.</p>'},
  {h:'Ein paar Sonderformen',t:'<p>leer → <b>leyendo</b> · dormir → <b>durmiendo</b> · decir → <b>diciendo</b> · ir → <b>yendo</b></p>'},
  {h:'Wann?',t:'<p>Nur für das, was <b>jetzt gerade</b> läuft:<br><i>¿Qué estás haciendo?</i> – Was machst du gerade?</p><p>Für Gewohnheiten bleibt die normale Gegenwart: <i>Trabajo en un banco.</i></p>'}
 ],
 examples:[['Estoy aprendiendo español.','Ich lerne gerade Spanisch.'],['¿Qué estás haciendo?','Was machst du gerade?'],['Los niños están durmiendo.','Die Kinder schlafen gerade.']],
 tip:'Am Telefon der Klassiker: „Ahora no puedo, estoy trabajando."',
 ex:[
 'Estoy ___ la cena. (preparar)|preparando|preparado|preparo|-ar → -ando.',
 '¿Qué estás ___? (hacer)|haciendo|hacendo|hecho|-er → -iendo.',
 'Los niños están ___. (dormir)|durmiendo|dormiendo|dormido|Sonderform: durmiendo.',
 'Ana ___ leyendo un libro.|está|es|hay|Die -ndo-Form braucht immer estar.',
 'Estamos ___ en el parque. (comer)|comiendo|comando|comido|-er → -iendo.',
 'Ahora no puedo, estoy ___. (trabajar)|trabajando|trabajo|trabajar|-ar → -ando.',
 'Está ___. (llover)|lloviendo|llovando|llueve|-er → -iendo.',
 'Estoy ___ un mensaje. (escribir)|escribiendo|escribando|escrito|-ir → -iendo.']},

{id:'b13',title:'lo, la, le: ihn, sie, ihm',icon:'👉',
 intro:'Damit du nicht ständig dasselbe Nomen wiederholst: kleine Wörter, die es ersetzen.',
 sections:[
  {h:'Wen oder was? → lo, la, los, las',t:'<p>—¿Tienes <b>el libro</b>? —Sí, <b>lo</b> tengo.<br>—¿Ves <b>la casa</b>? —Sí, <b>la</b> veo.<br>—¿Compras <b>los zapatos</b>? —Sí, <b>los</b> compro.</p>'},
  {h:'Wem? → le, les',t:'<p><i><b>Le</b> doy un regalo.</i> – Ich gebe ihm / ihr ein Geschenk.<br><i><b>Les</b> escribo.</i> – Ich schreibe ihnen.</p>'},
  {h:'mich, dich, uns',t:'<p><b>me</b> (mich, mir) · <b>te</b> (dich, dir) · <b>nos</b> (uns) · <b>os</b> (euch)</p><p><i>¿Me ayudas? – Sí, te ayudo.</i></p>'},
  {h:'Wo stehen sie?',t:'<p><b>Vor</b> dem gebeugten Verb: <i>Lo compro.</i><br>An die Grundform <b>angehängt</b>: <i>Quiero comprar<b>lo</b>.</i></p>'}
 ],
 examples:[['No lo sé.','Ich weiß es nicht.'],['¿Me ayudas, por favor?','Hilfst du mir bitte?'],['Te llamo mañana.','Ich rufe dich morgen an.']],
 tip:'Anders als im Deutschen steht das kleine Wort VOR dem Verb: „Te quiero" = Ich liebe dich.',
 ex:[
 '¿El libro? ___ tengo en casa.|Lo|La|Le|el libro ist männlich → lo.',
 '¿La película? Ya ___ vi.|la|lo|le|la película ist weiblich → la.',
 '¿Las llaves? No ___ encuentro.|las|los|les|weiblich, Mehrzahl → las.',
 '¿Me ayudas? —Sí, ___ ayudo.|te|me|lo|Ich helfe dir → te.',
 '___ doy un regalo a mi madre.|Le|La|Lo|Wem? → le.',
 '¿Los zapatos? ___ compro mañana.|Los|Las|Les|männlich, Mehrzahl → los.',
 '¿___ llamas esta tarde? (mich)|Me|Te|Yo|mich → me.',
 'La película es buena. Quiero ___.|verla|la ver|verle|An die Grundform wird das Wort angehängt.']},

{id:'b14',title:'Vergleichen: más, menos, muy',icon:'📏',
 intro:'Größer, billiger, genauso gut – und der Unterschied zwischen „muy" und „mucho", über den fast jeder stolpert.',
 sections:[
  {h:'Vergleichen',t:'<p><b>más … que</b> = mehr … als: <i>Madrid es más grande que Sevilla.</i><br><b>menos … que</b> = weniger … als: <i>Es menos caro que el otro.</i><br><b>tan … como</b> = so … wie: <i>Soy tan alto como tú.</i></p>'},
  {h:'Vier Sonderformen',t:'<p>gut → <b>mejor</b> (besser) · schlecht → <b>peor</b> (schlechter)<br>alt → <b>mayor</b> (älter) · jung → <b>menor</b> (jünger)</p>'},
  {h:'Der / die / das …ste',t:'<p><i>Es <b>la</b> ciudad <b>más</b> bonita <b>de</b> España.</i> – die schönste Stadt Spaniens</p>'},
  {h:'muy oder mucho?',t:'<p><b>muy</b> + Adjektiv = sehr: <i>muy caro, muy bien</i><br><b>mucho</b> nach einem Verb = viel: <i>Trabajo mucho.</i><br><b>mucho/a/os/as</b> vor einem Nomen = viel(e): <i>mucha gente, muchos amigos</i></p>'}
 ],
 examples:[['El tren es más rápido que el autobús.','Der Zug ist schneller als der Bus.'],['Estoy muy cansado.','Ich bin sehr müde.'],['Tengo muchos amigos en España.','Ich habe viele Freunde in Spanien.']],
 tip:'„muy mucho" gibt es nicht. Für „sehr viel" sagst du „muchísimo".',
 ex:[
 'Madrid es ___ grande que Sevilla.|más|muy|mucho|mehr … als = más … que.',
 'Mi hermano es ___ alto como yo.|tan|más|muy|so … wie = tan … como.',
 'Este vino es ___ que el otro. (besser)|mejor|más bueno|bien|gut → besser = mejor.',
 'El tren es más rápido ___ el autobús.|que|como|de|„als" beim Vergleich = que.',
 'Estoy ___ cansado.|muy|mucho|muchos|Vor einem Adjektiv → muy.',
 'Trabajo ___.|mucho|muy|muchos|Nach einem Verb → mucho.',
 'Tengo ___ amigos.|muchos|muy|mucho|Vor einem Nomen in der Mehrzahl → muchos.',
 'Es la ciudad más bonita ___ mundo.|del|que el|como el|der/die …ste von = de (de + el = del).']},

{id:'b15',title:'Ich habe gemacht: das Perfekt',icon:'✅',
 intro:'Deine erste Vergangenheit – und sie funktioniert fast wie im Deutschen: „haben" plus Partizip.',
 sections:[
  {h:'haber + Partizip',t:T(['yo|<b>he</b> comido','tú|<b>has</b> comido','él / ella|<b>ha</b> comido','nosotros|<b>hemos</b> comido','vosotros|<b>habéis</b> comido','ellos|<b>han</b> comido'])},
  {h:'Das Partizip bilden',t:'<p>-ar → <b>-ado</b>: hablar → habl<b>ado</b><br>-er / -ir → <b>-ido</b>: comer → com<b>ido</b>, vivir → viv<b>ido</b></p><p>Unregelmäßig: hacer → <b>hecho</b> · ver → <b>visto</b> · decir → <b>dicho</b> · escribir → <b>escrito</b> · poner → <b>puesto</b> · volver → <b>vuelto</b></p>'},
  {h:'Wann?',t:'<p>Wenn der Zeitraum noch läuft oder gerade erst vorbei ist:<br><b>hoy · esta semana · este año · ya</b> (schon) <b>· todavía no</b> (noch nicht) <b>· alguna vez</b> (schon einmal)</p>'},
  {h:'Kein „sein"',t:'<p>Im Deutschen: „ich <u>bin</u> gegangen". Im Spanischen immer mit haber: <i><b>He</b> ido.</i></p>'}
 ],
 examples:[['Hoy he trabajado mucho.','Heute habe ich viel gearbeitet.'],['¿Has estado en España?','Warst du schon in Spanien?'],['Todavía no he comido.','Ich habe noch nicht gegessen.']],
 tip:'„he" und das Partizip bleiben zusammen wie ein Paar: „No lo he visto" – nichts darf dazwischen.',
 ex:[
 'Hoy ___ comido paella. (yo)|he|ha|has|yo → he.',
 '¿___ visto esta película? (tú)|Has|He|Ha|tú → has.',
 'Nosotros ya ___ terminado.|hemos|han|habéis|nosotros → hemos.',
 'Esta semana he ___ mucho. (trabajar)|trabajado|trabajando|trabajo|-ar → -ado.',
 '¿Qué has ___ hoy? (hacer)|hecho|hacido|haciendo|hacer → hecho (unregelmäßig).',
 'Todavía no he ___ el libro. (leer)|leído|leyendo|leo|-er → -ido: leído.',
 'Ellos ___ llegado tarde.|han|ha|hemos|ellos → han.',
 '¿Has ___ alguna vez en España? (estar)|estado|estando|estar|-ar → -ado: estado.']},

{id:'b16',title:'Gestern: das Indefinido',icon:'📆',
 intro:'Für alles, was abgeschlossen ist – gestern, letzte Woche, 2019 – gibt es eine eigene Vergangenheit.',
 sections:[
  {h:'Die regelmäßigen Endungen',t:T(['|<b>hablar</b>|<b>comer / vivir</b>','yo|habl<b>é</b>|com<b>í</b>','tú|habl<b>aste</b>|com<b>iste</b>','él / ella|habl<b>ó</b>|com<b>ió</b>','nosotros|habl<b>amos</b>|com<b>imos</b>','vosotros|habl<b>asteis</b>|com<b>isteis</b>','ellos|habl<b>aron</b>|com<b>ieron</b>'])},
  {h:'Die vier wichtigsten Unregelmäßigen',t:T(['<b>ser / ir</b>|fui, fuiste, fue, fuimos, fuisteis, fueron','<b>hacer</b>|hice, hiciste, hizo …','<b>tener</b>|tuve, tuviste, tuvo …','<b>estar</b>|estuve, estuviste, estuvo …'])+'<p>„ser" und „ir" haben dieselben Formen: <i>Fui a Madrid</i> (ich fuhr) · <i>Fue genial</i> (es war toll).</p>'},
  {h:'Signalwörter',t:'<p><b>ayer</b> (gestern) · <b>anoche</b> (gestern Abend) · <b>la semana pasada</b> · <b>el año pasado</b> · <b>en 2019</b></p>'}
 ],
 examples:[['Ayer comí con mi madre.','Gestern habe ich mit meiner Mutter gegessen.'],['El año pasado fui a México.','Letztes Jahr bin ich nach Mexiko gefahren.'],['¿Qué hiciste ayer?','Was hast du gestern gemacht?']],
 tip:'Der Akzent ändert alles: „hablo" = ich spreche, „habló" = er sprach.',
 ex:[
 'Ayer ___ con mi madre. (hablar, yo)|hablé|hablo|habló|yo, -ar → -é.',
 'El sábado ___ pizza. (comer, nosotros)|comimos|comemos|comieron|nosotros, -er → -imos.',
 'Ana ___ a las diez. (llegar)|llegó|llego|llegué|sie → llegó. Ohne Akzent hieße es „ich komme an".',
 'El año pasado ___ a México. (ir, yo)|fui|fue|voy|ir → yo fui.',
 '¿Qué ___ ayer? (hacer, tú)|hiciste|haciste|hizo|hacer → tú hiciste.',
 'Ellos ___ en Madrid dos años. (vivir)|vivieron|viven|vivió|ellos, -ir → -ieron.',
 'La fiesta ___ muy divertida. (ser)|fue|fui|es|ser → fue.',
 'Anoche no ___ tiempo. (tener, yo)|tuve|tení|tuvo|tener → yo tuve.']},

{id:'b17',title:'Früher: das Imperfecto',icon:'🧸',
 intro:'Wie war es früher? Was hast du als Kind immer gemacht? Dafür gibt es eine dritte, sehr regelmäßige Vergangenheit.',
 sections:[
  {h:'Die Endungen',t:T(['|<b>hablar</b>|<b>comer / vivir</b>','yo|habl<b>aba</b>|com<b>ía</b>','tú|habl<b>abas</b>|com<b>ías</b>','él / ella|habl<b>aba</b>|com<b>ía</b>','nosotros|habl<b>ábamos</b>|com<b>íamos</b>','vosotros|habl<b>abais</b>|com<b>íais</b>','ellos|habl<b>aban</b>|com<b>ían</b>'])},
  {h:'Nur drei Unregelmäßige',t:'<p>ser → <b>era</b> · ir → <b>iba</b> · ver → <b>veía</b></p>'},
  {h:'Wofür?',t:'<p>Gewohnheiten von früher: <i>De niño jugaba al fútbol.</i><br>Beschreibungen: <i>La casa era grande.</i><br>„Es gab": <i>Había mucha gente.</i></p><p>Signalwörter: <b>antes</b> (früher) · <b>de niño</b> (als Kind) · <b>siempre</b> · <b>todos los días</b></p>'}
 ],
 examples:[['Antes vivía en un pueblo.','Früher wohnte ich in einem Dorf.'],['De niño jugaba mucho al fútbol.','Als Kind spielte ich viel Fußball.'],['Mi abuela era muy simpática.','Meine Oma war sehr nett.']],
 tip:'Wann Indefinido und wann Imperfecto? Das übst du später in der ersten B2-Grammatik-Lektion mit der Kamera-Regel.',
 ex:[
 'De niño ___ en un pueblo. (vivir, yo)|vivía|vivo|viviré|Früher, über längere Zeit → -ía.',
 'Antes ___ mucho al tenis. (jugar, nosotros)|jugábamos|jugaremos|jugáis|Gewohnheit von früher → -ábamos.',
 'Mi abuela ___ muy simpática. (ser)|era|eras|será|ser → era.',
 'De pequeños, todos los veranos ___ a la playa. (ir, nosotros)|íbamos|iremos|vamos|ir → íbamos.',
 'Cuando tenía diez años, ___ muchos dibujos animados. (ver, yo)|veía|veo|veré|ver → veía.',
 'Antes no ___ móviles. (haber)|había|hay|habrá|„es gab" = había.',
 'De joven, mi padre siempre ___ la radio. (escuchar)|escuchaba|escuchará|escuchando|Gewohnheit von früher → -aba.',
 '¿Dónde ___ cuando eras pequeño? (vivir, tú)|vivías|vives|vivirás|tú, -ir → -ías.']}
];

const U = [
 {lvl:'A1',title:'Erste Schritte',sub:'Begrüßen, zählen und richtig aussprechen.',lessons:['a01','b01','a02','b02','a03']},
 {lvl:'A1',title:'Wer bin ich?',sub:'Dich vorstellen, beschreiben und Fragen verstehen.',lessons:['b03','a13','b04','a10','b08']},
 {lvl:'A1',title:'Mein Alltag',sub:'Die ersten Verben – und schon bildest du ganze Sätze.',lessons:['a08','b05','a07','b06','a06','b07']},
 {lvl:'A1',title:'Essen & Zuhause',sub:'Bestellen, sagen was du magst und wie du wohnst.',lessons:['a04','b09','a14','a05','b10']},
 {lvl:'A2',title:'Durch den Tag',sub:'Vom Aufstehen bis zum Feierabend.',lessons:['a17','b11','a12','b12','a16']},
 {lvl:'A2',title:'Unterwegs & Einkaufen',sub:'Wege finden, shoppen und vergleichen.',lessons:['a09','b13','a11','b14','a18']},
 {lvl:'A2',title:'Erzähl von gestern',sub:'Deine ersten Vergangenheiten.',lessons:['a15','b15','b16','b17']}
];

UNITS.forEach(u => { u.lvl = 'B2'; });
VOCAB.unshift(...V); GRAMMAR.unshift(...G); UNITS.unshift(...U);
})();
