import { Contact } from './contact.model';
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
  contact?: Contact;

  constructor(name: Name, properties?: {
    birthday?: Timestamp,
    location?: Location,
    icon?: Icon
    title?: string;
    contact?: Contact;
  }) {
    this.name = name;
    Object.assign(this, {name, ...properties});
  }

}
