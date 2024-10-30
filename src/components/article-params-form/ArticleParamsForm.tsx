import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpenForm = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const modalStyle = clsx(styles.container, { [styles.container_open]: open });

	return (
		<>
			<ArrowButton isOpen={true} onClick={handleOpenForm} />
			<aside className={modalStyle}>
				<form className={styles.form}>
					<Text as='h1' size={45} weight={800} uppercase dynamicLite>
						задайте параметры
					</Text>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
