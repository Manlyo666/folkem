# Changelog — Folk Em

## 1.4.0

- CURA a rendimenti decrescenti più rapida: cure consecutive ora rendono 100%, 50%, 25%, poi 0% (prima 100/75/50/25/0). Rende meno dominante la build tutta-cura: chi si trincera esaurisce prima la cura ed è più attaccabile. Il gradiente di difficoltà PvE resta invariato.
- TURNI ALTERNATI: ora ogni round uno dei due dichiara Attacco o Difesa per primo e l altro vede e risponde; chi inizia si alterna a ogni round. La mossa dichiarata dall avversario appare al centro del tavolo (⚔ o 🛡). Non è più una prova opzionale: è la dinamica standard del gioco.
- FURIA OFFENSIVA: attaccare più volte di fila dà un bonus danno crescente (+10/20/30/40%, conta il premere Attacco, non il danno). Premia le build schierate all attacco. Difendere azzera la furia.
- Nuovo promemoria FURIA accanto alle tue carte: mostra il bonus danno del prossimo attacco secondo la striscia (+0/10/20/30/40%), affiancato al promemoria della cura. Difendere azzera la striscia e nasconde l indicatore.
- Gli indicatori di FURIA e CURA sono visibili anche per l avversario, accanto alle sue carte.
- Il bonus di furia ora si applica al danno PRIMA della parata: il danno extra sfonda lo scudo avversario (più efficace contro chi para molto).
- Nel riepilogo dello scontro ora è indicata la percentuale applicata: furia offensiva (+X% e danno risultante) e rendimento della cura consecutiva (X%).
- Quando si schierano le Maschere, un indicatore palesa se l avversario ha attaccato (⚔) o difeso (🛡).
- Promemoria della cura accanto alle carte: ricorda a quanto rende la prossima cura (100/75/50/25/0%) quando la striscia è attiva.
- Regole aggiornate con le nuove meccaniche.

## 1.3.7

- PROVA: nuova opzione "Turni alternati" (nelle impostazioni, spenta di default). Se attiva, in partita contro il computer ogni round uno dei due dichiara la mossa PRIMA e l altro la vede e risponde; chi inizia si alterna a ogni round. Quando dichiara l avversario, la sua mossa appare sul tavolo (⚔ o 🛡) prima della tua scelta. Si puo disattivare quando vuoi dalle impostazioni.

## 1.3.6

- Regole riordinate per leggersi meglio: Il round (con la scelta alla cieca), poi Gerarchia delle mani, Build, Cura a rendimenti decrescenti e infine Ultimo Giro. Tolta la sezione Audio (il suono resta regolabile dalle impostazioni).

## 1.3.5

- Il consiglio "Attacca per azzerare" (sulle cure consecutive) ora compare solo in PvP offline, dove serve a entrambi i giocatori umani. In partita contro il computer non appare piu quando a curarsi e' l avversario.
- Corretto il messaggio della cura a rendimento esaurito: quando la striscia arriva allo 0% non scrive piu "si cura di +0 PV", ma spiega che la cura non ha avuto effetto.

## 1.3.4

- Corretto: se allo scadere degli Ultimi Dieci Giri i Punti Vino sono in parita', la partita non si chiude piu' con una vittoria arbitraria. Si va allo SPAREGGIO — si continua a oltranza, un giro alla volta, finche' qualcuno non passa in vantaggio.
- Damigiana: il vino ora resta sempre dentro i contorni del vetro, anche quando e' quasi colma. Prima, oltre una certa soglia, il rosso sforava i bordi.

## 1.3.3

- Tempi delle animazioni ora adattivi: la durata di ogni turno si allunga o accorcia in base a cosa succede davvero — attacco, parata, strappo, cura o nulla di fatto. Ogni fase parte quando la precedente e' finita, cosi animazioni e suoni non si accavallano piu.

## 1.3.2

- Corretto un errore dell avversario Difficile: quando poteva vincere ai punti curandosi (arrivando a 200 PV) a volte attaccava invece di curare. Ora, se una cura chiude la partita e l attacco non fa altrettanto, cura per vincere.
- La Maschera che para e perde lo scontro ora si strappa sempre se il danno passa, anche dopo una parata parziale: prima, in certi casi, lo strappo non partiva per un problema di tempi dell animazione.
- Rimossa l animazione della damigiana che "perde vino" oltre i 150 PV: il livello resta pieno senza gocce che colano.
- Se riavvii la partita durante gli Ultimi Giri la musica torna alla velocita normale (prima restava accelerata).

