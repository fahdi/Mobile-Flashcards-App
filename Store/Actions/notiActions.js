import Types from "../const/Types";
import { AsyncStorage, Platform } from "react-native";
import { Constants, Notifications, Permissions } from 'expo';

export const SaveQuizDate = () => {
    return dispatch => {
        const currentDate = new Date();
        const fullDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
        AsyncStorage.setItem("QuizAttemptedDate", JSON.stringify(fullDate), (err, data) => {
            if (!err) {
                dispatch({ type: Types.saveQuizDate, d: fullDate })
            }
        })
    }
}

export const QuizAttemptedToday = () => {
    let currentDate = new Date()
    currentDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
    return AsyncStorage.getItem('QuizAttemptedDate', (err, data) => {
        return (JSON.parse(data) === currentDate) ? true : false
    })
}


export const SetNotifications = () => {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (Constants.isDevice && status === 'granted') {
                console.log('Notification permissions granted.')

                Notifications.cancelAllScheduledNotificationsAsync()
                    .then((result) => {
                        console.log("All notification cancelled initially", result)
                        const handleNotification = ({ notificationId }) => {
                            this.QuizAttemptedToday()
                                .then((result) => {
                                    (result) && Notifications.dismissNotificationAsync(notificationId)
                                })
                        }
                        Notifications.addListener(handleNotification);

                        if (Platform.OS === 'android') {
                            Notifications.createChannelAndroidAsync('reminder', {
                                name: 'reminder',
                                sound: true,
                                vibrate: true,
                                priority: 'max',
                            })
                        }
                        const localNotification = {
                            title: 'Reminder for quiz',
                            body: `Seems like you didn't study today!, want to study? open app now`,
                            ios: { sound: true, },
                            android: {
                                channelId: 'reminder',
                                color: "black",
                            }
                        };

                        let notificationTime = new Date()
                        let currTime = notificationTime.getTime()
                        notificationTime.setHours(9, 0, 0)
                        scheduleTime = notificationTime.getTime()
                        if (currTime > scheduleTime) {
                            scheduleTime = scheduleTime + 86400000
                        }

                        const schedulingOptions = {
                            time: scheduleTime,
                            repeat: 'day'
                        }

                        Notifications.scheduleLocalNotificationAsync(
                            localNotification, schedulingOptions
                        );
                    })
            }
        })
}