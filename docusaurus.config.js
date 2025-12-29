// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An open-source book on modern robotics',
  favicon: 'img/robot_logo_v2.png',

  // Client modules (chatbot etc.)
  clientModules: [
    require.resolve('./src/chatbotInjector.js'),
  ],

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 🌍 Language config (English)
  i18n: {
    defaultLocale: 'en',
    locales: ['en','ur'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./docs/sidebar.js'),
          editUrl: 'https://github.com/alishbamusharraf/Hackathon-',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/robot_logo_v2.png',
        },

        // ✅ FINAL NAVBAR
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Book',
          },

          // 🔐 Login
          {
            to: '/login',
            label: 'Login',
            position: 'right',
          },

          // 📝 Sign Up
          {
            to: '/signup',
            label: 'Sign Up',
            position: 'right',
          },

          // 🌐 Language Dropdown (English – future ready)
          {
            type: 'localeDropdown',
            position: 'right',
          },

          // 🐙 GitHub
          {
            href: 'https://github.com/alishbamusharraf/Hackathon-',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Book',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/alishbamusharraf/Hackathon-',
              },
            ],
          },
        ],
        copyright:
          `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
