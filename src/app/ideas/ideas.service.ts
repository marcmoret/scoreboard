import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

constructor(private http: Http){}

storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://scoreboard-ffd72.firebaseio.com/data.json', servers);
   // return this.http.post('https://scoreboard-ffd72.firebaseio.com/data.json', servers);
}



getServers(){
    return this.http.get('https://scoreboard-ffd72.firebaseio.com/data.json').map(
        (response: Response) => {
            const data = response.json();
            for (const server of data){
                server.name = server.id;
            }
            return data;
        }
    );
}

}