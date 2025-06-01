
document.getElementById("adForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = this.querySelector("input[type='text']").value;
    const description = this.querySelector("textarea").value;
    const location = this.querySelectorAll("input[type='text']")[1].value;
    const payment = this.querySelector("select").value;

    const preview = document.getElementById("adPreview");
    preview.innerHTML = `
        <h3>Anunț trimis:</h3>
        <p><strong>Titlu:</strong> ${title}</p>
        <p><strong>Descriere:</strong> ${description}</p>
        <p><strong>Locație:</strong> ${location}</p>
        <p><strong>Plată prin:</strong> ${payment}</p>
        <p><em>(Anunțul va fi publicat după confirmarea plății.)</em></p>
    `;
});
