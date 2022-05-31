import { atom_ } from '@ctx-core/nanostores'
import { b_ } from '@ctx-core/object'
/** @type {import('./sticky_scroll_active__.d.ts').sticky_scroll_active__} */
export const sticky_scroll_active__ = b_('sticky_scroll_active_', ()=>
	atom_({}))
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 */
export function add_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active_ = sticky_scroll_active__(ctx)
	const sticky_scroll_active = sticky_scroll_active_.$
	sticky_scroll_active[key] = true
	sticky_scroll_active_.$ = sticky_scroll_active
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 */
export function remove_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active_ = sticky_scroll_active__(ctx)
	const sticky_scroll_active = sticky_scroll_active_.$
	sticky_scroll_active[key] = false
	sticky_scroll_active_.$ = sticky_scroll_active
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 */
export function sticky_scroll_active_key_active_(ctx, key) {
	const sticky_scroll_active_ = sticky_scroll_active__(ctx)
	const sticky_scroll_active = sticky_scroll_active_.$
	const active = sticky_scroll_active ? sticky_scroll_active[key] : false
	return active
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}key
 * @param {boolean}active
 */
export function sticky_scroll_active_key_match_(ctx, key, active) {
	const sticky_scroll_active_ = sticky_scroll_active__(ctx)
	return !!active == !!sticky_scroll_active_key_active_(ctx, key)
}
export { sticky_scroll_active__ as sticky_scroll_active$_ }
