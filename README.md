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

Each run is built fresh from a seed: rock pillars, waterfalls pouring into the river, floating ledges, clouds with hanging gold rings and glowing lantern balloons to grapple from, and cheese to collect. Reach the safe hole at the end before the cat catches you.

## Obstacles
- **Thorn bushes** on the rocks: jump them
- **Fallen logs** at head height: roll under or jump over
- **Rolling boulders** that tumble along the rocks and off the edge
- **Hawks** patrolling the sky between rocks, right where you fly

Getting hit knocks you back and drops your grapple, so the cat gains on you. Dashing passes straight through everything. Obstacles get more common the further you run.

## Controls
| Phone | Keyboard | Action |
|---|---|---|
| Drag your left thumb on the left side | A D / ← → | Move |
| JUMP | Space / W / ↑ | Jump. Tap again in the air to double jump, or jump off a cliff wall |
| Hold JUMP while falling | Hold Space | Glide |
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
