import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component(
{
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit
{
	constructor(public translate: TranslateService){}
	
	ngOnInit(): void{}
}