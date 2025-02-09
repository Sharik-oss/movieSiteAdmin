import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholePageComponent } from './whole-page.component';

describe('WholePageComponent', () => {
  let component: WholePageComponent;
  let fixture: ComponentFixture<WholePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
