import { _out_is_active } from './_out_is_active'
export function _is_active(el) {
	const { top, bottom } = el.getBoundingClientRect()
	return _out_is_active(top, bottom)
}
