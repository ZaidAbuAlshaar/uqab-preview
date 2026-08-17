# Camera media — licence record

UQAB has **no live link** to Greater Amman Municipality cameras. Every file in this
folder is a licensed stand-in shown behind an explicit on-screen label, and no tile
in the application claims a live feed.

## Removed 2026-08-17 (AI-generated / unlicensed — see docs/ops-audit/DECISIONS_TONIGHT.md)

| File | Reason |
|---|---|
| `timelapse-sixth-circle.mp4` | AI-generated — burned-in "KlingAI 3.0 Omni" watermark |
| `timelapse-mecca-street.mp4` | AI-generated — hallucinated Arabic road signage |
| `camera-sixth-circle.webp` | AI-generated — generator sparkle watermark, bottom-right |
| `camera-mecca-street.webp` | AI-generated — hallucinated Arabic signage ("مسار الفلهواي") |
| `../real/camera-amman-traffic.webp` | Real photography, but no licence record of any kind |
| `../real/camera-amman-street-traffic.jpg` | Real photography, but no licence record of any kind |
| `../real/camera-rainbow-street.webp` | Real photography, but no licence record of any kind |

---

## `roundabout-cc0.webm`

- **File:** `public/assets/cameras/roundabout-cc0.webm` (3,803,722 bytes, WebM/VP9, 854×480, 23.98 fps, 36.4 s)
- **Content:** Real filmed footage — elevated view of a single-lane roundabout at
  US-14/US-61, La Crosse, Wisconsin, USA. Cars entering, circulating and exiting.
  NOT AI-generated (frames inspected 2026-08-17; camera drift measured at 3.9 px over 36 s).
- **Source page:** https://commons.wikimedia.org/wiki/File:Roundabout_14_61.webm
- **Direct file (480p transcode):** https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Roundabout_14_61.webm/Roundabout_14_61.webm.480p.vp9.webm
- **Licence:** CC0 1.0 Universal — Public Domain Dedication. Attribution **not required**
  (`AttributionRequired = false` in the Commons API metadata).
- **Licence URL:** https://creativecommons.org/publicdomain/zero/1.0/
- **Courtesy credit:** Wikideas1, CC0, via Wikimedia Commons (own work, 2023-09-08)
- **Retrieved:** 2026-08-17
- **Processing:** none — Wikimedia's own 480p VP9 transcode, used unmodified.
- **Shown in app as:** «بث تجريبي» on the 6th Circle tile, with the on-tile line
  stating the clip is licensed footage from another location, not a feed from that site.

## `roundabout-cc0-still.webp`

- **File:** `public/assets/cameras/roundabout-cc0-still.webp` (89,172 bytes, WebP, 854×480)
- **Content:** A single frame (t ≈ 22.6 s) extracted from `roundabout-cc0.webm` above.
- **Licence:** CC0 1.0 Universal — inherits the dedication of the source clip.
- **Retrieved / produced:** 2026-08-17 (OpenCV frame extraction, WebP q82)
- **Shown in app as:** «صورة مرجعية» on the 6th Circle South tile.

## `expressway-ccby.webm`

- **File:** `public/assets/cameras/expressway-ccby.webm` (1,524,852 bytes, WebM/VP9, 854×480, 30 fps, 12.1 s)
- **Content:** Real filmed footage — fixed camera on a pedestrian overpass looking down
  the Dan Ryan Expressway, Chicago, USA; dense two-directional multi-lane traffic.
  NOT AI-generated (frames inspected 2026-08-17; camera drift measured at 0.16 px).
- **Source page:** https://commons.wikimedia.org/wiki/File:Congested_traffic_on_the_Dan_Ryan_Expy_(10x_timelapse)_-_April_2026.webm
- **Direct file (480p transcode):** https://upload.wikimedia.org/wikipedia/commons/transcoded/6/67/Congested_traffic_on_the_Dan_Ryan_Expy_%2810x_timelapse%29_-_April_2026.webm/Congested_traffic_on_the_Dan_Ryan_Expy_%2810x_timelapse%29_-_April_2026.webm.480p.vp9.webm
- **Licence:** CC BY 4.0 — attribution **required**.
- **Licence URL:** https://creativecommons.org/licenses/by/4.0
- **Required attribution (exact):** `AlphaBeta135, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons`
  — rendered on the camera tile and in the camera detail panel, not only in this file.
- **Retrieved:** 2026-08-17
- **Processing:** none — Wikimedia's own 480p VP9 transcode, used unmodified.
- **Playback note:** the source was recorded as a **10× timelapse**. The app plays it at
  `playbackRate = 0.1` to restore approximately real-time motion, and says so in the credit
  line rather than letting a viewer discover the speed-up.
- **Shown in app as:** «بث تجريبي» on the Mecca Street tile, with the same
  not-from-this-location line as above.

---

## Rejected candidates (honesty trail, checked 2026-08-17)

- `Better RHD LHT Intersection.webm` (CC0) — a **rendered simulation**, not filmed footage.
  Rejected under the same rule that removed the AI clips.
- `Looking Down at Jalan Teknika Selatan.webm` (CC BY 4.0) — title misleading; frames show
  paving stones with no vehicles.
- `Moving vehicles in Link road, Cuttack` (CC BY-SA 3.0) — good footage, but many
  identifiable pedestrians and readable commercial signage.
- Several drone clips (`Wicker Park`, `Jane M. Byrne Interchange`) — measured drift of
  129 px and 56 px; not fixed-camera views.
- `Traffic chaos.webm` — despite the name, sheep on a road in Armenia.

**Chrome note:** Ogg Theora (`.ogv`) files on Wikimedia Commons do not play in Chrome ≥ 123
(Theora support was removed). Always take the `transcoded/.../*.vp9.webm` variant.
