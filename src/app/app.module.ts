import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CounterService } from './services/counter.service';
import { ContactService } from './services/contact.service';

import { AppComponent } from './app.component';
import { ValidationsComponent } from './validations/validations.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteItemComponent } from './quote-list/quote-item/quote-item.component';
import { CountUiComponent } from './count-ui/count-ui.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-list/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationsComponent,
    QuoteListComponent,
    QuoteItemComponent,
    CountUiComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CounterService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
