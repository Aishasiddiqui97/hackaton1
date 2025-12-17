// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Spec-Driven Guide to Advanced Robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Replace 'your-project-name' with your actual Vercel project slug
  url: 'https://physical-ai-robotics-book.vercel.app',
  
  // For Vercel, baseUrl is typically '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // These are less critical for Vercel but good to keep for reference.
  organizationName: 'PhysicalAI-Robotics', 
  projectName: 'PhysicalAi-Robotics-Book', 

  // Important for hackathons: 'ignore' or 'warn' prevents build failure on small link typos
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      // ur: {
      //   label: 'اردو',
      //   direction: 'rtl',
      // },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Points to your GitHub repo so users can click "Edit this page"
          editUrl:
            'https://github.com/PhysicalAI-Robotics/PhysicalAi-Robotics-Book/tree/main/',
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
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI & Humanoid Robotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Book',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/PhysicalAI-Robotics/PhysicalAi-Robotics-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'ROS 2 Nervous System',
                to: '/docs/module1-ros/intro',
              },
              {
                label: 'Digital Twin (Gazebo/Unity)',
                to: '/docs/module2-digital-twin/intro',
              },
              {
                label: 'NVIDIA Isaac AI-Robot Brain',
                to: '/docs/module3-isaac-ai/intro',
              },
              {
                label: 'Vision-Language-Action & Humanoid Capstone',
                to: '/docs/module4-capstone/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/PhysicalAI-Robotics/PhysicalAi-Robotics-Book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;