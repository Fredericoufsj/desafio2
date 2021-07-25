let form = document.getElementById('form-produto');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let categoria = document.getElementById('categoria').value;
    let marca = document.getElementById('marca').value;
    let quantidade = document.getElementById('quantidade').value;

    let inputs = {
        nome,
        categoria,
        marca,
        quantidade
    };

    let valoresDados = Object.values(inputs);

        let tbody = document.getElementById('table-produtos');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        });

    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

        clientes.push(inputs);

        let produtosJson = JSON.stringify(produtos);

        localStorage.setItem('cliente', produtosJson);

        document.getElementById('categoria').value = '';
        document.getElementById('nome').value = '';
        document.getElementById('marca').value = '';
        document.getElementById('quantidade').value = '';
});
