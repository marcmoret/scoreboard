import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

readonly ROOT_URL = 'https://scoreboard-ffd72.firebaseio.com';

constructor(private http: Http){}

storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://scoreboard-ffd72.firebaseio.com/test.json', servers, {headers: headers});
   // return this.http.post('https://scoreboard-ffd72.firebaseio.com/test/-LXC3m518tx5vEsOQidE.json', servers)
}


getServers(){
    return this.http.get( this.ROOT_URL + '/test.json').map(
        (response: Response) => {
            const data = response.json();
            console.log('new data crap: ' + data);
            return data;
        }
    );
}

storeDates(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://scoreboard-ffd72.firebaseio.com/dates.json', servers, {headers: headers});
   // return this.http.post('https://scoreboard-ffd72.firebaseio.com/test/-LXC3m518tx5vEsOQidE.json', servers)
}

getDates(){
    return this.http.get( this.ROOT_URL + '/date.json').map(
        (response: Response) => {
            const data = response.json();
            console.log('new data crap: ' + data);
            return data;
        }
    );
}

}