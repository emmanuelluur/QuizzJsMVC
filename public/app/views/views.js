const index = (item) => {
    let frm = "";
    item.forEach((el, cc) => {
        frm += `
       <form class = "form">
            <div class="form-group">
                <span><strong>${el.question}?<strong></span>
            </div>
            <button type= 'button' class = 'btn btn-primary' quizzid="${cc}" name = "play"> Adivinar </button>
            <button type= 'button' class = 'btn btn-info' quizzid="${cc}" name = "edit"> Editar </button>
            <button type= 'button' class = 'btn btn-danger' quizzid="${cc}" name = "delete"> Eliminar </button>
       <form>
       <hr>
       `
    });
    return frm + `<button type= 'button' class = 'btn btn-success' name = "new"> Nueva pregunta </button>
            <button type= 'button' class = 'btn btn-warning' name = "reset"> Reestablecer Preguntas </button>`;
};