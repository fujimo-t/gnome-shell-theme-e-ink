# GNOME Shell Theme: E-Ink

* Suitable for E-Ink displays
* Based on the default high contrast theme (invert colors and add small changes) 

![Screenshot](./screenshot.png)

## Install

1. Ensure GNOME Tweaks is installed.
2. Ensure the GNOME Shell extension ["User Themes"](https://extensions.gnome.org/extension/19/user-themes/) is installed and enabled in [GNOME Extensions](https://apps.gnome.org/en-GB/Extensions/).
3. Download `E-Ink.zip` from [Releases](https://github.com/fujimo-t/gnome-shell-theme-e-ink/releases).
4. Place the `gnome-shell.css` file into `~/.themes/E-Ink/gnome-shell/`.
5. In the "Appearance" section of GNOME Tweaks, there is a row called "Shell", whose drop-down menu should now contain "E-Ink". Select it for the theme to take effect.

### Additional steps for Ubuntu

The dock styling will work only if the system is running the GNOME Shell extension ["Dash to Dock"](https://extensions.gnome.org/extension/307/dash-to-dock/), of which Ubuntu ships a modified version that is incompatible with this theme. To resolve this,

1. Install ["Dash to Dock"](https://extensions.gnome.org/extension/307/dash-to-dock/).

2. In Gnome Extensions, disable the extension "Ubuntu Dock" in the "System Extensions" section.

3. Enable the extension "Dash to Dock".

4. Open the settings of Dash to Dock. Under the "Appearance" section, ensure that "Use built-in theme" is toggled to the off position.