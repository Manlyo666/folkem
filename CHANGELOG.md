# Changelog — Folk 'Em

## 1.3.4

- Fixed: if the Wine Points are tied when the Last Ten Rounds run out, the match no longer ends with an arbitrary win. It goes to SUDDEN DEATH — play continues one round at a time until someone pulls ahead.
- Demijohn: the wine now always stays within the glass outline, even when nearly full. Before, past a certain level, the red spilled outside the edges.

## 1.3.3

- Animation timings are now adaptive: each turn's length stretches or shrinks based on what actually happens — attack, parry, tear, heal or a stand-off. Every phase starts when the previous one ends, so animations and sounds no longer overlap.

## 1.3.2

- Fixed a Hard-opponent mistake: when it could win on points by healing (reaching 200 HP) it sometimes attacked instead of healing. Now, if a heal closes the game and attacking doesn't, it heals to win.
- The Mask that parries and loses the clash now always tears if damage gets through, even after a partial parry: before, in some cases, the tear didn't fire due to an animation-timing issue.
- Removed the demijohn "spilling wine" animation above 150 HP: the level stays full with no dripping.
- If you restart the match during the Last Rounds the music returns to normal speed (before it stayed sped up).

## 1.3.1

- Difficulties rebalanced: the Hard opponent is tougher (starts with 140 HP instead of 130) and Easy is more accessible (60 HP instead of 70). Medium stays at 100.
- In the Last Ten Rounds the music speeds up more (+50%) to raise the tension of the finish.
- The red end-game counter on the table now has a crisp black outline, so it reads well even on light wood.

## 1.3.0

- Opponent reworked: it now reasons on each turn's expected value instead of rigid rules, and follows the EXACT game RULES — it deals damage and heals like the player, with no hidden multipliers. On-screen numbers always match the Wine Points lost or recovered.
- The three difficulties differ honestly: the opponent starts with more or less wine in its demijohn (Easy 60, Medium 100, Hard 140 HP) and plays with more or less skill. No cheating on the cards.
- On Hard the opponent switches strategy each game, picking among three different Mask builds: Defensive-heal (inverts the three weakest, plays the counter), Pure aggressive (all on attack) and Full-heal (inverts the high-damage Masks for huge heals). It reads your intentions more often so it won't strike into a parry.
- Parry: the shield shows the FULL Defense value. If the attack deals 6 and Defense is worth 10, the shield shows 10 (the blow is still nullified).
- After a parry the defeated Mask tears only if the blow lands: if the parry fully cancels the damage the Mask holds, with no tear and no sound.
- The Last Call counter carved into the table reads "Last call -X" in the uppercase Scar typeface; in the last three rounds the number turns red. The big on-screen warning reads "The Last Ten Rounds" with a crisper black outline.
- After the Last Call warning the background music speeds up to convey the final rush; overall the music is more present in the menu and in play.
- Win on points: the message reads "When the turns ran out you had more wine in your demijohn".
- The four opening cards now always play all four clicks.

## 1.2.12

- The Last Call counter is now written in a carved typeface, light beige with a black outline: readable on any table background.
- In the last 3 hands the remaining number turns red with a lighter-red outline, so the urgency is obvious at a glance.

## 1.2.11

- Harp, wine pouring and victory/defeat music turned down further.
- When a parry cancels all damage the demijohn animation is skipped: the next turn starts right away (from 9 to 5 seconds).
- Removed an extra card sound when hands are revealed.
- In the heal announcement the Mask name is now golden as in attacks: only the word Heal stays green.
- Damage and heal numbers redrawn with clear digits and a stronger outline: 3 is no longer mistaken for 8.
- Removed the Table cards label; the Last Call counter now appears in its place when needed.
- Dottor Balanzone now has 15 Attack and 8 Defence (was 15/7).
- In setup each Mask shows its own name first, larger, with the matching hand below, smaller.

## 1.2.10

- Summoning harp and card sounds turned down; background music turned up (more than doubled).
- Cards now make a sound when they are revealed at the end of a hand.
- Swapping a card now tips wine out of the demijohn, with the pouring sound: you can see you are paying 10 HP.
- When a Mask heals, its name and Heal appear centre-screen in green, like the weapon announcement for attacks.
- Added a sound for the Mask coming alive before acting: sharp and sudden when attacking, warm and slow when healing.

## 1.2.9

