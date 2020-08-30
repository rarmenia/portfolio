export enum PathType {
  LOCAL,
  HTTP,
  HTTPS
}

export function pathBuilder(pathType: PathType, path: string[]): string | undefined {

  let leading: string | undefined;

  switch (pathType) {
    case PathType.LOCAL:
      leading = '/';
      break;
    case PathType.HTTPS:
      leading = 'https://';
      break;
    case PathType.HTTP:
      leading = 'http://';
      break;
  }

  return leading === undefined ? leading : leading + path.join('/');

}
