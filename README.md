# Instituto Ponto da Praia

Site institucional que apresenta as ações do Instituto e facilita o contato de pessoas interessadas em receber cestas básicas. O formulário prepara uma mensagem para o WhatsApp, onde a pessoa confirma o envio. O site foi desenvolvido em HTML, CSS e JavaScript para a Atividade Extensionista II de Análise e Desenvolvimento de Sistemas da UNINTER.

## Executar localmente

Abra o arquivo `index.html` no navegador ou execute na raiz do projeto:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Acesse [localhost:5500](http://127.0.0.1:5500).

## Configuração

- **WhatsApp** — ajuste `whatsappNumber` em [js/main.js](js/main.js) com o código do país, o DDD e o número, usando apenas dígitos. Os campos do formulário são usados para preparar a mensagem e não são armazenados pelo site.
- **Vercel** — importe o repositório. O arquivo [vercel.json](vercel.json) configura a publicação estática sem etapa de build. Para acompanhar visitas, habilite **Web Analytics** no painel e publique a versão com o recurso ativado.

Os requisitos e o fluxo do formulário estão documentados em [docs/requisitos.md](docs/requisitos.md).
