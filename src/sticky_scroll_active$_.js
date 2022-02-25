import { assign, b_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
export const sticky_scroll_active$_ = b_('sticky_scroll_active$', ()=>
	atom$({}))
export function add_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = true
	sticky_scroll_active$.$ = sticky_scroll_active
}
export function remove_sticky_scroll_active(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = false
	sticky_scroll_active$.$ = sticky_scroll_active
}
export function sticky_scroll_active_key_active_(ctx, key) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	const active = sticky_scroll_active ? sticky_scroll_active[key] : false
	return active
}
export function sticky_scroll_active_key_match_(ctx, key, active) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	return !!active == !!sticky_scroll_active_key_active_(ctx, key)
}
