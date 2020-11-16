import { Icon } from './icon.model';

export class Social {

  icon?: Icon | string;

  name: string;
  url: string;

  constructor(name: string, url: string, icon?: Icon | string) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }

}
