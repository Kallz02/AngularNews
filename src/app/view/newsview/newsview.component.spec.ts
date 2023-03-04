import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsviewComponent } from './newsview.component';

describe('NewsviewComponent', () => {
  let component: NewsviewComponent;
  let fixture: ComponentFixture<NewsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