- Volumes rebalanced across all sounds: the gap between loudest and quietest went from 5.2x to 3.1x, and now it is intentional.
- Cards and the parry shield turned down: cards play constantly and should not tire the ear, and the shield was the harshest sound of all.
- Turned up the barely audible ones: summoning harp, pouring wine and blade.
- Removed clipping risk: no sound reaches maximum level any more.

## 1.2.8

- FIXED the old-sounds problem at its root: synthesis is no longer used as a fallback for sounds that have a real file. If a sample is not ready yet there is now a brief silence instead of a fake sound.
- Sounds now load when the page opens rather than on first tap: they are ready before you press anything.
- The first menu click used to trigger two synthesised sounds because samples were still loading: that no longer happens.

## 1.2.7

- Removed the six remaining synthesised sounds (mask sparkle, pre-5th-card tension, lunge, and the clash outcome chords): they were unrequested additions of mine and the only fake sounds left in play. Now only real sounds are heard in game.
- The summoning harp is now exactly the original file, only shortened: no reversing, no processing.
- Fixed the trimming of all samples: the filter used to cut at the first faint noise instead of the actual hit, so some sounds came out wrong.

## 1.2.6

- REAL SOUNDS replacing the synthesised ones: cards, clicks, summoning harp, the three attack types, parry, tear, pouring wine, bell, fanfare and defeat. If a file fails to load, the game falls back to synthesis on its own.
- The summoning harp was trimmed and REVERSED: it now rises instead of falling, and lasts 2.8s instead of 19. No more trailing hiss.
- Table cards are now dealt ONE AT A TIME, each with its own sound, like a real dealer would.
- Attacks use the real sample repeated in a salvo, with different pitch and volume on each blow.
- The three card sound variants alternate randomly, so dealing never sounds mechanical.

## 1.2.5

- Card sound remade from scratch, inspired by the classic Windows card games: a clean, dry click with no rustle.
- VERSION NUMBERING FIXED: versions were inflated. The second digit now only goes up when rules or gameplay change (twice so far: diminishing healing and Last Call), the third on every refinement. The changelog has been renumbered: what was 1.6.0 is really 1.2.5.

## 1.2.4

- Card sound remade: now a dry snap on the table with a short slide, instead of the previous rustle.
- Orchestrated game music: lute, bass, sustained strings, drum and counter-melody, with reverb for space. The previous simple theme is now the menu music.
- Attacks are no longer a single hit but a SALVO of rapid blows, one per flying weapon.
- Settings now have TWO separate switches: one for Music and one for Sound FX.
- Added the missing sounds: tension before the 5th card drops, masks materialising, a lunge before the strike, and a different chord depending on whether you win, lose or tie the clash.
- Masks now leave the centre BEFORE the demijohns fill or empty: they no longer linger during the pour.

## 1.2.3

- Fixed the healing counter: it now only goes up if you ACTUALLY heal (no more rising when healing is already at zero) and resets as soon as you press Attack, even if you lose the clash or deal no damage.
- New end-of-turn animations: the mask no longer strikes the demijohn. Wine is poured from a carafe when you heal, and the demijohn tips over and spills when you take damage.
- The parry shield now appears directly on the mask that parries, with the absorbed value (e.g. -6).
- The Last Call counter now looks carved into the wood of the table, and turns red for the last 3 hands.
- Added the HP label next to the demijohn.
- Fixed Italian grammar in the log.
- The Masks awaken text now has a black outline: readable on any background.

## 1.2.2

- AUDIO - The game now has sound: card rustle when cards are dealt, drawn or swapped; button clicks; a magical harp when the Masks are summoned.
- Three different attack sounds depending on the weapon: wood (Cudgel, Club, Tome, Spatula), metal (Coins, Steel Umbrella, Sword) and blade (Stiletto, Sharpened Fan).
- Pouring wine when the demijohn fills or empties, a shield for the parry, a rip for the torn mask, a bell for Last Call.
- A fanfare for victory and a grim theme for defeat, plus discreet tavern music in the background.
- New sound button in the menu (and in the in-game settings) to mute everything. The choice is remembered.
- All sounds are generated by the game itself: no downloaded files, no added weight, works offline.

## 1.2.1

- NEW RULE - Last Call: if nobody has closed after 30 rounds, a 10-hand countdown begins, announced on screen with an always-visible counter that turns red for the last 3. When it runs out, the most wine wins. Damage and healing stay normal.
- Log: the opponent's combination is now readable at a glance, with its name highlighted next to yours. Added a direct comparison line (e.g. Trips beats Pair): no more reconstructing it from the 7 cards.
- Fixed a grammar slip in the Italian log.

