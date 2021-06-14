import { out_is_visible_ } from './out_is_visible_';
export function is_visible_(el) {
    const { top, bottom } = el.getBoundingClientRect();
    const { innerHeight } = window;
    return out_is_visible_(top, bottom, innerHeight);
}
export { is_visible_ as _is_visible, };
//# sourceMappingURL=src/is_visible_.js.map