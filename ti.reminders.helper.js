if (OS_IOS) {
  var notify = require('bencoding.localnotify');
} else {
  var notifyManager = require('bencoding.alarmmanager');
  var notify = notifyManager.createAlarmManager();
}

function scheduleReminder(args) {
  if (OS_IOS) {
    notify.scheduleLocalNotification({
      alertBody: args.alert,
      alertAction: args.action,
      userInfo: {
        "id": args.id
      },
      date: args.date
    });
  } else {
    notify.addAlarmNotification({
      requestCode:args.id,
      // icon: Ti.App.Android.R.drawable.appicon, //Optional icon must be a resource id or url
      year: args.date.getFullYear(),
	    month: args.date.getMonth(),
	    day: args.date.getDate(),
  		hour: args.date.getHours(),
  		minute: args.date.getMinutes(),
      contentTitle: args.title, //Set the title of the Notification that will appear
      contentText: args.alert, //Set the body of the notification that will apear
      showLights: true,
      vibrate: true
    });
  }
}

function cancelReminder(args) {
    if(OS_IOS){
      notify.cancelLocalNotificationByKey("id", args.id);
    } else {
      notify.cancelAlarmNotification(args.id);

    }
}

function cancelAllReminders(args) {
  if(OS_IOS) {
    notify.cancelAllLocalNotifications();
  } else {

  }
}

function updateReminder(args) {
  if(OS_IOS) {
    cancelReminder({id:args.id});
    scheduleReminder(args);
  } else {
    scheduleReminder(args);
  }
}

exports.updateReminder = updateReminder;
exports.scheduleReminder = scheduleReminder;
exports.cancelReminder = cancelReminder;
exports.cancelAllReminders = cancelAllReminders;
