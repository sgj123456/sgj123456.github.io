---
title: Linux下Hyprland桌面环境配置文件
date: 2023-8-08
updated: 2023-08-09
categories: Linux
tags:
    - Linux
    - ArchLinux
top: 1
---

# Dotfiles
Linux下Hyprland桌面环境配置文件
## 使用
### 一键脚本(Arch系pacman包管理)
```sh
git clone https://github.com/sgj123456/dotfiles.git $HOME/dotfiles
chmod 777 $HOME/dotfiles/dotfiles-manage/install.sh
sh $HOME/dotfiles//dotfiles-manage/install.sh
```
### 手动安装
#### 前置条件
+ Arch Linux
```sh
pacman -S git fish starship waybar rofi hyprland hyprpaper kitty zoxide fzf grim dunst --noconfirm
```
+ Other Linux
请自行安装所需应用
#### 载入配置
1. 放置配置文件
```sh
mkdir $HOME/Pictures
git clone https://github.com/sgj123456/dotfiles.git $HOME/dotfiles
cp -r $HOME/dotfiles/{dunst, fish, hypr, kitty, rofi, waybar, starship,} $HOME/.config/
```
2. 安装Helix(可选)
+ Arch Linux
```sh
pacman -S helix --noconfirm
```
+ Other Linux
请自行安装Helix
```sh
cp -r $HOME/dotfiles/helix $HOME/.config/
helix -g fetch
helix -g build
```
## 快捷键
### Hyprland
+ <kbd>Win</kbd>+<kbd>q</kbd> 打开新终端(Kitty)
+ <kbd>Win</kbd>+<kbd>c</kbd> 关闭窗口
+ <kbd>Win</kbd>+<kbd>r</kbd> 打开应用选择器(rofi -show drun)
+ <kbd>Win</kbd>+<kbd>s</kbd> 区域截图(默认保存到$HOME/Pictures文件夹)
+ ...
### Kitty
+ <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd> 打开新标签页(当前目录)
+ <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd> 打开新窗口(当前目录)
+ <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> 分割窗口(当前目录) 
+ <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd> 关闭当前页面
+ <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Q</kbd> 关闭所有页面
+ <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F2</kbd> 打开配置文件
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
+ [Dunst](https://dunst-project.org/) 通知管理器
+ ...
