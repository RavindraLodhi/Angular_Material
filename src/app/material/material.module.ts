import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
} from '@angular/material'
import {MatBadgeModule} from '@angular/material/badge'
const MaterialComponent = [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatDialogModule
];
@NgModule({
  imports: [
    MaterialComponent,
  ],
  exports :[
    MaterialComponent
  ]
})
export class MaterialModule { }
