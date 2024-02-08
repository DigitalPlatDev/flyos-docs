import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – FlyOS Docs'
    }
  },
  logo: <span>FlyOS Docs</span>,
  search: true,
  customSearch: true,
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
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://docs.flyos.us/" target="_blank">
        🎉 FlyOS 3.0 is released. Read more →
      </a>
    )
  }
}

export default config
