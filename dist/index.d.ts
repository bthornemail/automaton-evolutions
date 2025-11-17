/**
 * automaton-evolutions
 *
 * Canonical automaton CanvasL data files for self-referential systems (A₀-A₁₁)
 */
export declare const EVOLUTIONS_DIR: string;
export declare const AUTOMATON_FILES: {
    readonly a0Unified: string;
    readonly a1KernelSeed: string;
    readonly a2Shape: string;
    readonly a3Centroid: string;
    readonly a4Basis: string;
    readonly a5SheafGluer: string;
    readonly a6HomologyChecker: string;
    readonly a7WebAuthnOracle: string;
    readonly a8BIP32Keymaster: string;
    readonly a9WebRTCMessenger: string;
    readonly a10MQTTHerald: string;
    readonly a11Master: string;
};
/**
 * Get the file path for a specific automaton file
 * @param name The automaton file name (e.g., 'a0Unified', 'a1KernelSeed')
 * @returns The absolute file path
 */
export declare function getAutomatonFile(name: keyof typeof AUTOMATON_FILES): string;
/**
 * Get all automaton file paths
 * @returns Array of all automaton file paths
 */
export declare function getAllAutomatonFiles(): string[];
/**
 * Get A₅-A₁₁ extended automata file paths
 * @returns Array of A₅-A₁₁ file paths
 */
export declare function getA11Files(): string[];
/**
 * Get A₀-A₄ primary foundation file paths
 * @returns Array of A₀-A₄ file paths
 */
export declare function getPrimaryFiles(): string[];
/** @deprecated Use AUTOMATON_FILES.a0Unified instead */
export declare const unified: string;
/** @deprecated Use AUTOMATON_FILES.a1KernelSeed instead */
export declare const kernelSeed: string;
/** @deprecated Use AUTOMATON_FILES.a2Shape instead */
export declare const shape: string;
/** @deprecated Use AUTOMATON_FILES.a3Centroid instead */
export declare const centroid: string;
/** @deprecated Use AUTOMATON_FILES.a4Basis instead */
export declare const basis: string;
//# sourceMappingURL=index.d.ts.map