/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
/** @type {typeof sticky_scroll_active$_} */
export const [
	sticky_scroll_active$_,
	sticky_scroll_active_,
	sticky_scroll_active__set,
] = /** @type {be_sig_triple_T<sticky_scroll_active_T>} */
	id_be_sig_triple_(
		'sticky_scroll_active_',
		()=>({}))
export { sticky_scroll_active$_ as sticky_scroll_active__ }
/**
 * @param {ctx_T}ctx
 * @param {string}key
 */
export function add_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = true
	sticky_scroll_active$.$ = sticky_scroll_active
}
/**
 * @param {ctx_T}ctx
 * @param {string}key
 */
export function remove_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = false
	sticky_scroll_active$.$ = sticky_scroll_active
}
/**
 * @param {ctx_T}ctx
 * @param {string}key
 */
export function sticky_scroll_active_key_active_(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	const active = sticky_scroll_active ? sticky_scroll_active[key] : false
	return active
}
/**
 * @param {ctx_T}ctx
 * @param {string}key
 * @param {boolean}active
 */
export function sticky_scroll_active_key_match_(ctx, key, active) {
	return !!active == !!sticky_scroll_active_key_active_(ctx, key)
}
export { sticky_scroll_active$_ as sticky_scroll_active$_ }
