import { out_is_active_ } from '../out_is_active_/index.js'
/**
 * @param {HTMLElement}el
 * @return {boolean}
 */
export function is_active_(el) {
	const { top, bottom } = el.getBoundingClientRect()
	return out_is_active_(top, bottom)
}
export { is_active_ as _is_active, }
