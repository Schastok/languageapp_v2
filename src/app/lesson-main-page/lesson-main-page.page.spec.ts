import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonMainPagePage } from './lesson-main-page.page';

describe('LessonMainPagePage', () => {
  let component: LessonMainPagePage;
  let fixture: ComponentFixture<LessonMainPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonMainPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
