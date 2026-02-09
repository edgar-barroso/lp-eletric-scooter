# 🛴 LP Electric Scooter - Landing Page

Uma landing page moderna e interativa para scooters elétricos, construída com React, TypeScript, Three.js e Framer Motion.

![Electric Scooter](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=for-the-badge&logo=three.js)

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e atraente com gradientes e elementos visuais impressionantes
- 🎬 **Animações Suaves**: Implementadas com Framer Motion para uma experiência fluida
- 🎮 **Modelo 3D Interativo**: Visualização 3D do scooter usando React Three Fiber
- 🎨 **Sistema de Cores Centralizado**: Variáveis CSS e tema TypeScript para fácil customização
- 📱 **Componentes Reutilizáveis**: Arquitetura modular e bem organizada
- ⚡ **Performance Otimizada**: Build com Vite para desenvolvimento rápido

## 🚀 Tecnologias

- **React 18+** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações e transições
- **React Three Fiber** - Renderização 3D
- **@react-three/drei** - Helpers para Three.js
- **Three.js** - Biblioteca 3D
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre no diretório
cd lp-eletric-scooter

# Instale as dependências
bun install
# ou
npm install

# Inicie o servidor de desenvolvimento
bun dev
# ou
npm run dev
```

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Footer.tsx          # Rodapé com links sociais
│   ├── SideBar.tsx         # Barra lateral com links
│   ├── Background.tsx      # Elementos de fundo animados
│   └── ScooterModel.tsx    # Modelo 3D do scooter
├── theme/
│   ├── colors.ts           # Paleta de cores
│   └── tailwind.config.ts  # Configuração do Tailwind
├── hooks/
│   └── useAnimations.ts    # Hooks customizados
├── assets/
│   └── ola_electric_scooter_black_color.glb
├── App.tsx
├── main.tsx
└── style.css
```

## 🎨 Sistema de Cores

As cores são centralizadas em `src/theme/colors.ts` e `src/style.css`:

```typescript
primary: { light: '#9AE0D3', main: '#35A7A0', dark: '#6EA9A8' }
secondary: { light: '#D8E6EF', main: '#B4D8E4', dark: '#73ADC1' }
accent: { light: '#DFF3FF', main: '#9ACDDE', dark: '#89C8DD' }
```

## 🛠️ Customização

### Alterar Cores

Edite `src/theme/colors.ts` e `src/style.css` com suas cores preferidas.

### Adicionar Animações

Use Framer Motion nos componentes:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

### Substituir Modelo 3D

Substitua o arquivo `.glb` em `src/assets/` e atualize o caminho em `ScooterModel.tsx`.

## 📝 Scripts Disponíveis

```bash
bun dev          # Inicia servidor de desenvolvimento
bun build        # Cria build de produção
bun preview      # Preview do build de produção
bun lint         # Executa o linter
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

MIT License - sinta-se livre para usar este projeto para seus próprios propósitos.

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
