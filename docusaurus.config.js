const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wikipedia',
  tagline: 'The wiki for 0mods\'s project\'s',
  favicon: 'img/favicon.ico',
  url: 'http://0mods.team',
  baseUrl: '/',
  organizationName: '0mods', // Usually your GitHub org/user name.
  projectName: 'docsweb', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
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
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0mods/docsweb/tree/main/',
        },
        blog: false,
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
        title: 'Wikipedia',
        items: [
          {
            href: 'https://github.com/0mods/docsweb',
            label: 'GitHub',
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
            title: 'Language',
            items: [
              {
                label: 'English',
                to: '/',
              },
              {
                label: 'Русский',
                to: 'ru'
              },
            ]
          },
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
                label: 'Discord',
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
