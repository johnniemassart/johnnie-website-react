import { Cursor } from '../Components/Cursor';
import { CatalogNavTop } from '../Components/CatalogNavTop';
import { CatalogNavBottom } from '../Components/CatalogNavBottom';
import { ContentInner } from '../Components/ContentInner';
import { useEffect, useState } from 'react';

export const Catalog = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500);
    },[]);

    return (
    <>
        <div className="catalog-container" style={{opacity: show ? 1 : 0}}>
            <div className="catalog-content">
                <div className="catalog-content-inner">
                    <ContentInner/>
                </div>
            </div>
            <CatalogNavTop/>
            <CatalogNavBottom/>
        </div>
        <Cursor/>
    </>
    );
}