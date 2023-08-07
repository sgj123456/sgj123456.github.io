---
title: Linux下Hyprland桌面环境配置文件
date: 2022-8-08
updated: 2022-08-08
categories: Linux
tags:
    桌面环境
    Linux
    ArchLinux
top: 1
---

# Dotfiles
Linux下Hyprland桌面环境配置文件
## 使用
### 一键脚本(目前仅支持Arch系pacman包管理安装)
```sh
git clone https://github.com/sgj123456/dotfiles.git $HOME/dotfiles
chmod 777 $HOME/dotfiles/dotfiles-manage/install.sh
sh $HOME/dotfiles//dotfiles-manage/install.sh
```
### 手动安装
#### 前置条件
+ Arch Linux及其衍生发行版
```bash
pacman -S git helix fish starship waybar rofi hyprland hyprpaper kitty zoxide fzf grim
```
+ Other Linux
请自行安装所需应用
#### 载入配置
```sh
mkdir $HOME/Pictures
git clone https://github.com/sgj123456/dotfiles.git $HOME/dotfiles
cp -r $HOME/dotfiles/* $HOME/.config/
```
## 快捷键
### Hyprland
+ `Win+q` 打开新终端(Kitty)
+ `Win+c` 关闭窗口
+ `Win+r` 打开应用选择器(rofi -show drun)
+ `Win+s` 截图
+ ...
### Kitty
+ `Ctrl+Shift+T` 打开新标签页(当前目录)
+ `Ctrl+Shift+N` 打开新窗口(当前目录)
+ `Ctrl+Shift+Enter` 分割窗口(当前目录) 
+ `Ctrl+Shift+W` 关闭当前页面
+ `Ctrl+Shift+Q` 关闭所有页面
+ `Ctrl+Shift+F2` 打开配置文件
+ 其他默认快捷键，请查看官方Wiki
## 命令行工具
### Zoxide 
+ `z [路径] `+`Tab` 查找目录
+ ...
### Helix
+ `helix [路径]` 打开目录/文件
#### 正常模式
+ `:` 进入命令模式
#### 命令模式
+ `w`/`write` 保存
+ `q`/`quite` 退出
+ `config-open` 打开配置文件
+ ...
...
## Package
+ [Helix](https://helix-editor.com/) 文本编辑器
+ [fish](https://fishshell.com/) Shell
+ [Starship](https://starship.rs/) 终端美化工具
+ [waybar](https://github.com/Alexays/Waybar/) 窗口Bar
+ [rofi](https://davatorium.github.io/rofi/) 窗口切换器
+ [Hyprland](https://hyprland.org/) 窗口管理器 
+ ...
