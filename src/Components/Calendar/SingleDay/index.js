import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

import useStyles from '../styles';

const myCustomLocale = {
  // months list by order
  months: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],

  // week days by order
  weekDays: [
    {
      name: 'domingo', // used for accessibility
      short: 'Dom', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: 'Segunda',
      short: 'Lun',
    },
    {
      name: 'Terça',
      short: 'Mar',
    },
    {
      name: 'Quarta',
      short: 'Mié',
    },
    {
      name: 'Quinta',
      short: 'Jue',
    },
    {
      name: 'Sexta',
      short: 'Vie',
    },
    {
      name: 'Sábado',
      short: 'Sáb',
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit) {
    return digit;
  },

  // texts in the date picker
  nextMonth: 'Next Month',
  previousMonth: 'Previous Month',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Select...',

  // for input range value
  from: 'from',
  to: 'to',

  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};

const App = ({ selectedDay, setSelectedDay, type, ...rest }) => {
  const classes = useStyles();

  return (
    <Calendar
      calendarClassName={
        type && type === 2 ? classes.singleCalendar2 : classes.singleCalendar
      }
      value={selectedDay}
      onChange={setSelectedDay}
      locale={myCustomLocale}
      shouldHighlightWeeends
      {...rest}
    />
  );
};

export default App;
