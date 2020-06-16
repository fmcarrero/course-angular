import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
@NgModule({
  declarations: [AppComponent, ExponentialStrengthPipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
