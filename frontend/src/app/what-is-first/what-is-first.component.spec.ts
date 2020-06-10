import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsFirstComponent } from './what-is-first.component';

describe('WhatIsFirstComponent', () => {
  let component: WhatIsFirstComponent;
  let fixture: ComponentFixture<WhatIsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
