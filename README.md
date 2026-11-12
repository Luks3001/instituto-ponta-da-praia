# Instituto Ponto da Praia

Site institucional de um projeto social e comunitário, desenvolvido em HTML, CSS e JavaScript puro. Seu objetivo é apresentar o Instituto e facilitar a manifestação de interesse nas ações de distribuição de cestas básicas, por meio de uma mensagem preparada para o WhatsApp.

## Tecnologias

- HTML5 semântico, CSS3 responsivo e JavaScript Vanilla (ES6+).
- Sem frameworks, dependências de execução, banco de dados ou autenticação.
- Git/GitHub previstos para versionamento e disponibilização do código; Vercel prevista para hospedagem.

## Funcionalidades

- Página única com início, apresentação, ação social, cadastro e contato.
- Identidade roxa, amarela e azul, com logotipo e fachada fornecidos.
- Menu mobile com teclado, tecla Escape e estados de expansão.
- Formulário de nome completo e bairro obrigatórios, e observação opcional.
- Validação de campos vazios e espaços, mensagens de erro e foco no primeiro erro.
- Mensagem codificada com `encodeURIComponent`, aberta no WhatsApp para confirmação manual.
- Envio e contato desabilitados quando a configuração de WhatsApp estiver vazia ou inválida.
- Link alternativo após preparar a mensagem, caso o navegador bloqueie a nova aba.
- Sem armazenamento local ou registro de dados pessoais no console.
- Integração de estatísticas de visitas com Vercel Web Analytics, sem enviar os dados do formulário.

## Estrutura

```text
index.html
css/styles.css
js/main.js
js/analytics.js
vercel.json
.vercelignore
assets/imagens/
  Logo Instituto Ponto da Praia.png
  Fachada do Instituto Ponto da Praia.png
  logo-site.png
  fachada-site.jpg
docs/requisitos.md
README.md
.gitignore
```

A pasta `assets/imagens/` foi mantida para preservar a estrutura e os arquivos recebidos. O site usa cópias menores (`logo-site.png` e `fachada-site.jpg`); os dois originais foram preservados. As imagens servidas somam aproximadamente 655 KiB, contra 4,7 MiB dos originais.

## Executar localmente

Abra `index.html` no navegador. Não há instalação ou compilação.

Para servir por HTTP, com Python instalado, execute na pasta do projeto:

```sh
python -m http.server 5500 --bind 127.0.0.1
```

Acesse `http://127.0.0.1:5500`. Encerre o servidor com `Ctrl+C`.

## Configurar o WhatsApp

Em `js/main.js`, altere somente a configuração:

```js
const CONFIG = Object.freeze({ whatsappNumber: "5511979556301" });
```

Número fornecido pelo responsável: **+55 11 97955-6301**. Use código do país, DDD e número, somente dígitos. A validação verifica o formato; não confirma existência ou titularidade da conta.

Use `whatsappNumber: ""` para desabilitar o envio e ocultar o contato. O link do rodapé também usa `CONFIG`, mantendo o número centralizado em um único ponto.

O formulário abre `https://wa.me/NUMERO?text=MENSAGEM_CODIFICADA`. Não envia automaticamente: a pessoa revisa e confirma a mensagem no WhatsApp. O site não salva os campos. Ao continuar, os dados passam a integrar a URL de acesso ao WhatsApp e são tratados pelo serviço externo; o navegador também pode manter a URL no histórico.

## Acessibilidade

Marcação semântica, link para pular ao conteúdo, labels, campos obrigatórios, erros associados por `aria-describedby`, região de status, foco visível, áreas de toque e respeito a `prefers-reduced-motion`. Sem JavaScript, a navegação permanece disponível e o formulário fica desabilitado com orientação.

## Projeto acadêmico

Desenvolvimento vinculado à Atividade Extensionista II do curso de Análise e Desenvolvimento de Sistemas da UNINTER. Os requisitos e o escopo estão em `docs/requisitos.md`.

A apresentação institucional foi redigida com base na atuação e nos valores descritos no briefing, com linguagem voltada ao público do Instituto. Não há avisos editoriais ou marcações de rascunho na página. Não foram incluídos históricos, números de atendimentos, parceiros ou depoimentos não confirmados.

## Publicar posteriormente na Vercel

O projeto já contém `vercel.json` para publicação estática, sem instalação de dependências ou compilação. `.vercelignore` exclui da implantação por CLI os arquivos de trabalho, a documentação e as imagens originais maiores; as versões otimizadas permanecem incluídas.

