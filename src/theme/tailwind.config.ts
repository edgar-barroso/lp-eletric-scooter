// Configuração de tailwind com as cores do tema
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)',
          main: 'var(--color-primary-main)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          light: 'var(--color-secondary-light)',
          main: 'var(--color-secondary-main)',
          dark: 'var(--color-secondary-dark)',
        },
        accent: {
          light: 'var(--color-accent-light)',
          main: 'var(--color-accent-main)',
          dark: 'var(--color-accent-dark)',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};
