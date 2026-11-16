# Ninja Mouse

A mobile stick-figure platformer in one HTML file. You're a ninja mouse running from a cat across mountains, river gorges and glaciers. Grapple off rocks and floating ledges, double jump, push off cliff walls, dash and glide on a leaf. If the cat catches you, you start a different journey.

**Play:** https://zayaiken21.github.io/NinjaMouse/

Hold your phone sideways to play.

## Play offline
Open the game once with service and it saves itself on your phone. After that it opens and plays with no service at all (solo runs; multiplayer needs a connection). For the best version, add it to your home screen: on iPhone tap Share → **Add to Home Screen**, on Android tap ⋮ → **Add to Home screen** or **Install app**. It opens full screen and sideways like a real app.

When you change the game, bump `CACHE` in `sw.js` (for example `ninja-mouse-v2`) so phones pick up the new version. Phones also fetch the newest copy in the background whenever they're online.

## Journeys
- **Pine Ridge:** snowcapped ridges, pine forest and tall waterfalls
- **Riverstone Gorge:** mossy boulders, white-water rivers and waterfalls
- **Glacier Pass:** icy peaks under the aurora, frozen falls and falling snow
- **Bamboo Wind Valley:** misty bamboo groves where gusts push you around in the air
- **Stormfall Peaks:** a night storm with lightning, fast rivers and ledges that crumble if you stand still
- **Geyser Mesa:** sunset desert mesas, cacti and geysers that blast you skyward when they erupt
- **Sakura Hills:** pink blossom trees, drifting petals, birds and soft breezes
- **Mystic Marsh:** a glowing night swamp with fireflies, mist and giant mushroom springs
- **Ember Caldera:** volcanic ridges, lava rivers and falls, rising embers and lava geysers
- **Sky Islands:** floating islands, a rainbow and a sea of clouds, packed with boosts
- **Palm Cove:** tropical shore, swaying palms, gulls and a strong sea breeze
- **Neon Rooftops:** a lit-up city at night with neon signs and steam vents
- **Cloud Kingdom:** walk on puffy clouds in a pastel sunset sky, with winds and lots of boosts
- **Sunset Clouds, Moonlit Cloud Sea and Thunder Clouds:** more cloud floors, from a golden sunset to a lightning storm that is the hardest journey
- **Crystal Caverns:** glowing crystal caves with stalactites, crumbling ledges and an underground river

Each run is built fresh from a seed: rock pillars, waterfalls pouring into the river, floating ledges, clouds with hanging gold rings and glowing lantern balloons to grapple from, and cheese to collect. Reach the safe hole at the end before the cat catches you.

## Obstacles
- **Thorn bushes** on the rocks: jump them
- **Fallen logs** at head height: roll under or jump over
- **Rolling boulders** that tumble along the rocks and off the edge
- **Hawks** patrolling the sky between rocks, right where you fly

## Boosts
- **Orbs** floating in the gaps: **TURBO** (3 s of speed), **LIFT** (shoots you into the sky and refills jumps and dash), **SHIELD** (blocks the next hit), **FREEZE** (stops the cat for about 3 s)
- **Yellow speed pads** on rock edges give a burst of speed; **pink mushroom springs** bounce you high

The cat is fully rigged: it gallops, leaps the gaps in an arc and scrambles up cliff faces. If you get hit or splash into the river it surges forward, so protect yourself.

## Difficulty
Ledges are about 50% wider so there is room to run, and ground hazards are rare (at most one per ledge, none at the very start). The challenge comes from longer gaps, bigger height changes, wind, crumbling clouds and a faster cat instead.

## Journey challenges
- **Wind (Bamboo Wind Valley):** gusts shove you sideways while you're in the air, then ease off. Steer against them or dash through. Grounded and you're safe.
- **Crumbling ledges (Stormfall Peaks):** some rocks start to crack as soon as you land. Stay about half a second and they drop away, then come back a few seconds later.
- **Geysers (Geyser Mesa):** vents erupt every few seconds with a ring of bubbles just before. Step in the column to be thrown high, and grapple from the top.

Getting hit knocks you back and drops your grapple, so the cat gains on you. Dashing passes straight through everything. Obstacles get more common the further you run.

The game keeps itself smooth: if frames stay slow it quietly lowers the drawing resolution a step.

## Controls
| Phone | Keyboard | Action |
|---|---|---|
| Drag your left thumb on the left side | A D / ← → | Move |
| JUMP | Space / W / ↑ | Jump. Tap again in the air to double jump, or jump off a cliff wall |
| Hold JUMP while falling, or tap JUMP during a long fall | Hold Space | Hang glide: a leaf unfolds on your back. Let go and it folds away the same way |
| Push into a wall, or just under its edge | Same | Cling to the cliff, or hang on the ledge. JUMP climbs up; push away + JUMP kicks off like a ninja |
| Tap a cloud ring, lantern or rock (right side) | Click | Grapple. Hold and the rope pulls you up to it, then launches you into the sky. Let go anytime to fly free |
| Hold left thumb down while hooked | Hold ↓ | Swing on the rope instead of being pulled |
| DASH | Shift / J / K | Dash, aimed with your left thumb or the arrow keys. You pass through hazards while dashing |
| ROLL, or flick your left thumb down | C / Ctrl / ↓ | Roll. Keeps your speed and ducks under fallen logs and low hawks. Press it in the air to roll the moment you land |
| ⏸ | P / Esc | Pause |

Every finger is tracked on its own, so you can hold the stick, tap JUMP twice and fire the grapple at the same moment. Presses are buffered for a moment, so a quick tap just before landing still counts.

## Multiplayer
Tap **Multiplayer**, pick a name, then **Host a run** or pick one from **Open runs** (or **Quick match**). Every room has a 5-letter code and an invite link. Up to 8 mice per room.

Everyone runs the same journey with their own cat on their tail. If your cat catches you, you go back to the start of that journey. First mouse into the safe hole wins, and the host starts the next run.

It uses the same setup as Riptide Rally: free public MQTT relays over secure websockets (HiveMQ, EMQX, Mosquitto and Shiftr), so there is no game server to run. If the host's phone drops off, the relay removes the room automatically. Players who switch apps are marked away instead of being dropped.

## Files
- `index.html`: the whole game
- `join.html`: invite link landing page that drops friends into your room
- `sw.js`: saves the game on the phone for offline play
- `manifest.webmanifest`, `icons/`: home-screen install and app icon
