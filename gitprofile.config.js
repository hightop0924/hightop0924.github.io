// gitprofile.config.js

const config = {
  github: {
    username: 'hightop0924', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-ussa-566262280',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'https://t.me/HighTopper',
    website: '',
    phone: '',
    email: 'hightop0924.dev.hk@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/hightop0924/hightop0924/blob/main/Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'Python',
    'Rust',
    'Solidity',
    'Move',
    'Ethereum/BSC/Solana/Cosmos/Pokadot/Aptos/Sui',
    'React.js',
    'Node.js',
    'MySQL/PostgreSQL/Neo4J/Redis',
    'Github/Docker/Kubernetes/AWS',
  ],
  experiences: [
    {
      company: 'OPTIFINANCE',
      position: 'Rust/Move & Solidity Engineer',
      from: 'August 2021',
      to: 'October 2023',
      companyLink: 'https://www.optifinance.net',
    },
    {
      company: 'IDEASOFT',
      position: 'Rust & Solidity Developer',
      from: 'March 2018',
      to: 'August 2021',
      companyLink: 'https://ideasoft.io',
    },
    {
      company: 'EXPERTIME OPEN',
      position: 'Rust/C++ Backend Developer',
      from: 'March 2015',
      to: 'March 2018',
      companyLink: 'https://www.expertime-open.com',
    },
    {
      company: 'ZHUHAI AIPUJING SOFTWARE CO.',
      position: 'C++/Python Developer',
      from: 'Jan 2011',
      to: 'March 2015',
      companyLink: 'https://www.apjcorp.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Lingnan University',
      degree: 'Bachelor of Degree in Computer Science',
      from: '2008',
      to: '2011',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Dex on Bahamas Chain',
      description:
        'Decentralized Exchange on Bahamas Chain',
      imageUrl: '',
      link: 'https://swap.bahamaschain.io',
    },
    {
      title: 'Block Explorer on Bahamas',
      description:
        'Chain Explorer on Bahamas',
      imageUrl: '',
      link: 'https://explorer.bahamaschain.io',
    },
    {
      title: 'Token Bridge on Bahamas',
      description:
        'Mint/Burn and Deposit Token Bridge on Bahamas',
      imageUrl: '',
      link: 'https://bridge.bahamaschain.io',
    },
    {
      title: 'Clutchy NFT Marketplace',
      description:
        'NFT Market Place on Sui',
      imageUrl: '',
      link: 'https://clutchy.io/marketplace',
    },
    {
      title: 'OFT Token LayerZero Bridge ',
      description:
        'SquidGrow Token, OFT Token Bridge using LayerZero',
      imageUrl: '',
      link: 'https://www.bridge.squidgrow.wtf/',
    },
    {
      title: 'ONFT Token Mint/Bridge based on LayerZero',
      description:
        'ONFT Token Bridge using LayerZero',
      imageUrl: '',
      link: 'https://omniart.app',
    },
    {
      title: 'Flash Launchpad',
      description:
        'Flash Launchpad like Pinksale',
      imageUrl: '',
      link: 'https://flash-launch.com',
    },
    {
      title: 'Welcome Chat Server',
      description:
        'Large-scale Chatting Service in Rust, which is competive to Telegram',
      imageUrl: '',
      link: 'https://142.132.218.205:3006',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'Hightop', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/hightop0924/hightop0924.gitbub.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
