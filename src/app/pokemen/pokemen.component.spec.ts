import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemenComponent } from './pokemen.component';

describe('PokemonCardComponent', () => {
  let component: PokemenComponent;
  let fixture: ComponentFixture<PokemenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemenComponent]
    });
    fixture = TestBed.createComponent(PokemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
