# automaton-evolutions

Canonical automaton CanvasL data files for self-referential systems (A₀-A₁₁).

## Overview

This package contains the canonical automaton CanvasL data files that define the complete A₁₁ automaton system. All files use consistent `a#` prefix naming (A₀-A₁₁) for clarity and organization.

## Installation

```bash
npm install automaton-evolutions
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

## Usage

### Import File Paths

```typescript
import { AUTOMATON_FILES, getAllAutomatonFiles, getA11Files } from 'automaton-evolutions';

// Get specific file path
const unifiedPath = AUTOMATON_FILES.a0Unified;
const kernelSeedPath = AUTOMATON_FILES.a1KernelSeed;

// Get all files
const allFiles = getAllAutomatonFiles();

// Get A₅-A₁₁ files only
const a11Files = getA11Files();
```

### Using with meta-log-db

```typescript
import { MetaLogDb } from 'meta-log-db';
import { AUTOMATON_FILES } from 'automaton-evolutions';

const db = new MetaLogDb();
const canvas = await db.loadCanvas(AUTOMATON_FILES.a0Unified);
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
```

## File Structure

All files follow the CanvasL format with:

- `@version` and `@schema` directives
- Nodes with `bipartite` metadata including BQF coefficients
- References to related automata using `a#` naming
- R5RS function calls for regeneration

## Naming Convention

All files use the `a#` prefix naming convention:

- `a0-unified-automaton.canvasl` (A₀)
- `a1-automaton-kernel-seed.canvasl` (A₁)
- `a2-metaverse-shape.canvasl` (A₂)
- ... through `a11-master.canvasl` (A₁₁)

This ensures consistent naming and easy identification of automaton files.

## Dependencies

This package has no runtime dependencies. It is a data-only package containing CanvasL files.

## License

MIT

## Related Packages

- **`meta-log-db`**: Database package that parses CanvasL files
- **`automata-metaverse`**: Execution engines that use these CanvasL files

# automaton-evolutions
