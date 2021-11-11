import React from "react";


export default function Turnos() {

    var gapi = window.gapi
    /* 
      Update with your own Client Id and Api key 
    */
    var CLIENT_ID = "813286425411-7h5bc5fn6uds2knojuadcn29hb6508nl.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBwDfpwNZ75LaoDbz7xNe18jvSqE4g_ang"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

   const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2021-11-10T09:00:00-07:00',
            'timeZone': 'America/Argentina/Buenos_Aires'
          },
          'end': {
            'dateTime': '2021-11-10T09:30:00-07:00',
            'timeZone': 'America/Argentina/Buenos_Aires'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        var request = gapi?.client?.calendar?.events?.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request?.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
        

        /*
            Uncomment the following block to get events
        */
     
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
      
    

      })
    })
  }

    return (<>

        <h1>Turnos</h1>



        <input type="date"></input>
        <input type="time"></input>

        <select >
            <option>Dia 15/11/2021 </option>
            <option>Dia 16/11/2021 </option>
            <option>Dia 17/11/2021 </option>
            <option>Dia 18/11/2021 </option>
            <option>Dia 19/11/2021 </option>
           
        </select>
        <select >
            <option> 09:00 </option>
            <option> 09:30 </option>
            <option> 10:00 </option>

           
        </select>

        <button style={{ width: 100, height: 50 }} onClick={handleClick}>Add Event</button>


    </>)

}