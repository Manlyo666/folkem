# Folk 'Em — The Inn of Masks

*A 1v1 attack/defense card game featuring the Masks of the Commedia dell'Arte and the
40-card Neapolitan deck, in Texas Hold'em style.*

**🇮🇹 [Leggi in italiano →](README.it.md)**

**▶ Play / Install:** upload this folder to GitHub Pages, then open the Pages URL on Android
and use Chrome's *"Add to Home screen"* — it installs as a standalone app (no address bar)
thanks to `manifest.json` and the service worker.

> **App link:** [https://manlyo666.github.io/folkem/](https://manlyo666.github.io/folkem/)

---

## The Masks

Every card combination summons a **Mask** from the Commedia dell'Arte, with an **Attack** and
a **Defense** value. The rarer the combination, the stronger the Mask.

| Mask | Weapon | Attack / Defense | Summoned by |
|---|---|---|---|
| **Capitan Spaventa** | Crawling sword | 100 / 100 (fixed) | Straight Flush |
| **Meneghino** | Steel umbrella | 50 / 50 (fixed) | Four of a Kind |
| **Arlecchino** | Wooden spatula | 30 / 15 | Flush |
| **Colombina** | Sharp fan | 25 / 13 | Full House |
| **Pulcinella** | Cudgel | 20 / 10 | Three of a Kind |
| **Dottor Balanzone** | Heavy tome | 15 / 8 | Straight |
| **Brighella** | Knotted stick | 10 / 5 | Two Pair |
| **Pantalone** | Coin purse | 6 / 3 | Pair |
| **Meo Patacca** | Stiletto | 2 / 1 | High Card |

**Capitan Spaventa** and **Meneghino** have equal Attack and Defense and **cannot be
inverted**. All the others can (see *Setup*).

---

## How to play

You face the Opponent. Each starts with **100 HP**, shown as a **demijohn** of wine that fills
and empties. You **win** by bringing the Opponent to **0 HP**, or by raising your own HP to
**200**.

The game follows the **Texas Hold'em** structure with the 40-card Neapolitan deck.

**A round, step by step:**

1. You get **2 private cards**; in the middle of the table there are **5 community cards**, of
   which the first **4 are face-up** and the **5th is face-down**.
2. You may **swap 1 of your cards** for **10 HP** (once per round).
3. You choose **Attack** or **Defense** — blind, seeing only the 4 face-up cards.
4. **Only then** the **5th card** is revealed: the final hands of **5 cards out of 7** are
   formed (your 2 + the 5 community). Your Mask can still change thanks to the fifth card.
5. The combinations are compared: the **highest wins** (on a tie the highest cards decide, then
   kickers, with Ace high).
6. **Whoever wins the showdown** applies their move:
   - **Attack** → deals their **Attack** value to the opponent.
   - **Defense** → recovers HP equal to their **Defense** value (healing).
   - If the player who chose **Defense loses** the showdown, their Defense **reduces the damage
     taken** (parry): the shield absorbs part of the blow.

**Alternating turns:** each round one side declares first and the other sees it and responds.
Who goes first **alternates** every round.

**Offensive fury:** attacking several times in a row grants a growing damage bonus
(**+10% / +20% / +30% / +40%**). The bonus applies to the damage **before the parry**, so it
partially breaks through the shield. **Defending resets** the fury.

**Diminishing-returns healing:** healing several times in a row yields less and less —
**100% → 50% → 25% → 0%**. **Attacking resets** the counter and healing returns to full.
Parrying is **not** affected by this.

**Last Call:** if after **30 rounds** no one has closed the game, a **10-hand** countdown
begins (with an on-screen counter). When it runs out, **the player with more HP wins**.

---

## Hand hierarchy

With only **40 cards** (no 8-9-10 of the French deck) the odds differ from classic poker: a
**Flush beats a Full House** and **Three of a Kind beats a Straight**, because they are rarer.

Strongest to weakest, with the real probability of getting it (5 cards out of 7):

| Combination | Mask | Probability |
|---|---|---|
| **Straight Flush** (5 consecutive, same suit) | Capitan Spaventa | 0.08% |
| **Four of a Kind** | Meneghino | 0.39% |
| **Flush** (5 same suit) | Arlecchino | 2.4% |
| **Full House** (trips + pair) | Colombina | 5.6% |
| **Three of a Kind** | Pulcinella | 6.6% |
| **Straight** (5 consecutive) | Dottor Balanzone | 10.4% |
| **Two Pair** | Brighella | 33.7% |
| **Pair** | Pantalone | 34.7% |
| **High Card** | Meo Patacca | — |

> **Straight Flush:** five consecutive same-suit cards (e.g. 4-5-6-7-Jack of clubs). Between
> two straight flushes, the one reaching the highest card wins (Ace beats King).

---

## Setup — inverting the Masks

Before the match, on a 3×3 grid, you may **swap Attack and Defense** on each Mask (except
Meneghino and Capitan Spaventa, which are fixed). Inverting, say, Brighella turns 10/5 into
5/10: a more defensive Mask. This lets you build for aggression, healing, or a mix.

---

## Modes

- **Player vs AI**, with three difficulties (Easy / Medium / Hard). The three difficulties
  **reason the same way** (expected value each turn, fury, survival, streak management, move
  reading): they differ **only** in the AI's **starting HP** (**60 / 100 / 140**) and in a
  decreasing sprinkle of randomness — on Easy the AI misses a move now and then, on Hard never.
- **Offline PvP** — one phone in the middle; Player 2's cards, buttons and Masks are flipped,
  so both read them upright.
- **Online PvP** — remote play over a direct connection (WebRTC): you exchange a link code via
  QR or text, and the cards are synced for both.

---

## How it's built

Three clean layers, keeping the boundary between logic and interface tidy:
- **`GameLogic`** — pure, DOM-free: deck, 7-card evaluation with poker tie-breaks, resolution
  with parry and fury, expected-value AI.
- **`GameState`** — serializable state + actions.
- **`UI`** — the only DOM layer: modes, 3×3 setup, demijohns, Mask overlay, thrown-weapon
  animations, PvP flipping, responsive scaling, modals.

Masks, demijohns, cards, background and icon are dedicated artwork. The app is a PWA
(`manifest.json` + `sw.js`), so it installs and runs **offline**.

---

## Changelog

See the **🔄 Updates** screen in-app, or the `CHANGELOG.md` / `CHANGELOG.it.md` files. The
current version is shown in the app. The scheme is `1.x.y`: the second digit rises for major
gameplay changes, the third for fixes and tweaks.
