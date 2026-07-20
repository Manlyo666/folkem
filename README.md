# Folk 'em — Tavern of the Masks

*A 1v1 attack/defense card game (RPG · HD-2D / pixel-art) built on the Masks of the
Commedia dell'Arte and the 40-card Neapolitan deck.*

**🇮🇹 [Leggi in italiano →](README.it.md)**

Single self-contained `index.html`. Open it in any browser — no install, fully offline.

---

## How to play

You duel the Opponent (a local AI). Each player starts with **100 HP**, shown as a wine
**demijohn** that fills and empties (Diablo-style life orb, tavern flavour).

**You win if:** you bring the Opponent to **0 HP**, or you raise **your own** HP to **200**
(reaching 200 wins immediately, regardless of the Opponent's HP).

HP has **no cap at 100**. To stop pure heal-rushing from being unbeatable, healing is
**full below 150 HP and halved from 150 to 199**, while attacks always land at full value.

### A round
- 2 private cards + **4 community cards** on the table; build the best 5-card combo of those 6.
- Start of turn: **swap one hand card for 10 HP** (once per round).
- Press **Summon Mask** — your Mask appears. The Opponent's Mask stays **face-down**.
- Choose **Attack** or **Defend**. *Only then* the Opponent's cards and Mask are revealed
  and the clash resolves.
- The higher-ranked combo wins. Ties break poker-style (higher pair/trips, then kickers,
  Ace high). Attack → deal your Mask's Attack; Defend → heal your Mask's Heal; loser gets nothing.
- After the clash the game **auto-advances** to the next round until someone wins.

### Setup: Mask builds
Once, before the game, **swap Attack/Heal** on each Mask for full-attack, full-heal, or
balanced builds. **Meneghino and Capitan Spaventa are fixed.**

### Mask hierarchy (weapon · base Attack / Heal)
| Combination | Mask | Weapon | Atk / Heal |
|---|---|---|---|
| High Card | Meo Patacca | Stiletto | 2 / 1 |
| Pair | Pantalone | Heavy coin purse | 6 / 3 |
| Two Pair | Brighella | Gnarled cudgel | 10 / 5 |
| Three of a Kind | Pulcinella | Wooden club | 15 / 7 |
| Straight | Dottor Balanzone | Heavy leather tome | 20 / 10 |
| Flush | Arlecchino | Wooden slapstick | 25 / 13 |
| Full House | Colombina | Sharp fan | 30 / 15 |
| Four of a Kind | Meneghino | Steel umbrella | 50 / 50 (fixed) |
| Royal Flush | Capitan Spaventa | Sword | 100 / 100 (fixed) |

> **Deck note.** 40 Neapolitan cards (A–7, Fante, Cavallo, Re × 4 suits) — no 8/9/10.
> Straights use A low (A-2-3-4-5) and A high (Fante-Cavallo-Re-A). With only 6 cards seen
> per round, Four of a Kind and Royal Flush are extremely rare by design.

---

## How it's coded

One `index.html`; HTML + CSS + JS inline, split into three clean layers so a future
**online PvP** conversion touches only the boundary, not the rules:

- **`GameLogic`** — pure, no DOM: deck, hand evaluation with poker tie-breaks (`evaluate`
  returns a `tie[]` kicker vector, `compare` orders hands), showdown resolution,
  diminishing-returns healing, and a build-aware AI (`aiChoose`).
- **`GameState`** — serializable state + actions (`dealRound`, `swapCard`, `applyDelta`, `checkWin`).
- **`UI`** — the only DOM layer: demijohns, cards, the two-Mask arena, animations, i18n.

**`CardArt`** draws the 40 Neapolitan cards as original inline SVG (traditional suits and
figures), and **`MaskArt`** draws the 9 Masks as pixel-art SVG — all original vector art,
no scans of any real deck, so the whole game stays one offline file.

**AI behaviour.** The AI plays its real (post-inversion) values: with a healer build it
heals toward 200 when it can't close, but if your HP is low — or it has a lethal hit — it
goes for the kill. It defends when its own life is in danger.

**PvP boundary:** replace the two local calls (`aiChoose` and card dealing) with network
messages; `GameLogic` and `GameState` stay unchanged.

**Validation:** 21 headless Node tests cover tie-breaks (pair-of-Kings beats pair-of-fives,
kickers, Ace-high, full/straight ordering), the 200-HP win rule, swap cost, and the AI
heuristic. A 100k-round stress test confirms `compare` never contradicts hand rank.

---

## Changelog

### v1.2.0
- **Neapolitan cards** redrawn as original SVG art (traditional suits & figures) instead of emoji.
- Opponent's Mask stays **hidden until you choose Attack/Defend**; only then cards + Mask reveal.
- **Cards no longer move** on summon: a fixed two-slot arena holds both Masks above the board.
- **Both Masks** get a weapon-based attack animation (stab / swing / fan) plus a heal glow.
- After the clash the game **auto-advances** to the next round until the match ends.
- **Two distinct end animations**: victory (gold coin rain) vs defeat (red drip, shaken title).
- **Smarter AI**: plays post-inversion values — heals toward 200 with a healer build, but
  finishes you when your HP is low or a lethal hit is available.
- Fixed a *perceived* "wrong winner" report: it was shared community cards forming a higher
  hand than expected. Hands are now clearly labelled at showdown; `compare` verified over 100k rounds.

### v1.1.0
- Poker-style tie-breaks; win condition set to 0 HP (loss) or 200 HP on yourself (win);
  two-Mask duel screen; distinct attack/heal animations; pixel-art Masks; IT/EN localization.

### v1.0.0
- Initial playable 1v1 vs AI: demijohn HP, Mask summoning, attack/defend, 10-HP swap,
  diminishing-returns healing, mask-build setup.
