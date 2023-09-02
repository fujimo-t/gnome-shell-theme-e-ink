#!/bin/bash

THEME_DIR="E-Ink/gnome-shell"
INSTALL_DIR="$HOME/.local/share/themes/E-Ink/"

if [ -d $THEME_DIR ] 
then
  rm -rf $THEME_DIR
fi

mkdir -p $THEME_DIR
sass gnome-shell-high-contrast.scss > "$THEME_DIR/gnome-shell.css"
cp -r *.svg "$THEME_DIR/"

mkdir -p $INSTALL_DIR
cp -r $THEME_DIR $INSTALL_DIR