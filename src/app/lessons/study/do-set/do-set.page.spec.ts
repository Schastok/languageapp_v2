import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoSetPage } from './do-set.page';

describe('DoSetPage', () => {
  let component: DoSetPage;
  let fixture: ComponentFixture<DoSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoSetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
