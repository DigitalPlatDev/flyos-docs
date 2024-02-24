import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig & { description: string } = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - FlyOS Docs'
    };
  },
  logo: <span>FlyOS Docs</span>,
  project: {
    link: 'https://github.com/EdwardLab/flyos'
  },
  chat: {
    link: 'https://digitalplat.org/about-us/'
  },
  docsRepositoryBase: 'https://github.com/DigitalPlatDev/flyos-docs',
  footer: {
    text: 'The FlyOS Project, by DigitalPlat.org'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FlyOS Docs" />
      <meta property="og:description" content="FlyOS Documentation" />
    </>
  )
};

export default config;
