---
layout: default
title: API Reference
permalink: /automaton-evolutions/api/
---

# API Reference

Complete TypeScript API reference for `automaton-evolutions`.

## Exports

### `AUTOMATON_FILES`

Object containing file paths for all automaton CanvasL files.

```typescript
export const AUTOMATON_FILES = {
  // A₀-A₄: Primary foundation files
  a0Unified: string;
  a1KernelSeed: string;
  a2Shape: string;
  a3Centroid: string;
  a4Basis: string;
  // A₅-A₁₁: Extended automata files
  a5SheafGluer: string;
  a6HomologyChecker: string;
  a7WebAuthnOracle: string;
  a8BIP32Keymaster: string;
  a9WebRTCMessenger: string;
  a10MQTTHerald: string;
  a11Master: string;
} as const;
```

**Example**:
```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';

const unifiedPath = AUTOMATON_FILES.a0Unified;
// Returns: absolute path to a0-unified-automaton.canvasl
```

### `getAutomatonFile(name)`

Get the file path for a specific automaton file.

```typescript
function getAutomatonFile(
  name: keyof typeof AUTOMATON_FILES
): string
```

**Parameters**:
- `name`: The automaton file name (e.g., `'a0Unified'`, `'a1KernelSeed'`)

**Returns**: The absolute file path

**Example**:
```typescript
import { getAutomatonFile } from 'automaton-evolutions';

const path = getAutomatonFile('a0Unified');
```

### `getAllAutomatonFiles()`

Get all automaton file paths.

```typescript
function getAllAutomatonFiles(): string[]
```

**Returns**: Array of all automaton file paths

**Example**:
```typescript
import { getAllAutomatonFiles } from 'automaton-evolutions';

const allFiles = getAllAutomatonFiles();
// Returns: [path1, path2, ..., path12]
```

### `getA11Files()`

Get A₅-A₁₁ extended automata file paths.

```typescript
function getA11Files(): string[]
```

**Returns**: Array of A₅-A₁₁ file paths

**Example**:
```typescript
import { getA11Files } from 'automaton-evolutions';

const a11Files = getA11Files();
// Returns: [a5, a6, a7, a8, a9, a10, a11 file paths]
```

### `getPrimaryFiles()`

Get A₀-A₄ primary foundation file paths.

```typescript
function getPrimaryFiles(): string[]
```

**Returns**: Array of A₀-A₄ file paths

**Example**:
```typescript
import { getPrimaryFiles } from 'automaton-evolutions';

const primaryFiles = getPrimaryFiles();
// Returns: [a0, a1, a2, a3, a4 file paths]
```

## Legacy Aliases (Deprecated)

For backward compatibility, the following aliases are available but deprecated:

```typescript
export const unified = AUTOMATON_FILES.a0Unified;      // @deprecated
export const kernelSeed = AUTOMATON_FILES.a1KernelSeed; // @deprecated
export const shape = AUTOMATON_FILES.a2Shape;          // @deprecated
export const centroid = AUTOMATON_FILES.a3Centroid;    // @deprecated
export const basis = AUTOMATON_FILES.a4Basis;          // @deprecated
```

**Note**: Use `AUTOMATON_FILES` properties instead of these aliases.

## Type Definitions

### File Path Types

All file paths are strings pointing to absolute file locations within the package.

### Automaton File Names

Valid file names for `getAutomatonFile()`:

- `'a0Unified'`
- `'a1KernelSeed'`
- `'a2Shape'`
- `'a3Centroid'`
- `'a4Basis'`
- `'a5SheafGluer'`
- `'a6HomologyChecker'`
- `'a7WebAuthnOracle'`
- `'a8BIP32Keymaster'`
- `'a9WebRTCMessenger'`
- `'a10MQTTHerald'`
- `'a11Master'`

## Usage Patterns

### Pattern 1: Load Single File

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const canvas = await db.loadCanvas(AUTOMATON_FILES.a0Unified);
```

### Pattern 2: Load All Files

```typescript
import { getAllAutomatonFiles } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const files = getAllAutomatonFiles();

for (const file of files) {
  const canvas = await db.loadCanvas(file);
  // Process canvas...
}
```

### Pattern 3: Load Extended Automata Only

```typescript
import { getA11Files } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const a11Files = getA11Files();

for (const file of a11Files) {
  const canvas = await db.loadCanvas(file);
  // Process extended automaton...
}
```