## 1.3.1

- Difficolta ribilanciate: l avversario Difficile e' piu tosto (parte con 140 PV invece di 130) e il Facile piu accessibile (60 PV invece di 70). Media resta a 100.
- Negli Ultimi Dieci Giri la musica accelera di piu (+50%) per aumentare la tensione del finale.
- Il contatore rosso degli ultimi giri sul tavolo ora ha un bordo nero netto, cosi si legge bene anche sul legno chiaro.

## 1.3.0

- Avversario rifatto: ora ragiona sul valore atteso di ogni turno invece di seguire regole rigide, e rispetta le REGOLE ESATTE del gioco — infligge danni e cura come il giocatore, senza moltiplicatori nascosti. I numeri a schermo corrispondono sempre ai Punti Vino persi o recuperati.
- Le tre difficolta si distinguono in modo onesto: l avversario parte con piu o meno vino nella damigiana (Facile 60, Media 100, Difficile 140 PV) e gioca con piu o meno bravura. Nessun imbroglio sulle carte.
- In Difficile l avversario cambia strategia a ogni partita, scegliendo tra tre build di Maschere diverse: Cura-difensiva (inverte le tre piu deboli, gioca di rimessa), Aggressiva pura (tutte in attacco) e Full-cura (inverte le Maschere ad alto danno per cure enormi). Legge piu spesso le tue intenzioni per non colpire a vuoto contro una parata.
- Parata: lo scudo mostra il valore PIENO della Difesa. Se l attacco fa 6 e la Difesa vale 10, sullo scudo compare 10 (il colpo resta annullato).
- Dopo una parata la Maschera sconfitta si strappa solo se il colpo passa: se la parata azzera del tutto il danno la Maschera regge, senza strappo ne rumore.
- Il contatore dell Ultimo Giro inciso nel tavolo dice "Ultimo giro -X" nel carattere Scar maiuscolo; negli ultimi tre giri il numero e' rosso. La scritta grande a schermo recita "Ultimi Dieci Giri" con un bordo nero piu netto.
- Dopo l avviso dell Ultimo Giro la musica di sottofondo accelera per dare il senso della corsa finale; in generale la musica e' piu presente nel menu e in partita.
- Vittoria ai punti: il messaggio dice "Allo scadere dei turni avevi piu vino nella damigiana".
- Le quattro carte iniziali fanno sempre sentire tutti e quattro gli scatti.

## 1.2.12

- Il contatore dell Ultimo Giro ora e scritto in un carattere inciso, in beige chiaro con contorno nero: si legge su qualsiasi sfondo del tavolo.
- Nelle ultime 3 mani il numero rimasto diventa rosso con bordo rosso piu chiaro, cosi lo urgenza si vede a colpo d occhio.

## 1.2.11

- Arpa, versamento del vino e musiche di vittoria/sconfitta ancora abbassati.
- Quando la parata azzera del tutto il danno non si aspetta piu l animazione della damigiana: si passa subito al turno dopo (da 9 a 5 secondi).
- Tolto un rumore di carte di troppo quando si scoprono le mani.
- Nell annuncio della cura il nome della Maschera e ora dorato come nell attacco: solo la parola Cura resta verde.
- Numeri di danno e cura ridisegnati con cifre nette e bordo piu marcato: il 3 non si confonde piu con l 8.
- Tolta la scritta Carte a terra dal tavolo; al suo posto compare il contatore dell Ultimo Giro quando serve.
- Dottor Balanzone ora ha 15 di Attacco e 8 di Difesa (prima 15/7).
- Nel setup ogni Maschera mostra prima il proprio nome, piu grande, e sotto la combinazione a cui corrisponde, piu piccola.

## 1.2.10

- Arpa dell evocazione e suono delle carte abbassati; musica di sottofondo alzata (piu che raddoppiata).
- Le carte fanno rumore anche quando vengono scoperte a fine mano.
- Il cambio carta ora rovescia il vino dalla damigiana, col suono del liquido: si vede che stai pagando 10 PV.
- Quando una Maschera cura appare la scritta a centro schermo col suo nome e Cura, in verde, come l annuncio dell arma per l attacco.
- Aggiunto un suono per la Maschera che si anima prima di agire: secco e di scatto quando attacca, caldo e disteso quando cura.

## 1.2.9

