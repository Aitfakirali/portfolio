// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs | GAMA',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon_1.png',
  noIndex: true,
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'RMA',
  projectName: 'GAMA',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // plugins: [
  //   () => ({
  //     name: 'resolve-react',
  //     configureWebpack() {
  //       return {
  //         resolve: {
  //           alias: {
  //             react: path.resolve('./node_modules/react'),
  //             'react-dom': path.resolve('./node_modules/react-dom'),
  //             '@mdx-js/react': path.resolve('../../node_modules/@mdx-js/react'),
  //           },
  //         },
  //       };
  //     },
  //   }),
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        // blog: false,
        theme: {
          customCss: require.resolve('./theme-custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: false,
    // },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'GAMA',
      logo: {
        alt: 'RMA Logo',
        src: 'img/rma_logo.svg',
      },
      hideOnScroll: true,
    },
    footer: {
      // style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} GAMA, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
