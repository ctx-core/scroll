import { Writable } from '@ctx-core/store';
export declare const b__active__Sticky__Scroll: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__active__Sticky__Scroll;
export declare const __active__Sticky__Scroll: type__active__Sticky__Scroll;
export declare const add__active__Sticky__Scroll: (key: string) => void, remove__active__Sticky__Scroll: (key: string) => void, _active__active__Sticky__Scroll: (key: string) => void, _match__active__Sticky__Scroll: (key: string, active: any) => void;
export declare type $type__active__Sticky__Scroll = Record<string, boolean>;
export interface active_Sticky_Scroll_interface {
    add__active__Sticky__Scroll: (key: string) => void;
    remove__active__Sticky__Scroll: (key: string) => void;
    _active__active__Sticky__Scroll: (key: string) => void;
    _match__active__Sticky__Scroll: (key: string, active: any) => void;
}
export declare type type__active__Sticky__Scroll = Writable<$type__active__Sticky__Scroll> & active_Sticky_Scroll_interface;
