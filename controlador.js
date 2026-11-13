const users = [
    { nombre: "pepe", rol: "encargado", estado: "activo", numero: 1 },
    { nombre: "pepe2", rol: "encargado2", estado: "apagado", numero: 2 },
    { nombre: "ana", rol: "supervisor", estado: "activo", numero: 3 },
    { nombre: "luis", rol: "operador", estado: "activo", numero: 4 },
    { nombre: "maria", rol: "administrador", estado: "apagado", numero: 5 },
    { nombre: "carlos", rol: "tecnico", estado: "activo", numero: 6 },
    { nombre: "sofia", rol: "analista", estado: "activo", numero: 7 },
    { nombre: "jorge", rol: "coordinador", estado: "apagado", numero: 8 },
    { nombre: "valeria", rol: "asistente", estado: "activo", numero: 9 },
    { nombre: "fernando", rol: "gerente", estado: "activo", numero: 10 },
    { nombre: "paula", rol: "consultor", estado: "apagado", numero: 11 },
    { nombre: "ricardo", rol: "interno", estado: "activo", numero: 12 }
];
const todo = document.getElementById("todo");
const cuerpo = document.getElementById("cuerpo");
const body2 = document.getElementById("cuerpo2");
const footerZZ = document.getElementById("piePagina");

const infoFooter = {
    title: "Hola",
    body: "El dia de hoy vamos a enseñar programacion en js"
};

function showUsers({ nombre, rol, estado }) {
    return `
            <div id="contenedor-usuarios">
                <h3>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h3>
                <p>${rol.charAt(0).toUpperCase() + rol.slice(1)}</p>
                <p>${estado.charAt(0).toUpperCase() + estado.slice(1)}</p>
            </div>
        `;
}


function filterByEstado() {
    const box = document.getElementById("estado")
    const filtered = users.filter(user => user.estado == box.value);
    if (filtered.length != 0) {
        cuerpo.innerHTML = filtered.map(filteredUser => showUsers(filteredUser)).join("");
        if (!document.getElementById("btnVolver")) {
            const btnBack = document.createElement("button");
            btnBack.textContent = "Volver";
            btnBack.id = "btnVolver";
            btnBack.addEventListener('click', back);
            box.parentElement.appendChild(btnBack);
        }
    } else {
        box.value = "";
        alert("EL ESTADO QUE HA INGRESADO NO ES VALIDO, POR FAVOR INTENTE CON UN PARAMETRO VALIDO");
    }
}

function filterByRol() {
    const box = document.getElementById("rol");
    const filtered = users.filter(user => user.rol == box.value);
    if (filtered.length != 0) {
        cuerpo.innerHTML = filtered.map(filteredUser => showUsers(filteredUser)).join("");
        if (!document.getElementById("btnVolver")) {
            const btnBack = document.createElement("button");
            btnBack.textContent = "Volver";
            btnBack.id = "btnVolver";
            btnBack.addEventListener('click', back);
            box.parentElement.appendChild(btnBack);
        }
    } else {
        alert("EL ROL QUE HA INGRESADO NO ES VALIDO, POR FAVOR INTENTE CON UN PARAMETRO VALIDO")
    }

}
function createTable() {
    const btn = document.getElementById("btnTabla");
    let table = document.createElement("table");
    table.style.border = "1px solid black";

    const titles = document.createElement("tr");
    ["Nombre", "Rol", "Estado", "Creado"].forEach(title => {
        let th = document.createElement("th");
        th.textContent = title;
        th.style.border = "1px solid black";
        titles.appendChild(th);
    });
    table.appendChild(titles);
    users.forEach(user => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = user.nombre;
        td1.style.border = "1px solid black";
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.style.border = "1px solid black";
        td2.textContent = user.rol;
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.style.border = "1px solid black";
        td3.textContent = user.estado;
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.style.border = "1px solid black"
        td4.textContent = user.numero;
        tr.appendChild(td4);
        table.appendChild(tr);

    });
    const btnBack = document.createElement("button");
    btnBack.textContent = "Volver";
    btnBack.id = "btnVolver";
    btnBack.addEventListener('click', back);
    btn.parentElement.appendChild(btnBack);
    cuerpo.innerHTML = "";
    cuerpo.appendChild(table);

}
function addUser() {
    body2.style.display = "block";
    cuerpo.style.display = "none";
    let string = `
        <div>
            <form action="#" method="post">
                <label for="newName">Nombre</label>
                <input type="text" id="newName" required><br>
                <label for="newRol">ROL</label>
                <input type="text" id="newRol" required><br>
                <label for="newEstado">Estado</label>
                <input type="text" id="newEstado" required><br>
                <input type="submit" onclick="newUser(event);">
            </form>
        </div>
   `;
    body2.innerHTML = string;
}
function newUser(event) {
    event.preventDefault();
    let contador = "";
    const newName = document.getElementById("newName").value;
    const newRol = document.getElementById("newRol").value;
    const newEstado = document.getElementById("newEstado").value;
    const num = users.length + 1;
    const newUser = {
        nombre: newName,
        rol: newRol,
        estado: newEstado,
        numero: num
    }
    users.push(newUser);
    body2.style.display = "none";
    cuerpo.style.display = "block";
    injecUsers();
}
function deleteUser() {
    const deliteBox = document.getElementById("deleteBox").value.toLowerCase();
    const index = users.findIndex(user => user.nombre.toLowerCase() == deliteBox);
    if (index != -1) {
        users.splice(index, 1);
    }
    alert("SE ELIMINO EL USUARIO: " + deliteBox);
    injecUsers();
}

function back() {
    const btnBack = document.getElementById("btnVolver")
    btnBack.remove();
    cuerpo.innerHTML = users.map(user => showUsers(user)).join("");

}
function footer(footer) {
    return `
        <div>
            <h3>${footer.title}</h3>
            <p>${footer.body}</p>
        </div>
    `;
}

function injecUsers() {
    cuerpo.style.display = "block";
    cuerpo.innerHTML = users.map(user => showUsers(user)).join("");
}
function injecFooter() {
    footerZZ.style.display = "block";
    footerZZ.innerHTML = footer(infoFooter);
}

injecFooter();
injecUsers();