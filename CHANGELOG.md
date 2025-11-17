# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-XX

### Added

- Initial release of `automaton-evolutions` package
- 11 CanvasL files using consistent `a#` prefix naming (A₀-A₁₁):
  - `a0-unified-automaton.canvasl`: Unified automaton (foundation)
  - `a1-automaton-kernel-seed.canvasl`: Kernel seed (regeneration)
  - `a2-metaverse-shape.canvasl`: Metaverse shape (topology)
  - `a3-metaverse-centroid.canvasl`: Metaverse centroid (identity)
  - `a4-autonomous-basis.canvasl`: Autonomous basis (self-sustaining)
  - `a5-sheaf-gluer.canvasl`: Sheaf Gluer (5D MetaLogNode DAG)
  - `a6-homology-checker.canvasl`: Homology Checker (6D ∂² = 0)
  - `a7-webauthn-oracle.canvasl`: WebAuthn Oracle (7D Biometric)
  - `a8-bip32-keymaster.canvasl`: BIP-32 Keymaster (8D HD Wallet)
  - `a9-webrtc-messenger.canvasl`: WebRTC Messenger (9D P2P)
  - `a10-mqtt-herald.canvasl`: MQTT Herald (10D Discovery)
  - `a11-master.canvasl`: Master Coordinator (11D)
- TypeScript exports (`src/index.ts`) with file path helpers:
  - `AUTOMATON_FILES` object with all file paths
  - `getAutomatonFile()` helper function
  - `getAllAutomatonFiles()` helper function
  - `getA11Files()` helper function for A₅-A₁₁ files
  - `getPrimaryFiles()` helper function for A₀-A₄ files
  - Legacy aliases for backward compatibility (deprecated)
- Complete package structure with `package.json`, `tsconfig.json`, and documentation

### Changed

- Updated internal references in A₀-A₄ files to use new `a#` naming convention
- Renamed primary files from original names to `a#` prefix format

### Notes

- All files follow CanvasL format with `@version` and `@schema` directives
- Files include `bipartite` metadata with BQF coefficients
- References use `a#` naming convention throughout
- Package is data-only with no runtime dependencies

