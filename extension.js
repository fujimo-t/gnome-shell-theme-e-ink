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

class Extension {
    
    constructor() {
    }

    enable() {
        let interfaceSettings = ExtensionUtils.getSettings(DESKTOP_INTERFACE_SCHEMA);

        // Backup current settings
        this._backupSettings = new Map();
        for (const key of Object.values(KEYS_DESKTOP_INTERFACE))
            this._backupSettings.set(key, interfaceSettings.get_value(key));

        interfaceSettings.set_boolean(KEYS_DESKTOP_INTERFACE.enableAnimation, false);
        interfaceSettings.set_string(KEYS_DESKTOP_INTERFACE.gtkTheme, GTK_THEME);
        interfaceSettings.set_string(KEYS_DESKTOP_INTERFACE.iconTheme, ICON_THEME);
    }

    disable() {
        let interfaceSettings = ExtensionUtils.getSettings(DESKTOP_INTERFACE_SCHEMA);

        // Restore settings
        for (const key of Object.values(KEYS_DESKTOP_INTERFACE))
            interfaceSettings.set_value(key, this._backupSettings.get(key));

        delete this._backupSettings;
    }
}

function init() {
    return new Extension();
}
