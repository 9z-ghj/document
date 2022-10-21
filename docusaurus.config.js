	// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '玖章云',
  tagline: 'Dinosaurs are cool',
  url: 'https://ghj1828.synology.me:9090/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  // onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '9Z', // Usually your GitHub org/user name.
  projectName: '玖章云', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
    path: 'i18n',
    localeConfigs: {
        en: {
            label: 'English',
            direction: 'ltr',
            htmlLang: 'en-US',
            calendar: 'gregory',
            path: 'en'
        },
    },
  },
themes: [
  // ... Your other themes.
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      // ... Your options.
      // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true,
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
      docsRouteBasePath: "/",
      // For Docs using Chinese, The `language` is recommended to set to:
      // ```
      language: ["en", "zh"],
      // ```
    },
  ],
],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            routeBasePath:'/',
            sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
//          {showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
            {
                type: 'localeDropdown',
                position: 'right',
            },
          /*{
            type: 'doc',
            docId: 'https://www.9z.cloud',
            position: 'left',
            label: '文档',
          },*/
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.9z.cloud',
            label: '主页',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
/*        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
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
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} NineData, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
