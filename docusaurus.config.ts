import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Docs For Mods',
  tagline: 'The wiki for 0mods\'s project\'s and not only :)',
  favicon: 'img/favicon.ico',
  url: 'https://0mods.team',
  baseUrl: '/',
  organizationName: '0mods',
  projectName: 'docsweb',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  plugins: ['@docusaurus/theme-mermaid', "@docusaurus/theme-live-codeblock"],
  markdown: {
    mermaid: true
  },

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
        path: 'en'
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        calendar: 'gregory',
        path: 'ru'
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/0mods/docsweb/tree/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/suite.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'J4EPI2AB9Q',
      apiKey: 'eeaf4148668553faa14ef6c18735ac32',
      indexName: 'zero-docs',
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    navbar: {
      hideOnScroll: true,
      title: 'ZeroDocs',
      items: [
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/0mods/docsweb',
          label: 'GitHub',
          position: 'right',
          "aria-label": "GitHub Repository",
        },
        {
          type: 'localeDropdown',
          position: 'right'
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
      copyright: `Copyright © 2023-${new Date().getFullYear()} HollowHorizon and AlgorithmLX.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
