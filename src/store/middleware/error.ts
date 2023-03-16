import { isRejected } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const errorHandling =
    (): any =>
        (next: any) =>
            async (action: { error: { message: string } }): Promise<any> => {
                if (isRejected(action)) {
                    toast.error(action.error.message);
                }
                return next(action);
            };

export default errorHandling;