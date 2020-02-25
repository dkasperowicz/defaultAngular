import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { I18nModule } from "../assets/i18n/i18n.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule(
{
	declarations:
	[
		AppComponent,
		HeaderComponent,
		FooterComponent
	],
	imports:
	[
		BrowserModule,
		AppRoutingModule,
		I18nModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }