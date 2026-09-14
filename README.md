# Pomodoro

Um timer pomodoro simples, feito num fim de semana como projeto de portfólio enquanto curso Análise e Desenvolvimento de Sistemas na Senac RJ

## Sobre

Projeto de portfólio feito em um fim de semana, durante meus estudos de Análise e Desenvolvimento de Sistemas

## O que ele faz

- Alterna automaticamente entre sessões de foco (25 min) e pausa (5 min)
- Conta quantos ciclos de foco você já completou
- Iniciar, pausar e reiniciar o timer a qualquer momento

## Como o timer conta o tempo

A abordagem mais óbvia seria subtrair um segundo do tempo restante a cada tick do `setInterval`. O problema é que os navegadores throttlam (atrasam) intervalos de abas que estão em segundo plano, pra economizar energia. Se alguém minimizasse a aba e voltasse depois, o timer estaria atrasado em relação ao tempo real.

A solução usada foi guardar o horário exato em que a sessão termina (`Date.now() + duração`) e, a cada tick, calcular a diferença entre agora e esse horário. Isso mantém o timer, independente de quanto tempo a aba ficou fora de foco.

## Rodando localmente

Não tem build, não tem dependência. É só clonar o repositório e abrir o `index.html` no navegador.

## Próximos passos

- Animações de progresso visual
- Duração do timer editável (foco e pausa)
- Notificação quando a sessão acaba
- Diferentes sons de notificação, selecionáveis
- Frases motivacionais a cada nova sessão
- Lista de tarefas
- Seletor de músicas ambiente
- Efeitos visuais de ambiente
- Imagem de fundo personalizada, escolhida pelo usuário
- Abrir em janela flutuante

## Tecnologias

HTML5, CSS3, JavaScript (vanilla)
