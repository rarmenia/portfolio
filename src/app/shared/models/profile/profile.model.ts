import { ContactModel } from './contact.model';
import { LocationSimpleModel } from './location-simple.model';
import { NameModel } from './name.model';
import { ImageModel } from './image.model';
import {firestore} from 'firebase';
import Timestamp = firestore.Timestamp;

export class ProfileModel {

  birthday: Timestamp;
  name: NameModel;
  icon: ImageModel;
  location: LocationSimpleModel;
  title: string;
  contact: ContactModel;

}
