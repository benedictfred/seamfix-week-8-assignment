import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();


    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero eyebrow and headline', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-1-container-p-1')?.textContent).toContain(
      'Young Researcher Academy',
    );
    expect(el.querySelector('.section-1-container-head1-1')?.textContent).toContain('Building');
    expect(el.querySelector('.section-1-container-head1-1')?.textContent).toContain('Researchers.');
    expect(el.querySelector('.section-1-container-head1-1')?.textContent).toContain('Impact.');
  });

  it('should render hero buttons for Explore and Upcoming Training', () => {
    const el: HTMLElement = fixture.nativeElement;
    const buttons = el.querySelectorAll('.section-1-container-footer-btn-wrapper app-button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toContain('Explore YRA →');
    expect(buttons[1].textContent).toContain('Upcoming Training');
  });

  it('should render hero checklist items', () => {
    const el: HTMLElement = fixture.nativeElement;
    const checklistItems = el.querySelectorAll('.section-1-container-footer-items-wrapper span');
    expect(checklistItems.length).toBe(3);
    expect(checklistItems[0].textContent).toContain('Research development');
    expect(checklistItems[1].textContent).toContain('Structured training');
    expect(checklistItems[2].textContent).toContain('Mentorship & collaboration');
  });

  it('should trigger onExploreClick when explore button is clicked', () => {
    const el: HTMLElement = fixture.nativeElement;
    const exploreBtn: HTMLButtonElement | null = el.querySelector(
      '.section-1-container-footer-btn-wrapper app-button button',
    );
    expect(exploreBtn).toBeTruthy();
    exploreBtn?.click();

    expect(component.lastHeroAction()).toBe('explore');
  });

  it('should render hero logo and floating community badge', () => {
    const el: HTMLElement = fixture.nativeElement;
    const logoImg = el.querySelector('.section-1-hero-logo');
    expect(logoImg).toBeTruthy();

    const badge = el.querySelector('.section-1-logo-wrapper-overflow');
    expect(badge?.textContent).toContain('Join our research community');
    expect(badge?.textContent).toContain('Connect, learn, publish and create impact');
  });

  it('should render YRA Framework section header', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-2-container-p-1')?.textContent).toContain(
      'The YRA Framework',
    );
    expect(el.querySelector('.section-2-container-head1-1')?.textContent).toContain(
      'What YRA stands for',
    );
    expect(el.querySelector('.section-2-container-p-2')?.textContent).toContain(
      'Four connected pathways through which YRA supports researchers',
    );
  });

  it('should render 4 framework cards with correct badges and titles', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('.section-2-conatiner-2 app-card');
    expect(cards.length).toBe(4);

    const titles = ['PUBLISH', 'RESEARCH', 'IMPACT', 'COLLABORATE'];
    const letters = ['P', 'R', 'I', 'C'];
    const links = [
      'Explore resources →',
      'Explore training →',
      'Explore opportunities →',
      'Join community →',
    ];

    cards.forEach((card, idx) => {
      expect(card.textContent).toContain(titles[idx]);
      expect(card.textContent).toContain(letters[idx]);
      expect(card.textContent).toContain(links[idx]);
    });
  });

  it('should render Upcoming events section header and view all link', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-3-container-p-1')?.textContent).toContain("Don't miss out");
    expect(el.querySelector('.section-3-container-head1-1')?.textContent).toContain(
      'Upcoming events',
    );
    expect(el.querySelector('.section-3-all-events-link')?.textContent).toContain(
      'View all events →',
    );
  });

  it('should render 3 upcoming event cards with details', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('.section-3-conatiner-2 app-card');
    expect(cards.length).toBe(3);

    expect(cards[0].textContent).toContain('YRA Global Research Bootcamp 2026');
    expect(cards[0].textContent).toContain('TRAINING');
    expect(cards[0].textContent).toContain('20 Aug · Online · 4 Weeks');
    expect(cards[0].textContent).toContain('Register now →');

    expect(cards[1].textContent).toContain('How to Write a Systematic Literature Review');
    expect(cards[1].textContent).toContain('SEMINAR');
    expect(cards[1].textContent).toContain('30 Aug · Online · 1 Day');
    expect(cards[1].textContent).toContain('View details →');

    expect(cards[2].textContent).toContain('Data Analysis with SPSS for Researchers');
    expect(cards[2].textContent).toContain('WORKSHOP');
    expect(cards[2].textContent).toContain('10 Sep · Online · 2 Days');
    expect(cards[2].textContent).toContain('View details →');
  });

  it('should call onEventCardClick when event card is clicked', () => {
    const spy = vi.spyOn(component, 'onEventCardClick');
    const el: HTMLElement = fixture.nativeElement;
    const firstCard: HTMLElement | null = el.querySelector(
      '.section-3-conatiner-2 app-card .yra-card',
    );
    expect(firstCard).toBeTruthy();
    firstCard?.click();

    expect(spy).toHaveBeenCalledWith(component.upcomingEvents()[0]);
  });

  it('should render YRA Resource Centre section header and description', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-4-container-p-1')?.textContent).toContain(
      'YRA Resource Centre',
    );
    expect(el.querySelector('.section-4-container-head2-1')?.textContent).toContain(
      'Resources for your research',
    );
    expect(el.querySelector('.section-4-container-head2-1')?.textContent).toContain('journey.');
    expect(el.querySelector('.section-4-container-p-2')?.textContent).toContain(
      'Access free research materials, practical guides, templates and premium resources',
    );
  });

  it('should render 2 resource cards with F and P badges and app-buttons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('.section-4-wrapper-container-2 app-card');
    expect(cards.length).toBe(2);

    // Free resources card
    expect(cards[0].textContent).toContain('F');
    expect(cards[0].textContent).toContain('Free Resources');
    expect(cards[0].textContent).toContain('Explore guides, templates and learning materials.');
    expect(cards[0].textContent).toContain('Browse free →');

    // Premium resources card
    expect(cards[1].textContent).toContain('P');
    expect(cards[1].textContent).toContain('Premium Resources');
    expect(cards[1].textContent).toContain(
      'Access premium guides, templates and research toolkits.',
    );
    expect(cards[1].textContent).toContain('Browse premium →');
  });

  it('should trigger onResourceCardClick when resource button is clicked', () => {
    const spy = vi.spyOn(component, 'onResourceCardClick');
    const el: HTMLElement = fixture.nativeElement;
    const firstBtn: HTMLButtonElement | null = el.querySelector(
      '.section-4-wrapper-container-2 app-card:first-child app-button button',
    );
    expect(firstBtn).toBeTruthy();
    firstBtn?.click();

    expect(spy).toHaveBeenCalledWith(component.resourceCards()[0]);
  });

  it('should render YRA Media section header, description, and View media library button', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-5-container-p-1')?.textContent).toContain('YRA Media');
    expect(el.querySelector('.section-5-container-head1-1')?.textContent).toContain(
      'Learn from past sessions',
    );
    expect(el.querySelector('.section-5-container-p-2')?.textContent).toContain(
      'Watch seminar and training recordings through the YRA YouTube channel',
    );

    const mediaBtn = el.querySelector('.section-5-container-standOut-texts app-button');
    expect(mediaBtn?.textContent).toContain('View media library');
  });

  it('should call onViewMediaLibraryClick when View media library button is clicked', () => {
    const spy = vi.spyOn(component, 'onViewMediaLibraryClick');
    const el: HTMLElement = fixture.nativeElement;
    const mediaBtn: HTMLButtonElement | null = el.querySelector(
      '.section-5-container-standOut-texts app-button button',
    );
    expect(mediaBtn).toBeTruthy();
    mediaBtn?.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should render video cover with play button initially and switch to iframe on click', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(component.isVideoPlaying()).toBe(false);

    const cover: HTMLElement | null = el.querySelector('.section-5-media-video-card .video-cover');
    expect(cover).toBeTruthy();
    expect(el.querySelector('.section-5-media-video-card .play-button')).toBeTruthy();
    expect(el.querySelector('.section-5-media-video-card iframe')).toBeNull();

    // Click cover to play
    cover?.click();
    fixture.detectChanges();

    expect(component.isVideoPlaying()).toBe(true);
    const iframe: HTMLIFrameElement | null = el.querySelector(
      '.section-5-media-video-card .video-iframe',
    );
    expect(iframe).toBeTruthy();
    expect(iframe?.getAttribute('src')).toContain('dQw4w9WgXcQ');
  });
});




