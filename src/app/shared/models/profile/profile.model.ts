import { Location } from './../utils/location.model';
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;
import { Name } from './name.model';
import { Icon } from './../utils/icon.model';

export class Profile {

  birthday?: Timestamp;
  name: Name;
  location?: Location;
  icon?: Icon;
  title?: string;

  constructor(name: Name, properties?: {
    birthday?: Timestamp,
    location?: Location,
    icon?: Icon
    title?: string;
  }) {
    this.name = name;
    Object.assign(this, {name, ...properties});
  }

}
