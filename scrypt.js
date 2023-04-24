var click = 1;
    var vez = "";
    var areas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var numPlacarX = document.getElementById("numPlacarX");
    var numPlacarO = document.getElementById("numPlacarO");
    var numPlacarEmp = document.getElementById("empate");
    var numX = 0, numO = 0, emp = 0;

    var btnAtualiza = document.getElementById("atualiza");

    function Atualizar() {
        for (let i = 1; i < 10; i++) {
            var td = document.getElementById(i);
            td.innerText = "";
            td.classList.remove("marcado");
        }
    }

    function possivel(a1, a2, a3) {
        debugger
        var p1 = document.getElementById(a1);
        var p2 = document.getElementById(a2);
        var p3 = document.getElementById(a3);
        if (p1.textContent == vez && p2.textContent == vez && p3.textContent == vez &&
            p1.classList.contains("marcado") && p2.classList.contains("marcado") && p3.classList.contains("marcado")) {
            var ganhadorDiv = document.getElementById("ganhador");
            if (vez == "❌") {
                numX++
                numPlacarX.innerText = numX;
                click--;
            } else {
                numO++
                numPlacarO.innerText = numO;
                click--;
            }
            Atualizar();
        }
    }

    function Selecionado(selecionado) {
        debugger

        if (!document.getElementById(selecionado).classList.contains("marcado")) {

            if (click % 2 == 1) {
                vez = "❌";
                click++
            } else {
                vez = "⭕";
                click++
            }

            Marcar(selecionado);

            possivel(1, 2, 3);
            possivel(4, 5, 6);
            possivel(7, 8, 9);
            possivel(1, 4, 7);
            possivel(2, 5, 8);
            possivel(3, 6, 9);
            possivel(1, 5, 9);
            possivel(7, 5, 3);
            VerificaEmpate();

        }
    }

    function Resetar() {
        numPlacarX.innerText = numX = 0;
        numPlacarO.innerText = numO = 0;
        numPlacarEmp.innerText = emp = 0;

        for (let i = 1; i < 10; i++) {
            var td = document.getElementById(i);
            td.innerText = "";
        }
    }

    function VerificaEmpate() {
        var verificaTodos = 0;
        for (let i = 1; i < 10; i++) {
            var td = document.getElementById(i);
            if (td.textContent.length != 0) {
                verificaTodos++;
            }
            if (verificaTodos == 9) {
                emp++;
                numPlacarEmp.innerText = emp;
                Atualizar();
            }
        }
    }

    function Marcar(numero) {
        var td = document.getElementById(numero);
        if (!td.classList.contains("marcado")) {
            td.classList.add("marcado");
            td.innerText = vez;
        }
    }
