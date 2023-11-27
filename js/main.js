var informacoesArray = [];

        function adicionarLinha() {
            // Obter o valor do campo de texto
            var info = document.getElementById("infoInput").value;

            // Verificar se há uma entrada válida
            if (info.trim() !== "") {
                // Obter a referência da tabela
                var tabela = document.getElementById("minhaTabela");

                // Criar uma nova linha e células
                var novaLinha = tabela.insertRow();
                var celulaInfo = novaLinha.insertCell(0);
                var celulaAcoes = novaLinha.insertCell(1);

                // Adicionar a informação à célula de informação
                celulaInfo.innerHTML = info;

                // Adicionar botões à célula de ações
                var botaoVerde = document.createElement("button");
                botaoVerde.innerHTML = "Salvar";
                botaoVerde.onclick = function() {
                    celulaInfo.classList.add("green-bg");
                    // mostrarQuantidadeFundoVerde(); //Chamar a função ao clicar em "Fundo Verde"
                };

                var botaoDeletar = document.createElement("button");
                botaoDeletar.innerHTML = "Deletar";
                botaoDeletar.classList.add("delete-button");
                botaoDeletar.onclick = function() {
                    // Remover a informação da tabela
                    tabela.deleteRow(novaLinha.rowIndex);
                    // Remover a informação do array
                    informacoesArray.splice(informacoesArray.indexOf(info), 1);
                };

                celulaAcoes.appendChild(botaoVerde);
                celulaAcoes.appendChild(botaoDeletar);

                // Armazenar a informação no array
                informacoesArray.push(info);

                // Limpar o campo de texto
                document.getElementById("infoInput").value = "";
            } else {
                alert("Digite uma informação válida antes de adicionar!");
            }
        }

        // function mostrarQuantidadeFundoVerde() {
        //     // Obter todas as células com a classe "green-bg"
        //     var celulasVerdes = document.getElementsByClassName("green-bg");
        //     // Exibir a quantidade de linhas com fundo verde
        //     alert("Quantidade de linhas com fundo verde: " + celulasVerdes.length);
        // }

        function mostrarQuantidadeFundoVerde() {
    // Obter todas as células com a classe "green-bg"
    var celulasVerdes = document.getElementsByClassName("green-bg");
    
    // Obter o total de linhas na tabela
    var totalLinhas = document.getElementById("minhaTabela").rows.length - 1; // Subtrai o cabeçalho da tabela

    // Calcular a porcentagem de linhas verdes em relação ao total
    var porcentagem = (celulasVerdes.length / totalLinhas) * 100;

    // Exibir a quantidade e a porcentagem de linhas com fundo verde
    alert("Quantidade de linhas com fundo verde: " + celulasVerdes.length + "\nPorcentagem de linhas verdes: " + porcentagem.toFixed(2) + "%");
}