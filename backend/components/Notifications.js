import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const socket = io('http://localhost:5000');

    useEffect(() => {
        socket.on('notification', notification => {
            setNotifications([...notifications, notification]);
        });

        return () => {
            socket.disconnect();
        };
    }, [notifications]);

    return (
        <div>
            {notifications.map((notification, index) => (
                <div key={index}>{notification.message}</div>
            ))}
        </div>
    );
};

export default Notifications;