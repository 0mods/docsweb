import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '0mods',
  tagline: 'The website for 0mods\'s project\'s and not only :)',
  favicon: 'img/favicon.ico',
  url: 'https://0mods.team',
  baseUrl: '/',
  organizationName: '0mods',
  projectName: '0mods_site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  onBrokenAnchors: 'warn',

  plugins: [ '@docusaurus/theme-mermaid', "@docusaurus/theme-live-codeblock" ],
  markdown: {
    mermaid: true
  },

  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'ru-RU'],
    path: 'i18n',
    localeConfigs: {
      'en-US': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      'ru-RU': {
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
      {
        docs: {
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: '2.0'
            },
            Legacy: {
              label: 'Legacy',
              path: 'Legacy'
            }
          },
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/0mods/docsweb/edit/main/',
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
      appId: 'S11JTLUN4G',
      apiKey: '4fb029349202789a024594a3d7b314e2',
      indexName: '0mods',
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    navbar: {
      hideOnScroll: true,
      title: '0mods',
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          to: '/docs',
          label: 'Docs',
          position: 'left'
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'https://maven.0mods.team/',
          label: 'Maven',
          position: 'left'
        },
        {
          to: 'https://kotlinlang.org/docs/basic-syntax.html',
          label: 'KotlinScript',
          position: 'left'
        },
        {
          href: 'https://github.com/0mods/docsweb',
          position: 'right',
          className: 'header-github-link',
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
              to: '/docs/hollowengine',
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
              href: 'https://discord.0mods.team',
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
