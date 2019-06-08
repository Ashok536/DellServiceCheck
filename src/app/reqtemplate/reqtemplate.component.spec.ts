import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqtemplateComponent } from './reqtemplate.component';

describe('ReqtemplateComponent', () => {
  let component: ReqtemplateComponent;
  let fixture: ComponentFixture<ReqtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
