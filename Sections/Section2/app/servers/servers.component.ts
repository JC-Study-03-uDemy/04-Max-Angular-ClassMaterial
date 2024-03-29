import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No server was created'
  serverName: string = ''
  serverCreated: boolean = false
  servers: any = ['Server 1','Server 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created ' + this.serverName  
  }

  onUpdateServerName(e: any) {
    console.log(e)
    this.serverName = (<HTMLInputElement>e.target).value
  }
}
