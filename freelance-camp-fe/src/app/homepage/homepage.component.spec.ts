import { TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomepageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'freelance-camp-fe'`, () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('freelance-camp-fe');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('freelance-camp-fe app is running!');
  });
});
