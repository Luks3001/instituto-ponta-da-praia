# Requisitos — Instituto Ponto da Praia

## 1. Objetivo geral

Desenvolver um site institucional acessível, responsivo e estático para apresentar o Instituto Ponto da Praia e facilitar manifestações de interesse no recebimento de cestas básicas via WhatsApp.

## 2. Problema identificado

O briefing aponta a necessidade de reunir informações institucionais e oferecer um caminho simples de contato com a associação. Não foram realizadas entrevistas ou pesquisas de campo nesta etapa; não são presumidos dados sobre a comunidade ou sobre canais anteriores de atendimento.

## 3. Público-alvo

Pessoas interessadas nas ações do Instituto, especialmente no recebimento de cestas básicas, incluindo pessoas com diferentes níveis de familiaridade tecnológica e necessidades de acessibilidade.

## 4. Escopo do sistema

Primeira versão com página única, navegação, apresentação institucional, distribuição de cestas básicas, formulário de interesse e redirecionamento ao WhatsApp. Sem cadastro persistente, banco de dados, autenticação, painel administrativo ou contador público de visitas.

## 5. Requisitos funcionais

| ID | Requisito | Status |
| --- | --- | --- |
| RF01 | Apresentar o Instituto usando logotipo e fachada fornecidos. | Implementado |
| RF02 | Navegar entre início, sobre, ações sociais e cadastro. | Implementado |
| RF03 | Oferecer menu mobile com abertura, fechamento, teclado e Escape. | Implementado |
| RF04 | Apresentar texto institucional completo, coerente com a atuação informada, sem avisos de rascunho ou legendas decorativas numeradas. | Implementado conforme revisão solicitada pelo responsável |
| RF05 | Apresentar a distribuição de cestas básicas sem atribuir outras ações não confirmadas. | Implementado |
| RF06 | Solicitar nome completo e bairro obrigatórios e observação opcional. | Implementado |
| RF07 | Rejeitar campos obrigatórios vazios ou preenchidos só com espaços e orientar a correção. | Implementado |
| RF08 | Informar que o interesse não garante recebimento e explicar o uso dos dados. | Implementado |
| RF09 | Gerar mensagem legível, codificada com encodeURIComponent, para o número configurado. | Implementado |
| RF10 | Abrir WhatsApp e deixar a confirmação do envio a cargo da pessoa. | Implementado; entrega depende do serviço externo |
| RF11 | Manter envio desabilitado e indicar pendência quando o número estiver vazio ou inválido. | Implementado |
| RF12 | Mostrar contato no rodapé quando configurado e link alternativo após preparar a mensagem. | Implementado |
| RF13 | Preparar implantação estática na Vercel. | Implementado; publicação pelo responsável em etapa futura |
| RF14 | Acompanhar visitantes e visualizações em painel privado do Vercel Web Analytics. | Integração implementada; ativação e validação em produção pendentes |

## 6. Requisitos não funcionais

| ID | Requisito | Status |
| --- | --- | --- |
| RNF01 | Utilizar exclusivamente HTML5, CSS3 e JavaScript Vanilla, sem dependências de execução. | Implementado |
| RNF02 | Layout mobile first, com adaptação a partir de 320 px. | Implementado; verificação por dispositivos reais pendente |
| RNF03 | Usar semântica, títulos hierárquicos, labels, foco visível, erros associados e navegação por teclado. | Implementado; auditoria completa pendente |
| RNF04 | Respeitar preferência por movimento reduzido. | Implementado |
| RNF05 | Não persistir campos do formulário nem registrar dados pessoais no console. | Implementado |
| RNF06 | Transmitir os campos somente ao WhatsApp, após ação da pessoa. | Implementado |
| RNF07 | Separar estrutura, apresentação e comportamento em arquivos próprios. | Implementado |
| RNF08 | Usar fontes do sistema e imagens locais reduzidas com dimensões declaradas; carregar Analytics somente em hospedagem HTTPS. | Implementado |
| RNF09 | Manter código e documentação preparados para versionamento Git. | Implementado; repositório e commits pendentes |

## 7. Tecnologias utilizadas

HTML5, CSS3, JavaScript ES6+ e integração por URL `wa.me`. Git e GitHub previstos para versionamento; Vercel prevista para hospedagem. Nenhum framework ou banco de dados. Vercel Web Analytics integrado para estatísticas de acesso, sem contador público ou captura dos dados do formulário.

## 8. Fluxo principal de funcionamento

1. A pessoa acessa o site e conhece o Instituto e sua ação social.
2. Acessa o cadastro, lê as orientações e informa nome, bairro e, opcionalmente, observação.
3. Seleciona “Continuar no WhatsApp”.
4. O site verifica os campos. Em caso de erro, apresenta orientação e foca o primeiro campo inválido.
5. Com os campos válidos, prepara e codifica a mensagem, abrindo o WhatsApp em outra aba.
6. A pessoa revisa e confirma o envio no WhatsApp. Um link alternativo fica disponível se a aba não abrir.
7. O atendimento e a análise de disponibilidade são conduzidos pela associação fora do site.

Fluxo alternativo: sem WhatsApp configurado, o envio fica indisponível com explicação. Sem JavaScript, o menu permanece visível, o formulário informa a necessidade de ativação e o contato também fica indisponível.

## 9. Limitações da primeira versão

- O formulário representa interesse; não confirma benefício, inscrição persistida, fila ou atendimento.
- O número oficial foi fornecido pelo responsável; a existência da conta não é verificada pelo site.
- A mensagem depende de acesso ao WhatsApp e conexão. O site não monitora envio, entrega ou resposta.
- O conteúdo utiliza as informações fornecidas pelo responsável; não inclui dados de fundação, endereço, CNPJ, parceiros ou resultados sociais não confirmados.
- Não foram inventados feedbacks ou resultados de testes com a comunidade.
- A URL enviada ao WhatsApp pode integrar o histórico do navegador. O site não controla o tratamento de dados do serviço externo.
- Publicação, commits e configuração de repositório remoto ficam para uma etapa autorizada posterior.

## 10. Estatísticas de acesso

Acompanhamento privado de visitas solicitado pelo responsável em revisão de escopo. `js/analytics.js` aceita somente visualizações de página, elimina query strings e fragmentos de URL e descarta eventos para outros domínios. Os campos do formulário continuam sendo utilizados exclusivamente para preparar a mensagem do WhatsApp. Não há coleta local nem contador público. A integração precisa ser ativada no painel Analytics da Vercel e validada após a publicação.
