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

class Extension {
    
    constructor() {
        this._interfaceSettingsId = 'org.gnome.desktop.interface';
        this._animationKey = 'enable-animations';
    }

    enable() {
        let interfaceSettings = ExtensionUtils.getSettings(this._interfaceSettingsId);
        this._originalAnimationSetting = interfaceSettings.get_boolean(this._animationKey);

        interfaceSettings.set_boolean(this._animationKey, false);
    }

    disable() {
        let interfaceSettings = ExtensionUtils.getSettings(this._interfaceSettingsId);
        interfaceSettings.set_boolean(this._animationKey, this._originalAnimationSetting);
    }
}

function init() {
    return new Extension();
}
