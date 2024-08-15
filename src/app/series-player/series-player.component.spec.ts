import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPlayerComponent } from './series-player.component';

describe('SeriesPlayerComponent', () => {
  let component: SeriesPlayerComponent;
  let fixture: ComponentFixture<SeriesPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
