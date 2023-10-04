const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modded Wikipedia',
  tagline: 'The wiki for 0mods\'s project\'s',
  favicon: 'img/favicon.ico',
  url: 'https://0mods.team',
  baseUrl: '/',
  organizationName: '0mods',
  projectName: 'docsweb',

  markdown: {
    mermaid: true
  },

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'fr'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        calendar: 'gregory',
        path: 'ru',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        calendar: 'gregory',
        path: 'fr',
      },
    },
  },

  plugins: [
    '@docusaurus/theme-mermaid',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/0mods/docsweb/tree/main/',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/suite.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Modded Documentation',
        items: [
          {
            label: 'Blog',
            href: '/blog',
            position: 'left',
          },
          {
            href: 'https://github.com/0mods/docsweb',
            className: "header-github-link",
            "aria-label": "GitHub Repository",
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
                label: 'HollowEngine',
                to: '/hollowengine',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'HollowEngine Discord',
                href: 'https://discord.gg/qKpPhkwGCY'
              },
              {
                label: '0mods Discord',
                href: 'https://discord.gg/YCj7JBNVAt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/0mods/docsweb',
              },
              {
                label: 'Blog',
                href: '/blog'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HollowHorizon and AlgorithmLX.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
