# Cleo Ribeiro — Psicóloga

Site estático entregue. HTML/CSS/JS puro, sem framework, sem build, sem requisição externa.

- **Lead:** lote 01, operação 2. Respondeu em 1h20 à primeira mensagem.
- **Site anterior:** https://www.psicologacleoribeiro.com.br/ (Wix, 7 páginas)
- **Contato:** (51) 99648-8810 · cleoribeiro.psi@gmail.com · @cleoribeiro.psi · CRP 07/29008

## Referência de design

Sistema portado de [Stillpoint (Webflow)](https://preview.webflow.com/preview/ovo-stillpoint),
com a identidade dela por cima. O que veio da referência é a **linguagem**, não a aparência:

| Elemento | Stillpoint | Aplicado aqui |
|:--|:--|:--|
| Serifa editorial | Lora 400/500, `letter-spacing` negativo | igual |
| Sans de corpo | "42 Dotsans" (proprietária) | **DM Sans** (substituta livre) |
| Botões | pílula `border-radius: 300px` | igual |
| Cards / imagens | 16px / 24px | igual |
| Ritmo vertical | 64px | 96px desktop, 60px mobile |
| Container | 1075px | 1120px |
| Paleta | verde #1F3B2F + terracota #A34E31 + creme | **paleta dela:** marrom #6E4C34, terracota #A56B5B, areia #E8E5DE — amostradas do site e do logo |

A cor não foi copiada de propósito: a referência dá a estrutura, a identidade continua sendo dela.

## Conteúdo

**Zero invenção.** Todo texto saiu das 7 páginas do site dela; as 6 fotos e o logo são dela,
baixados do CDN e servidos já no tamanho final.

**Não entrou, porque ela não tem:** preço, convênio, depoimentos, endereço escrito do consultório.

## O que este site tem e o Wix não tinha

| | Wix | Aqui |
|:--|:--|:--|
| Rodapé | **© 2023** fixo + "criado com Wix.com" | ano automático, sem crédito de plataforma |
| `<h1>` | **nenhum**, em nenhuma página | um por página |
| Schema | nenhum | `Psychologist` completo |
| Menu | 4 itens, conteúdo espalhado em 7 páginas | 6 seções, tudo numa página |
| WhatsApp | link no corpo | botão flutuante + CTA em 5 pontos |
| "Picoterapia" no menu e na URL | presente | corrigido, sem comentar |
| Peso | Wix + scripts | **1,2 MB total**, ~1s local |

## Estrutura

```
index.html      página única, 11 seções
styles.css      tokens + componentes
script.js       menu mobile, revelar no scroll, ano, link ativo
assets/         6 fotos + logo
assets/fonts/   Lora e DM Sans self-hosted (latin + latin-ext)
```

## Testado

Renderizado via HTTP, desktop 1440 e mobile 390: **zero erro de JS, zero imagem quebrada, zero
overflow horizontal, zero âncora quebrada, zero imagem sem `alt`, um `<h1>`.**

⚠️ As fontes falham em `file://` por CORS (`preload` com `crossorigin`). Abrir por HTTP.
No GitHub Pages funciona normal.
