import { out_is_visible_ } from './out_is_visible_.js'
export function is_visible_(el:HTMLElement) {
	const { top, bottom } = el.getBoundingClientRect()
	const { innerHeight } = window
	return out_is_visible_(top, bottom, innerHeight)
}
export {
	is_visible_ as _is_visible,
}
