import { _out_is_active } from './_out_is_active'
export function _out_is_visible(top, bottom, innerHeight) {
	return (top > 0 && top < innerHeight)
		|| _out_is_active(top, bottom)
}
