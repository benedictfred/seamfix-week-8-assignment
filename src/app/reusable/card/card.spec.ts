import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render badge, title, description, and link', () => {
    fixture.componentRef.setInput('badgeLetter', 'P');
    fixture.componentRef.setInput('badgeColor', 'teal');
    fixture.componentRef.setInput('title', 'PUBLISH');
    fixture.componentRef.setInput('description', 'Build the skills to communicate');
    fixture.componentRef.setInput('linkText', 'Explore resources →');
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.card-badge')?.textContent?.trim()).toBe('P');
    expect(el.querySelector('.card-badge')?.classList.contains('badge-teal')).toBe(true);
    expect(el.querySelector('.card-title')?.textContent?.trim()).toBe('PUBLISH');
    expect(el.querySelector('.card-description')?.textContent?.trim()).toContain(
      'Build the skills to communicate',
    );
    expect(el.querySelector('.card-link')?.textContent?.trim()).toContain('Explore resources →');
  });

  it('should emit linkClick when link is clicked', () => {
    fixture.componentRef.setInput('linkText', 'Explore resources →');
    fixture.componentRef.setInput('linkUrl', 'resources');
    fixture.detectChanges();

    let emitted = '';
    component.linkClick.subscribe((val) => {
      emitted = val;
    });

    const fakeEvent = new MouseEvent('click', { cancelable: true });
    component.onLinkClick(fakeEvent);

    expect(emitted).toBe('resources');
  });


  it('should render orange badge when badgeColor is orange', () => {
    fixture.componentRef.setInput('badgeLetter', 'R');
    fixture.componentRef.setInput('badgeColor', 'orange');
    fixture.detectChanges();

    const badgeEl: HTMLElement | null = fixture.nativeElement.querySelector('.card-badge');
    expect(badgeEl?.classList.contains('badge-orange')).toBe(true);
  });

  it('should render event card with banner, tag pill, meta info, and custom banner color', () => {
    fixture.componentRef.setInput('cardType', 'event');
    fixture.componentRef.setInput('bannerText', 'RESEARCH\nBOOTCAMP');
    fixture.componentRef.setInput('bannerBgColor', '#61a3bc');
    fixture.componentRef.setInput('badgeText', 'TRAINING');
    fixture.componentRef.setInput('badgeColor', 'teal');
    fixture.componentRef.setInput('title', 'YRA Global Research Bootcamp 2026');
    fixture.componentRef.setInput('metaText', '20 Aug · Online · 4 Weeks');
    fixture.componentRef.setInput('description', 'Intensive research training');
    fixture.componentRef.setInput('linkText', 'Register now →');
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const banner = el.querySelector('.card-event-banner');
    expect(banner?.textContent).toContain('RESEARCH\nBOOTCAMP');
    expect((banner as HTMLElement)?.style.backgroundColor).toBe('rgb(97, 163, 188)');

    const pill = el.querySelector('.card-tag-pill');
    expect(pill?.textContent?.trim()).toBe('TRAINING');
    expect(pill?.classList.contains('pill-teal')).toBe(true);

    expect(el.querySelector('.card-title')?.textContent?.trim()).toBe(
      'YRA Global Research Bootcamp 2026',
    );
    expect(el.querySelector('.card-meta')?.textContent?.trim()).toBe('20 Aug · Online · 4 Weeks');
    expect(el.querySelector('.card-description')?.textContent?.trim()).toBe(
      'Intensive research training',
    );
    expect(el.querySelector('.card-link')?.textContent?.trim()).toBe('Register now →');
  });

  it('should emit cardClick when card is clicked', () => {
    let cardClicked = false;
    component.cardClick.subscribe(() => {
      cardClicked = true;
    });

    component.onCardClick();
    expect(cardClicked).toBe(true);
  });

  it('should render resource card with badge letter, title, description, and app-button', () => {
    fixture.componentRef.setInput('cardType', 'resource');
    fixture.componentRef.setInput('badgeLetter', 'F');
    fixture.componentRef.setInput('badgeColor', 'teal');
    fixture.componentRef.setInput('title', 'Free Resources');
    fixture.componentRef.setInput('description', 'Explore guides, templates and learning materials.');
    fixture.componentRef.setInput('buttonText', 'Browse free →');
    fixture.componentRef.setInput('buttonType', 'white');
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.card-badge')?.textContent?.trim()).toBe('F');
    expect(el.querySelector('.card-badge')?.classList.contains('badge-teal')).toBe(true);
    expect(el.querySelector('.card-title')?.textContent?.trim()).toBe('Free Resources');
    expect(el.querySelector('.card-title')?.classList.contains('resource-title')).toBe(true);
    expect(el.querySelector('.card-description')?.textContent?.trim()).toBe(
      'Explore guides, templates and learning materials.',
    );

    const btn = el.querySelector('.card-btn-wrapper app-button');
    expect(btn?.textContent).toContain('Browse free →');
  });

  it('should emit buttonClick when button inside card is clicked', () => {
    fixture.componentRef.setInput('cardType', 'resource');
    fixture.componentRef.setInput('buttonText', 'Browse premium →');
    fixture.componentRef.setInput('buttonType', 'orange');
    fixture.detectChanges();

    let btnClicked = false;
    component.buttonClick.subscribe(() => {
      btnClicked = true;
    });

    const btn: HTMLButtonElement | null = fixture.nativeElement.querySelector(
      '.card-btn-wrapper app-button button',
    );
    expect(btn).toBeTruthy();
    btn?.click();

    expect(btnClicked).toBe(true);
  });
});


