import * as server from '../entries/pages/form/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/form/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/form/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.Bfskvj5s.js","_app/immutable/chunks/CNEK4aJt.js","_app/immutable/chunks/C7neDa7V.js","_app/immutable/chunks/CQAr0QRb.js"];
export const stylesheets = ["_app/immutable/assets/2.Ds7djHVY.css"];
export const fonts = [];
