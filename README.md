# Unix to Human Timestamp

## Project Intro/Objective
This project converts the Unix Epoch time to human readable timestamp.

Example :

<strong>Epoch Timestamp (in seconds):</strong> 1601623067

<strong>Date and Time (GMT):</strong> Friday, 2 October 2020 07:17:47

### Methods Used
*
*
*

### Technologies
* HTML
* CSS
*

## Project Description

### What is Unix Epoch Time ?
The <strong>Unix epoch</strong> (or <strong>Unix Time</strong> or <strong>POSIX time</strong> or <strong>Unix timestamp</strong>) is the number of seconds that have elapsed since January 1, 1970(midnight UTC/GMT), not counting leap seconds(an additional second is added to the TAI when the velocity of Earth's rotation around it's axis does not match the speed of atomic time). Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. 

### Calculation
1. Let the unix epoch be X.
2. Number of seconds in a day = 24x60x60 = 86400s
3. X/(24x60x60) = X/86400 converts seconds to days
4. A time offset value is added to this because of the different starting points for counting the seconds (depends on the software).eg.Java and Unix/Linux start from 1/1/1970 while Excel starts from 1/1/1900.


## Featured Links
* [Epoch Converter](https://www.epochconverter.com)
* [Epoch to Timestamp Manual Calculation](https://www.quora.com/How-do-I-convert-epoch-time-to-a-date-manually)
