import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpperNav } from './upper-nav';

describe('UpperNav', () => {
  let component: UpperNav;
  let fixture: ComponentFixture<UpperNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperNav],
    }).compileComponents();

    fixture = TestBed.createComponent(UpperNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render motto and address', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Young Researcher Academy');
    expect(el.textContent).toContain('Ile-Ife, Osun State, Nigeria');
  });

  it('should allow custom motto and address via inputs', () => {
    fixture.componentRef.setInput('motto', 'Custom Motto');
    fixture.componentRef.setInput('address', 'Lagos, Nigeria');
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Custom Motto');
    expect(el.textContent).toContain('Lagos, Nigeria');
  });
});
