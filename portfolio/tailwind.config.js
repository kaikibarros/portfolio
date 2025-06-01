// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': 'var(--background)',
        'page-text': 'var(--foreground)',
        'section-bg': 'var(--section-background)',
        'section-text': 'var(--section-foreground)',
        'accent': 'var(--accent-purple)',
        'skill-bg': 'var(--skill-tag-bg)',
        'skill-text': 'var(--skill-tag-text)',
      },
      fontFamily: {
        // Certifique-se que --font-geist-sans está definido em globals.css
        // ou que a fonte Geist Sans está importada e configurada corretamente.
        sans: ['var(--font-geist-sans, sans-serif)'],
        mono: ['var(--font-geist-mono, monospace)'],
      },
    },
  },
  plugins: [],
};