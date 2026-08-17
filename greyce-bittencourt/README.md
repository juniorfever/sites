# Greyce Bittencourt — Psicóloga · CRP 07/32840

Site estático entregue em 17/08/2026. HTML, CSS e JS puros: sem framework, sem build, sem
nenhuma requisição externa. Abre direto.

- **Original:** https://www.greycebittencourt.com.br/ (Wix)
- **WhatsApp:** (51) 98468-9823 · **Instagram:** @psicologagreyce
- **Endereço:** Av. Brasil, 350 — Barnabé, Gravataí/RS, 94150-000

## Arquivos

```
index.html      uma página, 6 seções
styles.css      tokens + layout + responsivo
script.js       menu mobile, revelação, ano do rodapé, nav ativa
assets/         2 fotos dela + 12 woff2 (Fahkwang, Karla)
```

## Decisões

- **Fahkwang** é a fonte de título do site atual dela — mantida, é identidade. **Karla** no texto.
  As duas são servidas daqui, em woff2 com `unicode-range` latin/latin-ext. Zero Google Fonts.
- **Paleta** do rosa-nude do site atual (`#F2EAE7`) mais o terracota tirado das fotos (`#A9765F`).
- **Arco no topo da foto** do hero: assinatura visual, e é o que diferencia do site de outra cliente.
- As fotos vieram do CDN dela já redimensionadas (134 KB e 131 KB), não em tamanho original.

## Nada foi inventado

Todo texto visível saiu do site dela. Auditado por n-grama contra o original: 28 trechos
literais, 10 recombinações, 5 "sem origem" — e os 5 são nome + CRP juntos, a frase dela sobre
ambiente acolhedor virando título, e um item de lista com a concordância corrigida
("perdeu" → "perderam").

**Corrigido calado:** telefone com o 9º dígito (o site dela escreve "(51) 8468-9823") ·
`<h1>` com o nome dela em vez do título do formulário · meta description · og:image ·
schema `Psychologist` · rodapé com ano automático · `tel:`/WhatsApp clicáveis.

## Pendências com ela

- **E-mail** — o site atual não tem nenhum, e o novo também não. Pedido na conversa.
- **As 4 respostas do FAQ** — o acordeão do Wix só entrega a resposta de "vantagens do
  atendimento on-line". As outras 4 não foram para o site: **não invento resposta de FAQ.**
- Foto em alta, se ela tiver, para o hero.

## Não tem no site, e não deve entrar sem ela confirmar

Preço, convênio, horário de atendimento, duração da sessão, faixa etária atendida.