- Volumi riequalizzati su tutti i suoni: prima fra il piu forte e il piu debole c erano 5,2 volte di differenza, ora 3,1 e sono voluti.
- Carte e scudo della parata abbassati: le carte suonano di continuo e non devono stancare, lo scudo era il suono piu aggressivo di tutti.
- Alzati i suoni che si sentivano appena: arpa dell evocazione, vino versato e lama.
- Tolto il rischio di distorsione: nessun suono arriva piu al limite massimo.

## 1.2.8

- RISOLTO alla radice il problema dei suoni vecchi: la sintesi non viene piu usata come riserva per i suoni che hanno un file. Se un campione non e' ancora pronto ora resta un istante di silenzio, invece di suonare la versione finta.
- I suoni ora si caricano all avvio della pagina invece che al primo tocco: sono pronti prima che tu prema qualsiasi cosa.
- Il primo click sul menu faceva partire due suoni sintetici perche' i campioni erano ancora in caricamento: non succede piu.

## 1.2.7

- Tolti i sei suoni sintetizzati rimasti (scintillio delle maschere, tensione prima della 5a carta, affondo, e gli accordi di esito dello scontro): erano aggiunte mie mai richieste ed erano gli unici suoni finti rimasti in partita. Ora in gioco si sentono SOLO i suoni veri.
- L arpa dell evocazione e' ora esattamente il file originale, solo accorciato: nessuna inversione, nessun ritocco.
- Corretti i tagli di tutti i campioni: prima il filtro tagliava al primo rumore invece che al colpo vero, e alcuni suoni risultavano sbagliati.

## 1.2.6

- SUONI VERI al posto di quelli sintetizzati: carte, click, arpa dell evocazione, i tre tipi di attacco, parata, strappo, vino versato, campana, fanfara e sconfitta. Se un file non carica, il gioco torna da solo ai suoni sintetizzati.
- L arpa dell evocazione e' stata ritagliata e INVERTITA: ora sale invece di scendere, e dura 2,8s invece di 19. Niente piu sibilo finale.
- Le carte a terra ora scendono UNA ALLA VOLTA, ognuna col proprio suono, come farebbe un mazziere vero.
- Gli attacchi usano il campione reale ripetuto in salva, con tono e volume diversi a ogni colpo: tante manganellate che non sembrano lo stesso suono incollato.
- Le tre varianti del suono carta si alternano a caso, cosi la distribuzione non suona meccanica.

## 1.2.5

- Suono delle carte rifatto daccapo, ispirato ai giochi di carte classici di Windows: uno scatto netto e asciutto, senza fruscio.
- NUMERAZIONE CORRETTA: le versioni erano gonfiate. La seconda cifra ora sale SOLO quando cambiano regole o gameplay (finora due volte: cura decrescente e Ultimo Giro), la terza a ogni rifinitura. Il changelog e' stato rinumerato: quella che era la 1.6.0 e' in realta' la 1.2.5.

## 1.2.4

- Suono delle carte rifatto: ora e' un colpo secco sul tavolo con un breve scorrimento, invece del fruscio di prima.
- Musica di gioco orchestrata: liuto, basso, archi tenuti, tamburo e controcanto, con un riverbero che da' spazio. Il tema semplice di prima resta come musica dei menu.
- Gli attacchi non sono piu un colpo solo ma una SALVA di colpi ravvicinati, uno per ogni arma che vola: tante manganellate, tante lame, tanti clangori.
- Nelle impostazioni ora ci sono DUE interruttori separati: uno per la Musica e uno per gli Effetti.
- Aggiunti i suoni che mancavano: tensione quando sta per cadere la 5a carta, materializzazione delle maschere, affondo prima del colpo, e un accordo diverso a seconda che tu vinca, perda o pareggi lo scontro.
- Le maschere ora lasciano il centro PRIMA che le damigiane si riempiano o si svuotino: non restano piu li durante il versamento.

## 1.2.3

- Corretto il contatore delle cure: ora sale solo se ti curi DAVVERO (se la cura e gia a zero non sale a vuoto) e si azzera appena premi Attacco, anche se perdi lo scontro o non fai danno.
- Nuove animazioni di fine turno: la maschera non colpisce piu la damigiana. Il vino viene versato con una caraffa quando ti curi, e la damigiana si capovolge rovesciandolo quando subisci danno.
- Lo scudo della parata ora appare direttamente sulla maschera che para, col valore assorbito (es. -6).
- Il contatore dell Ultimo Giro sembra ora inciso nel legno del tavolo, e si arrossa nelle ultime 3 mani.
- Aggiunta la scritta PV (HP in inglese) accanto alla damigiana.
- Corretta la grammatica del riepilogo: Tu ti curi, Tu pari, Tu vinci (prima diceva Tu si cura).
- La scritta Le Maschere si destano ora ha un contorno nero: si legge su qualsiasi sfondo.

