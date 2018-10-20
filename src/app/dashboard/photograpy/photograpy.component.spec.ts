import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotograpyComponent } from './photograpy.component';

describe('PhotograpyComponent', () => {
  let component: PhotograpyComponent;
  let fixture: ComponentFixture<PhotograpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotograpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotograpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
