import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestalleComponent } from './destalle.component';

describe('DestalleComponent', () => {
  let component: DestalleComponent;
  let fixture: ComponentFixture<DestalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestalleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
