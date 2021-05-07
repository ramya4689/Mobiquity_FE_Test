import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  cities = ["Madison", "London", "Lima", "Dallas", "Topeka"];
  totalData = [];
  constructor(public allSvc: AllServicesService) { }

  ngOnInit(): void {
    for(let value of this.cities){
      this.allSvc.getData(value).subscribe((res : any) => {
        if(res && res.main && res.sys)
          var sunriseTime = new Date(res.sys.sunrise * 1000);
          var offset = 10.5; 
          var offsetTimeCal = new Date((sunriseTime.getTime() - (offset*3600000)));
        
          var sunsetTime = new Date(res.sys.sunset * 1000);
          var offsetTimeCal1 = new Date((sunsetTime.getTime() - (offset*3600000)));

          this.totalData.push(
          { "city": value , 
            "temp": res.main.temp, 
            "sunrise": offsetTimeCal.getHours() + ':'+ offsetTimeCal.getMinutes() + ' AM', 
            "sunset":  offsetTimeCal1.getHours() + ':'+ offsetTimeCal1.getMinutes() + ' PM' 
          })
          // for sunrise and sunset - i have taken cities where offset time as 10hrs 30min so given offset as 10.5 to calculate the time difference
      })
    }
  }

}
