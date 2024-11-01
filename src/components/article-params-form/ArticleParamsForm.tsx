import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select/Select';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import { Separator } from 'src/ui/separator/Separator';

type ArticleParamsFormProps = {
	currentArticle: ArticleStateType;
	setCurrentArticle: (article: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	currentArticle,
	setCurrentArticle,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const [selectArticleData, setSelectArticleData] = useState(currentArticle);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCurrentArticle({
			...selectArticleData,
		});
	};

	const handleFormReset = () => {
		setCurrentArticle({ ...defaultArticleState });
		setSelectArticleData({ ...defaultArticleState });
	};

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => setIsOpen(!isOpen),
		onChange: setIsOpen,
	});

	return (
		<div ref={rootRef}>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					style={{ gap: 38 }}
					className={styles.form}
					onSubmit={handleFormSubmit}
					onReset={handleFormReset}>
					<Text as='h2' size={45} weight={800} uppercase>
						задайте параметры
					</Text>
					<Select
						title='шрифт'
						options={fontFamilyOptions}
						selected={selectArticleData.fontFamilyOption}
						onChange={(data) =>
							setSelectArticleData({
								...selectArticleData,
								fontFamilyOption: data,
							})
						}
					/>
					<> </>
					<RadioGroup
						options={fontSizeOptions}
						selected={selectArticleData.fontSizeOption}
						title='размер шрифта'
						name='radio'
						onChange={(data) =>
							setSelectArticleData({
								...selectArticleData,
								fontSizeOption: data,
							})
						}
					/>
					<Select
						title='цвет шрифта'
						options={fontColors}
						selected={selectArticleData.fontColor}
						onChange={(data) =>
							setSelectArticleData({
								...selectArticleData,
								fontColor: data,
							})
						}
					/>
					<Separator />
					<Select
						title='цвет фона'
						options={backgroundColors}
						selected={selectArticleData.backgroundColor}
						onChange={(data) =>
							setSelectArticleData({
								...selectArticleData,
								backgroundColor: data,
							})
						}
					/>
					<Select
						title='ширина контента'
						options={contentWidthArr}
						selected={selectArticleData.contentWidth}
						onChange={(data) =>
							setSelectArticleData({
								...selectArticleData,
								contentWidth: data,
							})
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
