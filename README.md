# Webflow Cloud Audio Guide

The latest Astro project, with the original narration, corrected audio navigation, recorded waveform, and live audio meter.

## Open in VS Code

1. Extract the ZIP.
2. In VS Code, select **File > Open Folder** and select `webflow-cloud-audio-guide`.
   Alternatively, open `Webflow-Cloud-Audio-Guide.code-workspace`.
3. Install the recommended Astro extension if prompted.
4. Select **Terminal > New Terminal** and run:

```bash
npm ci
npm run dev
```

Open **http://localhost:4173/** in Chrome. Press Play to begin narration.

Requires **Node.js 22.12 or newer** and **npm 9.6.5 or newer**. Check with `node --version` and `npm --version`.

## WSL

Extract the ZIP into your WSL projects folder, then open a WSL terminal:

```bash
cd ~/projects/webflow-cloud-audio-guide
code .
npm ci
npm run dev
```

Adjust the folder path if you extracted elsewhere. If you use nvm, run `nvm install` and `nvm use` in the project folder first.

## Build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`. The default configuration serves it at a domain root.

## Edit the project

| File | Purpose |
| --- | --- |
| `src/pages/index.astro` | Page visuals, player, seeking, and live audio meter |
| `src/styles/global.css` | Layout, colors, and responsive styles |
| `src/data/chapters.ts` | Chapter timestamps, text, and research links |
| `src/data/waveform.json` | Waveform peaks derived from the included MP3 |
| `public/narration.mp3` | Original narration |
| `astro.config.mjs` | Local server and static build configuration |

TOC clicks, Previous/Next, and scrubbing seek the same audio player and display the corresponding visual. Explicit audio navigation enables Follow narration. Turning Follow narration off holds the current visual during playback. Resource links pause narration and open separately.

The waveform highlights played audio and shades the current chapter. Hover over it for a timestamp and topic. Use Tab to focus its slider and arrow keys to adjust the position. The live meter uses Web Audio when available; reduced-motion settings disable its animation. Playback remains available without Web Audio.

Space toggles playback; Left/Right skip ten seconds when focus is outside another control. The original audio is included, so no hosted site or API key is needed. The font has a system-font fallback when offline.

## GitHub Pages later

This package does not deploy or change any GitHub repository. For a Pages project URL, set `site` and `base` in `astro.config.mjs` and prefix the audio and favicon URLs with `import.meta.env.BASE_URL` in `src/pages/index.astro` before building.
