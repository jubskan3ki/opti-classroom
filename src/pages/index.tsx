import React, { useState } from 'react'; 
import styles from './Login.module.css';
import Image from 'next/image';
import CardLoginLeft from '../Asset/png/CardLoginLeft.svg';
import CardLoginRight from '../Asset/png/CardLoginRight.svg';
import Logo from '../Asset/png/Logo.png'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Switch from '../../components/Switch/Switch';

export default function Home() {

    const [userInfo, setUserInfo] = useState({
        loginPassword: '',
        loginEmail: '',
        signupName: '',
        signupFirstname: '',
        signupEmail: '',
        signupPassword: '',
    });

    const handleSubmit = (type: 'login' | 'signup') => {
        if (type === 'login') {
            console.log('Informations de connexion:', {
                Password: userInfo.loginPassword,
                email: userInfo.loginEmail,
            });
            } else if (type === 'signup') {
            console.log('Informations d’inscription:', {
                name: userInfo.signupName,
                firstname: userInfo.signupFirstname,
                email: userInfo.signupEmail,
                password: userInfo.signupPassword
            });
        }
    };

    return (
        
        <div className={styles.Content}>
            <div className={styles.LogoContent}>
                <div className={styles.TextLogo}>
                    <h1 className={styles.Text}>Opti-ClassRoom</h1> 
                    <Image className={styles.Logo} src={Logo} alt='logo' />
                </div>
            </div>
            <div className={styles.CardLeft}>
                <h1 className={styles.Title}>Se connecter</h1>
                <Image className={styles.LoginImg} src={CardLoginLeft} alt='CardLoginLeft' />
                <div className={styles.InputDiv}>
                    <Input 
                        placeholder="Adresse email" 
                        value={userInfo.loginEmail}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, loginEmail: e.target.value }))}
                    />
                    <Input 
                        placeholder="Password" 
                        value={userInfo.loginPassword}
                        type='password'
                        onChange={(e) => setUserInfo(prev => ({ ...prev, loginPassword: e.target.value }))}
                    />
                    <Button text="CONTINUE" onClick={() => handleSubmit('login')} />
                </div>
            </div>

            <div className={styles.CardRight}>
                <h1 className={styles.Title}>S’inscrire</h1>
                <Image className={styles.LoginImg} src={CardLoginRight} alt='CardLoginRight' />
                <div className={styles.InputDiv}>
                    <Input 
                        placeholder="Entrez votre nom" 
                        value={userInfo.signupName}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, signupName: e.target.value }))}
                    />
                    <Input 
                        placeholder="Entrez votre prénom" 
                        value={userInfo.signupFirstname}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, signupFirstname: e.target.value }))}
                    />
                    <Input 
                        placeholder="Entrez votre adresse email" 
                        value={userInfo.signupEmail}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, signupEmail: e.target.value }))}
                    />
                    <Input 
                        placeholder="Entrez votre mot de passe" 
                        value={userInfo.signupPassword}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, signupPassword: e.target.value }))}
                    />
                    <Button text="CONTINUE" onClick={() => handleSubmit('signup')} />
                </div>
            </div>
        </div>
    );
}
