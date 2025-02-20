<script lang="ts">

</script>

<main>
    <h1>Formulaire de Contact</h1>

    <form method="POST" action="/form" enctype="multipart/form-data">
        <div>
            <label for="email">Email :</label>
            <input type="email" id="email" required />
        </div>

        <div>
            <label for="recontact">
                <input type="checkbox" id="recontact" />
                Voulez-vous qu'on vous recontacte ?
            </label>
        </div>

        <div>
            <label for="number">Choisissez un nombre entre 1 et 5 :</label>
            <select id="number" required>
                <option value="" disabled>Choisissez un nombre</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="other">Autre</option>
            </select>
        </div>

        <div>
            <label for="file">Télécharger un fichier :</label>
            <input type="file" id="file" accept=".pdf, .jpg, .png" />

        </div>

        <div>
            <button type="submit">Envoyer</button>
        </div>
    </form>
</main>

<style>
    main {
        max-width: 500px;
        margin: 0 auto;
        padding: 1rem;
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        font-weight: bold;
    }

    input, select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

    button {
        padding: 0.7rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>