## 1.2.2

- AUDIO — Il gioco ora ha i suoni: fruscio delle carte quando vengono distribuite, calate o sostituite; click sui pulsanti; arpa magica all evocazione delle Maschere.
- Tre suoni d attacco diversi secondo l arma: legno (Bastone, Manganello, Tomo, Spatola), metallo (Monete, Ombrello d acciaio, Spada) e taglio (Stiletto, Ventaglio affilato).
- Vino versato quando la damigiana si riempie o si svuota, scudo per la parata, strappo per la maschera lacerata, campana per l Ultimo Giro.
- Fanfara per la vittoria e tema cupo per la sconfitta, piu una musica di taverna discreta in sottofondo.
- Nuovo pulsante audio nel menu (e nelle impostazioni in partita) per silenziare tutto. La scelta viene ricordata.
- Tutti i suoni sono generati dal gioco stesso: nessun file scaricato, peso invariato, funzionano offline.

## 1.2.1

- NUOVA REGOLA — Ultimo Giro: se dopo 30 round nessuno ha chiuso, parte un conto alla rovescia di 10 mani, annunciato a schermo e con un contatore sempre visibile che diventa rosso nelle ultime 3. Allo scadere vince chi ha piu vino nella damigiana. Danni e cura restano normali.
- Riepilogo: ora la combinazione dell avversario si legge a colpo d occhio, con il nome in evidenza accanto al suo. Aggiunta una riga di confronto diretto (es. Tris batte Coppia): non devi piu ricostruirla dalle 7 carte.
- Corretto un errore di grammatica nel riepilogo (Tu vinci lo scontro, non Tu vince).

## 1.1.1

- NUOVA REGOLA — Cura a rendimenti decrescenti: cure consecutive rendono 100%, 75%, 50%, 25%, poi 0%. Attaccare azzera il contatore e la cura torna piena. La parata non e influenzata. Niente decimali: si arrotonda sempre per eccesso.
- IA molto piu forte e finalmente in scala: Facile e davvero facile, Media competente, Difficile competitiva. La Difficile calcola tutte le carte possibili come quinta, usa una build da META e ti legge: se abusi della cura passa all attacco totale.
- Corretto un difetto grave dell IA: sprecava PV in cambi carta inutili fino a suicidarsi.
- Animazioni delle armi corrette: ora partono davvero dalla maschera che attacca e volano verso quella avversaria, poi dalla vincente verso la damigiana nemica (prima volavano in verticale a vuoto).
- La maschera sconfitta ora viene STRAPPATA in due meta lungo una linea frastagliata, con lampo sulla frattura.
- Oltre 150 PV la damigiana e troppo piena e il vino trabocca: gocce che colano e pozza alla base.
- Ruota delle impostazioni spostata in alto a sinistra.
- Il riepilogo avvisa quando la cura e ridotta, cosi sai sempre a che punto sei.

## 1.0.26

- Tolta la voce 'Cura' dalle regole e dal README: senza restrizioni è ovvio che sia piena. Ripuliti anche i README (niente più 'otre', ora 'damigiana').

## 1.0.25

- Rimossa la penalità sulla cura: ora è sempre piena fino a 200 PV (prima era dimezzata sopra 150). Regole aggiornate.

## 1.0.24

- Nel duello: la tua maschera ora è a sinistra, quella dell'avversario (IA o Giocatore 2) a destra.

## 1.0.23

- Setup: titolo 'Forgia la tua build' ancora più grande, descrizione ancora più piccola per un contrasto netto.

## 1.0.22

- Setup: titolo 'Forgia la tua build' ingrandito, descrizione sotto rimpicciolita per dare più respiro.

## 1.0.21

- Victorian Decade ora su tutti i titoli, i nomi delle maschere, il titolo Folk 'Em e i messaggi evocativi (Le Maschere si destano…), più grande e con ombra marcata.
- Isenheim riservato a pulsanti, comandi e definizioni (più leggibile).

## 1.0.20

