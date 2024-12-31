import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkComponent } from './sk.component';

describe('SkComponent', () => {
  let component: SkComponent;
  let fixture: ComponentFixture<SkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
