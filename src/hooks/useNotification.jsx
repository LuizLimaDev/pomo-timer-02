import { useEffect, useState } from 'react';

export default function useNotification() {
  const [notificationActive, setNotificationActive] = useState(false);
  const notification = Notification.permission;

  Notification.requestPermission();

  useEffect(() => {
    if (notification === 'granted') {
      setNotificationActive(true);
    }
  }, [notification]);

  return {
    notificationActive,
  };
}

