<script>
import { onMount, onDestroy, createEventDispatcher } from 'svelte'
import { out_is_active_ } from '../out_is_active_'
import { out_is_visible_ } from '../out_is_visible_'
const dispatch = createEventDispatcher()
let getBoundingClientRect = default_getBoundingClientRect
let terminal = null
let root = null
let active
let visible
onMount(() => {
	reset({})
	if (terminal) {
		if (terminal.addEventListener) {
			terminal.addEventListener('scroll', reset)
		} else if (terminal.on) {
			terminal.on('scroll', reset)
		}
	}
})
onDestroy(() => {
	if (terminal) {
		if (terminal.removeEventListener) {
			terminal.removeEventListener('scroll', reset)
		} else if (terminal.off) {
			terminal.off('scroll', reset)
		}
	}
	if (contains_visible()) {
		remove_visible()
	}
	if (contains_active()) {
		remove_active()
	}
})
function reset(event) {
	const { top, bottom } = getBoundingClientRect(root)
	const { innerHeight } = window
	const out_is_active= out_is_active_(top, bottom)
	const out_is_visible = out_is_visible_(top, bottom, innerHeight)
	if (out_is_visible) {
		if (!visible) {
			add_visible()
		}
	} else {
		if (visible) {
			remove_visible()
		}
	}
	if (out_is_active) {
		if (!active) {
			add_active()
		}
	} else {
		if (active) {
			remove_active()
		}
	}
}
function add_active() {
	active = true
	dispatch('add_active', _event())
}
function remove_active() {
	active = false
	dispatch('remove_active', _event())
}
function add_visible() {
	visible = true
	dispatch('add_visible', _event())
}
function remove_visible() {
	visible = false
	dispatch('remove_visible', _event())
}
function default_getBoundingClientRect() {
	return root.getBoundingClientRect()
}
function contains_visible() {
	return root.classList.contains('visible')
}
function contains_active() {
	return root.classList.contains('active')
}
function _event() {
	return {
		root,
		target: root,
		currentTarget: root,
	}
}
</script>

<svelte:window
	on:scroll="{reset}"
	on:resize="{reset}"
/>

<div
	bind:this="{root}"
	class="Sticky_Scroll {$$props.class||''}"
	class:active="{active}"
>
	<slot></slot>
</div>
