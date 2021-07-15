import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {formatDate} from "@angular/common";
import {createComponent} from "@angular/compiler/src/core";

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  constructor(private service: Service,) { }

  // présente le boutton permettant d'initaliser le meeting
  // au clic: vérifie en bdd la présence ou non d'un meeting pour la date du jour
  // si oui => route vers user-list-component
  // si non => crée le meeting en bdd et lance la fonction d'initialisation de la usersMeetingList

  ngOnInit(): void {
  }

  initMeeting(){
  this.service.getLastMeeting().subscribe(lastMeeting => {
    let lastMeetingDate: string = new Date(lastMeeting.date).toISOString().substring(0, 10);
    console.log(lastMeetingDate)
    // comparison date of the day with date of the last meeting
    let today = new Date();
    let dateOfTheDay = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+today.getDate()
    console.log(dateOfTheDay)
    //si oui => route vers user-list-component
    if (lastMeetingDate==dateOfTheDay){
      // creation du meeting
      // @ts-ignore
      this.service.createMeeting({
        "id": 4,
        "date": '2019-06-11'

        //"date": new Date(2021)
      })
      ()
      console.log("elle est bonne la date")}

    //{location.assign('http://localhost:4200/meeting/')}


    //

  })

  }
}
