import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrewComponent } from './crew/crew.component';
import { HeaderComponent } from './header/header.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentComponent } from './experiment/experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewComponent,
    HeaderComponent,
    EquipmentComponent,
    ExperimentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
