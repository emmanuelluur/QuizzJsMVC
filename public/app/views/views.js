const index = (item) => {
    let frm = "";
    item.forEach((el, cc) => {
        frm += `
       <form class = "form">
            <div class="form-group">
                <span><strong>${el.question}?<strong></span>
            </div>
            <button type= 'button' class = 'btn btn-primary' quizid="${cc}" name = "play"> Adivinar </button>
            <button type= 'button' class = 'btn btn-info' quizid="${cc}" name = "edit"> Editar </button>
            <button type= 'button' class = 'btn btn-danger' quizid="${cc}" name = "delete"> Eliminar </button>
       <form>
       <hr>
       `
    });
    return frm + `<button type= 'button' class = 'btn btn-success' name = "new"> Nueva pregunta </button>
            <button type= 'button' class = 'btn btn-warning' name = "reset"> Reestablecer Preguntas </button>`;
};


const formAction = (msg, event, id, question, answer) => {
    let frm;
    frm = `
    <p><strong>${msg}</strong><p>
    <form class = "form">
            <div class="form-group">
                <input type='text' class = 'form-control' placeholder = 'Type answer' id = 'question' value = '${question}' autofocus>
            </div>
            <div class="form-group">
                <input type='text' class = 'form-control' placeholder = 'Type answer' id = 'answer' value = '${answer}'>
            </div>
            <button type= 'button' class = 'btn btn-primary' quizid="${id}" name = "${event}"> Guardar </button>
       <form>
       <hr>
       <button type= 'button' class = 'btn btn-secondary btn-block' name = "back"> Regresar </button>
    `;
    return frm;
}

const play = (id, question) => {
    let fmr;
    frm = `
    <form class = "form">
            <div class="form-group">
                <label for = 'answer'>${question}:</label>
                <input type='text' class = 'form-control' placeholder = 'Type question' id = 'answer' autofocus>
            </div>
            <span id = 'response'></span>
            <button type= 'button' class = 'btn btn-primary btn-block' quizid="${id}" name = "check"> Enviar </button>
       <form>
       <hr>
       <button type= 'button' class = 'btn btn-secondary btn-block' name = "back"> Regresar </button>
    `;
    return frm;
}