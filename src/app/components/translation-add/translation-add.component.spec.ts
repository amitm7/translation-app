import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationAddComponent } from './translation-add.component';

describe('TranslationAddComponent', () => {
  let component: TranslationAddComponent;
  let fixture: ComponentFixture<TranslationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
