#!/bin/bash

sass scss/stylesheet.scss > stylesheet.css
zip -r e-ink-mode@fujimo-t.github.io.zip . -x scss/\* .\* `basename $0`
