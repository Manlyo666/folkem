# Folk 'Em — La Locanda delle Maschere

*Gioco di carte 1v1 attacco/difesa con le Maschere della Commedia dell'Arte e il mazzo
napoletano da 40 carte, in stile Texas Hold'em.*

**🇬🇧 [Read in English →](README.md)**

**▶ Gioca / Installa:** carica questa cartella su GitHub Pages, poi apri l'URL di Pages su
Android e usa *"Aggiungi a schermata Home"* di Chrome — si installa come app a sé stante
(senza barra dell'indirizzo) grazie a `manifest.json` e al service worker.

> **Link app:** [https://manlyo666.github.io/folkem/](https://manlyo666.github.io/folkem/)

---

## Le Maschere

Ogni combinazione di carte evoca una **Maschera** della Commedia dell'Arte, con un valore
di **Attacco** e uno di **Difesa**. Più la combinazione è rara, più la Maschera è potente.

| Maschera | Arma | Attacco / Difesa | Evocata da |
|---|---|---|---|
| **Capitan Spaventa** | Spada Strisciata | 100 / 100 (fisso) | Scala Reale |
| **Meneghino** | Ombrello d'acciaio | 50 / 50 (fisso) | Poker |
| **Arlecchino** | Spatola di legno | 30 / 15 | Colore |
| **Colombina** | Ventaglio affilato | 25 / 13 | Full |
| **Pulcinella** | Manganello | 20 / 10 | Tris |
| **Dottor Balanzone** | Tomo pesante | 15 / 8 | Scala |
| **Brighella** | Bastone nodoso | 10 / 5 | Doppia Coppia |
| **Pantalone** | Borsa di monete | 6 / 3 | Coppia |
| **Meo Patacca** | Stiletto | 2 / 1 | Carta Alta |

**Capitan Spaventa** e **Meneghino** hanno Attacco e Difesa uguali e **non si possono
invertire**. Tutte le altre sì (vedi *Setup*).

---

## Come si gioca

Sfidi l'Avversario. Ognuno parte con **100 PV**, mostrati come una **damigiana** di vino
che si riempie e si svuota. **Vinci** se porti l'Avversario a **0 PV**, oppure se porti i
tuoi PV a **200**.

Il gioco segue lo schema del **Texas Hold'em** con il mazzo napoletano da 40 carte.

**Svolgimento di un round:**

1. Ricevi **2 carte private**; al centro del tavolo ci sono **5 carte comuni**, di cui le
   prime **4 scoperte** e la **5ª coperta**.
2. Puoi **cambiare 1 carta** delle tue per **10 PV** (una sola volta per round).
3. Scegli **Attacco** o **Difesa** — alla cieca, guardando solo le 4 carte scoperte.
4. **Solo allora** si scopre la **5ª carta**: si formano le mani finali di **5 carte su 7**
   (2 tue + 5 comuni). La tua Maschera può ancora cambiare grazie alla quinta carta.
5. Si confrontano le combinazioni: **vince la più alta** (in caso di pareggio contano le
   carte più alte, poi i kicker, con l'Asso alto).
6. **Chi vince il confronto** applica la sua mossa:
   - **Attacco** → infligge all'avversario il proprio valore di **Attacco**.
   - **Difesa** → recupera PV pari al proprio valore di **Difesa** (cura).
   - Se chi ha scelto **Difesa perde** il confronto, la sua Difesa **riduce il danno subito**
     (parata): lo scudo assorbe parte del colpo.

**Turni alternati:** ogni round uno dei due dichiara la mossa per primo e l'altro vede e
risponde. Chi inizia si **alterna** a ogni round.

**Furia offensiva:** attaccare più volte di fila dà un bonus danno crescente
(**+10% / +20% / +30% / +40%**). Il bonus si applica al danno **prima della parata**, quindi
sfonda parzialmente lo scudo. **Difendere azzera** la furia.

**Cura a rendimenti decrescenti:** curarsi più volte di fila rende sempre meno —
**100% → 50% → 25% → 0%**. **Attaccare azzera** il contatore e la cura torna piena. La
parata **non** è influenzata da questo.

**Ultimo Giro:** se dopo **30 round** nessuno ha chiuso, parte un conto alla rovescia di
**10 mani** (con contatore a schermo). Allo scadere **vince chi ha più PV**.

---

## Gerarchia delle combinazioni

Con sole **40 carte** (niente 8-9-10 del mazzo francese) le probabilità cambiano rispetto al
poker classico: il **Colore batte il Full** e il **Tris batte la Scala**, perché sono più rari.

Dalla più forte alla più debole, con la probabilità reale di ottenerla (5 carte su 7):

| Combinazione | Maschera | Probabilità |
|---|---|---|
| **Scala Reale** (5 consecutive stesso seme) | Capitan Spaventa | 0.08% |
| **Poker** (4 uguali) | Meneghino | 0.39% |
| **Colore** (5 stesso seme) | Arlecchino | 2.4% |
| **Full** (tris + coppia) | Colombina | 5.6% |
| **Tris** (3 uguali) | Pulcinella | 6.6% |
| **Scala** (5 consecutive) | Dottor Balanzone | 10.4% |
| **Doppia Coppia** | Brighella | 33.7% |
| **Coppia** | Pantalone | 34.7% |
| **Carta Alta** | Meo Patacca | — |

> **Scala Reale:** cinque carte consecutive dello stesso seme (es. 4-5-6-7-Fante di bastoni).
> Fra due Scale Reali vince quella che arriva alla carta più alta (l'Asso batte il Re).

---

## Setup — inversione delle Maschere

Prima della partita, su una griglia 3×3, puoi **invertire Attacco e Difesa** di ogni Maschera
(tranne Meneghino e Capitan Spaventa, che sono fissi). Invertendo, per esempio, Brighella passa
da 10/5 a 5/10: diventa una Maschera più difensiva. Così scegli se puntare sull'aggressività,
sulla cura, o su un mix.

---

## Modalità

- **Giocatore vs IA**, con tre difficoltà (Facile / Media / Difficile). Le tre difficoltà
  **ragionano allo stesso modo** (valore atteso di ogni turno, furia, sopravvivenza, gestione
  delle strisce, lettura della mossa): si differenziano **solo** per i **PV iniziali** dell'IA
  (**60 / 100 / 140**) e per un filo di casualità decrescente — a Facile l'IA sbaglia qualche
  mossa ogni tanto, a Difficile mai.
- **PvP offline** — un solo telefono al centro; carte, pulsanti e Maschere del Giocatore 2 sono
  capovolti, così entrambi leggono dritto.
- **PvP online** — sfida a distanza tramite connessione diretta (WebRTC): si scambia un codice
  di collegamento via QR o testo, e le carte sono sincronizzate per entrambi.

---

## Com'è programmato

Tre livelli netti, così che il confine tra logica e interfaccia resti pulito:
- **`GameLogic`** — puro, senza DOM: mazzo, valutazione a 7 carte con pareggi alla poker,
  risoluzione con parata e furia, IA a valore atteso.
- **`GameState`** — stato serializzabile + azioni.
- **`UI`** — l'unico livello DOM: modalità, setup 3×3, damigiane, overlay Maschere,
  animazioni delle armi lanciate, capovolgimento PvP, scaling responsivo, modali.

Maschere, damigiane, carte, sfondo e icona sono grafica dedicata. L'app è una PWA
(`manifest.json` + `sw.js`), quindi si installa e gira **offline**.

---

## Changelog

Vedi la schermata **🔄 Aggiornamenti** in-app, oppure i file `CHANGELOG.it.md` / `CHANGELOG.md`.
La versione attuale è indicata nell'app. Lo schema è `1.x.y`: la seconda cifra sale per i
cambiamenti importanti di gioco, la terza per correzioni e ritocchi.
