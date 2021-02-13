import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor() {}
  ngOnInit(): void {
    function autoType(elementClass, typingSpeed) {
      var thhis = $(elementClass);
      thhis.css({
        position: 'relative',
        display: 'inline-block',
      });
      thhis = thhis.find('.text-js');
      var text = thhis.text().trim().split('');
      var amntOfChars = text.length;
      var newString = '';
      thhis.text('|');
      setTimeout(function () {
        thhis.css('opacity', 1);
        thhis.prev().removeAttr('style');
        thhis.text('');
        for (var i = 0; i < amntOfChars; i++) {
          (function (i, char) {
            setTimeout(function () {
              newString += char;
              thhis.text(newString);
            }, i * typingSpeed);
          })(i + 1, text[i]);
        }
      }, 1500);
    }

    $(document).ready(function () {
      autoType('.type-js', 200);
    });
  }
}
