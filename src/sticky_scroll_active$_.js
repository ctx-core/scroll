import { atom$ } from '@ctx-core/nanostores'
import { b_ } from '@ctx-core/object'
/** @type {import('./sticky_scroll_active$_.d.ts').sticky_scroll_active$_} */
export const sticky_scroll_active$_ = b_('sticky_scroll_active$', ()=>
	atom$({}))
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
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	return !!active == !!sticky_scroll_active_key_active_(ctx, key)
}
