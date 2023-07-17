import React from 'react';
import { useRouter } from 'next/router';
import Back from '../index';
import Modal from '../../../../components/Modal/Modal';

export default function Plannig() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Back />
            <Modal ToBack='/Planning'>
                <h1>{slug}</h1>
            </Modal>
        </>
    );
}