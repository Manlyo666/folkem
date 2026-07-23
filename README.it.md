# Folk 'Em — La Locanda delle Maschere

*Gioco di carte 1v1 attacco/difesa (RPG · HD-2D / pixel-art) con le Maschere della
Commedia dell'Arte e il mazzo napoletano da 40 carte, ora in stile Texas Hold'em.*

**🇬🇧 [Read in English →](README.md)**

**▶ Gioca / Installa:** carica questa cartella su GitHub Pages, poi apri l'URL di Pages su
Android e usa *"Aggiungi a schermata Home"* di Chrome — si installa come app a sé stante
(senza barra dell'indirizzo) grazie a `manifest.json` e al service worker.
*(Sostituisci il link qui sotto con il tuo URL Pages.)*

> **Link app:** [https://manlyo666.github.io/folkem/](https://manlyo666.github.io/folkem/)

---

## Come si gioca

Sfidi l'Avversario. Ognuno parte con **100 PV**, mostrati come una **damigiana** di vino che si riempie e si svuota.

**Vinci se:** porti l'Avversario a **0 PV**, oppure porti i tuoi PV a **200**.


### Un round — Texas Hold'em (40 carte)
- 2 carte private + **4 carte a terra**. Cambi 1 carta per 10 PV (una volta per round).
- Premi **Evoca Maschera**: la tua migliore combinazione sulle **4 carte a terra** evoca una Maschera.
- Scegli **Attacco** o **Difesa**. **Solo allora** cala la **5ª carta** e si formano le mani finali di 5 su 7 — la tua Maschera può ancora cambiare.
- La Maschera avversaria resta **coperta** finché non scegli **Attacco** o **Difesa**.
- Vince la combinazione più alta (pareggi alla poker: carte più alte, poi kicker, Asso alto).
- **Attacco** infligge il tuo Attacco. **Difesa**: se vinci, curi il tuo valore Difesa; se
  **perdi**, la tua Difesa **riduce il danno subito** (parata).
- **Audio**: suoni per carte, pulsanti, evocazione (arpa), tre tipi di attacco (legno/metallo/taglio),
  vino versato, parata, strappo della maschera, campana dell'Ultimo Giro, fanfara e tema di sconfitta,
  piu musica di taverna. Tutto **sintetizzato dal gioco** (nessun file, nessun peso). Silenziabile col pulsante 🔊.
- **Ultimo Giro**: se dopo **30 round** nessuno ha chiuso, parte un conto alla rovescia di **10 mani**
  (annunciato a schermo, con contatore sempre visibile). Allo scadere **vince chi ha più PV**.
  Nessun modificatore: danni e cura restano normali.
- **Cura a rendimenti decrescenti**: cure *consecutive* rendono 100% → 75% → 50% → 25% → 0%.
  **Attaccare azzera il contatore** e la cura torna piena. La **parata non è influenzata**.
- Le maschere appaiono sopra il tavolo, la vincitrice **lancia l'arma** e distrugge la
  Maschera perdente, poi colpisce la damigiana avversaria. In caso di cura, Maschera e damigiana brillano.

### Setup — griglia 3×3
Prima della partita, **inverti Attacco/Difesa** di ogni Maschera (Meneghino e Capitan Spaventa fissi).

### Modalità
- **Giocatore vs IA** con tre difficoltà (Facile / Media / Difficile).
- **PvP offline** — un telefono al centro; carte e pulsanti del Giocatore 2 capovolti, così
  entrambi leggono dritto.
- **PvP online** — grigia per ora.

### Gerarchia Maschere (arma · Attacco / Difesa) & probabilità reali (Hold'em)
| Combinazione | Maschera | Arma | Atk / Dif | Prob. |
|---|---|---|---|---|
| Scala Colore | Capitan Spaventa | Spada Strisciata | 100 / 100 (fisso) | 0.08% |
| Poker | Meneghino | Ombrello d'acciaio | 50 / 50 (fisso) | 0.39% |
| Colore | Arlecchino | Spatola di legno | 30 / 15 | 2.4% |
| Full | Colombina | Ventaglio affilato | 25 / 13 | 5.6% |
| Tris | Pulcinella | Manganello | 20 / 10 | 6.6% |
| Scala | Dottor Balanzone | Tomo pesante | 15 / 7 | 10.4% |
| Doppia Coppia | Brighella | Bastone nodoso | 10 / 5 | 33.7% |
| Coppia | Pantalone | Borsa di monete | 6 / 3 | 34.7% |
| Carta Alta | Meo Patacca | Stiletto | 2 / 1 | — (nessuna combo) |

> **Diverso dal poker (40 carte):** il **Colore batte il Full** (il Colore 2.4% è più raro del Full 5.6%) e il **Tris batte la Scala** (il Tris 6.6% è più raro della Scala 10.4%). Scegli Attacco/Difesa **alla cieca** sulle 4 carte, poi cala la 5ª: può ribaltare tutto.
>
> Capitan Spaventa ora è **qualsiasi scala colore** (non solo A-alto), così la combinazione
> più rara resta raggiungibile pur restando la più rara.

---

## Com'è programmato

Tre livelli netti così che una futura conversione **PvP online** tocchi solo il confine:
- **`GameLogic`** — puro, senza DOM: mazzo, valutazione a 7 carte con pareggi alla poker,
  risoluzione con parata, IA con difficoltà.
- **`GameState`** — stato serializzabile + azioni.
- **`UI`** — l'unico livello DOM: modalità, setup 3×3, otri, overlay maschere centrale,
  animazioni armi lanciate, capovolgimento PvP, scaling responsivo, modali.

Maschere, otri, riferimento carte, sfondo e icona sono la grafica fornita. Le carte sono
disegnate in SVG originale nello stile fornito. L'app è una PWA (`manifest.json` + `sw.js`)
quindi si installa e gira offline.

**Validazione:** 16 test headless in Node (pareggi, parata, vittoria a 200, IA difficoltà)
più una sessione Playwright che gioca round completi con **zero errori JS**.

---

## Changelog
Vedi la schermata **🔄 Aggiornamenti** in-app, o `CHANGELOG` nel sorgente. Versioni `1.0.x`.

### v1.0.4
Texas Hold'em (2+5), grafica fornita integrata, overlay maschere centrale che copre le carte,
parata (la difesa del perdente riduce il danno), 3 difficoltà IA, PvP offline con carte
capovolte, menu modalità, armi lanciate + distruzione maschera + colpo alla damigiana, setup 3×3,
ruota-opzioni, regole al primo avvio, PWA installabile. Prima: 1.0.3 carte ridisegnate e
maschera avversaria nascosta; 1.0.2 pareggi alla poker e vittoria 0/200; 1.0.1 prima versione.
