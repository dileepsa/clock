const fs = require('fs');

const div = (classes, content) => `<div class=${classes}>${content}</div>`;

const meta = (httpEquiv, content) => `<meta http-equiv=${httpEquiv} content=${content}>`;

const link = (rel, href) => `<link rel=${rel} href=${href}>`;

class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }

  toHtml() {
    const refresh = meta('refresh', 1);
    const linkTag = link('stylesheet', './styles.css');
    const hours = div('box', this.hours);
    const minutes = div('box', this.minutes);
    const seconds = div('box', this.seconds);
    const time = div('time', hours + minutes + seconds);
    return refresh + linkTag + time;
  }
}

setInterval(() => {
  const currentTime = new Clock();
  fs.writeFileSync('index.html', currentTime.toHtml(), 'utf-8');
}, 1000);