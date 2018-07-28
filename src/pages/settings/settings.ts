import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular'
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsSevice: SettingsService) {}

 onToggle(toggle: Toggle) {
   this.settingsSevice.setBackground(toggle.checked);
 }

 checkAltBackground() {
   return this.settingsSevice.isAltBackground();
 }

}
