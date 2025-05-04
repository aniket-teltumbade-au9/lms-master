"use client"; // ✅ Ensures this runs only on the client

import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import dynamic from "next/dynamic";
import * as React from 'react';
import { dateFnsLocalizer, EventProps } from "react-big-calendar"; // ✅ Keep this static
import "react-big-calendar/lib/css/react-big-calendar.css";

const Calendar = dynamic(
    () => import("react-big-calendar").then((mod) => mod.Calendar),
    { ssr: false } // ✅ Load only on the client
);

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function LMSCalendar({ events = [] }: LMSCalendarType) {
    const [minTime, maxTime] = React.useMemo(() => {
        if (events.length === 0) return [new Date().setHours(8, 0, 0), new Date().setHours(18, 0, 0)];

        const startTimes = events.map((event) => new Date(event.start).getHours());
        const endTimes = events.map((event) => new Date(event.end).getHours());

        return [new Date().setHours(Math.min(...startTimes), 0, 0), new Date().setHours(Math.max(...endTimes), 0, 0)];
    }, [events]);
    if (!events.length) return <p>No classes are scheduled for this week</p>
    return (
        <Calendar
            localizer={localizer}
            events={events || []}
            style={{ height: 500 }}
            defaultView='week'
            view='week'
            min={new Date(minTime)} // ✅ Show only rows with events
            max={new Date(maxTime)} // ✅ Hide empty rows
            components={{
                toolbar: () => null, // ✅ Hide view buttons
                event: CustomEvent,  // ✅ Custom event styling
                timeGutterHeader: () => <div className="first-column-header">Time</div>,
            }}
        />
    )
}
const CustomEvent: React.FC<EventProps<object>> = ({ event }) => (
    <div className="custom-event">
        {(event as EventsListType).title}
    </div>
);

export default LMSCalendar

interface EventsListType {
    start: Date;
    end: Date;
    title: string
}
interface LMSCalendarType {
    events?: EventsListType[]
}