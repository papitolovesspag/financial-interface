# Financial Interface

A mobile-first financial calculator interface built with JavaScript, Next.js, Tailwind CSS, Framer Motion, and lucide-react.

## Tools Included

- Interest and profit calculator
- Loan and mortgage amortization calculator
- Return on investment calculator
- Ratio-based bill splitter
- Tip and tax calculator
- About page for project and group details
- Light and dark mode toggle

## Tech Decisions

- **Framework:** Next.js App Router
- **Language:** JavaScript
- **Styling:** Tailwind CSS with custom CSS variables
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Database:** Not required for this version
- **Authentication:** Not required for this version
- **API integration:** Not required for this version

The calculators run from user-entered values and do not need saved accounts or remote data.

## File Structure

```text
financial-interface/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── amortization/
│   │   └── page.js
│   ├── interest/
│   │   └── page.js
│   ├── roi/
│   │   └── page.js
│   ├── split/
│   │   └── page.js
│   ├── tip/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── CalculatorPrimitives.js
│   └── SiteShell.js
├── public/
├── utils/
│   └── mathHelpers.js
├── render.yaml
├── package.json
└── README.md
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Render Hosting

This repository includes `render.yaml` for a Render web service.

After pushing the project to GitHub:

1. Create a new Render Blueprint or Web Service.
2. Connect the GitHub repository.
3. Use `npm install && npm run build` as the build command.
4. Use `npm run start` as the start command.

No database or environment variables are needed for the current version.
