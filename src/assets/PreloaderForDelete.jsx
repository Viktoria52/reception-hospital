import {Spin} from "antd";
import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import style from './Preloader.module.css'

const PreloaderForDelete = () => {
    const antIcon =<LoadingOutlined style={{ fontSize: 50 }} spin />;
    return (<>
           <Spin className={style.spinDelete} size='large' indicator={antIcon} />
        </>
    )
}
export default PreloaderForDelete