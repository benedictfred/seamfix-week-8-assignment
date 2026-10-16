import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input buttonText', () => {
    fixture.componentRef.setInput('buttonText', 'Click Me');
    fixture.detectChanges();

    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonEl.textContent?.trim()).toContain('Click Me');
  });

  it('should apply whiteBgButton class for white buttonType', () => {
    fixture.componentRef.setInput('buttonType', 'white');
    fixture.detectChanges();

    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonEl.classList.contains('whiteBgButton')).toBe(true);
  });

  it('should apply orangeButton class for orange buttonType', () => {
    fixture.componentRef.setInput('buttonType', 'orange');
    fixture.detectChanges();

    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonEl.classList.contains('orangeButton')).toBe(true);
  });

  it('should emit Navclick and btnClick on button click', () => {
    let navClicked = false;
    let btnClicked = false;

    component.Navclick.subscribe(() => {
      navClicked = true;
    });
    component.btnClick.subscribe(() => {
      btnClicked = true;
    });

    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonEl.click();

    expect(navClicked).toBe(true);
    expect(btnClicked).toBe(true);
  });

  it('should not emit events when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    let navClicked = false;
    component.Navclick.subscribe(() => {
      navClicked = true;
    });

    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonEl.click();

    expect(navClicked).toBe(false);
  });
});


