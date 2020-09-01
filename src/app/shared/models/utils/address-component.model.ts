export class AddressComponent {
  shortName: string | null | undefined;
  longName: string | null | undefined;
  types: string[] | null | undefined;

  constructor(addressComponent: AddressComponent);
  constructor(addressComponent?: Partial<AddressComponent>) {
    Object.assign(this, addressComponent);
  }

}
