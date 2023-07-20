import React, { useState } from 'react';
import style from './Setting.module.css';
import Image from 'next/image';
import SettingImg from '../../Asset/svg/Setting.svg';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Avatar from '../../Asset/svg/Avatar.svg';
import backSetting from '../../Asset/svg/backSetting.svg';

interface SettingProps {
    user: {
        name: string;
        email: string;
    };
}

export default function Setting({ user }: SettingProps) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUpdateClick = () => {
        console.log("Nom:", name);
        console.log("Email:", email);
        console.log("Mot de passe:", password);
        console.log("Confirme le mot de passe:", confirmPassword);
    };

    return (
        <div className={style.SettingContent}>
            <div className={style.SettingCard}>
                <div className={style.SettingDivImg}>
                    <Image src={backSetting} className={style.backSetting} alt='backSetting' />
                    <Image src={Avatar} className={style.SettingAvatar} alt='Avatar' />
                </div>
                <div className={style.SettingCardContent}>
                    <Input 
                        placeholder="Entrez votre nom" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        placeholder="Adresse email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Mots de passe"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Input 
                        placeholder="Confirme ton mots de passe"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        type="password"
                    />
                    <Button text="Mettre a Jour" onClick={handleUpdateClick} />
                    <Button text="Supprime" />
                </div>
            </div>

            <Image className={style.ImgLeft} src={SettingImg} alt='Setting' />

        </div>
    )
}

export async function getServerSideProps() {
    // Remplacez ceci par une requête API lorsque vous serez prêt
    const userData = {
        name: "John Doe",
        email: "johndoe@example.com"
    };

    return {
        props: {
            user: userData
        }
    };
}
