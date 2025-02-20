

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.uv7pfcO4.js","_app/immutable/chunks/CNEK4aJt.js","_app/immutable/chunks/C7neDa7V.js"];
export const stylesheets = [];
export const fonts = [];
