import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – FlyOS Docs'
    }
  },
  logo: <span>FlyOS Docs</span>,
  project: {
    link: 'https://github.com/EdwardLab/flyos',
  },
  chat: {
    link: 'https://digitalplat.org/about-us/',
  },
  docsRepositoryBase: 'https://github.com/DigitalPlatDev/flyos-docs',
  footer: {
    text: 'The FlyOS Project, Powered by DigitalPlat',
  },
}

export default config
