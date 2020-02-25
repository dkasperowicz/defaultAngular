import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';

@Component(
{
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit
{
	title = 'defaultAngular-app';

	constructor(private elementReference: ElementRef){}

	ngOnInit(): void
	{
		this.elementReference.nativeElement.removeAttribute("ng-version");
	}
}