import { LangLocation } from './lang-location.model';
import { firestore } from 'firebase';

import GeoPoint = firestore.GeoPoint;

export class Location {

  geo: GeoPoint;
  location: LangLocation[];

}
