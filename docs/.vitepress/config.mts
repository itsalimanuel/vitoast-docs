import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitoast - Vue Toast Package",
  description: "Vitoast is a simple and customizable toast package for Vue.js, designed to provide user-friendly notifications.",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'vitoast',
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/get-start" },
      { text: "Demo", link: "https://vitoast.vercel.app/" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Get Start", link: "/get-start" }],
      },
      {
        text: "Installation",
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Usage", link: "/usage" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/itsalimanuel/vitoast" },
    ],
  },
});
