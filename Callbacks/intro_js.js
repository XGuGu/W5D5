class Clock {
  constructor() {
    const start = new Date();
    this.hours = start.getHours();
    this.mins = start.getMinutes();
    this.secs = start.getSeconds();
    this.printTime(this.hours, this.mins, this.secs);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  // function doStuff() {
  //
  // }
  //
  // const func = function() {
  //
  // }
  // func()
  //
  // const func = () => stuff

  printTime(hours, mins, secs) {
    let time = `${hours}:${mins}:${secs}`;
    console.log(time);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.secs += 1;
    if (this.secs >= 60) {
      this.secs = 0;
      this.incrMin();
    }
    this.printTime(this.hours, this.mins, this.secs);
  // window.setTimeout(this.printTime(), 1000);
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }

  incrMin() {
    this.mins += 1;
    if (this.mins >= 60) {
      this.mins = 0;
      this.incrHour();
    }
  }

  incrHour() {
    this.hours = (this.hours + 1) % 24;
    }
  }

const clock = new Clock();

// clock.printTime();
