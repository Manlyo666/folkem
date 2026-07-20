# Folk 'Em — The Tavern of Masks

*A 1v1 attack/defense card game (RPG · HD-2D / pixel-art) built on the Masks of the
Commedia dell'Arte and the 40-card Neapolitan deck, now played Texas Hold'em style.*

**🇮🇹 [Leggi in italiano →](README.it.md)**

**▶ Play / Install:** deploy this folder to GitHub Pages, then open the Pages URL on
Android and use Chrome's *"Add to Home screen"* — it installs as a standalone app
(no address bar) thanks to the included `manifest.json` and service worker.
*(Update the link below with your own Pages URL.)*

> **App link:** `https://<your-username>.github.io/folkem/`

---

## How to play

You duel the Opponent. Each player starts with **100 HP**, shown as a wine **otre**
(wineskin) that fills and empties.

**You win if:** you bring the Opponent to **0 HP**, or you raise **your own** HP to **200**.

Healing is full below 150 HP and halved from 150–199; attacks always land full.

### A round — Texas Hold'em (40 cards)
- 2 private cards + **4 table cards**. Swap one hand card for 10 HP (once per round).
- Press **Summon Mask**: your best hand on the **4 table cards** summons a Mask.
- Choose **Attack** or **Defend**. **Only then** the **5th table card** is dealt and the final 5-of-7 hands form — your Mask can still change.
- The Opponent's Mask stays **hidden** until you choose **Attack** or **Defend**.
- Higher combination wins (ties broken poker-style: higher cards, then kickers, Ace high).
- **Attack** deals your Attack value. **Defend**: if you win, heal your Defense value; if you
  **lose**, your Defense **reduces the incoming damage** (parry).
- The masks appear over the board, the winner **throws its weapon** to shatter the loser's
  Mask, then strikes the loser's otre. On a heal, the winner's Mask and otre glow.

### Setup — 3×3 build grid
Before the match, **swap Attack/Defense** on any Mask (Meneghino and Capitan Spaventa are fixed).

### Modes
- **Player vs AI** with three difficulties (Easy / Medium / Hard).
- **Offline PvP** — one phone in the middle; Player 2's cards and buttons are flipped so
  both read right-side up.
- **Online PvP** — greyed out for now.

### Mask hierarchy (weapon · Attack / Defense) & real probability (Hold'em)
| Combination | Mask | Weapon | Atk / Def | Chance |
|---|---|---|---|---|
| High Card | Meo Patacca | Stiletto | 2 / 1 | 6.1% |
| Pair | Pantalone | Coin purse | 6 / 3 | 34.7% |
| Two Pair | Brighella | Gnarled cudgel | 10 / 5 | 33.7% |
| Three of a Kind | Pulcinella | Club | 15 / 7 | 6.6% |
| Full House | Colombina | Sharp fan | 25 / 13 | 5.6% |
| Flush | Arlecchino | Wooden slapstick | 30 / 15 | 2.5% |
| Straight | Dottor Balanzone | Heavy tome | 20 / 10 | 10.4% |
| Four of a Kind | Meneghino | Steel umbrella | 50 / 50 (fixed) | 0.37% |
| Straight Flush | Capitan Spaventa | Sword | 100 / 100 (fixed) | 0.085% |

> **Different from poker:** with 40 cards a Flush (2.4%) is rarer than a Full House (5.6%), so **Flush beats Full House** here. The 5th table card is dealt **after** you pick Attack/Defend, so your hand can still change.
>
> Capitan Spaventa is now **any straight flush** (not only Ace-high), so the rarest hand is
> reachable while staying the rarest.

---

## How it's coded

Clean three-layer split so a future **online PvP** touches only the boundary:
- **`GameLogic`** — pure, no DOM: deck, 7-card evaluation with poker tie-breaks, parry
  resolution, diminishing-returns healing, difficulty-aware AI.
- **`GameState`** — serializable state + actions.
- **`UI`** — the only DOM layer: modes, 3×3 setup, otre HP bars, center mask overlay,
  weapon-throw animations, PVP flipping, responsive scaling, modals.

Masks, otri, cards-reference, background and icon are the provided artwork. Cards are drawn
as original SVG in the provided style. The app is a PWA (`manifest.json` + `sw.js`) so it
installs and runs offline.

**Validation:** 16 headless Node tests (tie-breaks, parry math, 200-HP win, difficulty AI)
plus a Playwright run that plays full rounds with **zero JS errors**.

---

## Changelog
See the in-app **🔄 Updates** screen, or `CHANGELOG` in the source. Versions use `1.0.x`.

### v1.0.4
Texas Hold'em (2+5), provided artwork wired in, center mask overlay covering the board,
parry (loser's defense cuts damage), 3 AI difficulties, offline PvP with flipped cards,
mode menu, thrown weapons + mask destruction + otre hit, 3×3 setup grid, options wheel,
rules on first launch, installable PWA. Earlier: 1.0.3 redrawn cards & hidden foe mask;
1.0.2 poker tie-breaks & 0/200 win; 1.0.1 first playable.
