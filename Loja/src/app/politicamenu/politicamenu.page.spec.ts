import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticamenuPage } from './politicamenu.page';

describe('PoliticamenuPage', () => {
  let component: PoliticamenuPage;
  let fixture: ComponentFixture<PoliticamenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticamenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticamenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
