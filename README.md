# Ninja Mouse

A mobile stick-figure platformer in one HTML file. You're a ninja mouse running from a cat across mountains, river gorges and glaciers. Grapple off rocks and floating ledges, double jump, push off cliff walls, dash and glide on a leaf. If the cat catches you, you start a different journey.

**Play:** https://zayaiken21.github.io/NinjaMouse/

Hold your phone sideways to play.

## Journeys
- **Pine Ridge:** snowcapped ridges, pine forest and tall waterfalls
- **Riverstone Gorge:** mossy boulders, white-water rivers and waterfalls
- **Glacier Pass:** icy peaks under the aurora, frozen falls and falling snow

Each run is built fresh from a seed: rock pillars, waterfalls pouring into the river, floating ledges with gold grapple rings, and cheese to collect. Reach the safe hole at the end before the cat catches you.

## Controls
| Phone | Keyboard | Action |
|---|---|---|
| Drag your left thumb on the left side | A D / ← → | Move |
| JUMP | Space / W / ↑ | Jump. Tap again in the air to double jump, or jump off a cliff wall |
| Hold JUMP while falling | Hold Space | Glide |
| Tap the sky or a rock (right side) | Click | Grapple. Hold to swing, let go to fling. Aims for the nearest ledge |
| Left thumb up / down while swinging | ↑ / ↓ | Climb or lower the rope |
| DASH | Shift / J / K | Dash, aimed with your left thumb or the arrow keys |
| ⏸ | P / Esc | Pause |

Every finger is tracked on its own, so you can hold the stick, tap JUMP twice and fire the grapple at the same moment. Presses are buffered for a moment, so a quick tap just before landing still counts.

## Multiplayer
Tap **Multiplayer**, pick a name, then **Host a run** or pick one from **Open runs** (or **Quick match**). Every room has a 5-letter code and an invite link. Up to 8 mice per room.

Everyone runs the same journey with their own cat on their tail. If your cat catches you, you go back to the start of that journey. First mouse into the safe hole wins, and the host starts the next run.

It uses the same setup as Riptide Rally: free public MQTT relays over secure websockets (HiveMQ, EMQX, Mosquitto and Shiftr), so there is no game server to run. If the host's phone drops off, the relay removes the room automatically. Players who switch apps are marked away instead of being dropped.

## Files
- `index.html`: the whole game
- `join.html`: invite link landing page that drops friends into your room
