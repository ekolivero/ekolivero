# Template Sito Internet

Template Next.js ottimizzato per vibe-coding. Clona, installa e inizia a sviluppare.

📺 **Canale YouTube**: [Erik Olivero](https://youtube.com/@erikolivero)

## Quick Start

```bash
# Clona il repository
git clone https://github.com/tuousername/template-sito-internet.git
cd template-sito-internet
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Tech Stack

- **Next.js** 16.1.3
- **React** 19.2.3
- **TypeScript** 5
- **Tailwind CSS** 4
- **shadcn/ui**
- **ESLint** 9

Creato con `create-next-app`.

## Regole

### Usa sempre shadcn/ui per i componenti

Tutti i componenti UI devono essere creati con [shadcn/ui](https://ui.shadcn.com). Questo permette di cambiare tema modificando un solo file (`app/globals.css`). Basta copiare le variabili CSS da un tema diverso e l'intera app cambia stile.

Docs: [ui.shadcn.com/docs](https://ui.shadcn.com/docs)

## Skills

| Skill | Descrizione | Link |
|-------|-------------|------|
| **React Best Practices** | 40+ regole di ottimizzazione React/Next.js in 8 categorie (waterfall, bundle size, performance). Ordinato per impatto da CRITICAL a LOW. | [Blog](https://vercel.com/blog/introducing-react-best-practices) |

```bash
# Installa la skill nel tuo coding agent
npx add-skill vercel-labs/agent-skills
```

## Script

```bash
npm run dev      # Sviluppo
npm run build    # Build produzione
npm run start    # Avvia produzione
npm run lint     # ESLint
```

## Licenza

MIT
