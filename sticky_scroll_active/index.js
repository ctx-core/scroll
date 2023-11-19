import { be_atom_triple_ } from '@ctx-core/nanostores'
/** @type {typeof import('./index.d.ts').sticky_scroll_active$_} */
export const [
	sticky_scroll_active$_,
	sticky_scroll_active_,
	sticky_scroll_active__set,
] = /** @type {be_atom_triple_T<sticky_scroll_active_T>} */ be_atom_triple_(()=>({}))
	.config({ id: 'sticky_scroll_active_' })
export { sticky_scroll_active$_ as sticky_scroll_active__ }
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 */
export function add_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = true
	sticky_scroll_active$.$ = sticky_scroll_active
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 */
export function remove_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = false
	sticky_scroll_active$.$ = sticky_scroll_active
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 */
export function sticky_scroll_active_key_active_(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	const active = sticky_scroll_active ? sticky_scroll_active[key] : false
	return active
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 * @param {boolean}active
 */
export function sticky_scroll_active_key_match_(ctx, key, active) {
	return !!active == !!sticky_scroll_active_key_active_(ctx, key)
}
export { sticky_scroll_active$_ as sticky_scroll_active$_ }
