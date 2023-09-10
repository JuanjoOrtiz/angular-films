import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPosterGridComponent } from './films-poster-grid.component';

describe('FilmsPosterGridComponent', () => {
  let component: FilmsPosterGridComponent;
  let fixture: ComponentFixture<FilmsPosterGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsPosterGridComponent]
    });
    fixture = TestBed.createComponent(FilmsPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
