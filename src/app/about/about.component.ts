import {Component} from "@angular/core";
import {ArchiveService} from "../archive/archive.service";
import {Archive} from "../archive/archive.enum";
import {LoadableComponent} from "../loader/abstract.loadable.component";
import {LoaderService} from "../loader/loader.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends LoadableComponent {

    constructor(private searchService: ArchiveService,
                loaderService: LoaderService) {
        super(loaderService);
    }

    init() {
        this.loaded();
        this.searchService.activate(Archive.article);
    }

}
