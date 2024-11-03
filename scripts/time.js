import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

export default function time(timezoneValue){
    
    let time = new Date();
    const today = dayjs()
   
    const hours = time.getHours();
    //let difference = time.getTimezoneOffset()

   let universalTime  = dayjs().subtract(60, 'm');
  // console.log( `universal time is: ${universalTime}`)

   let timeZoneDifference;
   switch(timezoneValue){
    case -43200:
        timeZoneDifference = -12;
        break;
    
    case -39600:
        timeZoneDifference = -11;
        break;

    case -36000:
        timeZoneDifference = -10;
        break;

    case -34200:
        timeZoneDifference = -9.30;
        break;

    case -32400:
        timeZoneDifference = - 9;
        break;

    case -28800:
        timeZoneDifference = -8;
        break;

    case -25200:
        timeZoneDifference = -7;
        break;

    case -21600:
        timeZoneDifference = -6;
        break;

    case -18000:
        timeZoneDifference = -5;
        break;

    case -16200:
        timeZoneDifference = -4.30;
        break;

    case -14400:
        timeZoneDifference = -4;
        break;

    case -12600:
        timeZoneDifference = -3.30;
        break;

    case -10800:
        timeZoneDifference = -3;
        break;

    case -12600:
        timeZoneDifference = -3.30;
        break;

    case -7200:
        timeZoneDifference = -2;
        break;

    case -3600:
        timeZoneDifference = -1;
        break;

    case 0:
        timeZoneDifference = 0;
        break;

    case 3600:
        timeZoneDifference = 1;
        break;

    case 7200:
        timeZoneDifference = -2;
        break;

    case 10800:
        timeZoneDifference = 3;
        break;

    case 12600:
        timeZoneDifference = 3.30;
        break;

    case 14400:
        timeZoneDifference = 4;
        break;

    case 16200:
        timeZoneDifference = 4.30;
        break;

    case 18000:
        timeZoneDifference = 5;
        break;

    case 19800:
        timeZoneDifference = 5.30;
        break;

    case 20700:
        timeZoneDifference = 5.45;
        break;

    case 21600:
        timeZoneDifference = 6;
        break;

    case 23400:
        timeZoneDifference = 6.30;
        break;

    case 25200:
        timeZoneDifference = 7;
        break;

    case 28800:
        timeZoneDifference = 8;
        break;

    case 32400:
        timeZoneDifference = 9;
        break;

    case 34200:
        timeZoneDifference = 9.30;
        break;

    case 36000:
        timeZoneDifference = 10;
        break;

    case 37800:
        timeZoneDifference = 10.30;
        break;

    case 39600:
        timeZoneDifference = 11;
        break;

    case 41400:
        timeZoneDifference = 11.30;
        break;

    case 43200:
        timeZoneDifference = 12;
        break;

    case 45900:
        timeZoneDifference = 12.45;
        break;

    case 46800:
        timeZoneDifference = 13;
        break;

    case 50400:
        timeZoneDifference = 14;
        break;
    default:
        timeZoneDifference = 0;
   }

   const cityHour = dayjs().add(timeZoneDifference, 'h')
   let dataString = cityHour.$d
   let timeOfDay = dataString.getHours()

   let isDay = (timeOfDay > 9 && timeOfDay < 19) ? true : false;
    return isDay;
}