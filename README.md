# Unix to Human Timestamp

## Project Intro/Objective
This project converts the Unix Epoch time to human readable timestamp.

Example :

<strong>Epoch Timestamp (in seconds):</strong> 1601623067

<strong>Date and Time (GMT):</strong> Friday, 2 October 2020 07:17:47


### Technologies
* HTML
* CSS
* Javascript

## Project Description

### What is Unix Epoch Time ?
The <strong>Unix epoch</strong> (or <strong>Unix Time</strong> or <strong>POSIX time</strong> or <strong>Unix timestamp</strong>) is the number of seconds that have elapsed since January 1, 1970(midnight UTC/GMT), not counting leap seconds(an additional second is added to the TAI when the velocity of Earth's rotation around it's axis does not match the speed of atomic time). Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. 

### JavaScript Algorithm

```
var myDate = new Date( your epoch date *1000);
document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
```
### Calculation Table
* 1 min = 60s
* 1 hour = 3600s
* 1 day = 86400s
* 1 month = 2629743s
* 1 year = 31556926s

### Manual Calculation
1. Let the unix epoch be 1601623067.
2. 1601623067 / 31556926 = 50.753456372778516 -> 50 years -> 1970+50 = 2020
3. 1601623067 % 31556926 = 23776767 / 2629743 = 10 months
3. 109080 / 86400 = 2 days
4. 1601623067 % 86400 = 7.296388888888889 -> 7 hours
....

## Featured Links
* [Epoch Converter](https://www.epochconverter.com)
* [Epoch to Timestamp Manual Calculation](https://www.jotform.com/help/443-Mastering-Date-and-Time-Calculation)

## Contributers
* [Vasu Bhadra](https://github.com/datablogger-ml)
* [Pranshu Pranjal](https://github.com/pranshupranjal)
