import { DimensionType, DimensionTypeStrings } from './../../enums/dimension-type.enum';
import { Dimensions } from './dimensions.model';

export class Icon {
  alt: string;
  src: string;
  dimensions: Dimensions;

  constructor(src: string, alt: string, dimensions: Dimensions) {
    this.src = src;
    this.alt = alt;
    this.dimensions = dimensions;
  }

  getDimension(dimensionType: DimensionTypeStrings | DimensionType): number | undefined{
    return this.dimensions.getDimension(dimensionType as DimensionType);
  }

}
