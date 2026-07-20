# Folk 'em — Osteria delle Maschere

*Gioco di carte 1v1 attacco/difesa (RPG · HD-2D / pixel-art) basato sulle Maschere
della Commedia dell'Arte e sul mazzo napoletano da 40 carte.*

**🇬🇧 [Read in English →](README.md)**

Unico file `index.html` autosufficiente. Aprilo in qualsiasi browser — niente installazione, offline.

---

## Come si gioca

Sfidi l'Avversario (un'IA locale). Ognuno parte con **100 PV**, mostrati come una
**damigiana** di vino che si riempie e si svuota (sfera di vita stile Diablo, in salsa da osteria).

**Vinci se:** porti l'Avversario a **0 PV**, oppure porti i **tuoi** PV a **200**
(raggiungere 200 vince subito, a prescindere dai PV dell'Avversario).

I PV **non hanno tetto a 100**. Per evitare che il solo rush-cura sia imbattibile, la cura
è **piena sotto 150 PV e dimezzata tra 150 e 199**, mentre gli attacchi colpiscono sempre a valore pieno.

### Un round
- 2 carte private + **4 carte comunitarie** a terra; componi la migliore combinazione di 5 fra le 6.
- A inizio turno: **cambia 1 carta al costo di 10 PV** (una volta per round).
- Premi **Evoca Maschera** — appare la tua Maschera. Quella dell'Avversario resta **coperta**.
- Scegli **Attacco** o **Difesa**. *Solo allora* le carte e la Maschera avversaria si rivelano
  e parte lo scontro.
- Vince la combinazione di grado più alto. I pareggi si risolvono alla poker (coppia/tris più
  alto, poi kicker, Asso alto). Attacco → infliggi l'Attacco; Difesa → recuperi la Cura; chi perde nulla.
- Dopo lo scontro il gioco **avanza da solo** al round successivo finché qualcuno non vince.

### Setup: build delle Maschere
Una sola volta, prima della partita, **inverti Attacco/Cura** di ogni Maschera per build
full-attacco, full-cura o bilanciate. **Meneghino e Capitan Spaventa sono fissi.**

### Gerarchia Maschere (arma · Attacco / Cura base)
| Combinazione | Maschera | Arma | Atk / Cura |
|---|---|---|---|
| Carta Alta | Meo Patacca | Stiletto | 2 / 1 |
| Coppia | Pantalone | Borsa di monete pesante | 6 / 3 |
| Doppia Coppia | Brighella | Bastone nodoso | 10 / 5 |
| Tris | Pulcinella | Manganello in legno | 15 / 7 |
| Scala | Dottor Balanzone | Tomo pesante in cuoio | 20 / 10 |
| Colore | Arlecchino | Spatola di legno | 25 / 13 |
| Full | Colombina | Ventaglio affilato | 30 / 15 |
| Poker | Meneghino | Ombrello d'acciaio | 50 / 50 (fisso) |
| Scala Reale | Capitan Spaventa | Spada Strisciata | 100 / 100 (fisso) |

> **Nota sul mazzo.** 40 carte napoletane (A–7, Fante, Cavallo, Re × 4 semi) — niente 8/9/10.
> Le scale usano l'Asso basso (A-2-3-4-5) e alto (Fante-Cavallo-Re-A). Con sole 6 carte viste
> per round, Poker e Scala Reale sono rarissimi, per scelta di design.

---

## Com'è programmato

Un solo `index.html`; HTML + CSS + JS inline, diviso in tre livelli netti così che una futura
conversione in **PvP online** tocchi solo il confine, non le regole:

- **`GameLogic`** — puro, senza DOM: mazzo, valutazione mani con pareggi alla poker
  (`evaluate` restituisce un vettore `tie[]`, `compare` ordina le mani), risoluzione dello
  scontro, cura a rendimenti decrescenti, e un'IA consapevole della build (`aiChoose`).
- **`GameState`** — stato serializzabile + azioni (`dealRound`, `swapCard`, `applyDelta`, `checkWin`).
- **`UI`** — l'unico livello DOM: damigiane, carte, arena a due Maschere, animazioni, i18n.

**`CardArt`** disegna le 40 carte napoletane come SVG originale (semi e figure tradizionali),
e **`MaskArt`** disegna le 9 Maschere come SVG pixel-art — tutto vettoriale originale, nessuna
scansione di mazzi reali, così l'intero gioco resta un unico file offline.

**Comportamento IA.** L'IA gioca i suoi valori reali (dopo l'inversione): con build curativa
si cura verso 200 quando non può chiudere, ma se i tuoi PV sono bassi — o ha un colpo letale —
punta a ucciderti. Difende se la sua vita è in pericolo.

**Confine PvP:** sostituisci le due chiamate locali (`aiChoose` e la distribuzione carte) con
messaggi di rete; `GameLogic` e `GameState` restano invariati.

**Validazione:** 21 test headless in Node coprono i pareggi (coppia di Re batte coppia di 5,
kicker, Asso alto, ordinamento full/scala), la regola di vittoria a 200 PV, il costo cambio, e
l'euristica IA. Uno stress test da 100k round conferma che `compare` non contraddice mai il grado.

---

## Changelog

### v1.2.0
- **Carte napoletane** ridisegnate come SVG originale (semi e figure tradizionali) al posto delle emoji.
- La Maschera avversaria resta **nascosta finché non scegli Attacco/Difesa**; solo allora si rivelano carte + Maschera.
- **Le carte non si spostano** più all'evocazione: un'arena a due slot fissi tiene le Maschere sopra il tavolo.
- **Entrambe le Maschere** hanno un'animazione d'attacco basata sull'arma (affondo / fendente / taglio) più il bagliore di cura.
- Dopo lo scontro il gioco **avanza automaticamente** al round successivo fino alla fine.
- **Due animazioni di fine partita distinte**: vittoria (pioggia di monete) vs sconfitta (colatura rossa, titolo che trema).
- **IA più intelligente**: gioca i valori dopo l'inversione — si cura verso 200 con build curativa, ma ti finisce se hai pochi PV o se ha un colpo letale.
- Corretto un *presunto* "vincitore sbagliato": erano le carte comunitarie condivise a formare una mano più alta del previsto. Ora le mani sono etichettate chiaramente nello showdown; `compare` verificato su 100k round.

### v1.1.0
- Pareggi alla poker; vittoria a 0 PV (sconfitta) o 200 PV su te stesso (vittoria); schermata
  duello a due Maschere; animazioni attacco/cura distinte; Maschere pixel-art; localizzazione IT/EN.

### v1.0.0
- Prima versione giocabile 1v1 vs IA: PV a damigiana, evocazione Maschera, attacco/difesa,
  cambio carta a 10 PV, cura a rendimenti decrescenti, setup build.
