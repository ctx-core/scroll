import { _out_is_active } from './_out_is_active'
export function _out_is_visible(top:number, bottom:number, innerHeight:number) {
	return (top > 0 && top < innerHeight)
		|| _out_is_active(top, bottom)
}
