import { notification } from 'antd';

export const openSuccessNotification = (type, message) => {
    notification[type]({
        message: message,
    });
};

export const openErrorNotification = (type, message) => {
    notification[type]({
        message: message,
    });
};