## 1.1.1

- NEW RULE - Diminishing healing: consecutive heals give 100%, 75%, 50%, 25%, then 0%. Attacking resets the counter and healing returns to full. The parry is not affected. No decimals: always rounded up.
- Much stronger AI, finally on a real scale: Easy is truly easy, Medium competent, Hard competitive. Hard enumerates every possible fifth card, uses a META build and reads you: if you spam healing it switches to all-out attack.
- Fixed a serious AI flaw: it wasted HP on pointless card swaps to the point of killing itself.
- Weapon animations fixed: they now really start from the attacking mask and fly toward the opponent's, then from the winner toward the enemy demijohn (they used to fly vertically into nothing).
- The defeated mask is now TORN in two along a jagged line, with a flash along the tear.
- Above 150 HP the demijohn is too full and the wine overflows: dripping wine and a puddle at the base.
- Settings wheel moved to the top left.
- The log warns when healing is reduced, so you always know where you stand.

## 1.0.26

- Removed the 'Healing' entry from the rules and README: with no restrictions, full healing is obvious. Also cleaned up the READMEs ('otre' is now 'demijohn').

## 1.0.25

- Removed the healing penalty: it is now always full up to 200 HP (it used to be halved above 150). Rules updated.

## 1.0.24

- In the duel: your mask is now on the left, the opponent's (AI or Player 2) on the right.

## 1.0.23

- Setup: 'Forge your build' title even bigger, description even smaller for a clear contrast.

## 1.0.22

- Setup: 'Forge your build' title enlarged, the description below made smaller for more breathing room.

## 1.0.21

- Victorian Decade now on all titles, mask names, the Folk 'Em title and evocative messages (The Masks awaken…), larger and with a stronger shadow.
- Isenheim reserved for buttons, commands and definitions (more legible).

## 1.0.20

- New fonts: Isenheim for text and descriptions, Victorian Decade for titles and messages (Win, You Lose…) with a highlighted effect.
- End of match: personalized messages for the 4 outcomes (you drained/filled the demijohn, the opponent drained/filled it). In PvP: Demijohn dry / full.
- End of match: only the score is shown (e.g. 115 − 0), no more HP; the zero is no longer confused with the letter O.
- The language button flag now shows the one you switch to: in Italian you see the Union Jack, in English the tricolour.
- Everywhere 'otre' became 'demijohn'.

## 1.0.19

- Language icon: now a properly drawn Union Jack, recognizable even when small.

## 1.0.18

- Language icon: now just the Union Jack, moved to be the third icon.

## 1.0.17

- FIXED the empty-table bug on Android: the game screen stayed permanently on top of the menu and intercepted taps, so the mode menu looked gone and settings did nothing. Now each screen shows only when it is its turn.

## 1.0.16

- The AI now swaps a card at the START of the round, so you see it (flash on its card + HP dropping immediately) and can reason about it before choosing.
- Cards no longer shift when buttons appear/disappear: a small fixed space is reserved for them.
- Language button icon redesigned (half Italian tricolour / half Union Jack).
- Android: added a check that detects a new version and reloads by itself, to get past the stale cache that showed the empty table.

## 1.0.15

- Bottom log: now shows everything the computer/Player 2 does too (attack/defend choice) and damage with the parry math (e.g. Damage: 20 − 3 = 17). It resets each new match and is bigger.
- New language button (half IT / half EN flag) in the main menu; language can also be changed from the in-game options menu. The choice is remembered.
- Fixed: when the AI swaps a card its HP now drops on screen immediately (used to stay 100).
- Android: fixed the cache serving an old version (HTML now always updates). If it used to drop you into an empty table, it now starts from the mode menu.
- The center-screen weapon name no longer wraps: it stays centered and shrinks if too long.

## 1.0.14

- Fixed a hierarchy bug: with both Trips AND a Straight in the same hand, Trips now wins (rarer, stronger). It used to pick the Straight.
- Android: layout fully reworked — fills the real screen, no more diamond frame, cards no longer cut (even with the 5th). All 9 setup masks fit without scrolling.
- The opponent demijohn in PvP now flips with the wine included.
- The weapon name no longer sits under the mask: it appears center-screen with an animation as the attack starts (the mask announces the blow).
- Options button: now a gear, bigger and fully clickable.

