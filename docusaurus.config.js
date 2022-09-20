// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArGQL Guide',
  tagline: 'Arweave GraphQL Guide',
  url: 'https://arweave-gql.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'handlebauer', // Usually your GitHub org/user name.
  projectName: 'ar-gql', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        { name: 'keywords', content: 'arweave, graphql, dapp' },
      ],
      navbar: {
        title: 'ArGQL Guide',
        logo: {
          alt: 'Arweave GraphQL Guide',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
          {
            to: 'queries',
            label: 'Queries',
            position: 'left'
          },
          {
            to: 'concepts',
            label: 'Concepts',
            position: 'left'
          },
          {
            to: 'resources',
            label: 'Resources',
            position: 'left'
          },
          {
            href: 'https://github.com/handlebauer/ar-gql',
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
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: 'getting-started',
              },
              {
                label: 'Queries',
                to: 'queries',
              },
              {
                label: 'Concepts',
                to: 'concepts',
              },
              {
                label: 'Resources',
                to: 'resources',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Arweave Dev Talk',
                href: 'https://discord.gg/B7KdMYwjNn',
              },
              {
                label: '@ArweaveTeam',
                href: 'https://twitter.com/arweaveteam',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/handlebauer/ar-gql',
              },
            ],
          },
        ],
        copyright: ' ',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
