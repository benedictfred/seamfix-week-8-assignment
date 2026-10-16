import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../button/button';
import { navAnimations } from '../../animation';
import { UpperNav } from '../upper-nav/upper-nav';

export interface NavLinkItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-main-nav',
  imports: [CommonModule, RouterLink, RouterLinkActive, UpperNav, Button],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
  animations: navAnimations,
})
export class MainNav {
  constructor(private router: Router) {}

  @Input() upperNavMotto: string = 'Young Researcher Academy · Publish · Research · Impact · Collaborate';
  @Input() upperNavAddress: string = 'Ile-Ife, Osun State, Nigeria';

  @Output() loginClick = new EventEmitter<void>();
  @Output() joinClick = new EventEmitter<void>();
  @Output() linkClick = new EventEmitter<string>();

  mobileMenuOpen = false;
  isHeaderStuck = false;
  tappedLink = new Map<string, 'idle' | 'tap'>();

  navLinks: NavLinkItem[] = [
    { name: 'About', path: 'about' },
    { name: 'Programmes', path: 'programmes' },
    { name: 'Resources', path: 'resources' },
    { name: 'Events', path: 'events' },
    { name: 'Media', path: 'media' },
    { name: 'Opportunities', path: 'opportunities' },
    { name: 'Community', path: 'community' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  onLinkTap(path: string): void {
    this.tappedLink.set(path, 'tap');
    requestAnimationFrame(() =>
      requestAnimationFrame(() => this.tappedLink.set(path, 'idle')),
    );
    this.mobileMenuOpen = false;
    this.linkClick.emit(path);
  }

  linkTapState(path: string): 'idle' | 'tap' {
    return this.tappedLink.get(path) ?? 'idle';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isHeaderStuck = window.scrollY > 4;
  }

  navigateToLogin(): void {
    this.loginClick.emit();
    this.router.navigate(['/login']);
    this.mobileMenuOpen = false;
  }

  // Preserve original method name for backward compatibility
  navigateTolign(): void {
    this.navigateToLogin();
  }

  navigateToSignup(): void {
    this.joinClick.emit();
    this.router.navigate(['/signup']);
    this.mobileMenuOpen = false;
  }

  clickChildButton(buttonType: string): void {
    console.log(buttonType, 'clicked from main nav component');
    if (buttonType.toLowerCase().includes('login')) {
      this.navigateToLogin();
    } else {
      this.joinClick.emit();
      this.mobileMenuOpen = false;
    }
  }

  buttonClicked(buttonText: string): void {
    console.log(buttonText, 'clicked from main nav component');
  }
}

