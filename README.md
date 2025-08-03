# WreckSploration VR

VR and desktop viewer for historic shipwreck 3D models.

## Overview

This project displays 3D models of Australian shipwrecks. Users can explore the models using desktop controls or VR headsets.

## Features

- Desktop browser and VR headset support (Quest 2, Quest 3)
- 3D shipwreck models with underwater environments
- Two viewing modes:
  - Survey Mode: Bright lighting for detailed examination
  - Dive Mode: Atmospheric lighting with particles
- VR thumbstick navigation and controller interaction

## Models

- Junee
- Clipper  
- Cape Otway
- Koz VI

## Technology

- BelowJS 3D visualization framework
- Three.js for 3D rendering
- WebXR for VR support
- GLB model format

## Usage

1. Open `index.html` in a web browser
2. Select model from dropdown
3. Navigate with mouse or enter VR mode

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


## Files

- `index.html` - Main viewer
- `below/` - BelowJS framework
- `models/` - GLB shipwreck models
- `sound/` - VR audio files

## Credits

Patrick Morrison and WreckSploration

Learn more: [wrecksploration.au](https://wrecksploration.au)