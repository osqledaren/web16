import {Component, OnInit} from '@angular/core';
import {MenuList} from '../menu';
import {NavigationService} from '../navigation.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public mainMenu: MenuList;
	public secondaryMenu: MenuList;

	constructor(private navigation: NavigationService) {
		this.mainMenu = navigation.getNav('main-nav');
		this.secondaryMenu = navigation.getNav('secondary-nav');
	}

	ngOnInit() {
	}

}