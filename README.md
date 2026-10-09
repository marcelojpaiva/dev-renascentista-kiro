# Desenvolvedor Renascentista · KIRO — Muito Além do Prompt

Site da keynote de abertura do **AWS Community Day Salvador**, por **Marcelo Paiva**.

Um site one-page que espelha a palestra: o paralelo entre o Renascimento e a era da IA, os 5 pilares do Desenvolvedor Renascentista, o salto "além do prompt", o Kiro como potencializador, a reflexão sobre responsabilidade e os próximos passos (AWS Builder Center + brinde).

## 🧱 Stack

HTML + CSS + JavaScript puro. Sem build, sem dependências. Fontes via Google Fonts; visual em CSS/SVG.

## 📁 Estrutura

```
.
├── index.html          # estrutura da página (seções = atos da palestra)
├── css/styles.css      # tema visual (Renascimento + tech), responsivo
├── js/content.js       # TEXTOS editáveis dos cards (pilares, Kiro, etc.)
├── js/main.js          # render dos cards, menu, reveal, QR do brinde
├── assets/             # arte SVG (Homem Vitruviano) e imagens
└── docs/base.pptx      # apresentação base (referência)
```

> Para editar textos rapidamente, mexa em `js/content.js`.

## 🚀 Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

## 🌐 Publicação (GitHub Pages)

O site é publicado automaticamente via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`. Em **Settings → Pages**, selecione a origem **GitHub Actions**.

## 🔗 Links

- Brinde (500 créditos Kiro): https://s12d.com/kiroemsalvador
- AWS Builder Center: https://builder.aws.com/

## 📝 Licença

Conteúdo da palestra © Marcelo Paiva. Código do site livre para estudo e adaptação.
