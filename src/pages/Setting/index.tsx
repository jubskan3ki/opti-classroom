import React from 'react'
import style from './Setting.module.css'
import Image from 'next/image';
import SettingImg from '../../Asset/svg/Setting.svg';
import Input from '../../../components/Input/Input'
import { Switch } from '@nextui-org/react';
import Button from '../../../components/Button/Button'
import Avatar from '../../Asset/svg/Avatar.svg';
import backSetting from '../../Asset/svg/backSetting.svg';

export default function Setting() {
	return (
		<div className={style.SettingContent}>
			<div className={style.SettingCard}>
				<div className={style.SettingDivImg}>
					<Image src={backSetting} className={style.backSetting} alt='backSetting'/>
					<Image src={Avatar} className={style.SettingAvatar} alt='Avatar'/>
				</div>
				<div className={style.SettingCardContent}>
					<Input placeholder="Entrez votre nom" />
					<Input placeholder="Adresse email" />
					<Input placeholder="Mots de passe" />
					<Input placeholder="Confirme ton mots de passe" />
					<div>
						<Switch />
						<span>Rester connecter ?</span>
					</div>
					<Button text="Mettre a Jour" />
					<Button text="Supprime" />
				</div>
			</div>
			
			<Image src={SettingImg} alt='Setting'/>
			
		</div>
	)
}
