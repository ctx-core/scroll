import { out_is_visible_ } from '../out_is_visible_/index.js'
/**
 * @param {HTMLElement}el
 * @return {boolean}
 */
export function is_visible_(el) {
	const { top, bottom } = el.getBoundingClientRect()
	const { innerHeight } = window
	return out_is_visible_(top, bottom, innerHeight)
}
export { is_visible_ as _is_visible, }
