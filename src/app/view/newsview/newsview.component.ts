import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild ,OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-newsview',
  templateUrl: './newsview.component.html',
  styleUrls: ['./newsview.component.scss']
})
export class NewsviewComponent implements OnInit {
  title = 'NewsProject';
  sources: any = [];
  articles:any = [];
  selectedNewsChannel: string="Top 10 Trending News!";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  ngOnInit(): void {
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
    this.observer.observe(['(max-width:800px)'])
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

  

}}
