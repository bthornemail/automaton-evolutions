---
layout: default
title: Files Reference
permalink: /automaton-evolutions/files/
---

# Files Reference

Complete reference for all 12 CanvasL files in the `automaton-evolutions` package.

## Primary Foundation Files (A₀-A₄)

### a0-unified-automaton.canvasl

**Role**: Unified automaton integrating all foundation files  
**Dimension**: 0D  
**Description**: Provides the unified entry point that integrates kernel, seed, shape, centroid, and basis files.

**Key Features**:
- Integration points for all foundation files
- Query interface for SPARQL/ProLog/DataLog
- Dimensional structure (0D-7D)

**References**:
- `a1-automaton-kernel-seed.canvasl`
- `a2-metaverse-shape.canvasl`
- `a3-metaverse-centroid.canvasl`
- `a4-autonomous-basis.canvasl`

### a1-automaton-kernel-seed.canvasl

**Role**: Kernel seed for regeneration  
**Dimension**: 1D  
**Description**: Minimal seed file that regenerates the full kernel through R5RS function calls.

**Key Features**:
- Self-reference pattern for regeneration
- 0D-7D dimensional definitions
- Church encoding patterns
- Bootstrap instructions

**Regeneration**: Uses `r5rs:parse-jsonl-canvas` to regenerate full kernel

### a2-metaverse-shape.canvasl

**Role**: Metaverse shape topology  
**Dimension**: 2D  
**Description**: Defines the 8D affine space and S7 boundary topology.

**Key Features**:
- 8D affine space coordinates
- S7 boundary at infinity
- Stratification levels (0D-7D)
- Bipartite-BQF encoding

### a3-metaverse-centroid.canvasl

**Role**: Metaverse centroid and identity  
**Dimension**: 3D  
**Description**: Virtual centroid with federated identity across self-dual geometries.

**Key Features**:
- Virtual centroid coordinates
- Schläfli symbol averages
- Betti number modes
- Federated identity

### a4-autonomous-basis.canvasl

**Role**: Autonomous basis for self-sustaining operations  
**Dimension**: 4D  
**Description**: Provides capabilities for self-regeneration, autonomous evolution, and goal negotiation.

**Key Features**:
- Self-regeneration capability
- Autonomous evolution
- Goal negotiation
- Self-modification
- Performance optimization

## Extended Automata Files (A₅-A₁₁)

### a5-sheaf-gluer.canvasl

**Role**: 5D MetaLogNode DAG federation  
**Dimension**: 5D  
**Description**: Manages federation via MetaLogNode DAG and glues sheaves from multiple peers.

**Key Components**:
- MetaLogNodeManager
- DAGManager
- Federation protocol

**Dependencies**: `a4-autonomous-basis.canvasl`

### a6-homology-checker.canvasl

**Role**: 6D ∂² = 0 homology validation  
**Dimension**: 6D  
**Description**: Validates chain complex homology property ∂² = 0.

**Key Components**:
- HomologyValidator
- Betti computation
- Boundary operator

**Dependencies**: `a5-sheaf-gluer.canvasl`

### a7-webauthn-oracle.canvasl

**Role**: 7D biometric identity and authentication  
**Dimension**: 7D  
**Description**: WebAuthn credential management and biometric authentication.

**Key Components**:
- WebAuthnManager
- Credential storage
- Authentication flow

**Dependencies**: `a6-homology-checker.canvasl`

### a8-bip32-keymaster.canvasl

**Role**: 8D HD wallet and cryptographic addressing  
**Dimension**: 8D  
**Description**: Hierarchical deterministic wallet operations using BIP-32/39/44.

**Key Components**:
- BIP32Wallet
- Key derivation
- Signature generation

**Dependencies**: `a7-webauthn-oracle.canvasl`

### a9-webrtc-messenger.canvasl

**Role**: 9D P2P communication (WebRTC)  
**Dimension**: 9D  
**Description**: Peer-to-peer communication via WebRTC data channels.

**Key Components**:
- WebRTCManager
- Data channels
- ICE negotiation

**Dependencies**: `a8-bip32-keymaster.canvasl`

### a10-mqtt-herald.canvasl

**Role**: 10D peer discovery and signaling (MQTT)  
**Dimension**: 10D  
**Description**: Peer discovery and signaling via MQTT broker.

**Key Components**:
- MQTTClient
- Discovery topics
- Signaling protocol

**Dependencies**: `a9-webrtc-messenger.canvasl`

### a11-master.canvasl

**Role**: 11D Master Coordinator (A₁₁ Lie Algebra)  
**Dimension**: 11D  
**Description**: Master coordinator for all A₀-A₁₀ automata, swarm management.

**Key Components**:
- A11Swarm coordinator
- Message routing
- Tick coordination
- Master election

**Dependencies**: All A₀-A₁₀ automata files

## File Format

All files follow the CanvasL format with:

- `@version` and `@schema` directives
- Nodes with `bipartite` metadata including BQF coefficients
- References to related automata using `a#` naming
- R5RS function calls for regeneration

## Accessing Files

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';

// Get specific file path
const unifiedPath = AUTOMATON_FILES.a0Unified;
const kernelSeedPath = AUTOMATON_FILES.a1KernelSeed;

// Get all files
import { getAllAutomatonFiles } from 'automaton-evolutions';
const allFiles = getAllAutomatonFiles();

// Get A₅-A₁₁ files only
import { getA11Files } from 'automaton-evolutions';
const a11Files = getA11Files();
```

