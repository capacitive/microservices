import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demoApp';
  response = 'No data loaded, yet.';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:9090/demo', {responseType: 'text'}).subscribe((response: any) => {
      console.log(response);
      this.response = response;
    });
  }
}
