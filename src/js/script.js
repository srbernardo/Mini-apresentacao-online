
const abas = document.querySelectorAll('.aba');

abas.forEach( aba => {
  aba.addEventListener('click', function() {
    const abaSelecionada = document.querySelector('.aba.selecionada');
    abaSelecionada.classList.remove('selecionada');
    aba.classList.add('selecionada');

    const informacaoSelecionada = document.querySelector('.informacao.selecionada')
    informacaoSelecionada.classList.remove('selecionada')

    const idDaInformacaoSelecionada = `informacao-${aba.id}`;
    const informacaoParaExibir = document.getElementById(idDaInformacaoSelecionada);
    informacaoParaExibir.classList.add('selecionada');


  })
});


