import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostAppEditComponent } from './blog-post-app-edit.component';

describe('BlogPostAppEditComponent', () => {
  let component: BlogPostAppEditComponent;
  let fixture: ComponentFixture<BlogPostAppEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostAppEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostAppEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
