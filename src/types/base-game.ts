export interface BaseGame<Name extends string> {
	readonly name: Name;
	readonly alternateName?: string;
}
