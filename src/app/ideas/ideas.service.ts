import { Injectable } from '@angular/core';
import 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class ServerService {



constructor(){}

}


/* dump old unused code

readonly ROOT_URL = 'https://scoreboard-ffd72.firebaseio.com';

private http: Http, private db: AngularFireDatabase, private i: Ideas

aliasI = [];
testIdeas: AngularFireList<any>;

storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(this.ROOT_URL + '/test.json', servers, {headers: headers});
   // return this.http.post('https://scoreboard-ffd72.firebaseio.com/test/-LXC3m518tx5vEsOQidE.json', servers)
}

getTest(){
    var x = this.db.list('test');
     x.snapshotChanges().subscribe(item =>{
        item.forEach(element =>{
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.aliasI = [y];
          this.aliasI.push(y as Ideas);
          console.log(y);
          console.log('new test2' + this.aliasI);

        })
      })
    console.log('service:' + this.aliasI);
    return this.aliasI;
}

getServers(){
    return this.http.get( this.ROOT_URL + '/test.json').map(
        (response: Response) => {
            var data = response.json();
            console.log('new data crap: ' + data);
            return data;
        }
    );
}

getIdeas(){
    this.testIdeas = this.db.list('test');
    return this.testIdeas.snapshotChanges();
}

insertIdea(i: Ideas){
    this.testIdeas.push({
        name: i.name1,
        idea2: i.idea1,
        time: i.time1,
    });
}

deleteIdea($key:string){
    this.testIdeas.remove($key);
}



}

*/


