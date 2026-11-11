# School Christmas market QR — 2026

- Encoded URL: `https://lesmainsdeserenite.fr/s`
- Destination: homepage with `utm_source=apel_les_tilleuls&utm_medium=qr&utm_campaign=noel_2026`
- Analytics event: `qr_redirect`; `qr_location=sponsor`; `campaign=noel_2026`
- Preferred printer artwork: `sponsor-school-noel-2026.svg`
- PNG alternative: `sponsor-school-noel-2026.png` (1200 × 1200 pixels)

The SVG is set to 30 × 30 mm including the four-module quiet zone. It uses
black modules on an opaque white background and error correction level Q.
Keep it square, preserve the entire white border, and retain the opaque white
panel on coloured or translucent cups. Do not invert, stretch, decorate or
place across a seam. The printer should confirm the size for the cup curvature
and process, then provide a physical sample to scan on several phones before
production. Digital decoding alone does not validate the printed cup.

Generated using qrencode 4.1.1:

```sh
qrencode -t SVG -l Q -m 4 --foreground=000000 --background=ffffff \
  -o sponsor-school-noel-2026.svg https://lesmainsdeserenite.fr/s
```

The SVG's physical width and height were then set to `30mm`, with proportional
scaling and crisp-edge rendering enabled. The PNG was
rendered from that SVG at 1200 × 1200 pixels with rsvg-convert.

Keep `/s` available for the lifetime of the printed cups. Verify the deployed
redirect before sending the artwork for production. GA custom dimension
registration and BigQuery setup are separate account configuration tasks.
