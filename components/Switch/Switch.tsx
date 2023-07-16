import React from 'react';
import styles from './Switch.module.css';

type Props = {
    id: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
};

const Switch: React.FC<Props> = ({ id, isChecked, onChange }) => {
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        onChange(checked);
    };

    return (
        <div className={styles.switchBox}>
            <input 
                className={styles.switch} 
                id={id} 
                type="checkbox" 
                checked={isChecked} 
                onChange={handleSwitchChange}
            />
        </div>
    );
};

export default Switch;
