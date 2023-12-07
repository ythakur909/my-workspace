import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoggerCheckComponent } from './my-logger-check.component';

describe('MyLoggerCheckComponent', () => {
  let component: MyLoggerCheckComponent;
  let fixture: ComponentFixture<MyLoggerCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLoggerCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLoggerCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
