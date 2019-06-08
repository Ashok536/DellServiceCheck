import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestemplateComponent } from './restemplate.component';

describe('RestemplateComponent', () => {
  let component: RestemplateComponent;
  let fixture: ComponentFixture<RestemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
