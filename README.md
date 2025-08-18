# WreckSploration VR

VR and desktop viewer for historic Australian shipwreck 3D models, developed in collaboration with [WreckSploration](https://wrecksploration.au) using the [BelowJS](https://belowjs.com) framework. Users can explore the models using desktop controls or VR headsets.

## Features

- **Progressive Web App (PWA)** - Install as native app, works offline
- Desktop browser and VR headset support (Quest 3)
- 3D shipwreck models with underwater environments
- Two viewing modes:
  - Survey Mode: Bright lighting for detailed examination
  - Dive Mode: Atmospheric lighting with particles
- VR thumbstick navigation and controller interaction
- **Full offline capability** - All models cached for offline use

## Models

This viewer includes 15 historic Australian shipwrecks:

1. Junee
2. Cape Otway  
3. Clipper
4. Koz VII
5. Sesa
6. Commiles
7. A-Frame Barge
8. Knowsley
9. Eucla
10. Gunga
11. Tamerlane
12. Thornliebank
13. HNLMS K XI
14. Caithness
15. Timaru

## Technology

- [BelowJS](https://belowjs.com) 3D visualization framework v1.0.0rc3
- Three.js for 3D rendering
- WebXR for VR support
- GLB model format

## Usage

### Web Browser
1. Open `index.html` in a web browser
2. Select model from dropdown or use URL parameter to load specific wreck:
   - `?site=1` for Junee
   - `?site=2` for Cape Otway  
   - `?site=5` for Sesa
   - etc. (1-15 for each wreck)
3. Navigate with mouse or enter VR mode

### PWA Installation
1. **Chrome/Edge**: Look for install icon in address bar, or Menu → Install WreckSploration VR
2. **Mobile Safari**: Share → Add to Home Screen
3. **Firefox**: Address bar → Install
4. First launch downloads all models for offline use (~100MB)
5. Once installed, works completely offline

## Controls

**Desktop:**
- Drag: Rotate camera
- Scroll: Zoom
- Double-click: Focus
- Toggle: Switch Survey/Dive mode

**VR:**
- Left stick: Move/strafe
- Right stick: Turn/fly
- Grip: Speed boost
- X/A: Toggle mode


## Project Structure

- `index.html` - Main PWA application
- `manifest.json` - PWA manifest file
- `sw.js` - Service worker for offline functionality
- `below/` - BelowJS framework files
- `models/` - 3D shipwreck models (GLB format)
- `sound/` - VR audio files
- `wrecksplorationvr_icon.jpg` - App icon
- `Screenshot.jpeg` - App screenshot

## Credits

Patrick Morrison and [WreckSploration](https://wrecksploration.au)

**Links:**
- [WreckSploration](https://wrecksploration.au) - Maritime archaeology and 3D documentation
- [BelowJS](https://belowjs.com) - 3D visualization framework for underwater environments