import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycoursesPage } from './mycourses.page';

describe('MycoursesPage', () => {
  let component: MycoursesPage;
  let fixture: ComponentFixture<MycoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
