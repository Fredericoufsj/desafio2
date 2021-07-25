let form = document.getElementById('form-cliente');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;

    let inputs = {
        nome,
        email,
        telefone,
        cpf
    };

    let valoresDados = Object.values(inputs);

        let tbody = document.getElementById('table-clientes');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        });

    let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

        clientes.push(inputs);

        let clientesJson = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesJson);
        
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('cpf').value = '';
});

