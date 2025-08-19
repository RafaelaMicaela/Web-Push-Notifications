# Web Push Notifications

Uma aplicação React moderna que demonstra como implementar notificações web usando a API de Notifications do navegador. O projeto utiliza React, TypeScript, Material-UI e Vite para criar uma interface intuitiva para testar e gerenciar notificações web.

## 🚀 Funcionalidades

- ✅ Verificação de suporte a notificações no navegador
- 🔔 Solicitação de permissão para notificações
- 📱 Envio de notificações personalizadas
- 🎨 Interface moderna com Material-UI
- ⚡ Hook personalizado para gerenciamento de notificações
- 🔥 Hot reload com Vite

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Material-UI (MUI)** - Biblioteca de componentes visuais
- **Vite** - Ferramenta de build e desenvolvimento
- **Web Notifications API** - API nativa do navegador para notificações

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn
- Navegador moderno com suporte à Web Notifications API

## 🔧 Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/RafaelaMicaela/Web-Push-Notifications.git
cd Web-Push-Notifications
```

### 2. Navegue para o diretório da aplicação
```bash
cd app
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Execute o servidor de desenvolvimento
```bash
npm run dev
```

### 5. Acesse a aplicação
Abra seu navegador e acesse: `http://localhost:5173/`

## 📁 Estrutura do Projeto

```
app/
├── src/
│   ├── components/
│   │   └── Notificacao/
│   │       └── Notificacao.tsx     # Componente principal de notificações
│   ├── hooks/
│   │   └── useNotification.ts      # Hook personalizado para notificações
│   ├── App.tsx                     # Componente raiz da aplicação
│   └── main.tsx                    # Ponto de entrada da aplicação
├── public/                         # Arquivos públicos
├── package.json                    # Dependências e scripts
└── vite.config.ts                  # Configuração do Vite
```

## 🎯 Como Usar

1. **Verificar Suporte**: A aplicação automaticamente verifica se o navegador suporta notificações
2. **Solicitar Permissão**: Clique no botão "Solicitar Permissão" para permitir notificações
3. **Enviar Notificação**: Após conceder permissão, clique em "Enviar Notificação" para testar

## 🔑 Principais Componentes

### Hook useNotification
O hook personalizado `useNotification` encapsula toda a lógica de notificações:
- Verificação de suporte do navegador
- Solicitação de permissões
- Envio de notificações

### Componente Notificacao
Interface visual que utiliza Material-UI para:
- Exibir status de suporte
- Botões para solicitar permissão e enviar notificações
- Feedback visual das ações

## 🌐 Suporte de Navegadores

- ✅ Chrome 22+
- ✅ Firefox 22+
- ✅ Safari 7+
- ✅ Edge 14+
- ❌ Internet Explorer (não suportado)

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa linting do código

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **RafaelaMicaela** - *Desenvolvimento inicial* - [GitHub](https://github.com/RafaelaMicaela)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!