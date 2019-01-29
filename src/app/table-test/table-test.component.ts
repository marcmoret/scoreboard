import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';



@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {
 
  users: User[] = [];
   
constructor(private db : AngularFireDatabase){}

  ngOnInit() {
  var x = this.db.list('dates');
  x.snapshotChanges().subscribe(item =>{
    item.forEach(element =>{
      var y = element.payload.toJSON();
      y["$key"] = element.key;
      this.users.push(y as User);
      this.users.reverse();
      console.log(y);
    })
  })
  }

}
interface User {
  date: number;
 
}
