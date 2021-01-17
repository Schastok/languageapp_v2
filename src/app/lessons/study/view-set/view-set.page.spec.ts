import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSetPage } from './view-set.page';

describe('ViewSetPage', () => {
  let component: ViewSetPage;
  let fixture: ComponentFixture<ViewSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
