import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ConsultantService } from '../consultant-service';
import { QuestionsService } from '../questions.service';
import { HttpClient } from '@angular/common/http';
import { RecommendationComponent } from '../recommendation/recommendation.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    
  ],
  declarations: [Tab2Page,RecommendationComponent],
  entryComponents: [RecommendationComponent]
})
export class Tab2PageModule {}
