# Restaurante - Site Institucional

Um site institucional moderno e responsivo para restaurante, desenvolvido com Next.js, React, TypeScript e Shadcn UI.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional que transmite seriedade
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance**: Otimizado para velocidade e SEO
- **Integração WhatsApp**: Botões de contato direto para pedidos e reservas
- **Galeria Interativa**: Lightbox para visualização de fotos dos pratos
- **Cardápio Dinâmico**: Filtros por categoria de pratos
- **Acessibilidade**: Componentes acessíveis e semânticos

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn UI** - Componentes de interface
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações (preparado para uso futuro)

## 📱 Seções do Site

1. **Hero Section** - Apresentação principal com call-to-action
2. **Sobre** - História e valores do restaurante
3. **Cardápio** - Pratos organizados por categoria com filtros
4. **Galeria** - Fotos dos pratos e ambiente com lightbox
5. **Contato** - Informações de contato, localização e horários

## 🎨 Design System

- **Cores**: Paleta verde (primary) com tons neutros
- **Tipografia**: Inter (Google Fonts)
- **Componentes**: Sistema consistente com Shadcn UI
- **Animações**: Transições suaves e hover effects

## 📞 Integração WhatsApp

O site inclui múltiplos pontos de contato via WhatsApp:
- Botão flutuante no canto inferior direito
- Botões em cada prato do cardápio
- Seção de contato com opções específicas
- Links diretos para pedidos e reservas

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar o site**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linter

## 🎯 Funcionalidades Principais

### Navegação
- Menu responsivo com hamburger no mobile
- Scroll suave entre seções
- Header fixo com backdrop blur

### Cardápio
- Filtros por categoria (Carnes, Peixes, Vegetariano, etc.)
- Cards com fotos, descrições e preços
- Badges para pratos populares e tempo de preparo
- Botões diretos para WhatsApp

### Galeria
- Grid responsivo de imagens
- Lightbox com navegação por setas
- Filtros por categoria
- Efeitos hover elegantes

### Contato
- Informações completas de contato
- Horários de funcionamento
- Mapa interativo (placeholder)
- Ofertas especiais destacadas

## 🔧 Personalização

### Cores
As cores podem ser alteradas no arquivo `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "hsl(var(--primary))",
  foreground: "hsl(var(--primary-foreground))",
}
```

### Conteúdo
- **Pratos**: Edite o array `menuItems` em `MenuSection.tsx`
- **Imagens**: Substitua URLs do Unsplash pelas suas próprias
- **Informações**: Atualize dados de contato nos componentes
- **WhatsApp**: Altere o número nos links `wa.me`

### Estilos
- **Fontes**: Configure em `layout.tsx`
- **Espaçamentos**: Use classes Tailwind
- **Componentes**: Personalize em `/components/ui/`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 SEO Otimizado

- Meta tags completas
- Open Graph para redes sociais
- Estrutura semântica HTML5
- Imagens otimizadas
- URLs amigáveis

## 🚀 Deploy

O projeto está pronto para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **Railway**
- **Qualquer servidor Node.js**

## 📄 Licença

Este projeto foi criado para fins comerciais. Sinta-se livre para usar e modificar conforme necessário.

---

**Desenvolvido com ❤️ para restaurantes que valorizam a qualidade e experiência do cliente.**