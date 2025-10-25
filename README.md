# Reddit AI Extension

<div align="center">

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?logo=google-chrome)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-orange?logo=openai)
![License](https://img.shields.io/badge/License-MIT-yellow)

**AI-powered Chrome extension that helps you generate intelligent Reddit replies and posts using OpenAI**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Development](#development) • [Contributing](#contributing)

</div>

---

## 🌟 Features

### 🤖 AI Reply Suggestions
- **Context-Aware**: Automatically parses Reddit posts and comments
- **Multiple Options**: Generates 3 different AI-powered reply suggestions
- **Template System**: 5 built-in templates + custom template support
  - Friendly & Casual
  - Professional & Formal
  - Humorous
  - Concise & Direct
  - Helpful & Detailed
- **Quick Actions**: Copy, edit, or insert directly into Reddit comment box

### 📝 AI Post Creation
- **Conversational Flow**: Step-by-step guided post creation
- **Smart Generation**: Creates well-structured posts with titles
- **Review & Edit**: Full editing capability before publishing
- **Reddit Integration**: Opens submit page with pre-filled content

### ⚙️ Configuration & Settings
- **OpenAI Setup**: API key, model selection, temperature, max tokens
- **Template Management**: Create, edit, delete, import/export templates
- **Customization**: Sidebar position, theme preferences
- **Privacy-First**: All data stored locally, no external tracking

---

## 📦 Installation

### From Chrome Web Store (Coming Soon)
*Extension is pending Chrome Web Store review*

### Manual Installation (Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/zjy365/reddit-ai-assistant.git
   cd reddit-ai-assistant
   ```

2. **Install dependencies**
   ```bash
   # Requires Node.js >= 22.15.1
   nvm use v22.16.0
   npm install -g pnpm
   pnpm install
   ```

3. **Build the extension**
   ```bash
   pnpm build
   ```

4. **Load in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist/` folder

---

## 🚀 Usage

### First-Time Setup
1. After installation, the extension will open the settings page
2. Enter your OpenAI API key (get one at [OpenAI Platform](https://platform.openai.com/))
3. Configure your preferred model and settings
4. Start using on any Reddit page!

### Generate AI Replies
1. Visit any Reddit post or comment
2. Open the sidebar via:
   - Click the extension icon in toolbar
   - Click the floating button on Reddit page
   - Use keyboard shortcut: `Ctrl+Shift+A` (Windows) or `Cmd+Shift+A` (Mac)
   - Right-click → "Reddit AI Assistant"
3. The extension automatically captures the context
4. Select a prompt template
5. Click "Generate Reply Suggestions"
6. Choose from 3 AI-generated options
7. Copy, edit, or insert directly to Reddit

### Create AI Posts
1. Open the sidebar
2. Switch to "Create Post" tab
3. Answer the AI's questions about your post:
   - What topic?
   - Which subreddit?
   - What tone?
   - Key points to include?
4. Review and edit the generated post
5. Click "Publish to Reddit" to open submit page

---

## 🛠️ Development

### Prerequisites
- Node.js >= 22.15.1
- pnpm (package manager)

### Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite + Turborepo (monorepo)
- **Styling**: Tailwind CSS
- **APIs**: Chrome Extensions Manifest V3, OpenAI API

### Development Commands

```bash
# Install dependencies
pnpm install

# Development mode with hot reload
pnpm dev

# Production build
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint
pnpm lint:fix

# Code formatting
pnpm format

# Create distribution zip
pnpm zip
```

### Project Structure

```
reddit-ai-assistant/
├── chrome-extension/      # Extension configuration
│   ├── manifest.ts        # Manifest V3 config
│   └── src/background/    # Background service worker
├── pages/
│   ├── content-reddit/    # Reddit page injection script
│   ├── side-panel/        # AI Assistant sidebar UI
│   └── options/           # Settings page
├── packages/
│   ├── shared/            # Shared utilities, types, services
│   └── storage/           # Chrome storage abstractions
└── tasks/                 # Documentation and tasks
```

### Key Architecture Decisions

- **Monorepo**: Uses Turborepo for efficient builds
- **Type Safety**: Full TypeScript with strict mode
- **Message Passing**: Type-safe extension communication
- **Storage**: Chrome storage sync for cross-device settings
- **Error Handling**: Custom error classes with retry logic

For detailed development documentation, see [CLAUDE.md](./CLAUDE.md).

---

## 🔒 Privacy & Security

- ✅ **Local Storage**: All settings and API keys stored locally via `chrome.storage`
- ✅ **No Tracking**: Zero analytics or external tracking
- ✅ **User Control**: You provide your own OpenAI API key
- ✅ **Minimal Permissions**: Only requests necessary Chrome permissions
- ✅ **Open Source**: Full transparency - audit the code yourself

**Data Flow:**
1. Extension parses Reddit content locally
2. Content sent to OpenAI only when you generate replies/posts
3. No data sent to any other external services

---

## 🎯 Roadmap

### Completed (v0.5.0)
- [x] AI reply generation with templates
- [x] Conversational post creation
- [x] Settings and configuration UI
- [x] Chrome extension core functionality
- [x] OpenAI API integration

### Planned
- [ ] Multi-language support
- [ ] Additional AI providers (Claude, Gemini)
- [ ] Image/video post support
- [ ] Reddit OAuth integration
- [ ] Community template sharing
- [ ] Firefox extension support
- [ ] Advanced analytics

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style (enforced by ESLint/Prettier)
- Write meaningful commit messages
- Add tests for new features (when applicable)
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
- Powered by [OpenAI API](https://openai.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Developed with [Claude Code](https://claude.com/claude-code)

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/zjy365/reddit-ai-assistant/issues)
- **Discussions**: [GitHub Discussions](https://github.com/zjy365/reddit-ai-assistant/discussions)

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by [zjy365](https://github.com/zjy365)

</div>
