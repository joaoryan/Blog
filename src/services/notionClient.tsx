import { Client } from '@notionhq/client';

const notion = new Client({ auth: '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' });

export const getNotionPage = async (pageId: string) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};
