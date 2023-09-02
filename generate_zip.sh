#!/bin/bash

THEME_DIR="E-Ink/gnome-shell"

if [ -d $THEME_DIR ] 
then
  rm -rf $THEME_DIR
fi

mkdir -p $THEME_DIR
sass gnome-shell-high-contrast.scss > "$THEME_DIR/gnome-shell.css"
cp -r *.svg "$THEME_DIR/"
zip -r E-Ink.zip $THEME_DIR
