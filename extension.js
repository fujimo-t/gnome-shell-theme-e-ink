/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */
const ExtensionUtils = imports.misc.extensionUtils;

const DESKTOP_INTERFACE_SCHEMA = 'org.gnome.desktop.interface';
const KEYS_DESKTOP_INTERFACE = {
    enableAnimation: 'enable-animations',
    gtkTheme: 'gtk-theme',
    iconTheme: 'icon-theme'
};
const GTK_THEME = 'HighContrast';
const ICON_THEME = 'HighContrast';

const DESKTOP_BACKGROUND_SCHEMA = 'org.gnome.desktop.background';
const KEYS_DESKTOP_BACKGROUND = {
    pictureOptions: 'picture-options',
    primaryColor: 'primary-color'
}

class Extension {

    constructor() {
    }

    enable() {
        let interfaceSettings = ExtensionUtils.getSettings(DESKTOP_INTERFACE_SCHEMA);
        // Backup current interface settings
        this._backupInterfaceSettings = new Map();
        for (const key of Object.values(KEYS_DESKTOP_INTERFACE))
            this._backupInterfaceSettings.set(key, interfaceSettings.get_value(key));
        // Set interface settings for E-Ink monitors
        interfaceSettings.set_boolean(KEYS_DESKTOP_INTERFACE.enableAnimation, false);
        interfaceSettings.set_string(KEYS_DESKTOP_INTERFACE.gtkTheme, GTK_THEME);
        interfaceSettings.set_string(KEYS_DESKTOP_INTERFACE.iconTheme, ICON_THEME);

        let backgroundSettings = ExtensionUtils.getSettings(DESKTOP_BACKGROUND_SCHEMA);
        // Backup current background
        this._backupBackgroundSettings = new Map();
        for (const key of Object.values(KEYS_DESKTOP_BACKGROUND))
            this._backupBackgroundSettings.set(key, backgroundSettings.get_value(key));
        // Set background to white color
        backgroundSettings.set_string(KEYS_DESKTOP_BACKGROUND.pictureOptions, 'none');
        backgroundSettings.set_string(KEYS_DESKTOP_BACKGROUND.primaryColor, '#ffffff');
    }

    disable() {
        let interfaceSettings = ExtensionUtils.getSettings(DESKTOP_INTERFACE_SCHEMA);
        for (const key of Object.values(KEYS_DESKTOP_INTERFACE))
            interfaceSettings.set_value(key, this._backupInterfaceSettings.get(key));
        delete this._backupInterfaceSettings;

        let backgroundSettings = ExtensionUtils.getSettings(DESKTOP_BACKGROUND_SCHEMA);
        for (const key of Object.values(KEYS_DESKTOP_BACKGROUND))
            backgroundSettings.set_value(key, this._backupBackgroundSettings.get(key));
        delete this._backupBackgroundSettings;
    }
}

function init() {
    return new Extension();
}
