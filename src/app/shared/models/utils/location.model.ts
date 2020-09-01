import { firestore } from 'firebase';
import GeoPoint = firestore.GeoPoint;

import { AddressComponent } from './address-component.model';

export class Location {

  geoPoint: GeoPoint | null | undefined;
  addressComponents: AddressComponent[] | null | undefined;

  constructor(location: Location);
  constructor(location?: Partial<Location>) {
    Object.assign(this, location);
  }

}
