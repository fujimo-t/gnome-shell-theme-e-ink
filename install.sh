#!/bin/bash

THEME_DIR="E-Ink/gnome-shell"
INSTALL_DIR="$HOME/.themes/E-Ink/"

if [ -d $THEME_DIR ] 
then
  rm -rf $THEME_DIR
fi

mkdir -p $THEME_DIR
sass gnome-shell-light.scss > "$THEME_DIR/gnome-shell.css"

mkdir -p $INSTALL_DIR
cp -r $THEME_DIR $INSTALL_DIR