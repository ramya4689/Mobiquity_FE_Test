import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  city: string;
  seaLevel: any;
  temp: any;

  constructor(private route: ActivatedRoute, public allSvc : AllServicesService) { }

  ngOnInit(): void {
    
    this.city = this.route.snapshot.paramMap.get('city');
    this.allSvc.getDetailedData(this.city).subscribe((res: any) => {
        if(res && res.list){
          for(let val of res.list){
            if(val.dt_txt.substring(11,13) === '21' && val.main) {
              this.seaLevel = val.main.sea_level;
              this.temp = val.main.temp
            }
          }
        }

    })
  }

}
