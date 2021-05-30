import { out_is_active_ } from './out_is_active_'
export function out_is_visible_(top:number, bottom:number, innerHeight:number) {
	return (top > 0 && top < innerHeight)
		|| out_is_active_(top, bottom)
}
export {
	out_is_visible_ as _out_is_visible,
}
