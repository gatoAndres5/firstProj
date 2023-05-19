import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-housing-location',
  template: `
  
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocationComponent;
  
}
export interface HousingLocationComponent {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}