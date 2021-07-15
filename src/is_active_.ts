import { out_is_active_ } from './out_is_active_.js'
export function is_active_(el:HTMLElement) {
	const { top, bottom } = el.getBoundingClientRect()
	return out_is_active_(top, bottom)
}
export {
	is_active_ as _is_active,
}
