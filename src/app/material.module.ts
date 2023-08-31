import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
  ],
  exports:[

      CommonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatInputModule,
      MatListModule,
      MatSidenavModule,
      MatCardModule,
      MatFormFieldModule,
      MatTableModule,
      MatSortModule,

  ],
  declarations: []
})
export class MaterialModule { }
