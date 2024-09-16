import Calendar from '@ericz1803/react-google-calendar'

let calendars = [{ calendarId: 'amFjcWJlbmNpQGdtYWlsLmNvbQ' }]

export default function GoogleCalendar() {
  return (
    <div>
      <Calendar apiKey={process.env.GOOGLE_API_KEY} calendars={calendars} />
    </div>
  )
}
