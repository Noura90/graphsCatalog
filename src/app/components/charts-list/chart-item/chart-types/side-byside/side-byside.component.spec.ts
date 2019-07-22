import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBysideComponent } from './side-byside.component';

describe('SideBysideComponent', () => {
  let component: SideBysideComponent;
  let fixture: ComponentFixture<SideBysideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBysideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
