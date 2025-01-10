// NotionArticle.tsx
import React, { useEffect, useState } from 'react';
import { getNotionPage } from './notionClient';

interface NotionPage {
    properties: {
        title: {
            title: [{ text: { content: string } }];
        };
    };
}

interface NotionArticleProps {
    pageId: string;
}

const NotionArticle: React.FC<NotionArticleProps> = ({ pageId }) => {
    const [pageContent, setPageContent] = useState<NotionPage | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await getNotionPage(pageId);
            setPageContent(data);
        };
        fetchData();
    }, [pageId]);

    if (!pageContent) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{pageContent.properties.title.title[0].text.content}</h1>
            {/* Renderize o restante do conteúdo conforme necessário */}
        </div>
    );
};

export default NotionArticle;
