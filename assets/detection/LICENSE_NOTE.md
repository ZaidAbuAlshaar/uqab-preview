# Asset License Record — demo-intersection.mp4

- **File:** `public/assets/detection/demo-intersection.mp4` (5,431,594 bytes / 5.18 MiB, 1280x720, H.264, 30 fps, 23.4 s, no audio)
- **Content:** Real filmed footage — elevated daytime view of a busy multi-way road junction (crosswalks, cars, taxis, bus, pedestrians), Tokyo, Japan. NOT AI-generated.
- **Source page:** https://pixabay.com/videos/traffic-crossing-japan-tokyo-road-325564/
- **Direct file (original download):** https://cdn.pixabay.com/video/2026/01/02/325564_large.mp4 (3840x2160, 59.94 fps, 23.37 s, 134,905,819 bytes ≈ 128.7 MiB, per CDN Content-Length)
- **License:** Pixabay Content License — free for commercial and non-commercial use, no attribution required; redistribution of the unmodified file on a standalone basis is not permitted (this re-encoded 720p derivative embedded in the app is within license terms).
- **License URL:** https://pixabay.com/service/license-summary/
- **Retrieved:** 2026-08-16
- **Processing:** trimmed/re-encoded with ffmpeg (imageio-ffmpeg): scale to 720p, H.264 (libx264, preset slow, CRF 31), 30 fps, audio stripped, `+faststart`.

# Asset License Record — yolo11n.onnx

- **File:** `public/models/yolo11n.onnx` (10,720,228 bytes / 10.2 MiB)
- **Source repo:** https://huggingface.co/webnn/yolo11n
- **Direct file:** https://huggingface.co/webnn/yolo11n/resolve/main/onnx/yolo11n.onnx
- **License:** AGPL-3.0 (Ultralytics YOLO11n; license string embedded in the ONNX metadata: "AGPL-3.0 License (https://ultralytics.com/license)")
- **Model:** Ultralytics YOLO11n, COCO-80 classes, exported by ultralytics 8.3.24, opset 19.
  - Input: `images` — `[1, 3, 640, 640]` float32
  - Output: `output0` — `[1, 84, 8400]` raw predictions (4 box coords + 80 class scores; **no embedded NMS** — apply confidence threshold + NMS client-side)
- **Retrieved:** 2026-08-16
