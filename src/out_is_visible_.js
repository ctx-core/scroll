import { out_is_active_ } from './out_is_active_.js'
/**
 * @param {number}top
 * @param {number}bottom
 * @param {number}innerHeight
 * @return {boolean}
 */
export function out_is_visible_(top, bottom, innerHeight) {
	return top > 0 && top < innerHeight || out_is_active_(top, bottom)
}
export { out_is_visible_ as _out_is_visible, }
