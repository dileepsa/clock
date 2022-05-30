const div = (classes, content) => `<div class=${classes}>${content}</div>`;

class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }

  toHtml() {
    const hours = div('hours', this.hours);
    const minutes = div('minutes', this.minutes);
    const seconds = div('seconds', this.seconds);
    return hours + minutes + seconds;
  }
}

setInterval(() => {
  const currentTime = new Clock();
  console.log(currentTime.toHtml());
}, 1000);