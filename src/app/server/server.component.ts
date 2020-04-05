import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'yes';
  username = '';
  ngOnInit(): void {}
  getMethod2() {
    return this.serverStatus;
  }
  resetName() {
    this.username = '';
  }
}
