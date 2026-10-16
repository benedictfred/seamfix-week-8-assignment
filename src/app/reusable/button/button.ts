import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() buttonText: string = '';
  @Input() buttonType: 'white' | 'orange' | 'outline' | 'primary' | string = 'white';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';
  @Input() ariaLabel?: string;

  @Output() Navclick = new EventEmitter<void>();
  @Output() btnClick = new EventEmitter<MouseEvent>();

  get isWhite(): boolean {
    const t = (this.buttonType || '').toLowerCase();
    return t === 'white' || t === 'outline';
  }

  get isOrange(): boolean {
    const t = (this.buttonType || '').toLowerCase();
    return t === 'orange' || t === 'primary';
  }

  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.Navclick.emit();
    this.btnClick.emit(event);
  }
}

