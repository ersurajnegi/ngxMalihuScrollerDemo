import { text } from './text';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  text = text;
  options = {
    theme: "dark-thick",
    axis: "y"
  }
  themesArray = [
    { theme: "light", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "minimal", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "minimal-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "dark-2", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "light-2", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "dark-3", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "light-3", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },


    { theme: "light-thick", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "dark-thick", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "light-thin", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "dark-thin", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },


    { theme: "inset-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "inset", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "inset-2-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "inset-2", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },


    { theme: "inset-3", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "inset-3-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "rounded", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "rounded-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },

    { theme: "rounded-dots-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "rounded-dots", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "3d-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } },
    { theme: "3d", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },


    { theme: "3d-thick", axis: "y", customClass: "custom-dark", scrollButtons: { enable: true } },
    { theme: "3d-thick-dark", axis: "y", customClass: "custom-light", scrollButtons: { enable: true } }
  ]
}
