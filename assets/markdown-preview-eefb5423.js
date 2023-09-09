import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c221fed4.js";import{_ as d,u as m,p as D,c as y,w as a,o as B,a as e,b as s,d as r,r as t,e as F}from"./app-08d88df8.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-b942ca56.js";import"./YunCard.vue_vue_type_script_setup_true_lang-e6ae9c21.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-32e23995.js";import"./index-e7cdf475.js";const j=JSON.parse('{"title":"Markdown Preview","description":"","frontmatter":{"title":"Markdown Preview","date":"2023-8-08","updated":"2023-08-15T00:00:00.000Z","categories":"NeoVim","tags":["Linux","NeoVim","Markdown"],"top":1},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"relativePath":"pages/posts/markdown-preview.md","path":"/home/runner/work/sgj123456.github.io/sgj123456.github.io/pages/posts/markdown-preview.md","lastUpdated":1694282670000}'),l=JSON.parse('{"title":"Markdown Preview","description":"","frontmatter":{"title":"Markdown Preview","date":"2023-8-08","updated":"2023-08-15T00:00:00.000Z","categories":"NeoVim","tags":["Linux","NeoVim","Markdown"],"top":1},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"relativePath":"pages/posts/markdown-preview.md","path":"/home/runner/work/sgj123456.github.io/sgj123456.github.io/pages/posts/markdown-preview.md","lastUpdated":1694282670000}'),u={name:"pages/posts/markdown-preview.md",data(){return{data:l,frontmatter:l.frontmatter,$frontmatter:l.frontmatter}},setup(){const o=m();o.meta.frontmatter=Object.assign(o.meta.frontmatter,l.frontmatter),D("pageData",l)}},f={id:"markdown-preview",tabindex:"-1"},h={id:"介绍",tabindex:"-1"},w=e("ul",null,[e("li",null,[s("这是一个"),e("code",null,"NeoVim"),s("插件")]),e("li",null,"可以实时展示Markdown文件")],-1),v={id:"配置",tabindex:"-1"},A=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#BABED8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"iamcco/markdown-preview.nvim"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#BABED8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    cmd "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," { "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"MarkdownPreview"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#BABED8"}},", "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"MarkdownPreviewStop"),e("span",{style:{color:"#89DDFF"}},'" '),e("span",{style:{color:"#BABED8"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    lazy "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"false"),e("span",{style:{color:"#BABED8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    "),e("span",{style:{color:"#82AAFF"}},"build"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"function"),e("span",{style:{color:"#89DDFF"}},"()")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"      vim."),e("span",{style:{color:"#FFCB6B"}},"fn"),e("span",{style:{color:"#BABED8"}},"["),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"mkdp#util#install"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#BABED8"}},"]()")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"end"),e("span",{style:{color:"#BABED8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    "),e("span",{style:{color:"#82AAFF"}},"init"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"function"),e("span",{style:{color:"#89DDFF"}},"()")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"      vim."),e("span",{style:{color:"#FFCB6B"}},"g"),e("span",{style:{color:"#BABED8"}},"."),e("span",{style:{color:"#FFCB6B"}},"mkdp_theme"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"dark"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"    "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"end"),e("span",{style:{color:"#BABED8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"}")])])])],-1);function E(o,k,g,_,i,$){const n=F,p=c;return B(),y(p,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":a(()=>[e("h1",f,[s("Markdown Preview "),r(n,{class:"header-anchor",href:"#markdown-preview","aria-hidden":"true"},{default:a(()=>[s("#")]),_:1})]),e("p",null,[r(n,{href:"https://github.com/iamcco/markdown-preview.nvim",target:"_blank",rel:"noreferrer"},{default:a(()=>[s("Github仓库")]),_:1})]),e("h2",h,[s("介绍 "),r(n,{class:"header-anchor",href:"#介绍","aria-hidden":"true"},{default:a(()=>[s("#")]),_:1})]),w,e("h2",v,[s("配置 "),r(n,{class:"header-anchor",href:"#配置","aria-hidden":"true"},{default:a(()=>[s("#")]),_:1})]),A]),"main-header":a(()=>[t(o.$slots,"main-header")]),"main-header-after":a(()=>[t(o.$slots,"main-header-after")]),"main-nav":a(()=>[t(o.$slots,"main-nav")]),"main-content":a(()=>[t(o.$slots,"main-content")]),"main-content-after":a(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(o.$slots,"main-nav-after")]),comment:a(()=>[t(o.$slots,"comment")]),footer:a(()=>[t(o.$slots,"footer")]),aside:a(()=>[t(o.$slots,"aside")]),"aside-custom":a(()=>[t(o.$slots,"aside-custom")]),default:a(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const S=d(u,[["render",E]]);export{j as __pageData,S as default};
