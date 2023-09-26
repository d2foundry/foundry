/* tslint:disable */
/* eslint-disable */
/**
*/
export function start(): void;
/**
* @returns {MetaData}
*/
export function getMetadata(): MetaData;
/**
* @returns {any}
*/
export function stringifyWeapon(): any;
/**
* @param {number} _hash
* @param {number} _weapon_type_id
* @param {number} _intrinsic_hash
* @param {number} _ammo_type_id
* @param {number} _damage_type_id
*/
export function setWeapon(_hash: number, _weapon_type_id: number, _intrinsic_hash: number, _ammo_type_id: number, _damage_type_id: number): void;
/**
* @returns {any}
*/
export function getStats(): any;
/**
* @param {any} _stats
*/
export function setStats(_stats: any): void;
/**
* @param {any} _stats
* @param {number} _value
* @param {number} _hash
*/
export function addTrait(_stats: any, _value: number, _hash: number): void;
/**
*/
export function resetTraits(): void;
/**
* @returns {Uint32Array}
*/
export function getTraitHashes(): Uint32Array;
/**
* @param {number} perk_hash
* @param {number} new_value
*/
export function setTraitValue(perk_hash: number, new_value: number): void;
/**
* @param {Uint32Array} _perks
* @returns {any}
*/
export function getTraitOptions(_perks: Uint32Array): any;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {RangeResponse}
*/
export function getWeaponRangeFalloff(_dynamic_traits: boolean, _pvp: boolean): RangeResponse;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {HandlingResponse}
*/
export function getWeaponHandlingTimes(_dynamic_traits: boolean, _pvp: boolean): HandlingResponse;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {ReloadResponse}
*/
export function getWeaponReloadTimes(_dynamic_traits: boolean, _pvp: boolean): ReloadResponse;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {AmmoResponse}
*/
export function getWeaponAmmoSizes(_dynamic_traits: boolean, _pvp: boolean): AmmoResponse;
/**
* @param {number} _overshield
* @returns {any}
*/
export function getWeaponTtk(_overshield: number): any;
/**
*DEPRECATED for now
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @param {boolean} _use_rpl
* @returns {FiringResponse}
*/
export function getWeaponFiringData(_dynamic_traits: boolean, _pvp: boolean, _use_rpl: boolean): FiringResponse;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @param {number} _resilience
* @returns {number}
*/
export function getWeaponFlinch(_dynamic_traits: boolean, _pvp: boolean, _resilience: number): number;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {any}
*/
export function getMiscData(_dynamic_traits: boolean, _pvp: boolean): any;
/**
* @param {number} _recommend_pl
* @param {number} _player_pl
* @param {number} _weapon_pl
* @param {number} _override_cap
* @param {number} _difficulty
* @param {number} _enemy_type
*/
export function setEncounter(_recommend_pl: number, _player_pl: number, _weapon_pl: number, _override_cap: number, _difficulty: number, _enemy_type: number): void;
/**
* @param {number} _level
*/
export function setLoggingLevel(_level: number): void;
/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {any}
*/
export function getModifierResponseSummary(_dynamic_traits: boolean, _pvp: boolean): any;
/**
* @param {boolean} _pvp
* @returns {ScalarResponseSummary}
*/
export function getScalarResponseSummary(_pvp: boolean): ScalarResponseSummary;
/**
*/
export enum DifficultyOptions {
  NORMAL = 1,
  RAID = 2,
  MASTER = 3,
}
/**
*/
export enum EnemyType {
  MINOR = 0,
  ELITE = 1,
  MINIBOSS = 2,
  BOSS = 3,
  VEHICLE = 4,
  ENCLAVE = 5,
  PLAYER = 6,
  CHAMPION = 7,
}
/**
*/
export class AmmoResponse {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly magSize: number;
/**
*/
  readonly reserveSize: number;
/**
*/
  readonly timestamp: number;
}
/**
*/
export class BodyKillData {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  bodyshots: number;
/**
*/
  timeTaken: number;
}
/**
*/
export class DpsResponse {
  free(): void;
/**
* @returns {string}
*/
  toJSON(): string;
/**
*Returns a list of dps values for each magazine
*/
  readonly dpsPerMag: any;
/**
*Returns a list of tuples of time and damage
*/
  readonly timeDamageData: any;
/**
*/
  readonly totalDamage: number;
/**
*/
  readonly totalShots: number;
/**
*/
  readonly totalTime: number;
}
/**
*/
export class FiringResponse {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly burstDelay: number;
/**
*/
  readonly burstSize: number;
/**
*/
  readonly innerBurstDelay: number;
/**
*/
  readonly pveCritMult: number;
/**
*/
  readonly pveExplosionDamage: number;
/**
*/
  readonly pveImpactDamage: number;
/**
*/
  readonly pvpCritMult: number;
/**
*/
  readonly pvpExplosionDamage: number;
/**
*/
  readonly pvpImpactDamage: number;
/**
*/
  readonly rpm: number;
/**
*/
  readonly timestamp: number;
}
/**
*/
export class HandlingResponse {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly adsTime: number;
/**
*/
  readonly readyTime: number;
/**
*/
  readonly stowTime: number;
/**
*/
  readonly timestamp: number;
}
/**
*/
export class MetaData {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly apiGitBranch: string;
/**
*/
  readonly apiGitCommit: string;
/**
*/
  readonly apiTimestamp: string;
/**
*/
  readonly apiVersion: string;
}
/**
*/
export class OptimalKillData {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  bodyshots: number;
/**
*/
  headshots: number;
/**
*/
  timeTaken: number;
}
/**
*/
export class RangeResponse {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly adsFalloffEnd: number;
/**
*/
  readonly adsFalloffStart: number;
/**
*/
  readonly floorPercent: number;
/**
*/
  readonly hipFalloffEnd: number;
/**
*/
  readonly hipFalloffStart: number;
/**
*/
  readonly timestamp: number;
}
/**
*/
export class ReloadResponse {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly ammoTime: number;
/**
*/
  readonly reloadTime: number;
/**
*/
  readonly timestamp: number;
}
/**
*/
export class ResillienceSummary {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  bodyTtk: BodyKillData;
/**
*/
  optimalTtk: OptimalKillData;
/**
*/
  resillienceValue: number;
}
/**
*/
export class ScalarResponseSummary {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly adsRangeScalar: number;
/**
*/
  readonly adsScalar: number;
/**
*/
  readonly drawScalar: number;
/**
*/
  readonly globalRangeScalar: number;
/**
*/
  readonly hipfireRangeScalar: number;
/**
*/
  readonly magSizeScalar: number;
/**
*/
  readonly reloadScalar: number;
/**
*/
  readonly reserveSizeScalar: number;
/**
*/
  readonly stowScalar: number;
}
/**
*/
export class Stat {
  free(): void;
/**
*/
  baseValue: number;
/**
*/
  partValue: number;
/**
*/
  traitValue: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_handlingresponse_free: (a: number) => void;
  readonly __wbg_get_handlingresponse_timestamp: (a: number) => number;
  readonly __wbg_rangeresponse_free: (a: number) => void;
  readonly __wbg_get_rangeresponse_timestamp: (a: number) => number;
  readonly __wbg_reloadresponse_free: (a: number) => void;
  readonly __wbg_ammoresponse_free: (a: number) => void;
  readonly __wbg_get_ammoresponse_magSize: (a: number) => number;
  readonly __wbg_get_ammoresponse_reserveSize: (a: number) => number;
  readonly __wbg_get_ammoresponse_timestamp: (a: number) => number;
  readonly __wbg_dpsresponse_free: (a: number) => void;
  readonly __wbg_get_dpsresponse_totalTime: (a: number) => number;
  readonly __wbg_get_dpsresponse_totalShots: (a: number) => number;
  readonly dpsresponse_toJSON: (a: number, b: number) => void;
  readonly dpsresponse_timeDamageData: (a: number) => number;
  readonly dpsresponse_dpsPerMag: (a: number) => number;
  readonly __wbg_optimalkilldata_free: (a: number) => void;
  readonly __wbg_get_optimalkilldata_bodyshots: (a: number) => number;
  readonly __wbg_set_optimalkilldata_bodyshots: (a: number, b: number) => void;
  readonly __wbg_bodykilldata_free: (a: number) => void;
  readonly __wbg_get_bodykilldata_bodyshots: (a: number) => number;
  readonly __wbg_set_bodykilldata_bodyshots: (a: number, b: number) => void;
  readonly __wbg_get_bodykilldata_timeTaken: (a: number) => number;
  readonly __wbg_set_bodykilldata_timeTaken: (a: number, b: number) => void;
  readonly __wbg_resilliencesummary_free: (a: number) => void;
  readonly __wbg_get_resilliencesummary_resillienceValue: (a: number) => number;
  readonly __wbg_set_resilliencesummary_resillienceValue: (a: number, b: number) => void;
  readonly __wbg_get_resilliencesummary_bodyTtk: (a: number) => number;
  readonly __wbg_set_resilliencesummary_bodyTtk: (a: number, b: number) => void;
  readonly __wbg_get_resilliencesummary_optimalTtk: (a: number) => number;
  readonly __wbg_set_resilliencesummary_optimalTtk: (a: number, b: number) => void;
  readonly __wbg_firingresponse_free: (a: number) => void;
  readonly __wbg_get_firingresponse_pvpCritMult: (a: number) => number;
  readonly __wbg_get_firingresponse_pveImpactDamage: (a: number) => number;
  readonly __wbg_get_firingresponse_pveExplosionDamage: (a: number) => number;
  readonly __wbg_get_firingresponse_pveCritMult: (a: number) => number;
  readonly __wbg_get_firingresponse_burstDelay: (a: number) => number;
  readonly __wbg_get_firingresponse_innerBurstDelay: (a: number) => number;
  readonly __wbg_get_firingresponse_burstSize: (a: number) => number;
  readonly __wbg_get_firingresponse_timestamp: (a: number) => number;
  readonly __wbg_get_firingresponse_rpm: (a: number) => number;
  readonly __wbg_set_stat_baseValue: (a: number, b: number) => void;
  readonly __wbg_set_stat_partValue: (a: number, b: number) => void;
  readonly __wbg_set_stat_traitValue: (a: number, b: number) => void;
  readonly __wbg_metadata_free: (a: number) => void;
  readonly __wbg_get_metadata_apiVersion: (a: number, b: number) => void;
  readonly __wbg_get_metadata_apiTimestamp: (a: number, b: number) => void;
  readonly __wbg_get_metadata_apiGitCommit: (a: number, b: number) => void;
  readonly __wbg_get_metadata_apiGitBranch: (a: number, b: number) => void;
  readonly __wbg_scalarresponsesummary_free: (a: number) => void;
  readonly start: () => void;
  readonly getMetadata: (a: number) => void;
  readonly stringifyWeapon: (a: number) => void;
  readonly setWeapon: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly getStats: (a: number) => void;
  readonly setStats: (a: number, b: number) => void;
  readonly addTrait: (a: number, b: number, c: number, d: number) => void;
  readonly resetTraits: (a: number) => void;
  readonly getTraitHashes: (a: number) => void;
  readonly setTraitValue: (a: number, b: number) => void;
  readonly getTraitOptions: (a: number, b: number, c: number) => void;
  readonly getWeaponRangeFalloff: (a: number, b: number, c: number) => void;
  readonly getWeaponHandlingTimes: (a: number, b: number, c: number) => void;
  readonly getWeaponReloadTimes: (a: number, b: number, c: number) => void;
  readonly getWeaponAmmoSizes: (a: number, b: number, c: number) => void;
  readonly getWeaponTtk: (a: number, b: number) => void;
  readonly getWeaponFiringData: (a: number, b: number, c: number, d: number) => void;
  readonly getWeaponFlinch: (a: number, b: number, c: number, d: number) => void;
  readonly getMiscData: (a: number, b: number, c: number) => void;
  readonly setEncounter: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly setLoggingLevel: (a: number, b: number) => void;
  readonly getModifierResponseSummary: (a: number, b: number, c: number) => void;
  readonly getScalarResponseSummary: (a: number, b: number) => void;
  readonly __wbg_stat_free: (a: number) => void;
  readonly __wbg_get_rangeresponse_hipFalloffStart: (a: number) => number;
  readonly __wbg_get_reloadresponse_reloadTime: (a: number) => number;
  readonly __wbg_get_handlingresponse_readyTime: (a: number) => number;
  readonly __wbg_get_optimalkilldata_timeTaken: (a: number) => number;
  readonly __wbg_get_dpsresponse_totalDamage: (a: number) => number;
  readonly __wbg_get_firingresponse_pvpImpactDamage: (a: number) => number;
  readonly __wbg_get_stat_baseValue: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_reloadScalar: (a: number) => number;
  readonly __wbg_set_optimalkilldata_timeTaken: (a: number, b: number) => void;
  readonly __wbg_get_rangeresponse_hipFalloffEnd: (a: number) => number;
  readonly __wbg_get_rangeresponse_adsFalloffStart: (a: number) => number;
  readonly __wbg_get_reloadresponse_ammoTime: (a: number) => number;
  readonly __wbg_get_handlingresponse_stowTime: (a: number) => number;
  readonly __wbg_get_reloadresponse_timestamp: (a: number) => number;
  readonly __wbg_get_optimalkilldata_headshots: (a: number) => number;
  readonly __wbg_get_firingresponse_pvpExplosionDamage: (a: number) => number;
  readonly __wbg_get_handlingresponse_adsTime: (a: number) => number;
  readonly __wbg_get_rangeresponse_adsFalloffEnd: (a: number) => number;
  readonly __wbg_get_rangeresponse_floorPercent: (a: number) => number;
  readonly __wbg_get_stat_partValue: (a: number) => number;
  readonly __wbg_get_stat_traitValue: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_drawScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_adsScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_stowScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_globalRangeScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_hipfireRangeScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_adsRangeScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_magSizeScalar: (a: number) => number;
  readonly __wbg_get_scalarresponsesummary_reserveSizeScalar: (a: number) => number;
  readonly __wbg_set_optimalkilldata_headshots: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
