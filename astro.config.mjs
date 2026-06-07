// @ts-check
import { defineConfig } from "astro/config";

import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        }),
        shikiConfig: {
            theme: 'gruvbox-dark-soft',
        },
    },
    integrations: [
        icon(),
        mdx(),
    ],
    site: 'https://ArjenBack.github.io',
    base: '/astro-site/',
});
