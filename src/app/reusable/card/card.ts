import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  badgeLetter = input<string>('');
  badgeText = input<string>('');
  badgeColor = input<'teal' | 'orange' | string>('teal');
  title = input<string>('');
  description = input<string>('');
  linkText = input<string>('');
  linkUrl = input<string>('');
  cardType = input<'framework' | 'default' | 'event' | 'resource' | string>('framework');
  bannerText = input<string>('');
  bannerBgColor = input<string>('');
  metaText = input<string>('');
  buttonText = input<string>('');
  buttonType = input<'white' | 'orange' | string>('');
  customClass = input<string>('');

  linkClick = output<string>();
  cardClick = output<void>();
  buttonClick = output<void>();

  onLinkClick(event: MouseEvent): void {
    event.stopPropagation();
    this.linkClick.emit(this.linkUrl() || this.linkText());
  }

  onCardClick(): void {
    this.cardClick.emit();
  }

  onButtonClick(event?: MouseEvent): void {
    event?.stopPropagation();
    this.buttonClick.emit();
  }
}

