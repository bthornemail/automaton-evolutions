---
layout: default
title: Automaton Evolutions
description: Canonical automaton CanvasL data files for self-referential systems (A₀-A₁₁)
---

# automaton-evolutions

Canonical automaton CanvasL data files for self-referential systems (A₀-A₁₁).

## Overview

This package contains the canonical automaton CanvasL data files that define the complete A₁₁ automaton system. All files use consistent `a#` prefix naming (A₀-A₁₁) for clarity and organization.

## Installation

```bash
npm install automaton-evolutions
```

## Quick Start

```typescript
import { AUTOMATON_FILES, getAllAutomatonFiles } from 'automaton-evolutions';

// Get specific file path
const unifiedPath = AUTOMATON_FILES.a0Unified;

// Get all files
const allFiles = getAllAutomatonFiles();
```

## Files

### Primary Foundation Files (A₀-A₄)

- **`a0-unified-automaton.canvasl`**: Unified automaton integrating all foundation files
- **`a1-automaton-kernel-seed.canvasl`**: Kernel seed for regeneration
- **`a2-metaverse-shape.canvasl`**: Metaverse shape topology
- **`a3-metaverse-centroid.canvasl`**: Metaverse centroid and identity
- **`a4-autonomous-basis.canvasl`**: Autonomous basis for self-sustaining operations

### Extended Automata Files (A₅-A₁₁)

- **`a5-sheaf-gluer.canvasl`**: 5D MetaLogNode DAG federation
- **`a6-homology-checker.canvasl`**: 6D ∂² = 0 homology validation
- **`a7-webauthn-oracle.canvasl`**: 7D biometric identity and authentication
- **`a8-bip32-keymaster.canvasl`**: 8D HD wallet and cryptographic addressing
- **`a9-webrtc-messenger.canvasl`**: 9D P2P communication (WebRTC)
- **`a10-mqtt-herald.canvasl`**: 10D peer discovery and signaling (MQTT)
- **`a11-master.canvasl`**: 11D Master Coordinator (A₁₁ Lie Algebra)

## Usage Examples

### Using with meta-log-db

```typescript
import { MetaLogDb } from 'meta-log-db';
import { AUTOMATON_FILES } from 'automaton-evolutions';

const db = new MetaLogDb();
const canvas = await db.loadCanvas(AUTOMATON_FILES.a0Unified);
const facts = await db.extractFacts(canvas);
```

### Using with automata-metaverse

```typescript
import { AdvancedSelfReferencingAutomaton } from 'automata-metaverse';
import { MetaLogDb } from 'meta-log-db';
import { AUTOMATON_FILES } from 'automaton-evolutions';

const db = new MetaLogDb();
const automaton = new AdvancedSelfReferencingAutomaton(
  AUTOMATON_FILES.a0Unified,
  db
);
await automaton.init();
```

## Naming Convention

All files use the `a#` prefix naming convention:

- `a0-unified-automaton.canvasl` (A₀)
- `a1-automaton-kernel-seed.canvasl` (A₁)
- `a2-metaverse-shape.canvasl` (A₂)
- ... through `a11-master.canvasl` (A₁₁)

This ensures consistent naming and easy identification of automaton files.

## Related Packages

- **[meta-log-db](https://www.npmjs.com/package/meta-log-db)**: Database package that parses CanvasL files
- **[automata-metaverse](https://www.npmjs.com/package/automata-metaverse)**: Execution engines that use these CanvasL files

## License

MIT

