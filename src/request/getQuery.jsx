import React from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast'

export const usersBase = async (setData) => {
    try {
        const { data } = await axios.get(`/getallusers`);
        if (data.error) {
            toast.error(data.error);
        } else {
            setData(data);
            console.log(data)
        }
    } catch (error) {
        console.log(error);
    }
};

