'use client'

import { parseDate } from '@internationalized/date'
import { Button, Card, CardHeader } from '@nextui-org/react'
import { formatDate } from 'date-fns'
import { SyntheticEvent, useState } from 'react'
import ApiCalendar from 'react-google-calendar-api'

interface UpcomingEvent {
  end: { date?: string; dateTime?: string }
  start: { date?: string; dateTime?: string }
  summary: string
}

export default function GoogleCalendar() {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const config = {
    clientId:
      '571014604082-3o2e2ph30oabeofcdqk123mbrin2rhq4.apps.googleusercontent.com',
    apiKey: 'AIzaSyAK8QWZXguAgvd5WVfIBCdsCQ29BACT8CA',
    scope: 'https://www.googleapis.com/auth/calendar',
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ],
  }

  const apiCalendar = new ApiCalendar(config)

  const loadEvents = () => {
    apiCalendar.listUpcomingEvents(30).then(({ result }: any) => {
      setUpcomingEvents(result.items)
    })
  }

  const handleItemClick = (_event: SyntheticEvent<any>, name: string): void => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick().then(() => {
        loadEvents()
      })
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick()
    }
  }

  return (
    <>
      {upcomingEvents && upcomingEvents.length ? (
        <>
          <h4 className="font-bold text-2xl mb-3">Upcoming Events</h4>
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {upcomingEvents.map((upcomingEvent: UpcomingEvent) => (
              <Card className="py-3 mb-3">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  {upcomingEvent.start &&
                  (upcomingEvent.start.date || upcomingEvent.start.dateTime) ? (
                    <small className="text-default-500">
                      {formatDate(
                        upcomingEvent.start.date ||
                          upcomingEvent.start.dateTime,
                        'M/dd/yyyy',
                      )}
                    </small>
                  ) : undefined}

                  <h4 className="font-bold text-large">
                    {upcomingEvent.summary}
                  </h4>
                </CardHeader>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="flex h-full justify-center text-center pt-10">
          <div className="p-5 bg-green-100">
            <p className="text-large font-bold mb-3">
              Log in to view upcoming events.
            </p>
            <Button
              onClick={(e) => handleItemClick(e, 'sign-in')}
              color="primary"
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
