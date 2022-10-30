export interface Welcome {
  rent:          number;
  rentRangeLow:  number;
  rentRangeHigh: number;
  longitude:     number;
  latitude:      number;
  listings:      Listing[];
}

export interface Listing {
  id:               string;
  formattedAddress: string;
  longitude:        number;
  latitude:         number;
  city:             string;
  state:            string;
  zipcode:          string;
  price:            number;
  publishedDate:    Date;
  distance:         number;
  daysOld:          number;
  correlation:      number;
  address:          string;
  county:           string;
  bathrooms:        number;
  propertyType:     string;
  yearBuilt?:       number;
  bedrooms?:        number;
  squareFootage?:   number;
}
