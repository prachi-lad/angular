import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  invitationsData: [] = [];
  invitationsUpdateData: [] = [];
  count: number = 0;
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.getInvitationsJson().subscribe(data => {
      this.invitationsData = data.invites;
    });
    this.getInvitationsUpdateJson().subscribe(data => {
      this.invitationsUpdateData = data.invites;
    });
    setInterval(() => {
      this.invitationsData.push(this.invitationsUpdateData[this.count])
      this.count++;
    }, 5000)
  }
  public getInvitationsJson(): Observable<any> {
    return this.http.get("../../../assets/json/invitations.json");
  }
  public getInvitationsUpdateJson(): Observable<any> {
    return this.http.get("../../../assets/json/invitations_update.json");
  }
  async logout() {
    await localStorage.removeItem("userInfo");
    if (!localStorage.getItem('userInfo')) {
      this.router.navigate([""])
    }
  }
}
