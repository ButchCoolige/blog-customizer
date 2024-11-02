import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
//import './styles/index.scss';
import styles from './index.module.scss';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export const App = () => {
	const [currentArticleState, setCurrentArticleState] =
		useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': currentArticleState.fontFamilyOption.value,
					'--font-size': currentArticleState.fontSizeOption.value,
					'--font-color': currentArticleState.fontColor.value,
					'--container-width': currentArticleState.contentWidth.value,
					'--bg-color': currentArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				currentArticle={currentArticleState}
				setCurrentArticle={setCurrentArticleState}
			/>
			<Article />
		</main>
	);
};
