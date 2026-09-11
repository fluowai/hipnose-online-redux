# Réplica do site Ton Lucas — Hipnose Online

Recriar a landing page de hipnoseonline.com.br em uma página única, com o mesmo conteúdo e a mesma estrutura, corrigindo o acabamento visual das bordas.

## Correção principal: bordas

Hoje quase todo bloco tem um contorno azulado claro e bem visível (cartões de estatística, cartões de temas, foto do hero, caixas do formulário). Isso deixa a página com aparência de rascunho.

O que muda:
- Contornos passam a ser sutis: linhas quase invisíveis que só separam o bloco do fundo, sem brilho azul.
- Cartões ganham profundidade por leve diferença de fundo e sombra suave, em vez de traço colorido.
- Destaque azul fica reservado só para o que realmente é interativo (botão principal e o campo em foco no formulário).
- Um único raio de canto padrão para todos os blocos, botões e imagens.
- Foto do hero sem moldura dupla nem contorno brilhante.

O resto do visual permanece: fundo escuro, azul da marca, tipografia geométrica, mesma disposição das seções.

## Seções (mesma ordem do original)

1. Topo fixo: logo "ton lucas — hipnose e psicologia" + botão "Quero ser atendido"
2. Hero: selo "Atendimento 100% online, por vídeo", título em duas linhas, texto, dois botões (formulário e WhatsApp), três números (+1.200 sessões, 4,9/5, 6 dias), foto do Ton com selo "Atendimento sigiloso"
3. Faixa com os três pontos de confiança
4. "Ansiedade, emagrecimento, vícios ou medos te limitam?" — 4 cartões
5. "Por que escolher a hipnose" — 4 cartões
6. "Por que o atendimento online funciona" — 6 cartões
7. "Quem Sou Eu" — texto, lista de qualificações, foto do congresso com legenda
8. "Como começar em 3 passos" + botão
9. Depoimentos (3) com nota 4,9
10. Formulário "Solicite seu atendimento online"
11. Perguntas frequentes (4, abre e fecha)
12. Rodapé + botão flutuante do WhatsApp

Todos os textos são copiados do site original.

## Formulário

Campos: nome, WhatsApp, "para mim / para outra pessoa", "já buscou atendimento antes? sim / não", descrição da necessidade. Ao enviar, abre a conversa no WhatsApp (5512997611991) com as respostas já montadas na mensagem. Sem banco de dados, como hoje. Campos obrigatórios são validados antes de enviar.

## Imagens

Baixo do site atual o retrato do Ton e a foto do congresso e uso os arquivos no projeto. Se algum download falhar, aviso e coloco um espaço reservado até você enviar o arquivo.

## Detalhes técnicos

- Página única em `src/routes/index.tsx`, dividida em componentes por seção em `src/components/`.
- Tokens de cor, raio e sombra definidos em `src/styles.css` (oklch): fundo escuro, azul primário, borda de baixo contraste, sombra suave. Nada de cor fixa nos componentes.
- Fonte geométrica próxima da original carregada via `<link>` no `__root.tsx`.
- FAQ com o Accordion do shadcn; rolagem suave para as âncoras.
- `head()` da rota com título, descrição, og e twitter próprios do consultório.