- Nuovi font: Isenheim per testi e descrizioni, Victorian Decade per titoli e messaggi (Vittoria, Hai Perso…) con effetto in risalto.
- Fine partita: messaggi personalizzati per i 4 esiti (hai svuotato/riempito la damigiana, l'avversario te l'ha svuotata/riempita). In PvP: Damigiana a secco / piena.
- Fine partita: mostrato solo il punteggio (es. 115 − 0), niente più PV; lo zero non si confonde più con la O.
- La bandiera del pulsante lingua ora mostra quella a cui passi: in italiano vedi la Union Jack, in inglese il tricolore.
- Ovunque 'otre' è diventato 'damigiana'.

## 1.0.19

- Icona lingua: ora una Union Jack disegnata come si deve, riconoscibile anche piccola.

## 1.0.18

- Icona lingua: ora è la sola Union Jack, spostata come terza icona.

## 1.0.17

- RISOLTO il bug del tavolo vuoto su Android: la schermata di gioco restava sempre attiva sopra il menu e intercettava i tocchi, così il menu modalità sembrava sparito e le impostazioni non rispondevano. Ora ogni schermata si mostra solo quando è la sua.

## 1.0.16

- L'IA ora cambia carta all'INIZIO del round, così lo vedi (lampeggio sulla sua carta + PV che calano subito) e puoi ragionarci prima di scegliere.
- Le carte non si spostano più quando i pulsanti compaiono/scompaiono: resta un piccolo spazio fisso per loro.
- Icona del pulsante lingua ridisegnata (mezzo tricolore / mezzo Union Jack).
- Android: aggiunto un controllo che rileva una nuova versione e ricarica da solo, per superare la cache vecchia che mostrava il tavolo vuoto.

## 1.0.15

