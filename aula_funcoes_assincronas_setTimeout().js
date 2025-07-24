//O que é Assíncrono?
  //JavaScript é uma linguagem síncrona por padrão — ele executa uma linha por vez, de cima pra baixo.
  //Mas e quando você precisa esperar algo acontecer (como o carregamento de uma API, ou o clique do usuário)?
    //Entra aí o modo assíncrono, onde uma ação é programada para acontecer depois de um tempo ou evento.

//O que é setTimeout()?
  //É uma função nativa do JavaScript que espera um tempo e depois executa uma função.

    //Sintaxe:

      //setTimeout(funcao, tempoEmMilissegundos)

    //Exemplo:

      console.log("Início");

      setTimeout(function () {
        console.log("Depois de 2 segundos");
      }, 2000); // 2000 ms = 2 segundos

      console.log("Fim");

    //Por quê?
      //Porque o setTimeout() não pausa o código — ele agenda a função e segue executando o resto. Quando o tempo passa, a função executa.