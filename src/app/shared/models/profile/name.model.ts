export class Name {

  first: string | null | undefined;
  middle: string | null | undefined;
  last: string | null | undefined;
  full: string | null | undefined;
  aliases: string[] | null | undefined;

  constructor(name?: Partial<Name>) {
    Object.assign(this, name);
  }


}
