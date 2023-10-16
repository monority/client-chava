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
        }
    } catch (error) {
        console.log(error);
    }
};

export const userById = async (id, setData, data) => {
    try {
        const { data } = await axios.get(`/getuser/${id}`);
        if (data.error) {
            return null;
        } else {
            setData(data);
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const scanPetSitter = async (user, setCheck, check) => {
    try {
        const { data } = await axios.get(`/getbooleanpet/${user?._id}`);
        if (data.error) {
            return null
        } else {
            setCheck(data)


        }
    } catch (error) {
        console.error('Erreur serveur', error);
    }
}