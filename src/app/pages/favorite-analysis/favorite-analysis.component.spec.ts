import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAnalysisComponent } from './favorite-analysis.component';

describe('FavoriteAnalysisComponent', () => {
  let component: FavoriteAnalysisComponent;
  let fixture: ComponentFixture<FavoriteAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
