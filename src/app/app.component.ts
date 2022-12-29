import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'netlify-mail';

  ngOnInit(): void {
    const data = {
      subscriberName: 'lini',
      subscriberEmail: 'vitocorleone77@gmail.com',
    };
    //call to the Netlify Function you created
    fetch('./.netlify/functions/triggerSubscribeEmail', {
      method: 'POST',
      body: JSON.stringify({
        subscriberName: data.subscriberName,
        subscriberEmail: data.subscriberEmail,
        inviteeEmail: 'anmeldungen@schlosswochen.ch',
      }),
    });
  }
}
