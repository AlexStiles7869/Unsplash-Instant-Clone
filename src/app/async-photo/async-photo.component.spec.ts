import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPhotoComponent } from './async-photo.component';

describe('AsyncPhotoComponent', () => {
  let component: AsyncPhotoComponent;
  let fixture: ComponentFixture<AsyncPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
