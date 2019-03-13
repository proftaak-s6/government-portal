import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogobarComponent } from './header-logobar.component';

describe('HeaderLogobarComponent', () => {
  let component: HeaderLogobarComponent;
  let fixture: ComponentFixture<HeaderLogobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLogobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLogobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
