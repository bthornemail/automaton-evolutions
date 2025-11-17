/**
 * automaton-evolutions
 * 
 * Canonical automaton CanvasL data files for self-referential systems (A₀-A₁₁)
 */

import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const EVOLUTIONS_DIR = join(__dirname, '../files');

export const AUTOMATON_FILES = {
  // A₀-A₄: Primary foundation files
  a0Unified: join(EVOLUTIONS_DIR, 'a0-unified-automaton.canvasl'),
  a1KernelSeed: join(EVOLUTIONS_DIR, 'a1-automaton-kernel-seed.canvasl'),
  a2Shape: join(EVOLUTIONS_DIR, 'a2-metaverse-shape.canvasl'),
  a3Centroid: join(EVOLUTIONS_DIR, 'a3-metaverse-centroid.canvasl'),
  a4Basis: join(EVOLUTIONS_DIR, 'a4-autonomous-basis.canvasl'),
  // A₅-A₁₁: Extended automata files
  a5SheafGluer: join(EVOLUTIONS_DIR, 'a5-sheaf-gluer.canvasl'),
  a6HomologyChecker: join(EVOLUTIONS_DIR, 'a6-homology-checker.canvasl'),
  a7WebAuthnOracle: join(EVOLUTIONS_DIR, 'a7-webauthn-oracle.canvasl'),
  a8BIP32Keymaster: join(EVOLUTIONS_DIR, 'a8-bip32-keymaster.canvasl'),
  a9WebRTCMessenger: join(EVOLUTIONS_DIR, 'a9-webrtc-messenger.canvasl'),
  a10MQTTHerald: join(EVOLUTIONS_DIR, 'a10-mqtt-herald.canvasl'),
  a11Master: join(EVOLUTIONS_DIR, 'a11-master.canvasl'),
} as const;

/**
 * Get the file path for a specific automaton file
 * @param name The automaton file name (e.g., 'a0Unified', 'a1KernelSeed')
 * @returns The absolute file path
 */
export function getAutomatonFile(name: keyof typeof AUTOMATON_FILES): string {
  return AUTOMATON_FILES[name];
}

/**
 * Get all automaton file paths
 * @returns Array of all automaton file paths
 */
export function getAllAutomatonFiles(): string[] {
  return Object.values(AUTOMATON_FILES);
}

/**
 * Get A₅-A₁₁ extended automata file paths
 * @returns Array of A₅-A₁₁ file paths
 */
export function getA11Files(): string[] {
  return [
    AUTOMATON_FILES.a5SheafGluer,
    AUTOMATON_FILES.a6HomologyChecker,
    AUTOMATON_FILES.a7WebAuthnOracle,
    AUTOMATON_FILES.a8BIP32Keymaster,
    AUTOMATON_FILES.a9WebRTCMessenger,
    AUTOMATON_FILES.a10MQTTHerald,
    AUTOMATON_FILES.a11Master,
  ];
}

/**
 * Get A₀-A₄ primary foundation file paths
 * @returns Array of A₀-A₄ file paths
 */
export function getPrimaryFiles(): string[] {
  return [
    AUTOMATON_FILES.a0Unified,
    AUTOMATON_FILES.a1KernelSeed,
    AUTOMATON_FILES.a2Shape,
    AUTOMATON_FILES.a3Centroid,
    AUTOMATON_FILES.a4Basis,
  ];
}

// Legacy aliases for backward compatibility (deprecated)
/** @deprecated Use AUTOMATON_FILES.a0Unified instead */
export const unified = AUTOMATON_FILES.a0Unified;
/** @deprecated Use AUTOMATON_FILES.a1KernelSeed instead */
export const kernelSeed = AUTOMATON_FILES.a1KernelSeed;
/** @deprecated Use AUTOMATON_FILES.a2Shape instead */
export const shape = AUTOMATON_FILES.a2Shape;
/** @deprecated Use AUTOMATON_FILES.a3Centroid instead */
export const centroid = AUTOMATON_FILES.a3Centroid;
/** @deprecated Use AUTOMATON_FILES.a4Basis instead */
export const basis = AUTOMATON_FILES.a4Basis;

