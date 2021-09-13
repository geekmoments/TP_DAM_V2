import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './pipes/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,


  ],
  exports: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
