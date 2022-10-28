	// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NineData 文档',
  titleDelimiter: '-',
  tagline: '构建全球领先的多云数据管理平台',
  url: 'https://docs.ninedata.cloud/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  // onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  plugins: [
    path.resolve(__dirname, 'src/plugins/crisp.js')
  ],
    
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Documentation', // Usually your GitHub org/user name.
  projectName: 'NineData', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
            /*{
                type: 'localeDropdown',
                position: 'right',
            },*/
            {
                type: 'dropdown',
                label: '快捷入口',
                position: 'left',
                items: [
                  {
                    label: '主页',
                    href: 'https://www.ninedata.cloud',
                  },
                  {
                    label: '控制台',
                    href: 'https://console.ninedata.cloud',
                  },
                ],
            },
          /*{
            type: 'doc',
            docId: 'https://www.9z.cloud',
            position: 'left',
            label: '文档',
          },*/
          //{to: '/blog', label: 'Blog', position: 'left'},
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
