
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild ,OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit,AfterViewInit{
      title = 'NewsProject';
  sources: any = []; //Sources And Apis
  articles:any = [];
  selectedNewsChannel: string="Top 10 Trending News!";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  ngOnInit(): void { // fetches The Sources From The API
    this.newsApi.initArticles().subscribe((res:any)=>{
      console.log(res);
      this.articles = res.articles;
    })
    this.newsApi.initSources().subscribe((res:any)=>{
      console.log(res);
      this.sources = res.sources;
    })

  }
  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef, private newsApi : NewsService){

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])//obeserves to check for Sidebar
    .subscribe((res)=>{
      if(res?.matches){
        this.sideNav.mode="over";
        this.sideNav.close();
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    })
    this.cd.detectChanges();
  }
  searchSource(source:any){
    this.newsApi.getArticlesByID(source.id)
    .subscribe((res:any)=>{
      this.selectedNewsChannel = source.name
      this.articles = res.articles;
    })
  }



}
