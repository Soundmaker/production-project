import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!  ДЛЯ КУРСА.
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
