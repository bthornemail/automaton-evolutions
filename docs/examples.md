---
layout: default
title: Usage Examples
permalink: /automaton-evolutions/examples/
---

# Usage Examples

Practical examples for using `automaton-evolutions` with `meta-log-db` and `automata-metaverse`.

## Basic Usage

### Loading a Single File

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const canvas = await db.loadCanvas(AUTOMATON_FILES.a0Unified);
console.log('Loaded unified automaton:', canvas);
```

### Loading All Files

```typescript
import { getAllAutomatonFiles } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const files = getAllAutomatonFiles();

for (const file of files) {
  const canvas = await db.loadCanvas(file);
  console.log(`Loaded: ${file}`);
}
```

## Using with meta-log-db

### Extract Facts from CanvasL File

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
await db.loadCanvas(AUTOMATON_FILES.a1KernelSeed);

// Extract facts
const facts = db.extractFacts();
console.log(`Extracted ${facts.length} facts`);
```

### Query with ProLog

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb({
  enableProlog: true
});
await db.loadCanvas(AUTOMATON_FILES.a0Unified);

// ProLog query
const results = await db.prologQuery('(node ?Id ?Type)');
console.log('ProLog results:', results);
```

### Query with DataLog

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb({
  enableDatalog: true
});
await db.loadCanvas(AUTOMATON_FILES.a2Shape);

// DataLog query
const results = await db.datalogQuery('(missing_implementation ?N)');
console.log('DataLog results:', results);
```

### SPARQL Query

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb({
  enableRdf: true
});
await db.loadCanvas(AUTOMATON_FILES.a3Centroid);

// SPARQL query
const results = await db.sparqlQuery(`
  SELECT ?id ?type WHERE {
    ?id rdf:type ?type
  }
`);
console.log('SPARQL results:', results);
```

## Using with automata-metaverse

### Create Automaton from Canonical File

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { AdvancedSelfReferencingAutomaton } from 'automata-metaverse';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const automaton = new AdvancedSelfReferencingAutomaton(
  AUTOMATON_FILES.a0Unified,
  db
);

await automaton.init();
await automaton.executeSelfIO();
```

### Bootstrap with Kernel Seed

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { OptimizedBootstrap } from 'automata-metaverse';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb({
  enableProlog: true,
  enableDatalog: true,
  enableShacl: true
});

const bootstrap = new OptimizedBootstrap({
  kernelPath: AUTOMATON_FILES.a1KernelSeed,
  automatonPath: './automaton.jsonl',
  db
});

await bootstrap.bootstrap();
```

### Load Extended Automata (A₅-A₁₁)

```typescript
import { getA11Files } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb();
const a11Files = getA11Files();

// Load all extended automata
for (const file of a11Files) {
  const canvas = await db.loadCanvas(file);
  console.log(`Loaded extended automaton: ${file}`);
  
  // Extract facts
  const facts = db.extractFacts();
  console.log(`  Facts: ${facts.length}`);
}
```

## Advanced Examples

### Chain Complex Operations

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';

const db = new MetaLogDb({
  enableHomology: true,
  enableFormatFibration: true
});

// Load shape file
await db.loadCanvas(AUTOMATON_FILES.a2Shape);

// Create chain complex
const cell0 = await db.executeR5RS('r5rs:create-cell', [0, 'v1', [], { label: 'Vertex' }]);
const cell1 = await db.executeR5RS('r5rs:create-cell', [1, 'e1', ['v1', 'v2'], { type: 'edge' }]);
const complex = await db.executeR5RS('r5rs:build-chain-complex', [[cell0, cell1]]);

// Export to different formats
const jsonCanvas = await db.executeR5RS('r5rs:export-0d', [complex]);
const jsonl = await db.executeR5RS('r5rs:export-1d', [complex]);
const geojson = await db.executeR5RS('r5rs:export-2d', [complex]);
```

### MetaLogNode Federation

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';
import { MetaLogNodeManager } from 'meta-log-db/extensions/metalog-node';

const db = new MetaLogDb({
  enableMetaLogNode: true
});

await db.loadCanvas(AUTOMATON_FILES.a5SheafGluer);

const manager = new MetaLogNodeManager();
const node = await manager.createNode({
  content: {
    topo: { type: 'Topology', objects: {}, arcs: [] },
    geo: { type: 'FeatureCollection', features: [] }
  },
  parent: 'genesis'
});

console.log('Created MetaLogNode:', node.cid);
```

### Homology Validation

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { MetaLogDb } from 'meta-log-db';
import { HomologyValidator } from 'meta-log-db/extensions/homology';

const db = new MetaLogDb({
  enableHomology: true
});

await db.loadCanvas(AUTOMATON_FILES.a6HomologyChecker);

// Create chain complex
const complex = await db.executeR5RS('r5rs:build-chain-complex', [cells]);

// Validate homology
const validator = new HomologyValidator(complex);
const result = validator.validate();

if (result.valid) {
  console.log('Homology is valid!');
  console.log('Betti numbers:', result.betti);
} else {
  console.error('Homology violations:', result.violations);
}
```

## Browser Usage

```typescript
import { AUTOMATON_FILES } from 'automaton-evolutions';
import { CanvasLMetaverseBrowser } from 'meta-log-db/browser';

const browser = new CanvasLMetaverseBrowser({
  enableProlog: true,
  enableDatalog: true
});

await browser.init();

// Load canvas from package
// Note: In browser, you may need to fetch the file first
const response = await fetch(`/node_modules/automaton-evolutions/files/${AUTOMATON_FILES.a0Unified}`);
const text = await response.text();
const canvas = await browser.parseJsonlCanvas(text);
```

