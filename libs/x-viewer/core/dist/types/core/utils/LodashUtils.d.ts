/**
 * Creates a shallow clone of an object or array.
 *
 * For primitive values, returns the value as-is. For objects and arrays,
 * creates a new instance with the same properties or elements.
 *
 * @template T - The type of the object to clone.
 * @param {T} obj - The object to clone.
 * @returns {T} A shallow clone of the object.
 *
 * @example
 * ```typescript
 * import { clone } from "./LodashUtils"
 *
 * const original = { a: 1, b: 2 }
 * const cloned = clone(original)
 * cloned.a = 3
 * console.log(original.a) // 1 (unchanged)
 * console.log(cloned.a)   // 3
 *
 * const arr = [1, 2, 3]
 * const clonedArr = clone(arr) // [1, 2, 3]
 * ```
 */
export declare function clone<T>(obj: T): T;
/**
 * Assigns own enumerable properties of source objects to the destination object
 * for all destination properties that resolve to undefined.
 *
 * This function fills in undefined properties in an object with the first value
 * present in any of the source objects. Source objects are applied from left to right.
 *
 * @param {Record<string, unknown>} obj - The destination object.
 * @param {...Record<string, unknown>[]} sources - The source objects.
 * @returns {Record<string, unknown>} The destination object.
 *
 * @example
 * ```typescript
 * import { defaults } from "./LodashUtils"
 *
 * const object = { a: 1 }
 * const result = defaults(object, { b: 2 }, { a: 3, c: 3 })
 * console.log(result) // { a: 1, b: 2, c: 3 }
 *
 * // undefined properties are filled in
 * const partial = { a: 1, b: undefined }
 * defaults(partial, { b: 2, c: 3 })
 * console.log(partial) // { a: 1, b: 2, c: 3 }
 * ```
 */
export declare function defaults(obj: Record<string, unknown>, ...sources: Record<string, unknown>[]): Record<string, unknown>;
/**
 * Checks if path is a direct property of object.
 *
 * This function checks whether the specified property exists directly on the object
 * (not inherited from its prototype chain).
 *
 * @param {Record<string, unknown>} obj - The object to query.
 * @param {string} path - The path to check.
 * @returns {boolean} Returns true if path exists, else false.
 *
 * @example
 * ```typescript
 * import { has } from "./LodashUtils"
 *
 * const object = { a: 1, b: 2 }
 * has(object, "a")        // true
 * has(object, "c")        // false
 * has(object, "toString") // false (inherited property)
 * ```
 */
export declare function has(obj: Record<string, unknown>, path: string): boolean;
/**
 * Checks if value is an empty object, collection, map, or set.
 *
 * Values are considered empty if they are:
 * - null or undefined
 * - Arrays or strings with length 0
 * - Maps or Sets with size 0
 * - Objects with no enumerable properties
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} Returns true if value is empty, else false.
 *
 * @example
 * ```typescript
 * import { isEmpty } from "./LodashUtils"
 *
 * isEmpty(null)           // true
 * isEmpty(undefined)      // true
 * isEmpty("")             // true
 * isEmpty([])             // true
 * isEmpty({})             // true
 * isEmpty(new Map())      // true
 * isEmpty(new Set())      // true
 * isEmpty("hello")        // false
 * isEmpty([1, 2, 3])      // false
 * isEmpty({ a: 1 })       // false
 * ```
 */
export declare function isEmpty(value: unknown): boolean;
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * This function recursively compares objects and arrays, checking that all nested
 * properties and elements are equal. Handles null/undefined values, primitive types,
 * arrays, and plain objects.
 *
 * @param {unknown} value - The value to compare.
 * @param {unknown} other - The other value to compare.
 * @returns {boolean} Returns true if the values are equivalent, else false.
 *
 * @example
 * ```typescript
 * import { isEqual } from "./LodashUtils"
 *
 * isEqual(1, 1)                    // true
 * isEqual("hello", "hello")        // true
 * isEqual([1, 2], [1, 2])         // true
 * isEqual({ a: 1 }, { a: 1 })     // true
 * isEqual([1, 2], [2, 1])         // false
 * isEqual({ a: 1 }, { a: 2 })     // false
 *
 * // Deep comparison
 * const obj1 = { a: { b: 1 } }
 * const obj2 = { a: { b: 1 } }
 * isEqual(obj1, obj2)              // true
 * ```
 */
export declare function isEqual(value: unknown, other: unknown): boolean;
/**
 * Copies all enumerable own properties from one or more source objects to a target object.
 * @param target The destination object.
 * @param sources The source objects.
 * @returns Returns the modified target object.
 */
export declare function assign<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T;
/**
 *
 */
export declare function get<T = unknown>(obj: unknown, path: string | string[], defaultValue?: T): T;
/**
 *
 */
export declare function includes<T>(collection: T[] | string | Record<string, T>, value: T, fromIndex?: number): boolean;
/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * @param collection The collection to iterate over (array or object).
 * @param iteratee   The function invoked per iteration.
 */
export declare function forEach<T>(collection: T[] | Record<string, T>, iteratee: (value: T, key: string | number, collection: any) => void): void;
/**
 * Creates an array of values by running each element in collection thru iteratee.
 * @param collection The collection to iterate over.
 * @param iteratee The function invoked per iteration.
 * @returns Returns the new mapped array.
 */
export declare function map<T, U>(collection: T[] | Record<string, T>, iteratee: (value: T, key: string | number, collection: any) => U): U[];
/**
 * Recursively merges own and inherited enumerable string keyed properties of source
 * objects into the destination object. Source properties that resolve to undefined
 * are skipped if a destination value exists.
 * @param target The destination object.
 * @param sources The source objects.
 * @returns Returns the destination object.
 */
export declare function merge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T;
/**
 * Merges `defaults` into `obj` (shallow clone) and returns the result.
 * Properties in `obj` overwrite those in `defaults`.
 * @param obj - Target object (can be empty)
 * @param defaults - Default values
 * @returns New object with merged values
 */
export declare const output: <T extends Record<string, unknown>>(obj: Partial<T>, defaults: T) => T;
/**
 * Creates a new array concatenating the input arrays and/or values.
 * @param arrays Arrays and/or values to concatenate.
 * @returns Returns the new concatenated array.
 */
export declare function concat<T>(...arrays: (T[] | T)[]): T[];
/**
 * Iterates over all enumerable properties (own + inherited) of an object.
 * Behaviour matches Lodash `forIn`.
 * @param obj - Object to iterate
 * @param fn - Function to execute for each property (value, key, object)
 */
export declare const forIn: <T extends Record<string, unknown>>(obj: T, fn: (value: T[keyof T], key: string, object: T) => void) => void;
/**
 * Returns an array of the object's own enumerable property keys.
 * @param obj - Any object
 * @returns Array of keys
 */
export declare const keys: <T extends Record<string, unknown>>(obj: T) => string[];
/**
 * Returns the first `n` elements of an array.
 * @param arr - Source array
 * @param n - Number of elements to take (default: 1)
 * @returns New array containing the taken elements
 */
export declare const take: <T>(arr: T[], n?: number) => T[];
/**
 * Returns the last `n` elements of an array.
 * @param arr - Source array
 * @param n - Number of elements to take (default: 1)
 * @returns New array containing the taken elements
 */
export declare const takeRight: <T>(arr: T[], n?: number) => T[];
