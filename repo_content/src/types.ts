import React from 'react';

export interface TabItem {
    id: string;
    label: string;
}

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}
