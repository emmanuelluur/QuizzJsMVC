
const indexController = () => {
    document.getElementById("main").innerHTML = index(Preguntas);
}


const addController = () => {
    let q = Preguntas;
    document.getElementById("main").innerHTML = formAction("Nueva Pregunta", "create", q.length, "", "");
}

const createController = id => {
    let nueva = {
        question: document.getElementById("question").value,
        answer: document.getElementById("answer").value
    }
    
    Preguntas.splice(id, 1, nueva);
    indexController();
}
const playController = (id) => {
    let q = Preguntas[id];
    document.getElementById("main").innerHTML = play(id, q.question)
}
const checkController = (id) => {
    let answer = document.getElementById("answer").value;
    let q = Preguntas[id];
    let msg = "";
    (answer == q.answer) ? msg = `<div class = 'alert alert-success'>Correcto!</div>` : msg = `<div class = 'alert alert-danger'>Incorrecto!</div>`;
    document.getElementById("response").innerHTML = msg;
}

const editController = id => {
    let q = Preguntas[id];
    document.getElementById("main").innerHTML = formAction("Edita Pregunta", "update", id, q.question, q.answer);
}

const updateController = id => {
    let q = Preguntas[id];
    let data = {
        question: document.getElementById("question").value,
        answer: document.getElementById("answer").value
    }
    Preguntas.splice(id, 1, data);
    indexController()
}
const deleteController = id => {
    let c = confirm("Desea quitar pregunta?");
    const p = new Promise((resolve, reject) => {
        c ? resolve(true) : reject(false);
    });

    p
        .then(() => {
            let q = Preguntas[id];
            Preguntas.splice(id, 1);
        })
        .then(() => {
            indexController();
        }).catch((d)=>{});
}

const resetController = () => {
    location.reload();
}