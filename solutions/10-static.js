class Time {
    static fromString(str) {
      const [hours, minutes] = str.split(':').map(Number);
      return new Time(hours, minutes);
    }
  
    constructor(hours, minutes) {
      this.hours = hours;
      this.minutes = minutes;
    }
  
    toString() {
      return `${this.hours}:${this.minutes}`;
    }
  }
  
  const time = new Time(10, 15);
  console.log(`The time is ${time}`); 
  
  const fromStringTime = Time.fromString('10:23');
  console.log(`The time is ${fromStringTime}`); 
  
  export default Time;