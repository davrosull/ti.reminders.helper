# Reminders/Local Notify
CommonJS module providing a one-in-all for setting local notication/reminders for iOS and Android.

## Why?
To make it easier!

## How?
The module uses [benCoding.AlarmManager](https://github.com/benbahrenburg/benCoding.AlarmManager) and [benCoding.localNotify](https://github.com/benbahrenburg/LocalNotify). You need to download these yourself, add both modules to your `tiapp.xml`.

### Learn by example:

```
var remindersHelper = require('ti.reminders.helper');
    remindersHelper.scheduleReminder({
        id: 1,
        title: 'Reminder',
        alert: 'This is your reminder',
        action: 'view the reminder'
        date: new Date()
      });

    remindersHelper.cancelReminder({
        id:1
      })

```
