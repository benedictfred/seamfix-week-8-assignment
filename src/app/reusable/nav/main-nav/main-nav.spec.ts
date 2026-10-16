import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MainNav } from './main-nav';

describe('MainNav', () => {
  let component: MainNav;
  let fixture: ComponentFixture<MainNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNav],
      providers: [provideRouter([]), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render brand logo title and academy', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Young Researcher');
    expect(el.textContent).toContain('Academy');
  });

  it('should render all nav links from screenshot', () => {
    const el: HTMLElement = fixture.nativeElement;
    const expectedLinks = [
      'About',
      'Programmes',
      'Resources',
      'Events',
      'Media',
      'Opportunities',
      'Community',
    ];
    for (const link of expectedLinks) {
      expect(el.textContent).toContain(link);
    }
  });

  it('should render Login and Join YRA buttons', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Login');
    expect(el.textContent).toContain('Join YRA');
  });

  it('should toggle mobile menu', () => {
    expect(component.mobileMenuOpen).toBe(false);
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBe(true);
    component.closeMobileMenu();
    expect(component.mobileMenuOpen).toBe(false);
  });
});
