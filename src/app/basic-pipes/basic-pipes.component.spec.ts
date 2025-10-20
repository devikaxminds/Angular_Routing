import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPipesComponent } from './basic-pipes.component';

describe('BasicPipesComponent', () => {
  let component: BasicPipesComponent;
  let fixture: ComponentFixture<BasicPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
