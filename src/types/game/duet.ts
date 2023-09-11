import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Duet extends BaseGame<"Duet"> {
	readonly singers: RA2<PersonName> | RA3<PersonName>;
	readonly musicians?: RA<PersonName>; // 105/121
	readonly about: string | PersonName;
	readonly styles?: RA1<string> | RA2<string>; // 120/121
}

// 57
interface Duet_1 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 15
interface Duet_2 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 15
interface Duet_3 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 14
interface Duet_4 {
	readonly singers: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 6
interface Duet_5 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: PersonName;
	readonly styles: RA1<string>;
}

// 4
interface Duet_6 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly about: PersonName;
	readonly styles: RA1<string>;
}

// 3
interface Duet_7 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA2<string>;
}

// 1
interface Duet_8 {
	readonly singers: RA3<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 1
interface Duet_9 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}

// 1
interface Duet_10 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 1
interface Duet_11 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: PersonName;
	readonly styles: RA2<string>;
}

// 1
interface Duet_12 {
	readonly singers: RA2<PersonName>;
	readonly about: string;
	readonly musicians: RA2<PersonName>;
	readonly styles: RA1<string>;
}

// 1
interface Duet_13 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly styles: RA1<string>;
	readonly about: string;
}

// 1
interface Duet_14 {
	readonly singers: RA3<PersonName>;
	readonly styles: RA1<string>;
	readonly about: string;
}
