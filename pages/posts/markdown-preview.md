---
title: Markdown Preview
date: 2023-8-08
updated: 2023-08-15
categories: NeoVim
tags:
    - Linux
    - NeoVim
    - Markdown
top: 1
---

# Markdown Preview
[Github仓库](https://github.com/iamcco/markdown-preview.nvim)
## 介绍
+ 这是一个`NeoVim`插件
+ 可以实时展示Markdown文件
## 配置
```lua
return {
  {
    "iamcco/markdown-preview.nvim",
    cmd = { "MarkdownPreview", "MarkdownPreviewStop" },
    lazy = false,
    build = function()
      vim.fn["mkdp#util#install"]()
    end,
    init = function()
      vim.g.mkdp_theme = "dark"
    end,
  },
}
```
