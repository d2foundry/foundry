let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
*/
export function start() {
    wasm.start();
}

/**
* @returns {MetaData}
*/
export function getMetadata() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getMetadata(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return MetaData.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @returns {any}
*/
export function stringifyWeapon() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.stringifyWeapon(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _hash
* @param {number} _weapon_type_id
* @param {number} _intrinsic_hash
* @param {number} _ammo_type_id
* @param {number} _damage_type_id
*/
export function setWeapon(_hash, _weapon_type_id, _intrinsic_hash, _ammo_type_id, _damage_type_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.setWeapon(retptr, _hash, _weapon_type_id, _intrinsic_hash, _ammo_type_id, _damage_type_id);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @returns {any}
*/
export function getStats() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getStats(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {any} _stats
*/
export function setStats(_stats) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.setStats(retptr, addHeapObject(_stats));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {any} _stats
* @param {number} _value
* @param {number} _hash
*/
export function addTrait(_stats, _value, _hash) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.addTrait(retptr, addHeapObject(_stats), _value, _hash);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
export function resetTraits() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.resetTraits(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @returns {Uint32Array}
*/
export function getTraitHashes() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getTraitHashes(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} perk_hash
* @param {number} new_value
*/
export function setTraitValue(perk_hash, new_value) {
    wasm.setTraitValue(perk_hash, new_value);
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint32Array} _perks
* @returns {any}
*/
export function getTraitOptions(_perks) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray32ToWasm0(_perks, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.getTraitOptions(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {RangeResponse}
*/
export function getWeaponRangeFalloff(_dynamic_traits, _pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponRangeFalloff(retptr, _dynamic_traits, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return RangeResponse.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {HandlingResponse}
*/
export function getWeaponHandlingTimes(_dynamic_traits, _pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponHandlingTimes(retptr, _dynamic_traits, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return HandlingResponse.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {ReloadResponse}
*/
export function getWeaponReloadTimes(_dynamic_traits, _pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponReloadTimes(retptr, _dynamic_traits, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return ReloadResponse.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {AmmoResponse}
*/
export function getWeaponAmmoSizes(_dynamic_traits, _pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponAmmoSizes(retptr, _dynamic_traits, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return AmmoResponse.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _overshield
* @returns {any}
*/
export function getWeaponTtk(_overshield) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponTtk(retptr, _overshield);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*DEPRECATED for now
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @param {boolean} _use_rpl
* @returns {FiringResponse}
*/
export function getWeaponFiringData(_dynamic_traits, _pvp, _use_rpl) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponFiringData(retptr, _dynamic_traits, _pvp, _use_rpl);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return FiringResponse.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @param {number} _resilience
* @returns {number}
*/
export function getWeaponFlinch(_dynamic_traits, _pvp, _resilience) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getWeaponFlinch(retptr, _dynamic_traits, _pvp, _resilience);
        var r0 = getFloat64Memory0()[retptr / 8 + 0];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        return r0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {any}
*/
export function getMiscData(_dynamic_traits, _pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getMiscData(retptr, _dynamic_traits, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _recommend_pl
* @param {number} _player_pl
* @param {number} _weapon_pl
* @param {number} _override_cap
* @param {number} _difficulty
* @param {number} _enemy_type
*/
export function setEncounter(_recommend_pl, _player_pl, _weapon_pl, _override_cap, _difficulty, _enemy_type) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.setEncounter(retptr, _recommend_pl, _player_pl, _weapon_pl, _override_cap, _difficulty, _enemy_type);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _level
*/
export function setLoggingLevel(_level) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.setLoggingLevel(retptr, _level);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _dynamic_traits
* @param {boolean} _pvp
* @returns {any}
*/
export function getModifierResponseSummary(_dynamic_traits, _pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getModifierResponseSummary(retptr, _dynamic_traits, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {boolean} _pvp
* @returns {ScalarResponseSummary}
*/
export function getScalarResponseSummary(_pvp) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.getScalarResponseSummary(retptr, _pvp);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return ScalarResponseSummary.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
export const DifficultyOptions = Object.freeze({ NORMAL:1,"1":"NORMAL",RAID:2,"2":"RAID",MASTER:3,"3":"MASTER", });
/**
*/
export const EnemyType = Object.freeze({ MINOR:0,"0":"MINOR",ELITE:1,"1":"ELITE",MINIBOSS:2,"2":"MINIBOSS",BOSS:3,"3":"BOSS",VEHICLE:4,"4":"VEHICLE",ENCLAVE:5,"5":"ENCLAVE",PLAYER:6,"6":"PLAYER",CHAMPION:7,"7":"CHAMPION", });
/**
*/
export class AmmoResponse {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AmmoResponse.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            magSize: this.magSize,
            reserveSize: this.reserveSize,
            timestamp: this.timestamp,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ammoresponse_free(ptr);
    }
    /**
    * @returns {number}
    */
    get magSize() {
        const ret = wasm.__wbg_get_ammoresponse_magSize(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get reserveSize() {
        const ret = wasm.__wbg_get_ammoresponse_reserveSize(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get timestamp() {
        const ret = wasm.__wbg_get_ammoresponse_timestamp(this.__wbg_ptr);
        return ret >>> 0;
    }
}
/**
*/
export class BodyKillData {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(BodyKillData.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            bodyshots: this.bodyshots,
            timeTaken: this.timeTaken,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_bodykilldata_free(ptr);
    }
    /**
    * @returns {number}
    */
    get bodyshots() {
        const ret = wasm.__wbg_get_bodykilldata_bodyshots(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set bodyshots(arg0) {
        wasm.__wbg_set_bodykilldata_bodyshots(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get timeTaken() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set timeTaken(arg0) {
        wasm.__wbg_set_bodykilldata_timeTaken(this.__wbg_ptr, arg0);
    }
}
/**
*/
export class DpsResponse {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_dpsresponse_free(ptr);
    }
    /**
    * @returns {number}
    */
    get totalDamage() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get totalTime() {
        const ret = wasm.__wbg_get_dpsresponse_totalTime(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get totalShots() {
        const ret = wasm.__wbg_get_dpsresponse_totalShots(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {string}
    */
    toJSON() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.dpsresponse_toJSON(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
    *Returns a list of tuples of time and damage
    * @returns {any}
    */
    get timeDamageData() {
        const ret = wasm.dpsresponse_timeDamageData(this.__wbg_ptr);
        return takeObject(ret);
    }
    /**
    *Returns a list of dps values for each magazine
    * @returns {any}
    */
    get dpsPerMag() {
        const ret = wasm.dpsresponse_dpsPerMag(this.__wbg_ptr);
        return takeObject(ret);
    }
}
/**
*/
export class FiringResponse {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FiringResponse.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            pvpImpactDamage: this.pvpImpactDamage,
            pvpExplosionDamage: this.pvpExplosionDamage,
            pvpCritMult: this.pvpCritMult,
            pveImpactDamage: this.pveImpactDamage,
            pveExplosionDamage: this.pveExplosionDamage,
            pveCritMult: this.pveCritMult,
            burstDelay: this.burstDelay,
            innerBurstDelay: this.innerBurstDelay,
            burstSize: this.burstSize,
            timestamp: this.timestamp,
            rpm: this.rpm,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_firingresponse_free(ptr);
    }
    /**
    * @returns {number}
    */
    get pvpImpactDamage() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get pvpExplosionDamage() {
        const ret = wasm.__wbg_get_dpsresponse_totalTime(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get pvpCritMult() {
        const ret = wasm.__wbg_get_firingresponse_pvpCritMult(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get pveImpactDamage() {
        const ret = wasm.__wbg_get_firingresponse_pveImpactDamage(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get pveExplosionDamage() {
        const ret = wasm.__wbg_get_firingresponse_pveExplosionDamage(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get pveCritMult() {
        const ret = wasm.__wbg_get_firingresponse_pveCritMult(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get burstDelay() {
        const ret = wasm.__wbg_get_firingresponse_burstDelay(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get innerBurstDelay() {
        const ret = wasm.__wbg_get_firingresponse_innerBurstDelay(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get burstSize() {
        const ret = wasm.__wbg_get_firingresponse_burstSize(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get timestamp() {
        const ret = wasm.__wbg_get_firingresponse_timestamp(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get rpm() {
        const ret = wasm.__wbg_get_firingresponse_rpm(this.__wbg_ptr);
        return ret;
    }
}
/**
*/
export class HandlingResponse {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(HandlingResponse.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            readyTime: this.readyTime,
            stowTime: this.stowTime,
            adsTime: this.adsTime,
            timestamp: this.timestamp,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_handlingresponse_free(ptr);
    }
    /**
    * @returns {number}
    */
    get readyTime() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get stowTime() {
        const ret = wasm.__wbg_get_dpsresponse_totalTime(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get adsTime() {
        const ret = wasm.__wbg_get_firingresponse_pvpCritMult(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get timestamp() {
        const ret = wasm.__wbg_get_handlingresponse_timestamp(this.__wbg_ptr);
        return ret >>> 0;
    }
}
/**
*/
export class MetaData {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(MetaData.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            apiVersion: this.apiVersion,
            apiTimestamp: this.apiTimestamp,
            apiGitCommit: this.apiGitCommit,
            apiGitBranch: this.apiGitBranch,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_metadata_free(ptr);
    }
    /**
    * @returns {string}
    */
    get apiVersion() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_metadata_apiVersion(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {string}
    */
    get apiTimestamp() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_metadata_apiTimestamp(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {string}
    */
    get apiGitCommit() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_metadata_apiGitCommit(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {string}
    */
    get apiGitBranch() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_metadata_apiGitBranch(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class OptimalKillData {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(OptimalKillData.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            headshots: this.headshots,
            bodyshots: this.bodyshots,
            timeTaken: this.timeTaken,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_optimalkilldata_free(ptr);
    }
    /**
    * @returns {number}
    */
    get headshots() {
        const ret = wasm.__wbg_get_bodykilldata_bodyshots(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set headshots(arg0) {
        wasm.__wbg_set_bodykilldata_bodyshots(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get bodyshots() {
        const ret = wasm.__wbg_get_optimalkilldata_bodyshots(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set bodyshots(arg0) {
        wasm.__wbg_set_optimalkilldata_bodyshots(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get timeTaken() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set timeTaken(arg0) {
        wasm.__wbg_set_bodykilldata_timeTaken(this.__wbg_ptr, arg0);
    }
}
/**
*/
export class RangeResponse {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RangeResponse.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            hipFalloffStart: this.hipFalloffStart,
            hipFalloffEnd: this.hipFalloffEnd,
            adsFalloffStart: this.adsFalloffStart,
            adsFalloffEnd: this.adsFalloffEnd,
            floorPercent: this.floorPercent,
            timestamp: this.timestamp,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rangeresponse_free(ptr);
    }
    /**
    * @returns {number}
    */
    get hipFalloffStart() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get hipFalloffEnd() {
        const ret = wasm.__wbg_get_dpsresponse_totalTime(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get adsFalloffStart() {
        const ret = wasm.__wbg_get_firingresponse_pvpCritMult(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get adsFalloffEnd() {
        const ret = wasm.__wbg_get_firingresponse_pveImpactDamage(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get floorPercent() {
        const ret = wasm.__wbg_get_firingresponse_pveExplosionDamage(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get timestamp() {
        const ret = wasm.__wbg_get_rangeresponse_timestamp(this.__wbg_ptr);
        return ret >>> 0;
    }
}
/**
*/
export class ReloadResponse {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ReloadResponse.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            reloadTime: this.reloadTime,
            ammoTime: this.ammoTime,
            timestamp: this.timestamp,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_reloadresponse_free(ptr);
    }
    /**
    * @returns {number}
    */
    get reloadTime() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get ammoTime() {
        const ret = wasm.__wbg_get_dpsresponse_totalTime(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get timestamp() {
        const ret = wasm.__wbg_get_dpsresponse_totalShots(this.__wbg_ptr);
        return ret >>> 0;
    }
}
/**
*/
export class ResillienceSummary {

    toJSON() {
        return {
            resillienceValue: this.resillienceValue,
            bodyTtk: this.bodyTtk,
            optimalTtk: this.optimalTtk,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_resilliencesummary_free(ptr);
    }
    /**
    * @returns {number}
    */
    get resillienceValue() {
        const ret = wasm.__wbg_get_resilliencesummary_resillienceValue(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set resillienceValue(arg0) {
        wasm.__wbg_set_resilliencesummary_resillienceValue(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {BodyKillData}
    */
    get bodyTtk() {
        const ret = wasm.__wbg_get_resilliencesummary_bodyTtk(this.__wbg_ptr);
        return BodyKillData.__wrap(ret);
    }
    /**
    * @param {BodyKillData} arg0
    */
    set bodyTtk(arg0) {
        _assertClass(arg0, BodyKillData);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_resilliencesummary_bodyTtk(this.__wbg_ptr, ptr0);
    }
    /**
    * @returns {OptimalKillData}
    */
    get optimalTtk() {
        const ret = wasm.__wbg_get_resilliencesummary_optimalTtk(this.__wbg_ptr);
        return OptimalKillData.__wrap(ret);
    }
    /**
    * @param {OptimalKillData} arg0
    */
    set optimalTtk(arg0) {
        _assertClass(arg0, OptimalKillData);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_resilliencesummary_optimalTtk(this.__wbg_ptr, ptr0);
    }
}
/**
*/
export class ScalarResponseSummary {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ScalarResponseSummary.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    toJSON() {
        return {
            reloadScalar: this.reloadScalar,
            drawScalar: this.drawScalar,
            adsScalar: this.adsScalar,
            stowScalar: this.stowScalar,
            globalRangeScalar: this.globalRangeScalar,
            hipfireRangeScalar: this.hipfireRangeScalar,
            adsRangeScalar: this.adsRangeScalar,
            magSizeScalar: this.magSizeScalar,
            reserveSizeScalar: this.reserveSizeScalar,
        };
    }

    toString() {
        return JSON.stringify(this);
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_scalarresponsesummary_free(ptr);
    }
    /**
    * @returns {number}
    */
    get reloadScalar() {
        const ret = wasm.__wbg_get_bodykilldata_timeTaken(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get drawScalar() {
        const ret = wasm.__wbg_get_dpsresponse_totalTime(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get adsScalar() {
        const ret = wasm.__wbg_get_firingresponse_pvpCritMult(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get stowScalar() {
        const ret = wasm.__wbg_get_firingresponse_pveImpactDamage(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get globalRangeScalar() {
        const ret = wasm.__wbg_get_firingresponse_pveExplosionDamage(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get hipfireRangeScalar() {
        const ret = wasm.__wbg_get_firingresponse_pveCritMult(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get adsRangeScalar() {
        const ret = wasm.__wbg_get_firingresponse_burstDelay(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get magSizeScalar() {
        const ret = wasm.__wbg_get_firingresponse_innerBurstDelay(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get reserveSizeScalar() {
        const ret = wasm.__wbg_get_firingresponse_rpm(this.__wbg_ptr);
        return ret;
    }
}
/**
*/
export class Stat {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_stat_free(ptr);
    }
    /**
    * @returns {number}
    */
    get baseValue() {
        const ret = wasm.__wbg_get_ammoresponse_magSize(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set baseValue(arg0) {
        wasm.__wbg_set_stat_baseValue(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get partValue() {
        const ret = wasm.__wbg_get_ammoresponse_reserveSize(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set partValue(arg0) {
        wasm.__wbg_set_stat_partValue(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get traitValue() {
        const ret = wasm.__wbg_get_ammoresponse_timestamp(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set traitValue(arg0) {
        wasm.__wbg_set_stat_traitValue(this.__wbg_ptr, arg0);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
        const ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_set_502d29070ea18557 = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbg_length_72e2208bbc0efc61 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_085ec1f694018c4f = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_8125e318e6245eed = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_5cf90238115182c3 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_new_b51585de1b234aff = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_841ac57cff3d672b = function(arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_iterator_97f0c81209c6c35a = function() {
        const ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_97b561fb56f034b5 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_call_cb65541d95d71282 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_next_526fc47e980da008 = function(arg0) {
        const ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_ddb3312ca1c4e32a = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_done_5c1f01fb660d73b5 = function(arg0) {
        const ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_1695675138684bd5 = function(arg0) {
        const ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_entries_e51f29c7bba0c054 = function(arg0) {
        const ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_fff51ee6522a1a18 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_get_44be0491f933a435 = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_bedc3d02d0f05eb0 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_log_3dd44a26281bb0e0 = function(arg0, arg1) {
        console.log(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_898a68150f225f2e = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_56693dbed0c32988 = function() {
        const ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_39ac22089b74fddb = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_isSafeInteger_bb8e18dd21c97288 = function(arg0) {
        const ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint32Memory0 = null;
    cachedUint8Memory0 = null;

    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('oracle_engine_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;
