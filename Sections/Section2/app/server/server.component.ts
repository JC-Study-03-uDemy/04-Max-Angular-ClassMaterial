import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10
  serverStatus: string = 'offLine'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offLine'
   }

  ngOnInit(): void {
  }

  getColor () {
    return this.serverStatus === 'onLine' ? 'green' : 'red'
  }

  getServerStatus () {
    return this.serverStatus
  }
}
