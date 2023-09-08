# Código Snake Game em JavaScript

Aqui está a documentação completa do código fornecido para um jogo Snake desenvolvido em JavaScript. O código cria um jogo em que o jogador controla uma cobra que deve comer maçãs para aumentar seu tamanho e evitar colisões com as bordas da tela ou com seu próprio corpo.

## Variáveis Globais

- `playBoard`: Uma referência ao elemento HTML com a classe "play-board", que representa o tabuleiro do jogo.
- `scoreElement`: Uma referência ao elemento HTML com a classe "score", que exibe a pontuação do jogador.
- `high_scoreElement`: Uma referência ao elemento HTML com a classe "high-score", que exibe a pontuação mais alta alcançada.
- `controls`: Uma coleção de elementos HTML representando botões de controle.
- `pointSound`: Uma referência ao elemento de áudio com o ID "pointSound", usado para reproduzir um som quando a cobra come uma maçã.

## Variáveis de Estado do Jogo

- `gameOver`: Uma variável booleana que controla se o jogo terminou.
- `food_x_axis` e `food_y_axis`: Armazenam as coordenadas X e Y da posição atual da maçã no tabuleiro.
- `snake_x_axis` e `snake_y_axis`: Armazenam as coordenadas X e Y da cabeça da cobra.
- `change_x_axis` e `change_y_axis`: Representam a direção atual da cobra no eixo X e Y (-1 para esquerda/acima, 1 para direita/abaixo, 0 para nenhum movimento).
- `snake_body`: Uma matriz que armazena as coordenadas das partes do corpo da cobra.
- `setIntervalId`: Armazena o ID do intervalo usado para atualizar o jogo.
- `score`: Armazena a pontuação atual do jogador.
- `high_score`: Armazena a pontuação mais alta do jogador, recuperada do armazenamento local (localStorage).

## Funções

### `updateFoodPosition()`

- Esta função atualiza as coordenadas X e Y da maçã, definindo-as como valores aleatórios dentro dos limites do tabuleiro do jogo (1 a 30).

### `handleGameOver()`

- Esta função é chamada quando o jogo termina.
- Ela limpa o intervalo de atualização do jogo (pausa o jogo).
- Exibe um alerta informando que o jogo acabou.
- Recarrega a página para reiniciar o jogo quando o jogador clica em "OK".

### `changeDirection(e)`

- Esta função é chamada quando uma tecla é pressionada.
- Ela atualiza a direção da cobra com base na tecla pressionada (setas de direção).
- Garante que a cobra não pode se mover na direção oposta à sua direção atual.

### Inicialização

- Os botões de controle (setas de direção) têm ouvintes de eventos para chamar a função `changeDirection()` quando clicados.

### `initGame()`

- Esta função é o ciclo principal do jogo, que é chamado repetidamente em intervalos regulares.
- Verifica se o jogo terminou; se sim, chama a função `handleGameOver()`.
- Atualiza a posição da maçã e verifica se a cobra comeu.
- Atualiza a posição da cabeça da cobra com base na direção atual.
- Atualiza a posição das partes do corpo da cobra.
- Verifica colisões com as bordas do tabuleiro e com o próprio corpo da cobra.
- Atualiza a pontuação e a pontuação mais alta.
- Atualiza o conteúdo do tabuleiro do jogo com as novas posições da cobra e da maçã.

## Inicialização do Jogo

- Chama a função `updateFoodPosition()` para posicionar a maçã inicialmente.
- Inicializa o intervalo de atualização do jogo (loop principal) com `setInterval`.
- Adiciona um ouvinte de evento para teclas pressionadas (`keyup`) para chamar `changeDirection()`.

## Armazenamento Local

- A pontuação mais alta do jogador é armazenada no `localStorage` do navegador, permitindo que ela persista entre sessões de jogo.

Isso conclui a documentação do código do jogo Snake em JavaScript. O jogo é uma implementação básica do famoso jogo da cobrinha e pode ser aprimorado de várias maneiras, como adicionar níveis de dificuldade ou recursos gráficos adicionais.# Snake-Game-Canvas
# Snake-Game_Canvas
# Snake-Game_Canvas
# Snake-Game_Canvas