## 1.0.13

- Removed 'Reveal Fate': Swap/Attack/Defend are now shown immediately. Press Attack or Defend (blind), then the 5th card is dealt, then Summon Mask.
- In PvP: turn by turn (P1 first, then P2), then both press Summon. The game waits until both have chosen.
- PvP: fixed Player 2's card swap (now works every hand). Opponent demijohn flipped.
- Android: the 'To the table' button and Arlecchino's Invert no longer go off-screen; the grid scrolls and buttons stay visible.
- Damage/heal numbers bigger and visible longer.
- README: updated hierarchy (Trips beats Straight) and clickable app link.

## 1.0.12

- As soon as the 5th card is dealt, the opponent's cards are revealed. Only their choice (attack/defend) and mask setup stay hidden.

## 1.0.11

- Offline PvP: fixed the freeze. Now P1 reveals and chooses, P2 chooses, then both press Summon Mask.
- Vampire-Survivors-style thrown weapons: many, big and glowing, above the veil, with impact bursts.
- Balatro-style damage/heal numbers: large, damage in red and heals in green, with white outline.
- Demijohns on opposite sides: Player 1 left, opponent right (in PvP, Player 2 sees theirs on their left).
- Clickable app link in the READMEs.

## 1.0.10

- New flow: press Reveal Fate, choose Attack/Defend BLIND on the 4 cards, then the 5th is dealt (the risk!), then press Summon Mask.
- Fullscreen fairy animation on summon, before the duel.
- Redrawn demijohn (bulbous, like a real one), wine stays inside the body, symmetric between players.
- Android: portrait layout that fills the screen — big menu buttons, 9 masks filling setup, bigger table cards, less space between rows.
- Swap/Reveal buttons side by side (no longer stacked). My cards are the same size as the opponent's.

## 1.0.9

- Neapolitan suit symbols in the log: 🪙 coins, 🏆 cups, 🗡️ swords, 🪵 clubs (were French suits before, misleading).
- Verified: all 4 suits are counted correctly for flush and scoring.

## 1.0.8

- Fixed scoring: the mask is now evaluated on ALL 5 table cards (was using only 4, causing flush/straight to be missed).
- Corrected hierarchy: Three of a Kind beats Straight (Trips is rarer). Stats updated.
- Swords/clubs cards: names swapped (they were inverted).
- Flow: press Summon, the 5th card slides slowly to the center over the others, THEN the mask appears with an explanation.
- Full play-by-play with suit symbols: both players' cards and how each hand formed.
- Parry: shield animation instead of a floating number. AI card swap announced immediately.
- Menu: beer mug for the host; difficulty is confirmed by re-pressing Player vs AI.
- New fatter otre with a wicker bottom. In PvP, Player 2's cards are always face up.
- Android: portrait layout that fills the screen (3×3 grid and table legible). PWA with correct icons.

## 1.0.7

- New card back (provided image). The masks emblem stays as the app icon.

## 1.0.6

- Real Neapolitan cards: sliced from the sheet (split with black lines) with a pixelated effect.
- Wood table background (provided texture), card shadow that grows when moved or dealt.
- New order: press Attack/Defend, the 5th card drops FIRST, THEN the mask is summoned. Slower animations.
- Detailed play-by-play at the bottom: dealt cards and how each hand was formed (2× King, 5 coins, etc.).

## 1.0.5

- Fixed hierarchy: with 40 cards Flush beats Full House (Flush is rarer). Stats swapped (Flush 30/15, Full 25/13).
- The 5th table card is dealt AFTER the Attack/Defend choice: the final hand can change.
- Rules updated with the poker-different hierarchy.
- Also exported as a single self-contained HTML.

## 1.0.4

- Switched to Texas Hold'em (2+5 cards), probabilities recomputed.
- Cards, masks, otri and background use the provided artwork.
- Center mask overlay that covers the board cards.
- Loser's defense reduces damage (parry).
- 3 AI difficulties, offline PvP with flipped cards, mode menu.
- Thrown weapons + mask destruction + otre hit.
- 3×3 setup grid, options wheel, rules on first launch, installable PWA.

## 1.0.3

- Redrawn Neapolitan cards, opponent mask hidden until choice, weapon animations, auto-advance.

## 1.0.2

- Poker tie-breaks, 0/200 HP win, two-mask duel, IT/EN localization.

## 1.0.1

- First playable 1v1 vs AI.

