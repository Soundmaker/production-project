import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!  ДЛЯ КУРСА.
    setTimeout(() => resolve(import("./MainPage")),1500);
}));