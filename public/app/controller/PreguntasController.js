
const indexController = () => {
    document.getElementById("main").innerHTML = index(Preguntas);
}

const playController = (id) => {
    let q = Preguntas[id];
    document.getElementById("main").innerHTML = play(id, q.question)
}
const checkController = (id)=>{
    let answer = document.getElementById("answer").value;
    let q = Preguntas[id];
    let msg = "";
    (answer == q.answer) ? msg = `<div class = 'alert alert-success'>Correcto!</div>`  : msg = `<div class = 'alert alert-danger'>Incorrecto!</div>`;
    document.getElementById("response").innerHTML =msg;
}

const editController = id => {
    let q = Preguntas[id];
    document.getElementById("main").innerHTML = formAction("Edita Pregunta", "update", id,q.question,q.answer);   
}