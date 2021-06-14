import { assign, b_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'sticky_scroll_active$';
export const sticky_scroll_active$_b = b_(key, () => {
    const sticky_scroll_active$ = writable$({});
    return assign(sticky_scroll_active$, {
        add_sticky_scroll_active,
        remove_sticky_scroll_active,
        sticky_scroll_active_key_active_,
        sticky_scroll_active_key_match_,
    });
    function add_sticky_scroll_active(key) {
        sticky_scroll_active$.update(scroll_sticky_active => {
            scroll_sticky_active[key] = true;
            return scroll_sticky_active;
        });
    }
    function remove_sticky_scroll_active(key) {
        sticky_scroll_active$.update(scroll_sticky_active => {
            scroll_sticky_active[key] = false;
            return scroll_sticky_active;
        });
    }
    function sticky_scroll_active_key_active_(key) {
        const sticky_scroll_active = sticky_scroll_active$._;
        const active = sticky_scroll_active
            ? sticky_scroll_active[key]
            : false;
        return active;
    }
    function sticky_scroll_active_key_match_(key, active) {
        return !!(active) == !!(sticky_scroll_active_key_active_(key));
    }
});
export { sticky_scroll_active$_b as b__active__Sticky__Scroll, };
//# sourceMappingURL=src/sticky_scroll_active$_b.js.map