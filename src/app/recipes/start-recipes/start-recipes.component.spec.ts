import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRecipesComponent } from './start-recipes.component';

describe('StartRecipesComponent', () => {
  let component: StartRecipesComponent;
  let fixture: ComponentFixture<StartRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
