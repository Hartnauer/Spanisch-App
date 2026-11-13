// Grammatik-Lektionen. Übungen: 'Satz mit ___|richtig|falsch|falsch|Erklärung'
(() => {
const T = rows => '<table class="t">' + rows.map(r => '<tr>' + r.split('|').map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';

window.GRAMMAR = [
{id:'g01',title:'Indefinido oder Imperfecto?',icon:'📸',
 intro:'Zwei Vergangenheiten, zwei Aufgaben: Die eine erzählt, was passiert ist – die andere malt das Bild drumherum.',
 sections:[
  {h:'Die Kamera-Regel',t:'<p><b>Indefinido = Foto 📸</b> Klick! Eine Handlung, einmal passiert und fertig.<br><i>Ayer comí paella.</i></p><p><b>Imperfecto = Film 🎞️</b> Es läuft im Hintergrund: Beschreibungen, Gewohnheiten, etwas war gerade im Gange.<br><i>De niño comía paella todos los domingos.</i></p>'},
  {h:'Beide im selben Satz',t:'<p>Der Film läuft – und dann macht es Klick:</p><p><i>Dormía</i> (Hintergrund) <i>cuando sonó</i> (plötzlich!) <i>el teléfono.</i></p>'},
  {h:'Signalwörter',t:T(['<b>Indefinido</b>|<b>Imperfecto</b>','ayer, anoche|siempre, antes','el año pasado|todos los días','de repente|de niño, mientras','una vez, dos veces|normalmente'])}
 ],
 examples:[['Cuando llegué a casa, mi gato dormía en el sofá.','Als ich nach Hause kam, schlief meine Katze auf dem Sofa.'],['Antes vivía en Colonia.','Früher wohnte ich in Köln.'],['Ayer compré un móvil nuevo.','Gestern habe ich ein neues Handy gekauft.']],
 tip:'Frag dich: „Was ist passiert?" → Indefinido. „Wie war es drumherum?" → Imperfecto.',
 ex:[
 'Ayer ___ a mi jefa en el supermercado.|vi|veía|veo|„Ayer" + einmaliges, abgeschlossenes Ereignis → Indefinido.',
 'De pequeño ___ al fútbol todos los días.|jugaba|jugué|jugó|Gewohnheit in der Vergangenheit („todos los días") → Imperfecto.',
 'Mientras yo ___, mi hermano ponía la mesa.|cocinaba|cociné|cocino|„Mientras" = zwei Dinge liefen gleichzeitig → Imperfecto.',
 'Estábamos cenando cuando ___ la luz.|se fue|se iba|se va|Ein plötzliches Ereignis unterbricht den Hintergrund → Indefinido.',
 'La casa de mis abuelos ___ un jardín enorme.|tenía|tuvo|tuvieron|Beschreibung, wie etwas war → Imperfecto.',
 'El año pasado ___ tres veces a España.|fui|iba|iré|Abgezählt und abgeschlossen („tres veces") → Indefinido.',
 'No salí porque ___ muy cansado.|estaba|estuve|estaré|Zustand als Hintergrund und Grund → Imperfecto.',
 'De repente ___ a llover.|empezó|empezaba|empiece|„De repente" = plötzlich → Indefinido.']},

{id:'g02',title:'Subjuntivo: So wird er gebildet',icon:'🔧',
 intro:'Der Subjuntivo ist keine Zeit, sondern eine Stimmung: Er zeigt, dass etwas gewünscht, gefühlt oder unsicher ist – und nicht einfach eine Tatsache.',
 sections:[
  {h:'Der Trick mit den vertauschten Vokalen',t:'<p>Nimm die <b>yo-Form</b> im Präsens, streiche das <b>-o</b> und tausche den Vokal:</p><p>-ar-Verben bekommen <b>e</b> · -er/-ir-Verben bekommen <b>a</b></p>'+T(['<b>hablar</b>|<b>comer</b>|<b>vivir</b>','hable|coma|viva','hables|comas|vivas','hable|coma|viva','hablemos|comamos|vivamos','habléis|comáis|viváis','hablen|coman|vivan'])},
  {h:'Unregelmäßige yo-Form? Die bleibt!',t:'<p>tengo → <b>tenga</b> · hago → <b>haga</b> · digo → <b>diga</b><br>salgo → <b>salga</b> · pongo → <b>ponga</b> · conozco → <b>conozca</b></p>'},
  {h:'Die 6 echten Ausreißer',t:'<p>ser → <b>sea</b> · ir → <b>vaya</b> · haber → <b>haya</b><br>estar → <b>esté</b> · saber → <b>sepa</b> · dar → <b>dé</b></p>'}
 ],
 examples:[['Espero que tengas un buen día.','Ich hoffe, du hast einen guten Tag.'],['Quiero que vengas a mi fiesta.','Ich möchte, dass du zu meiner Party kommst.'],['Ojalá haga sol mañana.','Hoffentlich scheint morgen die Sonne.']],
 tip:'Merksatz: „ar wird e, er/ir wird a" – einfach die Vokale tauschen!',
 ex:[
 'Quiero que tú ___ más despacio. (hablar)|hables|hablas|hablarás|-ar-Verb → Subjuntivo mit e: hables.',
 'Espero que ___ buen tiempo mañana. (hacer)|haga|hace|hará|yo hago → haga.',
 'Es importante que nosotros ___ a tiempo. (llegar)|lleguemos|llegamos|llegaremos|llegar → llegue- (mit u, damit das g hart bleibt).',
 'Ojalá ___ a la fiesta. (ir, ellos)|vayan|van|irán|ir ist unregelmäßig: vaya, vayas, vaya …',
 'No creo que ___ verdad. (ser)|sea|es|será|ser → sea.',
 'Quiero que me ___ la verdad. (decir, tú)|digas|dices|dirás|yo digo → diga, digas …',
 'Espero que ___ bien. (estar, vosotros)|estéis|estáis|estaréis|estar → esté, estés, esté, estemos, estéis, estén.',
 'Dudo que él lo ___. (saber)|sepa|sabe|sabrá|saber → sepa.']},

{id:'g03',title:'Subjuntivo: Wünsche & Bitten',icon:'🙏',
 intro:'Sobald du willst, dass JEMAND ANDERES etwas tut, braucht das Spanische den Subjuntivo.',
 sections:[
  {h:'Die Zwei-Personen-Regel',t:'<p><b>Eine Person</b> → Infinitiv:<br><i>Quiero ir.</i> (Ich will gehen.)</p><p><b>Zwei Personen + que</b> → Subjuntivo:<br><i>Quiero que vayas.</i> (Ich will, dass du gehst.)</p>'},
  {h:'Typische Auslöser',t:'<p>querer que · esperar que · pedir que · necesitar que · recomendar que · aconsejar que · preferir que · prohibir que · <b>ojalá</b></p>'},
  {h:'Wie im Alltag',t:'<p>Deine Mitbewohnerin sagt: <i>„Te pido que bajes la basura."</i> Sie bittet, du sollst. Wunsch + andere Person = Subjuntivo.</p>'}
 ],
 examples:[['Quiero que me llames mañana.','Ich möchte, dass du mich morgen anrufst.'],['Te pido que tengas paciencia.','Ich bitte dich, Geduld zu haben.'],['Espero que te guste la comida.','Ich hoffe, das Essen schmeckt dir.']],
 tip:'Zähl die Personen: eine → Infinitiv, zwei + „que" → Subjuntivo.',
 ex:[
 'Mi madre quiere que yo ___ más verdura.|coma|como|comer|Zwei Personen (Mutter ≠ ich) + querer que → Subjuntivo.',
 'Quiero ___ español con fluidez.|hablar|hable|hablo|Gleiche Person (ich will, ich spreche) → Infinitiv.',
 'Te recomiendo que ___ este libro.|leas|lees|leer|recomendar que + andere Person → Subjuntivo.',
 'Necesito que me ___ con la mudanza.|ayudes|ayudas|ayudarás|necesitar que → Subjuntivo.',
 'El médico me aconseja que ___ menos.|trabaje|trabajo|trabajar|aconsejar que → Subjuntivo.',
 'Ojalá ___ pronto las vacaciones.|lleguen|llegan|llegar|Nach „ojalá" steht immer der Subjuntivo.',
 'Prefiero que nos ___ en mi casa.|veamos|vemos|veremos|preferir que → Subjuntivo.',
 'Mis padres esperan ___ este verano.|viajar|viajen|viajan|Gleiche Person (sie hoffen, sie reisen) → Infinitiv.']},

{id:'g04',title:'Subjuntivo: Gefühle & Bewertungen',icon:'❤️',
 intro:'Du freust dich, ärgerst dich oder findest etwas wichtig? Dann folgt nach „que" der Subjuntivo.',
 sections:[
  {h:'Gefühle als Auslöser',t:'<p>me alegra que · me gusta que · me molesta que · me sorprende que · tengo miedo de que · siento que (es tut mir leid) · me da pena que</p>'},
  {h:'Bewertungen: es + Adjektiv + que',t:'<p>es importante que · es necesario que · es mejor que · es normal que · es raro que · es una pena que</p>'},
  {h:'Achtung, Tatsachen!',t:'<p>Stellst du nur eine <b>Tatsache</b> fest, bleibt der Indikativ:<br>es verdad que · es cierto que · es evidente que · está claro que</p><p><i>Es verdad que llueve.</i><br>Verneint kippt es: <i>No es verdad que llueva.</i></p>'}
 ],
 examples:[['Me encanta que cocines para mí.','Ich liebe es, dass du für mich kochst.'],['Es mejor que salgamos pronto.','Es ist besser, wenn wir früh losgehen.'],['Siento que estés enfermo.','Es tut mir leid, dass du krank bist.']],
 tip:'Herz ❤️ oder Urteil ⚖️ → Subjuntivo. Reine Tatsache 📋 → Indikativ.',
 ex:[
 'Me alegro de que ___ aquí.|estés|estás|estar|Gefühl (sich freuen) + que → Subjuntivo.',
 'Es importante que ___ agua.|bebas|bebes|beberás|Bewertung „es importante que" → Subjuntivo.',
 'Es verdad que ___ mucho trabajo.|tiene|tenga|tener|„Es verdad que" stellt eine Tatsache fest → Indikativ.',
 'Me molesta que la gente ___ en el cine.|hable|habla|hablar|Gefühl (es stört mich) → Subjuntivo.',
 'Es una pena que no ___ venir.|puedas|puedes|podrás|„Es una pena que" = Bewertung → Subjuntivo.',
 'Está claro que ella ___ razón.|tiene|tenga|tuviera|„Está claro que" = Tatsache → Indikativ.',
 'Me sorprende que no lo ___.|sepas|sabes|sabrás|Überraschung = Gefühl → Subjuntivo.',
 'Es normal que ___ nervioso antes del examen.|estés|estás|eres|„Es normal que" = Bewertung → Subjuntivo.']},

{id:'g05',title:'Subjuntivo: Zweifel & Meinung',icon:'🤔',
 intro:'Sicher oder unsicher? Genau daran entscheidet sich, ob Indikativ oder Subjuntivo kommt.',
 sections:[
  {h:'Ich glaube → Indikativ',t:'<p>creo que · pienso que · me parece que · estoy seguro de que</p><p><i>Creo que viene.</i></p>'},
  {h:'Ich glaube NICHT → Subjuntivo',t:'<p>no creo que · no pienso que · no me parece que · dudo que · no estoy seguro de que</p><p><i>No creo que venga.</i></p>'},
  {h:'Vielleicht …',t:'<p><b>quizá(s) / tal vez</b> → meist Subjuntivo: <i>Quizás venga.</i><br><b>es posible que / puede que</b> → Subjuntivo<br><b>a lo mejor</b> → immer Indikativ: <i>A lo mejor viene.</i></p>'}
 ],
 examples:[['Creo que tienes razón.','Ich glaube, du hast recht.'],['No creo que sea tan difícil.','Ich glaube nicht, dass es so schwer ist.'],['Quizás vaya al cine esta noche.','Vielleicht gehe ich heute Abend ins Kino.']],
 tip:'Ein „no" vor creo oder pienso kippt den Satz in den Subjuntivo.',
 ex:[
 'Creo que Ana ___ razón.|tiene|tenga|tuviera|Bejahte Meinung (creo que) → Indikativ.',
 'No creo que Ana ___ razón.|tenga|tiene|tendrá|Verneinte Meinung → Subjuntivo.',
 'Dudo que ___ a tiempo.|lleguemos|llegamos|llegaremos|Zweifel → Subjuntivo.',
 'A lo mejor ___ mañana.|llueve|llueva|lloviera|Nach „a lo mejor" steht immer der Indikativ.',
 'Es posible que ___ tarde.|venga|viene|vendrá|„Es posible que" → Subjuntivo.',
 'Estoy seguro de que lo ___.|sabe|sepa|supiera|Sicherheit → Indikativ.',
 'No me parece que ___ buena idea.|sea|es|será|Verneinte Meinung → Subjuntivo.',
 'Puede que ___ en casa.|estén|están|estarán|„Puede que" (kann sein, dass) → Subjuntivo.']},

{id:'g06',title:'Imperativ: Mach! Mach nicht!',icon:'📣',
 intro:'Befehle, Bitten, Tipps: „Mach!" und „Mach nicht!" sehen im Spanischen unterschiedlich aus.',
 sections:[
  {h:'Bejaht (tú)',t:'<p>Sieht aus wie die 3. Person Präsens: <b>habla, come, escribe</b>.</p><p>Die 8 Kurzen: <b>di, haz, ve, pon, sal, sé, ten, ven</b></p>'},
  {h:'Verneint = Subjuntivo',t:'<p>no <b>hables</b> · no <b>comas</b> · no <b>escribas</b><br>no digas · no hagas · no vayas</p>'},
  {h:'Höflich (usted) = immer Subjuntivo',t:'<p><b>hable, coma, venga</b> / no hable</p>'},
  {h:'Wohin mit den Pronomen?',t:'<p>Bejaht: <b>hinten dran</b> – <i>dímelo, siéntate</i><br>Verneint: <b>davor</b> – <i>no me lo digas, no te sientes</i></p>'}
 ],
 examples:[['Ten cuidado con el perro.','Pass auf den Hund auf.'],['No me digas eso.','Sag mir das nicht.'],['Siéntate y come algo.','Setz dich und iss etwas.']],
 tip:'Die 8 Kurzen wie ein Reim: „di, haz, ve, pon – sal, sé, ten, ven".',
 ex:[
 '¡___ la puerta, por favor! (cerrar, tú)|Cierra|Cierres|Cerrar|Bejahter Befehl für tú = 3. Person Präsens: cierra.',
 'No ___ tan rápido. (hablar, tú)|hables|habla|hablas|Verneinter Befehl → Subjuntivo.',
 '___ la verdad. (decir, tú)|Di|Dice|Digas|decir ist unregelmäßig: di.',
 '¡___ aquí! (venir, tú)|Ven|Viene|Vengas|venir → ven.',
 'No te ___. (preocupar, tú)|preocupes|preocupa|preocupas|Verneint → Subjuntivo, Pronomen steht davor.',
 '¿El libro? ___, por favor. (dar + me + lo, tú)|Dámelo|Me lo da|Me lo des|Bejaht: Pronomen hinten dran → dámelo.',
 '___ usted, por favor. (pasar)|Pase|Pasa|Pasas|Höfliche Form (usted) → Subjuntivo: pase.',
 'No ___ eso. (hacer, tú)|hagas|haz|haces|Verneint → no hagas.']},

{id:'g07',title:'Subjuntivo nach cuando & para que',icon:'⏳',
 intro:'Geht es um die Zukunft oder um einen Zweck, will das Spanische oft den Subjuntivo – sogar nach „cuando".',
 sections:[
  {h:'cuando + Zukunft → Subjuntivo',t:'<p><i>Cuando <b>llegue</b> a casa, te llamo.</i> (Ich bin noch nicht da!)</p><p>Gewohnheit oder Vergangenheit → Indikativ:<br><i>Cuando <b>llego</b> a casa, siempre ceno.</i></p>'},
  {h:'Genauso bei',t:'<p>en cuanto (sobald) · hasta que (bis) · después de que (nachdem) · mientras (solange)</p>'},
  {h:'Immer Subjuntivo',t:'<p>para que (damit) · antes de que (bevor) · sin que (ohne dass) · a menos que (es sei denn) · con tal de que (vorausgesetzt)</p>'},
  {h:'Die Deutsch-Falle',t:'<p>Nach „cuando" steht <b>nie</b> das Futur. Falsch: <s>cuando llegaré</s>. Richtig: <i>cuando llegue</i>.</p>'}
 ],
 examples:[['Cuando seas mayor, lo entenderás.','Wenn du älter bist, wirst du es verstehen.'],['Te llamo para que no te preocupes.','Ich rufe dich an, damit du dir keine Sorgen machst.'],['Avísame en cuanto llegues.','Sag mir Bescheid, sobald du ankommst.']],
 tip:'Ist es noch nicht passiert? Dann nach „cuando" den Subjuntivo nehmen.',
 ex:[
 'Cuando ___ tiempo, te visitaré.|tenga|tengo|tendré|Zukunft nach „cuando" → Subjuntivo (nie Futur!).',
 'Cuando ___ tiempo, siempre leo.|tengo|tenga|tendré|Gewohnheit → Indikativ.',
 'Te lo explico para que lo ___.|entiendas|entiendes|entender|„para que" → immer Subjuntivo.',
 'Llámame en cuanto ___.|llegues|llegas|llegarás|„en cuanto" + Zukunft → Subjuntivo.',
 'Espera aquí hasta que yo ___.|vuelva|vuelvo|volveré|„hasta que" + Zukunft → Subjuntivo.',
 'Salgo antes de que ___ a llover.|empiece|empieza|empezará|„antes de que" → immer Subjuntivo.',
 'Iremos a la playa a menos que ___.|llueva|llueve|lloverá|„a menos que" → Subjuntivo.',
 'Ahorro dinero para ___ un coche.|comprar|compre|compro|Gleiche Person → „para" + Infinitiv, ganz ohne „que".']},

{id:'g08',title:'Futur & Vermutungen',icon:'🔮',
 intro:'Das Futur kann mehr als Zukunft: Damit rätst du auch, was wohl gerade los ist.',
 sections:[
  {h:'Bildung',t:'<p>Ganzer Infinitiv + <b>é, ás, á, emos, éis, án</b></p><p>hablar<b>é</b> · comer<b>ás</b> · vivir<b>á</b></p>'},
  {h:'Unregelmäßig: nur der Stamm ändert sich',t:T(['tener → tendr-|poner → pondr-','salir → saldr-|venir → vendr-','poder → podr-|saber → sabr-','haber → habr-|querer → querr-','hacer → har-|decir → dir-'])},
  {h:'Vermutung über jetzt',t:'<p>– ¿Dónde está Luis?<br>– <i><b>Estará</b> en casa.</i> (Er wird wohl zu Hause sein.)</p><p>Auf Deutsch: „wohl", „bestimmt", „wahrscheinlich".</p>'},
  {h:'Futuro compuesto: habré + Partizip',t:'<p>Bis dahin erledigt: <i>A las ocho ya <b>habré terminado</b>.</i><br>Vermutung über Vergangenes: <i>Se <b>habrá dormido</b>.</i> (Er ist wohl eingeschlafen.)</p>'}
 ],
 examples:[['El año que viene viajaré a México.','Nächstes Jahr werde ich nach Mexiko reisen.'],['Tendrá unos cuarenta años.','Er wird wohl um die vierzig sein.'],['Mañana hará mucho calor.','Morgen wird es sehr heiß.']],
 tip:'Wenn du auf Deutsch „wohl" sagen würdest, passt im Spanischen das Futur.',
 ex:[
 'Mañana ___ a mis abuelos. (visitar, yo)|visitaré|visitaría|visite|Zukunft: Infinitiv + é.',
 'El sábado ___ una fiesta. (hacer, nosotros)|haremos|haceremos|hagamos|hacer → har-: haremos.',
 '¿Qué hora es? – No sé, ___ las tres.|serán|sean|fueron|Vermutung über die Gegenwart → Futur.',
 'No contesta. ___ ocupada.|Estará|Estuvo|Esté|Vermutung („sie wird wohl beschäftigt sein") → Futur.',
 'Para el lunes ya ___ el informe. (yo)|habré terminado|he terminado|terminaba|Bis zu einem Zeitpunkt abgeschlossen → Futuro compuesto.',
 '¿___ venir mañana? (poder, tú)|Podrás|Poderás|Puedas|poder → podr-: podrás.',
 'Te lo ___ más tarde. (decir, yo)|diré|deciré|diga|decir → dir-: diré.',
 'No encuentro las llaves. Las ___ en el coche.|habré dejado|dejaré|deje|Vermutung über Vergangenes → Futuro compuesto.']},

{id:'g09',title:'Condicional: würde, könnte, sollte',icon:'💭',
 intro:'Höflich fragen, träumen, Ratschläge geben – alles mit einer Form.',
 sections:[
  {h:'Bildung',t:'<p>Ganzer Infinitiv + <b>ía, ías, ía, íamos, íais, ían</b></p><p>Die unregelmäßigen Stämme sind dieselben wie im Futur: tendr<b>ía</b>, har<b>ía</b>, dir<b>ía</b>, podr<b>ía</b>.</p>'},
  {h:'Wofür brauchst du ihn?',t:'<p>🙋 Höflich bitten: <i>¿Podrías ayudarme?</i><br>🌴 Wünsche: <i>Me gustaría vivir en la playa.</i><br>💡 Ratschläge: <i>Yo que tú, hablaría con él. · Deberías descansar.</i><br>💬 Zukunft von früher aus: <i>Dijo que vendría.</i></p>'},
  {h:'Condicional compuesto: habría + Partizip',t:'<p>„hätte / wäre": <i>Yo <b>habría dicho</b> que no.</i> (Ich hätte Nein gesagt.)</p>'}
 ],
 examples:[['Me gustaría reservar una mesa.','Ich würde gern einen Tisch reservieren.'],['¿Podrías repetirlo, por favor?','Könntest du das bitte wiederholen?'],['Yo en tu lugar no iría.','Ich an deiner Stelle würde nicht hingehen.']],
 tip:'Im Restaurant klingt „Me gustaría …" oder „Querría …" viel netter als „Quiero …".',
 ex:[
 '¿___ ayudarme un momento? (poder, tú)|Podrías|Podrás|Puedas|Höfliche Bitte → Condicional.',
 'Me ___ vivir cerca del mar. (gustar)|gustaría|gustará|guste|Wunsch → me gustaría.',
 'Yo que tú, ___ con ella. (hablar)|hablaría|hablaré|hable|Ratschlag „Ich an deiner Stelle" → Condicional.',
 '___ descansar más. (deber, tú)|Deberías|Deberás|Debas|Ratschlag: deberías = du solltest.',
 'Con más dinero, ___ una casa. (comprar, nosotros)|compraríamos|compraremos|compremos|Hypothese → Condicional.',
 '¿Qué ___ tú en mi lugar? (hacer)|harías|hacerías|hagas|hacer → har-: harías.',
 'Yo no lo ___ dicho así.|habría|había|habré|„Ich hätte es nicht so gesagt" → habría + Partizip.',
 'Dijo que ___ a las ocho. (venir)|vendría|vendrá|venga|Zukunft aus Sicht der Vergangenheit → Condicional.']},

{id:'g10',title:'Imperfecto de subjuntivo',icon:'🌙',
 intro:'Der Subjuntivo für Vergangenheit und Tagträume: „Ich wollte, dass du kommst", „Wenn ich doch nur Zeit hätte".',
 sections:[
  {h:'Bildung in 3 Schritten',t:'<p>1. Nimm die <b>ellos-Form im Indefinido</b>: hablaron, tuvieron, fueron<br>2. Streiche <b>-ron</b><br>3. Häng an: <b>-ra, -ras, -ra, -ramos, -rais, -ran</b></p>'+T(['hablaron → <b>hablara</b>|tuvieron → <b>tuviera</b>','fueron → <b>fuera</b>|hicieron → <b>hiciera</b>','pudieron → <b>pudiera</b>|dijeron → <b>dijera</b>'])+'<p>Es gibt auch Formen auf -se (hablase). Sie bedeuten dasselbe.</p>'},
  {h:'Wann?',t:'<p>Gleiche Auslöser wie beim normalen Subjuntivo – nur steht der Hauptsatz in der <b>Vergangenheit</b> oder im <b>Condicional</b>.</p><p>Quiero que <b>vengas</b>. → Quería que <b>vinieras</b>.<br>Me gustaría que <b>vinieras</b>.</p>'},
  {h:'Drei feste Fälle',t:'<p>🙏 Sehr höflich: <i>Quisiera un café.</i><br>🌠 Unerfüllbarer Wunsch: <i>Ojalá tuviera más tiempo.</i><br>🎭 „als ob": <i>Habla como si fuera el jefe.</i></p>'}
 ],
 examples:[['Quería que vinieras a mi fiesta.','Ich wollte, dass du zu meiner Party kommst.'],['Ojalá tuviera más vacaciones.','Hätte ich doch mehr Urlaub.'],['Me gustaría que me llamaras.','Ich fände es schön, wenn du mich anrufen würdest.']],
 tip:'Kennst du das Indefinido von „ellos", kennst du auch diese Form. Einmal lernen, doppelt nutzen!',
 ex:[
 'Quería que tú ___ conmigo. (venir)|vinieras|vengas|vendrías|Hauptsatz in der Vergangenheit → Imperfecto de subjuntivo.',
 'Me gustaría que ___ más tiempo juntos. (pasar, nosotros)|pasáramos|pasemos|pasaríamos|Condicional im Hauptsatz → Imperfecto de subjuntivo.',
 'Ojalá ___ volar como un pájaro. (poder, yo)|pudiera|podía|podría|Unrealistischer Wunsch → Ojalá + Imperfecto de subjuntivo.',
 'Habla como si lo ___ todo. (saber)|supiera|sabe|sabría|Nach „como si" steht immer das Imperfecto de subjuntivo.',
 'Me pidió que le ___ el coche. (prestar)|prestara|preste|prestaría|pidió (Vergangenheit) + que → Imperfecto de subjuntivo.',
 'No creía que ___ tan difícil. (ser)|fuera|sea|es|Zweifel in der Vergangenheit → fuera.',
 'Era importante que todos ___ puntuales. (llegar)|llegaran|lleguen|llegarían|„Era importante que" (Vergangenheit) → Imperfecto de subjuntivo.',
 'El profesor nos dijo que ___ los deberes. (hacer)|hiciéramos|hagamos|hacemos|Aufforderung in der Vergangenheit → Imperfecto de subjuntivo.',
 '___ un café con leche, por favor. (querer, yo)|Quisiera|Quiera|Quise|Sehr höfliche Bitte: quisiera.']},

{id:'g11',title:'Si-Sätze: Was wäre, wenn …',icon:'🔀',
 intro:'Drei Arten von „wenn": realistisch, Tagtraum und „zu spät". Jede hat ihr festes Zeiten-Paar.',
 sections:[
  {h:'Typ 1 – realistisch',t:'<p><b>si + Präsens</b> → Präsens / Futur / Imperativ</p><p><i>Si tengo tiempo, te llamo.</i></p>'},
  {h:'Typ 2 – Tagtraum',t:'<p><b>si + Imperfecto de subjuntivo</b> → Condicional</p><p><i>Si tuviera tiempo, te llamaría.</i><br>(Wenn ich Zeit hätte, würde ich dich anrufen.)</p>'},
  {h:'Typ 3 – zu spät',t:'<p><b>si + hubiera + Partizip</b> → habría + Partizip</p><p><i>Si hubiera tenido tiempo, te habría llamado.</i><br>(Wenn ich Zeit gehabt hätte, hätte ich dich angerufen.)</p>'},
  {h:'Die goldene Regel',t:'<p>Direkt nach „si" steht <b>nie</b> Futur, <b>nie</b> Condicional und <b>nie</b> Presente de subjuntivo.</p>'}
 ],
 examples:[['Si puedo, te ayudo.','Wenn ich kann, helfe ich dir.'],['Si tuviera más tiempo, aprendería italiano.','Wenn ich mehr Zeit hätte, würde ich Italienisch lernen.'],['Si lo hubiera sabido, no habría venido.','Wenn ich das gewusst hätte, wäre ich nicht gekommen.']],
 tip:'Wie im Deutschen: „Wenn ich hätte, würde ich …" – das „würde" (-ría) gehört nie in den si-Teil.',
 ex:[
 'Si ___ tiempo mañana, iré al gimnasio.|tengo|tenga|tendré|Realistische Bedingung: si + Präsens.',
 'Si ___ rico, viajaría por todo el mundo.|fuera|sería|soy|Unwahrscheinlich: si + Imperfecto de subjuntivo.',
 'Si tuviera coche, te ___ al aeropuerto.|llevaría|llevara|llevaré|Folge im Typ 2 → Condicional.',
 'Si ___ estudiado más, habría aprobado.|hubiera|habría|había|Nicht mehr änderbar: si + hubiera + Partizip.',
 'Si me hubieras avisado, ___ antes.|habría venido|vendré|vine|Folge im Typ 3 → habría + Partizip.',
 'Si llueve, ___ en casa.|nos quedamos|nos quedáramos|nos habríamos quedado|Typ 1: si + Präsens → Präsens.',
 'Si yo ___ tú, aceptaría el trabajo.|fuera|sería|soy|„Wenn ich du wäre" → si yo fuera tú.',
 'Si ___ hablar con ella, dile que la llamo luego.|puedes|podrás|podrías|Realistisch + Imperativ → si + Präsens.']},

{id:'g12',title:'Vorvergangenheit & haya / hubiera',icon:'⏪',
 intro:'„Hatte gemacht", „dass du gemacht hast", „hätte ich doch gemacht" – alles mit haber + Partizip.',
 sections:[
  {h:'Pluscuamperfecto: había + Partizip',t:'<p>Etwas war <b>schon vorher</b> passiert:</p><p><i>Cuando llegué, el tren ya <b>había salido</b>.</i></p>'},
  {h:'Unregelmäßige Partizipien',t:'<p>hacer → <b>hecho</b> · decir → <b>dicho</b> · ver → <b>visto</b> · poner → <b>puesto</b> · escribir → <b>escrito</b> · abrir → <b>abierto</b> · volver → <b>vuelto</b> · romper → <b>roto</b></p>'},
  {h:'Perfecto de subjuntivo: haya + Partizip',t:'<p>Subjuntivo-Auslöser + es ist schon passiert:</p><p><i>Me alegro de que <b>hayas venido</b>.</i><br><i>No creo que <b>haya llegado</b>.</i></p>'},
  {h:'hubiera + Partizip',t:'<p>Reue und „hätte doch": <i>Ojalá <b>hubiera estudiado</b> más.</i></p>'}
 ],
 examples:[['Cuando llegué, ya se habían ido.','Als ich ankam, waren sie schon gegangen.'],['Espero que hayas dormido bien.','Ich hoffe, du hast gut geschlafen.'],['Ojalá hubiera estudiado más.','Hätte ich doch mehr gelernt.']],
 tip:'había = hatte · haya = „dass … hat" · hubiera = hätte. Das Partizip bleibt immer gleich.',
 ex:[
 'Cuando llegamos al cine, la película ya ___.|había empezado|ha empezado|empezaba|Vorher passiert als ein anderes Ereignis → había + Partizip.',
 'Me alegro de que ___ el examen.|hayas aprobado|has aprobado|habías aprobado|Gefühl + bereits passiert → haya + Partizip.',
 'Nunca ___ un paisaje tan bonito hasta ese viaje.|había visto|haya visto|veía|„Bis dahin noch nie" → Pluscuamperfecto.',
 'No creo que ya ___.|hayan llegado|han llegado|habían llegado|Zweifel + schon passiert → hayan llegado.',
 'Metí la pata. Ojalá no ___ nada.|hubiera dicho|había dicho|habré dicho|Reue über Vergangenes → Ojalá + hubiera + Partizip.',
 'Ya ___ la mesa cuando llegaron los invitados. (poner, yo)|había puesto|había ponido|he puesto|poner → puesto (unregelmäßig).',
 'Es raro que todavía no ___.|haya llamado|ha llamado|había llamado|Bewertung + bis jetzt nicht passiert → haya + Partizip.',
 'Me dijo que ya ___ la carta. (escribir)|había escrito|había escribido|haya escrito|escribir → escrito.']},

{id:'g13',title:'Indirekte Rede',icon:'🗨️',
 intro:'Weitererzählen, was jemand gesagt hat: „Sie meinte, dass …", „Er fragte, ob …".',
 sections:[
  {h:'Einleitung im Präsens: fast nichts ändert sich',t:'<p>«Tengo hambre.» → <i>Dice que <b>tiene</b> hambre.</i></p>'},
  {h:'Einleitung in der Vergangenheit: eine Stufe zurück',t:T(['<b>Original</b>|<b>wird zu</b>','tengo (Präsens)|tenía (Imperfecto)','fui / he ido|había ido','iré (Futur)|iría (Condicional)','tenía (Imperfecto)|bleibt: tenía'])},
  {h:'Befehle werden Subjuntivo',t:'<p>«¡Ven!» → <i>Me dice que <b>venga</b>.</i><br>→ <i>Me dijo que <b>viniera</b>.</i></p>'},
  {h:'Fragen',t:'<p>Ja/Nein-Frage mit <b>si</b> (ob): <i>Me preguntó si tenía tiempo.</i><br>W-Frage: Fragewort bleibt: <i>Me preguntó dónde vivía.</i></p><p>Auch anpassen: hoy → ese día · mañana → al día siguiente · aquí → allí</p>'}
 ],
 examples:[['Me dijo que estaba muy ocupada.','Sie sagte mir, dass sie sehr beschäftigt sei.'],['Me preguntó si quería un café.','Er fragte mich, ob ich einen Kaffee wolle.'],['Dijo que llegaría tarde.','Er sagte, er würde später kommen.']],
 tip:'Stell dir eine Treppe vor: Erzählst du von früher, rutscht jede Zeit eine Stufe nach hinten.',
 ex:[
 '«Estoy cansado.» → Dijo que ___ cansado.|estaba|estará|esté|Präsens → Imperfecto.',
 '«Iré mañana.» → Dijo que ___ al día siguiente.|iría|irá|vaya|Futur → Condicional.',
 '«Ya he comido.» → Dijo que ya ___.|había comido|ha comido|comería|Perfecto → Pluscuamperfecto.',
 '«¡Llámame!» → Me pidió que la ___.|llamara|llamaba|llamaría|Befehl in der Vergangenheit → Imperfecto de subjuntivo.',
 '«¿Tienes tiempo?» → Me preguntó ___ tenía tiempo.|si|que|qué|Ja/Nein-Frage → si (ob).',
 '«¿Dónde vives?» → Me preguntó dónde ___.|vivía|vivo|viviera|Präsens → Imperfecto; das Fragewort bleibt.',
 '«Tengo hambre.» → Dice que ___ hambre.|tiene|tenía|tenga|Einleitung im Präsens → die Zeit bleibt.',
 '«¡Espera!» → Me dice que ___.|espere|espero|esperaré|Befehl + Einleitung im Präsens → Presente de subjuntivo.']},

{id:'g14',title:'Passiv & „man" mit se',icon:'🪧',
 intro:'„Hier wird Spanisch gesprochen", „Wohnung zu vermieten", „Wie sagt man …?" – der kleine Helfer heißt „se".',
 sections:[
  {h:'Pasiva refleja – der Alltagsliebling',t:'<p><b>se + Verb</b> – das Verb richtet sich nach der Sache:</p><p><i>Se vende piso.</i> (eine Wohnung)<br><i>Se venden pisos.</i> (mehrere)</p>'},
  {h:'Se impersonal = „man"',t:'<p><b>se + Verb im Singular</b>:</p><p><i>Aquí se come muy bien.</i><br><i>¿Cómo se dice «Danke»?</i></p>'},
  {h:'Echtes Passiv: ser + Partizip',t:'<p>Vor allem in Zeitung und formellen Texten. Das Partizip passt sich an:</p><p><i>El ladrón <b>fue detenido</b> por la policía.</i><br><i>La casa <b>fue construida</b> en 1900.</i></p>'},
  {h:'estar + Partizip = Ergebnis',t:'<p><i>La puerta <b>está cerrada</b>.</i> (Zustand: sie ist zu)<br><i>La puerta <b>fue cerrada</b>.</i> (Vorgang: sie wurde geschlossen)</p>'}
 ],
 examples:[['Aquí se habla español.','Hier wird Spanisch gesprochen.'],['Se buscan camareros con experiencia.','Es werden Kellner mit Erfahrung gesucht.'],['El puente fue construido en 1950.','Die Brücke wurde 1950 gebaut.']],
 tip:'Im Gespräch nimmst du fast immer „se". „Fue + Partizip" klingt nach Nachrichten.',
 ex:[
 'En España ___ muy tarde.|se cena|se cenan|es cenado|Unpersönlich „man" → se + Singular.',
 '___ pisos en el centro.|Se alquilan|Se alquila|Son alquilando|Verb im Plural, weil „pisos" Plural ist.',
 '¿Cómo ___ «Danke» en español?|se dice|se dicen|es dicho|„Wie sagt man …?" → se dice.',
 'El museo ___ inaugurado en 1990.|fue|estuvo|se|Vorgang im Passiv → ser + Partizip.',
 'La novela fue ___ por Cervantes.|escrita|escrito|escribida|Das Partizip passt sich an (la novela → escrita).',
 'La tienda ya ___ cerrada.|está|es|se|Ergebnis oder Zustand → estar + Partizip.',
 'Aquí no ___ fumar.|se puede|se pueden|es podido|Unpersönlich → se puede.',
 'Los ladrones fueron ___ ayer.|detenidos|detenido|detenidas|los ladrones → Partizip maskulin Plural.']},

{id:'g15',title:'Relativsätze: que, lo que, cuyo',icon:'🧵',
 intro:'Sätze verbinden wie ein Profi: „der Freund, mit dem …", „das, was …", „jemand, der …".',
 sections:[
  {h:'que – der Alleskönner',t:'<p><i>El chico <b>que</b> vive aquí.</i><br><i>La película <b>que</b> vi ayer.</i></p>'},
  {h:'Mit Präposition',t:'<p><b>el / la / los / las que</b> – oder bei Personen <b>quien</b>:</p><p><i>La amiga con <b>la que</b> viajo.</i><br><i>El amigo con <b>quien</b> hablé.</i></p>'},
  {h:'lo que · cuyo · donde',t:'<p><b>lo que</b> = das, was: <i>Lo que dices es verdad.</i><br><b>cuyo/a/os/as</b> = dessen/deren (richtet sich nach dem Besitz!): <i>El vecino cuya hija es médica.</i><br><b>donde</b> = wo: <i>La ciudad donde nací.</i></p>'},
  {h:'Indikativ oder Subjuntivo?',t:'<p>Kenne ich es → Indikativ:<br><i>Tengo un amigo que <b>habla</b> chino.</i></p><p>Suche ich es nur oder gibt es das nicht → Subjuntivo:<br><i>Busco a alguien que <b>hable</b> chino.</i><br><i>No hay nadie que lo <b>sepa</b>.</i></p>'}
 ],
 examples:[['Lo que más me gusta es el desayuno.','Was ich am liebsten mag, ist das Frühstück.'],['Busco a alguien que me ayude.','Ich suche jemanden, der mir hilft.'],['Es la casa en la que crecí.','Das ist das Haus, in dem ich aufgewachsen bin.']],
 tip:'Wohnungssuche ist das perfekte Beispiel: „Busco un piso que tenga balcón" – du weißt ja noch nicht, ob es ihn gibt.',
 ex:[
 'La chica ___ trabaja aquí es mi prima.|que|quien|cuya|Ohne Präposition → einfach „que".',
 'No entiendo ___ quieres decir.|lo que|que|el que|„das, was" → lo que.',
 'El amigo con ___ vivo es chileno.|el que|que lo|cuyo|Nach Präposition: el que (oder quien).',
 'Busco un piso que ___ terraza.|tenga|tiene|tendrá|Gesucht, noch unbekannt → Subjuntivo.',
 'Tengo un piso que ___ terraza.|tiene|tenga|tuviera|Existiert und ist bekannt → Indikativ.',
 'La escritora ___ libros me encantan vive en Madrid.|cuyos|cuya|que|cuyo richtet sich nach dem Besitz: libros → cuyos.',
 'No conozco a nadie que ___ ruso.|hable|habla|hablará|„Niemand, der …" → Subjuntivo.',
 'Es el pueblo ___ nació mi abuela.|donde|que|cuyo|Ort → donde.']},

{id:'g16',title:'Verbalperiphrasen',icon:'🔁',
 intro:'Kleine Verb-Kombis, die im Deutschen ein Adverb brauchen: gerade, wieder, immer noch, seit …',
 sections:[
  {h:'Mit Infinitiv',t:T(['<b>acabar de</b>|gerade getan haben','<b>volver a</b>|wieder tun','<b>dejar de</b>|aufhören zu','<b>ponerse a</b>|(plötzlich) anfangen','<b>estar a punto de</b>|kurz davor sein','<b>soler</b>|normalerweise tun'])},
  {h:'Mit Gerundio',t:T(['<b>seguir</b> + -ndo|immer noch tun','<b>llevar</b> + Zeit + -ndo|seit … tun','<b>ir</b> + -ndo|nach und nach tun'])},
  {h:'Im Alltag',t:'<p><i>Acabo de comer.</i> – Ich habe gerade gegessen.<br><i>Llevo dos años estudiando español.</i> – Ich lerne seit zwei Jahren Spanisch.<br><i>Sigo viviendo en Berlín.</i> – Ich wohne immer noch in Berlin.</p>'}
 ],
 examples:[['Acabo de ver tu mensaje.','Ich habe gerade deine Nachricht gesehen.'],['Llevo una hora esperando.','Ich warte seit einer Stunde.'],['He vuelto a perder las llaves.','Ich habe schon wieder die Schlüssel verloren.']],
 tip:'„Llevo + Zeit + Gerundio" ist DER Satz fürs Kennenlernen: „Llevo un año aprendiendo español."',
 ex:[
 '___ de llegar a casa. Dame cinco minutos.|Acabo|Vuelvo|Dejo|„gerade erst" → acabar de.',
 'Llevo tres años ___ en Berlín.|viviendo|vivir|vivido|llevar + Zeit + Gerundio.',
 'Mi padre dejó ___ fumar hace un año.|de|a|en|aufhören = dejar de.',
 'Empezó a llover y se ___ a correr.|puso|volvió|dejó|plötzlich anfangen = ponerse a.',
 '¿Sigues ___ en la misma empresa?|trabajando|trabajar|trabajado|seguir + Gerundio = immer noch tun.',
 'No lo entiendo. ¿Puedes ___ a explicarlo?|volver|acabar|soler|noch einmal tun = volver a.',
 'Los domingos ___ comer con mis padres.|suelo|llevo|acabo|Gewohnheit = soler + Infinitiv.',
 'Estaba a punto ___ salir cuando llamaste.|de|a|por|kurz davor sein = estar a punto de.']},

{id:'g17',title:'aunque, sino & Co.',icon:'🪢',
 intro:'Mit den richtigen Verbindungswörtern klingen deine Sätze sofort nach B2.',
 sections:[
  {h:'aunque: zwei Bedeutungen',t:'<p><b>+ Indikativ = obwohl</b> (Tatsache):<br><i>Aunque <b>llueve</b>, salgo.</i> (Es regnet gerade.)</p><p><b>+ Subjuntivo = selbst wenn</b> (egal oder unbekannt):<br><i>Aunque <b>llueva</b>, saldré.</i></p>'},
  {h:'a pesar de = trotz',t:'<p>+ Nomen: <i>a pesar del frío</i><br>+ Infinitiv: <i>a pesar de estar cansado</i><br>+ que + Satz: <i>a pesar de que llueve</i></p>'},
  {h:'Grund, Folge, Gegensatz',t:'<p><b>como</b> (am Satzanfang) = da: <i>Como no tenía dinero, no fui.</i><br><b>así que / por eso</b> = also, deshalb<br><b>sin embargo</b> = jedoch<br><b>sino</b> = sondern (nach Verneinung): <i>No es rojo, sino azul.</i></p>'}
 ],
 examples:[['Aunque es caro, lo voy a comprar.','Obwohl es teuer ist, werde ich es kaufen.'],['Aunque sea difícil, lo intentaré.','Auch wenn es schwierig sein sollte, ich versuche es.'],['No quiero té, sino café.','Ich will keinen Tee, sondern Kaffee.']],
 tip:'„pero" = aber, „sino" = sondern. Nach einem „no …" brauchst du fast immer „sino".',
 ex:[
 'Aunque ___ cansado, voy a ir al gimnasio. (Ich bin wirklich müde.)|estoy|esté|estar|Tatsache → Indikativ.',
 'Aunque ___ mañana, iremos de excursión. (Egal, ob es regnet.)|llueva|llueve|lloverá|„Selbst wenn" → Subjuntivo.',
 '___ no tenía hambre, no cené.|Como|Porque|Así que|Grund am Satzanfang → como.',
 'No es francés, ___ belga.|sino|pero|aunque|Nach Verneinung „sondern" → sino.',
 'Salimos a pasear a pesar ___ frío.|del|de que|que|a pesar de + Nomen (de + el = del).',
 'Estaba enfermo, ___ no fue a trabajar.|así que|porque|aunque|Folge → así que.',
 'Es caro; ___, merece la pena.|sin embargo|por eso|ya que|Gegensatz → sin embargo.',
 'A pesar de ___ mucho, suspendió.|estudiar|estudie|estudia|a pesar de + Infinitiv (gleiche Person).']},

{id:'g18',title:'por oder para?',icon:'🎯',
 intro:'Beide heißen oft „für" – aber sie schauen in verschiedene Richtungen.',
 sections:[
  {h:'para = nach vorn zum Ziel 🎯',t:'<p>Zweck: <i>para aprender</i><br>Empfänger: <i>para ti</i><br>Richtung: <i>salgo para Madrid</i><br>Frist: <i>para el lunes</i><br>Meinung: <i>para mí</i></p>'},
  {h:'por = zurück zum Grund & der Weg 🛤️',t:'<p>Grund: <i>por la lluvia</i><br>Durch/entlang: <i>por el parque</i><br>Preis/Tausch: <i>por diez euros</i><br>Tageszeit: <i>por la mañana</i><br>Mittel: <i>por teléfono</i><br>„pro": <i>dos veces por semana</i></p>'},
  {h:'Feste Ausdrücke',t:'<p>por favor · por fin · por supuesto · por cierto · por lo menos · por si acaso<br>para siempre · para nada</p>'}
 ],
 examples:[['Te llamo por la tarde.','Ich rufe dich am Nachmittag an.'],['Este tren va para Sevilla.','Dieser Zug fährt nach Sevilla.'],['Lo hago por ti.','Ich mache das deinetwegen.']],
 tip:'Frag „Wozu?" → para. Frag „Warum / wodurch?" → por.',
 ex:[
 'Este regalo es ___ ti.|para|por|a|Empfänger → para.',
 'Gracias ___ tu ayuda.|por|para|de|Grund für den Dank → por.',
 'Estudio español ___ trabajar en Chile.|para|por|a|Zweck und Ziel → para.',
 'Paseamos ___ el centro.|por|para|a|„durch" einen Ort → por.',
 'Lo compré ___ veinte euros.|por|para|con|Preis und Tausch → por.',
 'Necesito el informe ___ el viernes.|para|por|en|Frist → para.',
 'Voy al gimnasio tres veces ___ semana.|por|para|en|„pro Woche" → por semana.',
 '___ mí, es la mejor película del año.|Para|Por|A|Meinung → para mí.',
 'No salimos ___ la tormenta.|por|para|de|Grund → por.']},

{id:'g19',title:'ser & estar für Fortgeschrittene',icon:'⚖️',
 intro:'Gleiches Adjektiv, anderes Verb – und plötzlich bedeutet der Satz etwas völlig anderes.',
 sections:[
  {h:'Die Grundidee',t:'<p><b>ser</b> = was etwas IST: Wesen, Herkunft, Beruf, Uhrzeit, Material – und wo eine <b>Veranstaltung</b> stattfindet (<i>La fiesta es en mi casa</i>).</p><p><b>estar</b> = wie oder wo etwas GERADE ist: Zustand, Stimmung, Ort (<i>Estoy en casa</i>).</p>'},
  {h:'Bedeutung wechselt!',t:T(['<b>Adjektiv</b>|<b>ser</b>|<b>estar</b>','listo|schlau|fertig','aburrido|langweilig|gelangweilt','rico|reich|lecker','malo|böse, schlecht|krank','verde|grün|unreif','orgulloso|eingebildet|stolz'])},
  {h:'estar + Partizip = Ergebnis',t:'<p><i>está roto · está abierto · está hecho · estoy cansado</i></p>'}
 ],
 examples:[['La paella está muy rica.','Die Paella ist sehr lecker.'],['El concierto es en el parque.','Das Konzert findet im Park statt.'],['Estoy aburrido en casa.','Mir ist zu Hause langweilig.']],
 tip:'Vorsicht beim Kompliment: „Eres aburrido" heißt „Du bist ein Langweiler" – gemeint ist meist „Estás aburrido"!',
 ex:[
 'La sopa ___ riquísima.|está|es|hay|Geschmack im Moment → estar rico = lecker.',
 '¿Ya ___ listos? Nos vamos.|estáis|sois|hay|estar listo = fertig sein.',
 'Mi hermana ___ muy lista: saca todo dieces.|es|está|tiene|ser listo = schlau.',
 'La reunión ___ en la sala dos.|es|está|hay|Veranstaltungen finden statt → ser.',
 'El banco ___ al lado de la farmacia.|está|es|hay|Ort von Dingen und Gebäuden → estar.',
 'Esta película ___ muy aburrida.|es|está|tiene|Eigenschaft des Films → ser aburrido = langweilig.',
 'Hoy no voy a clase, ___ malo.|estoy|soy|tengo|estar malo = krank sein.',
 'La ventana ___ rota desde ayer.|está|es|ha|Ergebnis oder Zustand → estar + Partizip.']},

{id:'g20',title:'„Werden" auf Spanisch',icon:'🦋',
 intro:'Für das deutsche „werden" gibt es kein einzelnes Wort – das Spanische fragt: Wie verändert sich jemand?',
 sections:[
  {h:'Die fünf wichtigsten',t:T(['<b>ponerse</b> + Adj.|kurz & plötzlich (Stimmung, Körper): ponerse rojo, nervioso','<b>volverse</b> + Adj.|dauerhafte Wesensänderung: volverse loco, egoísta','<b>hacerse</b> + Nomen/Adj.|durch eigene Entwicklung: hacerse médico, rico','<b>quedarse</b> + Adj.|Endzustand, oft Verlust: quedarse solo, sin trabajo, dormido','<b>convertirse en</b> + Nomen|Verwandlung: convertirse en un problema'])},
  {h:'Und noch eins',t:'<p><b>llegar a ser</b> = nach langem Weg etwas werden:<br><i>Llegó a ser presidenta.</i></p>'}
 ],
 examples:[['Me pongo triste cuando llueve.','Ich werde traurig, wenn es regnet.'],['Se hizo famoso con una canción.','Er wurde mit einem Lied berühmt.'],['Nos quedamos sorprendidos.','Wir waren überrascht.']],
 tip:'Faustregel: kurz → ponerse, für immer → volverse, erarbeitet → hacerse, übrig geblieben → quedarse.',
 ex:[
 'Siempre me ___ nervioso antes de un examen.|pongo|hago|vuelvo|Kurze Stimmungsänderung → ponerse.',
 'Después de estudiar muchos años, se ___ abogada.|hizo|puso|quedó|Beruf durch eigene Mühe → hacerse.',
 'Desde que ganó la lotería se ha ___ muy arrogante.|vuelto|puesto|quedado|Dauerhafte Charakteränderung → volverse.',
 'Me ___ dormido en el sofá.|quedé|puse|hice|Endzustand → quedarse dormido.',
 'El pequeño problema se ___ en una crisis.|convirtió|puso|quedó|Verwandlung in etwas anderes → convertirse en.',
 'Cuando la vio, se ___ rojo como un tomate.|puso|hizo|convirtió|Plötzlich und körperlich → ponerse rojo.',
 'Tras el accidente se ___ sin trabajo.|quedó|volvió|hizo|Ergebnis mit Verlust → quedarse sin.',
 'Con el tiempo ___ a ser directora de la empresa.|llegó|se puso|se quedó|Langer Weg zum Ziel → llegar a ser.']}
];

// Der Lernpfad: Etappen mit Vokabel- (v) und Grammatik-Lektionen (g)
window.UNITS = [
 {title:'Gefühle & Menschen',sub:'Sag, wie es dir geht – und wie andere so sind.',lessons:['v01','g01','v02','g02','v03']},
 {title:'Arbeit & Lernen',sub:'Vom Bewerbungsgespräch bis zur Prüfung.',lessons:['v04','g03','v05','g04','v06']},
 {title:'Gesundheit & Zuhause',sub:'Beim Arzt, in der WG und im Haushalt.',lessons:['v07','g05','v08','g06','v09']},
 {title:'Unterwegs',sub:'Durch die Stadt und um die Welt.',lessons:['v10','g07','v11','g08']},
 {title:'Umwelt & Klima',sub:'Mitreden bei den großen Themen.',lessons:['v12','g09','v13','g10']},
 {title:'Medien & Technik',sub:'Nachrichten, Netz und Wissenschaft.',lessons:['v14','g11','v15','g12','v32']},
 {title:'Geld & Gesellschaft',sub:'Wirtschaft, Politik und Recht verstehen.',lessons:['v16','g13','v17','g14','v18','v19']},
 {title:'Kultur & Genuss',sub:'Kunst, Kino, Küche und Sport.',lessons:['v20','g15','v21','g16','v22','v23']},
 {title:'Diskutieren wie ein Profi',sub:'Meinung sagen, begründen, verbinden.',lessons:['v24','g17','v25','g18','v26']},
 {title:'Feinschliff',sub:'Die letzten Kniffe bis zum B2.',lessons:['v27','g19','v28','g20','v29','v30','v31']}
];
})();
