import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierContenuComponent } from './modifier-contenu.component';

describe('ModifierContenuComponent', () => {
  let component: ModifierContenuComponent;
  let fixture: ComponentFixture<ModifierContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
