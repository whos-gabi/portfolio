import { Component } from '@angular/core';
import { Jobs } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  jobs: Jobs[] = [
    {
      id: 1,
      title: 'Front End Developer',
      company: 'Freelance',
      interval: '2019 - Present',
      descriptionParagraph: [
        "ive been working on a few projects, mostly for friends and family. I've been using Angular, React, and Vue. I've also been working on a few Wordpress sites.",
        "I also have a few projects that I'm working on that I hope to launch soon.",
      ],
    },
    {
      id: 2,
      title: 'Front End Developer',
      company: 'Freelance',
      interval: '2019 - Present',
      descriptionParagraph: [
        "ive been working on a few projects, mostly for friends and family. I've been using Angular, React, and Vue. I've also been working on a few Wordpress sites.",
        "I also have a few projects that I'm working on that I hope to launch soon.",
      ],
    },
  ];
  constructor() {
    console.log('AppComponent constructor');
  }
}
