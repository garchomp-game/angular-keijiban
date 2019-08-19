import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIndexComponent } from './chat-index.component';

describe('ChatIndexComponent', () => {
  let component: ChatIndexComponent;
  let fixture: ComponentFixture<ChatIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
