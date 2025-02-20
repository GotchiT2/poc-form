import "clsx";
function _page($$payload) {
  $$payload.out += `<main class="svelte-1p17hdb"><h1 class="svelte-1p17hdb">Formulaire de Contact</h1> <form method="POST" action="/form" enctype="multipart/form-data" class="svelte-1p17hdb"><div><label for="email" class="svelte-1p17hdb">Email :</label> <input type="email" id="email" required class="svelte-1p17hdb"></div> <div><label for="recontact" class="svelte-1p17hdb"><input type="checkbox" id="recontact" class="svelte-1p17hdb"> Voulez-vous qu'on vous recontacte ?</label></div> <div><label for="number" class="svelte-1p17hdb">Choisissez un nombre entre 1 et 5 :</label> <select id="number" required class="svelte-1p17hdb"><option value="" disabled>Choisissez un nombre</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="other">Autre</option></select></div> <div><label for="file" class="svelte-1p17hdb">Télécharger un fichier :</label> <input type="file" id="file" accept=".pdf, .jpg, .png" class="svelte-1p17hdb"></div> <div><button type="submit" class="svelte-1p17hdb">Envoyer</button></div></form></main>`;
}
export {
  _page as default
};