1. Envie o código para um repositório no seu GitHub quando desejar versioná-lo.
2. No painel da Vercel, use **Add New → Project** e importe esse repositório.
3. Use **Framework Preset: Other**, raiz do projeto na pasta que contém `index.html`, **Build Command** vazio e **Output Directory: .**. O arquivo `vercel.json` já declara essas opções.
4. No projeto, abra **Analytics** e selecione **Enable** para ativar Web Analytics.
5. Publique com **Deploy**. Se já tiver publicado antes de ativar Analytics, faça um **Redeploy** após a ativação.
6. Acesse o endereço publicado para conferir o formulário e consulte o painel de Analytics após gerar visitas.

Não há variáveis de ambiente, chaves de Analytics ou número de WhatsApp adicional a configurar. Não foi realizada publicação nem criação de repositório/commit nesta etapa.

### Acompanhar visitas

O código em `js/analytics.js` carrega o script de Web Analytics da própria Vercel em `/_vercel/insights/script.js`, somente por HTTPS e fora dos endereços locais. O recurso precisa estar habilitado na conta/projeto para funcionar; ele não conta visitas ao abrir o arquivo diretamente ou usar o servidor HTTP local.

No painel **Analytics** do projeto, selecione o período para acompanhar **Visitors** (visitantes estimados) e **Page Views** (visualizações). Um visitante pode gerar várias visualizações. Os números não representam cadastros, pessoas atendidas ou confirmações de envio no WhatsApp. Bloqueadores e as regras do serviço podem afetar a contagem. Consulte no painel os limites e condições do seu plano antes de ativar recursos pagos.

A integração aceita apenas eventos de visualização, remove parâmetros de consulta e fragmentos das URLs e descarta URLs externas. Não captura campos do formulário, mensagens ou eventos de cliques no WhatsApp. As estatísticas ficam no painel privado da Vercel; não há contador público no site. O rodapé explica o uso de estatísticas aos visitantes.

O funcionamento completo da coleta depende da publicação e da ativação no painel. Essa confirmação em produção ainda não foi executada.

Referências oficiais: [configuração estática](https://vercel.com/docs/project-configuration/vercel-json), [ativação do Web Analytics](https://vercel.com/docs/analytics/quickstart), [filtro beforeSend](https://vercel.com/docs/analytics/package) e [privacidade](https://vercel.com/docs/analytics/privacy-policy).

## Validação

O roteiro da primeira versão inclui navegação e âncoras, menu por teclado/Escape, tamanhos a partir de 320 px, campos vazios, espaços em branco, acentos e caracteres especiais, número não configurado e erros de console. Os testes efetivamente executados são relatados na entrega; este roteiro não constitui declaração de aprovação em dispositivos reais ou auditoria completa de acessibilidade.

### Verificações executadas em 10/11/2026

- `node --check js/main.js`: sintaxe aprovada.
- Nove testes de comportamento em Node com DOM simulado: configuração oficial, campos vazios, espaços em branco, codificação de caracteres especiais, observação vazia, número ausente/inválido, menu/Escape, fechamento por link/clique externo e recuperação após correção. Todos aprovados; não houve envio real de mensagem.
- Inspeção estrutural: IDs únicos, âncoras existentes, recursos locais presentes, labels associados, alternativas das imagens, dimensões declaradas e hierarquia de títulos.
- Oito combinações principais de cores verificadas por cálculo de contraste: todas acima de 4,5:1. Isso não substitui auditoria completa de acessibilidade.
- HTTP local: página, CSS, JavaScript e duas imagens retornaram status 200.
- Navegador: navegação ao cadastro, menu por clique e Enter, fechamento por Escape com retorno do foco, erros em campos vazios e espaços, e correção dos erros ao digitar.
- Viewports de 320, 375, 768, 1024 e 1440 px: nenhuma rolagem horizontal detectada; revisão visual do início em desktop e formulário em 320 px.
- Console do navegador: nenhum aviso ou erro capturado durante as verificações.

Pendentes: testes com usuários, dispositivos físicos, leitores de tela, auditoria integral e confirmação manual de envio/recebimento no WhatsApp. A geração da URL foi testada localmente, sem contatar a associação.

### Revisão de conteúdo e apresentação

Removidas as legendas decorativas acima do título inicial e dos títulos das seções, incluindo a numeração. A seção Sobre nós recebeu texto institucional completo, sem avisos de construção. As orientações de privacidade, disponibilidade das cestas e confirmação de envio foram preservadas.

### Preparação para publicação e estatísticas

O logo recebeu composição de fundo via CSS (`mix-blend-mode: lighten`), eliminando os recortes escuros no cabeçalho e preservando as imagens originais. A correção foi conferida no navegador, sem avisos ou erros capturados no console. A configuração de implantação e a filtragem de eventos de Analytics foram verificadas localmente; a coleta em produção depende da ativação na Vercel.