- Riepilogo in basso: ora mostra tutto anche di computer/Giocatore 2 (scelta attacco/difesa) e il danno con la matematica della parata (es. Danno: 20 − 3 = 17). Si resetta a ogni nuova partita ed è più grande.
- Nuovo pulsante lingua (bandiera metà IT / metà EN) nel menu iniziale; la lingua si cambia anche dal menu impostazioni in partita. La scelta viene ricordata.
- Corretto: quando l'IA cambia carta ora i suoi PV calano subito a schermo (prima restavano 100).
- Android: risolta la cache che serviva una versione vecchia (ora l'HTML si aggiorna sempre). Se prima ti mandava a un tavolo vuoto, ora parte dal menu modalità.
- Il nome dell'arma annunciato a centro schermo non va più a capo: resta centrato e si rimpicciolisce se troppo lungo.

## 1.0.14

- Corretto un bug di gerarchia: con un Tris E una Scala nella stessa mano ora vince il Tris (più raro, più forte). Prima sceglieva la Scala.
- Android: layout completamente rifatto — riempie lo schermo reale, niente più cornice a rombi, carte non più tagliate (nemmeno con la 5ª). Le 9 maschere del setup stanno tutte senza scorrere.
- La damigiana avversaria in PvP ora si capovolge col vino incluso.
- Il nome dell'arma non sta più sotto la maschera: appare a centro schermo con un'animazione quando parte l'attacco (la maschera annuncia il colpo).
- Pulsante opzioni: ora è un ingranaggio, più grande e tutto cliccabile.

## 1.0.13

- Rimosso 'Rivela il Destino': ora Cambia/Attacca/Difendi sono subito visibili. Premi Attacca o Difendi (scelta cieca), poi cala la 5ª carta, poi Evoca Maschera.
- In PvP: turno per turno (prima G1, poi G2), poi entrambi premono Evoca. Il gioco non prosegue finché entrambi non hanno scelto.
- PvP: risolto il cambio carta del Giocatore 2 (ora funziona in ogni mano). Damigiana avversaria capovolta.
- Android: il pulsante 'Al tavolo' e l'Inverti di Arlecchino non escono più dallo schermo; la griglia scorre e i pulsanti restano visibili.
- Numeri danni/cure più grandi e visibili più a lungo.
- README: gerarchia aggiornata (Tris batte Scala) e link app cliccabile.

## 1.0.12

- Appena cala la 5ª carta, le carte dell'avversario vengono scoperte. Resta ignota solo la sua scelta (attacco/difesa) e come ha impostato le maschere.

## 1.0.11

- PvP offline: risolto il blocco. Ora G1 rivela e sceglie, G2 sceglie, poi entrambi premono Evoca Maschera.
- Armi lanciate stile Vampire Survivors: tante armi, grandi e luminose, sopra il velo, con esplosioni all'impatto.
- Numeri danni/cure stile Balatro: grandi, danni in rosso e cure in verde, con bordo bianco.
- Damigiane ai lati opposti: Giocatore 1 a sinistra, avversario a destra (in PvP il Giocatore 2 la vede a sinistra sua).
- Link app cliccabile nei README.

## 1.0.10

- Nuovo flusso: premi Rivela il Destino, scegli Attacco/Difesa ALLA CIECA sulle 4 carte, poi cala la 5ª (il rischio!), poi premi Evoca Maschera.
- Animazione fiabesca a tutto schermo all'evocazione, prima del duello.
- Damigiana ridisegnata (panciuta, come una vera damigiana), il vino resta dentro il corpo, simmetrica tra i due giocatori.
- Android: layout verticale che riempie lo schermo — pulsanti menu grandi, 9 maschere che riempiono il setup, carte del tavolo più grandi, meno spazio tra le file.
- Pulsanti Cambia/Rivela affiancati (non più impilati). Le mie carte hanno la stessa dimensione dell'avversario.

## 1.0.9

- Simboli dei semi napoletani nel log: 🪙 denari, 🏆 coppe, 🗡️ spade, 🪵 bastoni (prima erano quelli francesi, fuorvianti).
- Verificato: tutti e 4 i semi sono contati correttamente per colore e punteggi.

## 1.0.8

- Corretto il calcolo: la maschera ora si valuta su TUTTE e 5 le carte a terra (prima usava solo 4, causava colore/scala non contati).
- Gerarchia corretta: il Tris batte la Scala (Tris più raro). Stats aggiornate.
- Carte spade/bastoni: nomi scambiati (erano invertiti).
- Flusso: premi Evoca, cala lenta la 5ª carta al centro sovrapposta alle altre, POI appare la maschera con spiegazione.
- Cronaca completa in basso con simboli dei semi: carte di entrambi e come si è formata ogni combinazione.
- Parata: animazione con scudo invece del numero svolazzante. Cambio carta IA dichiarato subito.
- Menu: boccale di birra per l'oste; la difficoltà si conferma ripremendo Giocatore vs IA.
- Nuova otre più cicciona con fondo in vimini. In PvP le carte del Giocatore 2 sono sempre scoperte.
- Android: layout verticale che riempie lo schermo (griglia 3×3 e tavolo leggibili). PWA con icone corrette.

## 1.0.7

- Nuovo dorso del mazzo (immagine fornita). L'emblema delle maschere resta come icona dell'app.

## 1.0.6

- Carte napoletane vere: ritagliate dal foglio (diviso con linee nere) con effetto pixelato.
- Sfondo tavolo in legno (texture fornita), ombra sotto le carte che cresce quando si muovono o vengono calate.
- Nuovo ordine: premi Attacco/Difesa, PRIMA cala la 5ª carta, POI si evoca la maschera. Animazioni rallentate.
- Cronaca dettagliata in basso: carte calate e come si è formata ogni combinazione (2× Re, 5 denari, ecc.).

## 1.0.5

- Gerarchia corretta: col mazzo da 40 il Colore batte il Full (Colore più raro). Stat scambiate (Colore 30/15, Full 25/13).
- La 5ª carta a terra cala DOPO la scelta Attacco/Difesa: la mano finale può cambiare.
- Regole aggiornate con la gerarchia diversa dal poker.
- Export anche in HTML singolo autosufficiente.

## 1.0.4

- Passaggio a Texas Hold'em (2+5 carte), probabilità ricalcolate.
- Carte, maschere, otri e sfondo con la grafica fornita.
- Overlay maschere al centro che copre le carte schierate.
- La difesa del perdente riduce il danno (parata).
- 3 difficoltà IA, PvP offline con carte capovolte, menu modalità.
- Armi lanciate + distruzione maschera + colpo all'otre.
- Setup a griglia 3×3, ruota-opzioni, regole al primo avvio, PWA installabile.

## 1.0.3

- Carte napoletane ridisegnate, maschera avversaria nascosta fino alla scelta, animazioni d'arma, auto-avanzamento.

## 1.0.2

- Pareggi alla poker, vittoria a 0/200 PV, duello a due maschere, localizzazione IT/EN.

## 1.0.1

- Prima versione giocabile 1v1 vs IA.

