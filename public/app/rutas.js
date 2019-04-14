// rutas => llamadas a funcion


const Routes = () => {
    let route = document.getElementById("main");
    route.addEventListener("click", (el) => {
        if (el.target.getAttribute("name") == "delete") {
            
            deleteController(el.target.getAttribute("quizid"))
        }
        if (el.target.getAttribute("name") == "back") {
            indexController();
        }
        if (el.target.getAttribute("name") == "play") {
            console.log("play...");
            playController(el.target.getAttribute("quizid"))
        }
        if (el.target.getAttribute("name") == "check") {
            console.log("verificando...");
            checkController(el.target.getAttribute("quizid"))
        }
        if (el.target.getAttribute("name") == "edit") {
            console.log("cargando datos...");
            editController(el.target.getAttribute("quizid"))
        }
        if (el.target.getAttribute("name") == "update") {
            updateController(el.target.getAttribute("quizid"))
        }
        if (el.target.getAttribute("name") == "new") {
            addController()
        }
        if (el.target.getAttribute("name") == "create") {
            createController(el.target.getAttribute("quizid"))
        }
        if (el.target.getAttribute("name") == "reset") {
            resetController()
        }
    })
}

