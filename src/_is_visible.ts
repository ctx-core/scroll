import { _out_is_visible } from './_out_is_visible'
export function _is_visible(el) {
	const { top, bottom } = el.getBoundingClientRect()
	const { innerHeight } = window
	return _out_is_visible(top, bottom, innerHeight)
}
