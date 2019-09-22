import { Component } from '@angular/core';

import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  current = "JK";

  burstatus = "no";

  menu () {

    var burger = document.getElementById("hamburger");
    
    var menu = document.getElementById('mobilemenu');

    var links = document.getElementById('links2');

    var tween;

    if (this.burstatus === "no") {
      TweenMax.to(burger, 0, {transform: "rotate(-90deg)"})
      TweenMax.to(menu, 0, {width: "100%"})
      TweenMax.to(menu, 0, {height: "100vh"})
      TweenMax.to(links, 0, {visibility: "initial", delay: 1})
      
      this.burstatus = "yes";
    }

    else if (this.burstatus === "yes") {
      TweenMax.killTweensOf(links);
      TweenMax.to(links, 0, {visibility: "hidden"})
      TweenMax.to(burger, 0, {transform: "rotate(0deg)"})
      TweenMax.to(menu, 0, {width: "0%"})
      TweenMax.to(menu, 0, {height: "0vh"})
      
      this.burstatus = "no"
    }

    
  }


  constructor () {


    document.addEventListener("scroll", () => {

      var arrow = document.getElementById("arrow");

      if (window.pageYOffset >= document.getElementById("contactwrap").offsetTop) {
        TweenMax.to(arrow, 0.5, {transform: "rotate(-90deg)"})
      }

      else {TweenMax.to(arrow, 0.5, {transform: "rotate(0deg)"})}

      var links = document.getElementsByClassName("link");

      if (pageYOffset > 100) {
        

        TweenMax.to(links, 0.2, {opacity: 0});
      }

      else {
        TweenMax.to(links, 0.2, {opacity: 1});
      }
      
      var root = document.body;

      if (window.pageYOffset >= 0 && window.pageYOffset < document.getElementById("mewrap").offsetTop ) {
        this.current = "JK";
        root.style.setProperty('--color1', "#2c2a2a");
        root.style.setProperty('--color2', "#f94444");
       
      }

      else if (window.pageYOffset >= document.getElementById("mewrap").offsetTop && window.pageYOffset < document.getElementById("skillswrap").offsetTop ) {
        this.current = "Minä";
        root.style.setProperty('--color1', "#2c2a2a");
        root.style.setProperty('--color2', "#f94444");

      }

      else if (window.pageYOffset >= document.getElementById("skillswrap").offsetTop && window.pageYOffset < document.getElementById("cvwrap").offsetTop ) {
        this.current = "Taidot";
        

        root.style.setProperty('--color1', "#2c2a2a");
        root.style.setProperty('--color2', "#f94444");
      }

      else if (window.pageYOffset >= document.getElementById("cvwrap").offsetTop && window.pageYOffset < document.getElementById("interestswrap").offsetTop ) {
        this.current = "CV";


        root.style.setProperty('--color1', "#f94444");
        root.style.setProperty('--color2', "#f2efe8");
      }

      else if (window.pageYOffset >= document.getElementById("interestswrap").offsetTop && window.pageYOffset < document.getElementById("contactwrap").offsetTop ) {
        this.current = "Kiinnostukset";
        root.style.setProperty('--color1', "#f94444");
        root.style.setProperty('--color2', "#f2efe8");
      }

      else if (window.pageYOffset >= document.getElementById("contactwrap").offsetTop) {
        this.current = "Yhteys";
        root.style.setProperty('--color1', "#f94444");
        root.style.setProperty('--color2', "#f2efe8");
      }

    })


    document.addEventListener("mousemove", function (e) {

       

        var circle = document.getElementById("circle");
  
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        //circle.style.top = mouseY + "px";
        //circle.style.left = mouseX + "px";

        //console.log(e)

        TweenMax.to(circle, 0.5, {top: mouseY-20 + "px", left: mouseX-20 + "px"});

    })

  }

  title = 'app';
}
