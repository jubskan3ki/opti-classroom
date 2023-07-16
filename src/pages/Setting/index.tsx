import React from 'react'
import style from './Setting.module.css'
import Image from 'next/image';
import SettingImg from '../../Asset/svg/Setting.svg';

export default function Setting() {
	return (
		<div className={style.SettingContent}>
			<h1>Setting</h1>
			
			<Image src={SettingImg} alt='Setting'/>
			
		</div>
	)
}
