import React, {useMemo} from 'react'
import Post from "./Post"
import style from "./receptionList.module.css"
import Sort from "../sort/Sort";
import {getReceptions} from "../../../state/receptionReducer";
import {getDocs} from "../../../state/docReducer";
import {useDispatch, useSelector} from "react-redux";


const ReceptionList = () => {
    const {reception} = useSelector(state => state.receptionReducer)
    const {tokenAuth} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    useMemo(() => {
        if (tokenAuth) {
            dispatch(getDocs())
            dispatch(getReceptions())
        }
    }, [tokenAuth]);

    return (<div key={'receptionList.main'} className={style.receptionMain}>
            <div className={style.sortContainer}>
                <Sort/>
            </div>
            <ul key={'listReception'} className={style.list}>
                <li key={'list.name'}>Имя</li>
                <li key={'list.doc'}> Врач</li>
                <li key={'list.date'}>Дата</li>
                <li key={'list.complaints'}>Жалобы</li>
            </ul>
            <div className={style.elements} key='heapElems'>
                {
                    reception.map(receptionUser => <Post
                            id={receptionUser._id}
                            key={receptionUser._id}
                            name={receptionUser.name}
                            nameDoc={receptionUser.nameDoc}
                            date={receptionUser.date}
                            complaints={receptionUser.complaints}
                        />
                    )
                }
            </div>
        </div>
    )
}


export default ReceptionList;