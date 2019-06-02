import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InboxComponent,
    ProfileComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
