
    const personagens = document.querySelectorAll('.personagem');

    personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () =>{
            
            const idSelecionado = personagem.attributes.id.value;

            const personagemSelecionado = document.querySelector('.selecionado');
            personagemSelecionado.classList.remove('selecionado');

            personagem.classList.add('selecionado');

            const imagemJogador1 = document.getElementById('personagem-jogador-1');
            imagemJogador1.src = `./src/img/${idSelecionado}.png`;

            const nomejogador1 = document.getElementById('nome-jogador-1');
            const nomeSelecionado = personagem.getAttribute('data-name');

            nomejogador1.innerHTML = nomeSelecionado;
    
        })
    })

       function jogador2(){

                const personagens = document.querySelectorAll('.personagem');

                personagens.forEach((personagem) => {
                    personagem.addEventListener('mouseenter', () =>{
            
                    const idSelecionado = personagem.attributes.id.value;

                    const personagemSelecionado = document.querySelector('.selecionado');
                    personagemSelecionado.classList.remove('selecionado');

                    personagem.classList.add('selecionado');

                    const imagemJogador2 = document.getElementById('personagem-jogador-2');
                    imagemJogador2.src = `./src/img/${idSelecionado}.png`;
            
                    const nomejogador2 = document.getElementById('nome-jogador-2');
                    const nomeSelecionado = personagem.getAttribute('data-name');
            
                    nomejogador2.innerHTML = nomeSelecionado;

                })
            })

        }