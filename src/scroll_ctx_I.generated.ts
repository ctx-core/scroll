import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { sticky_scroll_active_T } from './sticky_scroll_active_b'
import { sticky_scroll_active_b } from './sticky_scroll_active_b'
export interface scroll_ctx_I {
	sticky_scroll_active?:sticky_scroll_active_T
	scroll_b_h?:scroll_b_h_T
}
export interface scroll_b_h_T {
	get sticky_scroll_active():sticky_scroll_active_T
}
export function scroll_b_h_b(ctx:scroll_ctx_I):B<scroll_ctx_I, 'scroll_b_h'> {
	return _b('scroll_b_h', ()=>{
		return {
			get sticky_scroll_active() { return sticky_scroll_active_b(ctx) }
		}
	})
}