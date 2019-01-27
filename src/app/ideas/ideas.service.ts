import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

constructor(private http: Http){}

storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://scoreboard-ffd72.firebaseio.com/test.json', servers);
   // return this.http.post('https://scoreboard-ffd72.firebaseio.com/test/-LXC3m518tx5vEsOQidE.json', servers)
}



getServers(){
    return this.http.get('https://scoreboard-ffd72.firebaseio.com/test.json').map(
        (response: Response) => {
            const data = response.json();
            // for (const server of data){
            //     server.name = 'new shit: ' + server.name;
                
            // }
            console.log('new data crap: ' + data);
            return data;
        }
    );
}


  

}