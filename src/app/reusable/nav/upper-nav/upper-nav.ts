import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upper-nav',
  imports: [],
  templateUrl: './upper-nav.html',
  styleUrl: './upper-nav.css',
})
export class UpperNav {
  @Input() motto: string = 'Young Researcher Academy · Publish · Research · Impact · Collaborate';
  @Input() address: string = 'Ile-Ife, Osun State, Nigeria';
  @Input() value: number = 0;
}

