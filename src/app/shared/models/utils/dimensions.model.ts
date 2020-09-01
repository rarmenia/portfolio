import { DimensionType } from '@shared/enums/dimension-type.enum';

export class Dimensions {

  width: number;
  height: number;

  constructor()
  constructor(width: number, height: number)
  constructor(width?: number, height?: number) {
    this.width = width ?? 0;
    this.height = height ?? 0;
  }

  getDimension(dimension: DimensionType): number | undefined {
    switch (dimension) {
      case DimensionType.WIDTH:
        return this.width;
      case DimensionType.HEIGHT:
        return this.height;
      default:
        return undefined;
    }
  }

}
