import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostosDeColetaComponent } from './postos-de-coleta.component';

describe('PostosDeColetaComponent', () => {
  let component: PostosDeColetaComponent;
  let fixture: ComponentFixture<PostosDeColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostosDeColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostosDeColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
