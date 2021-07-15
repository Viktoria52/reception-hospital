import React, {useEffect, useState} from 'react'
import Post from "./Post"
import style from "./receptionList.module.css"
import Sort from "../sort/Sort";
import {changeReceptionId, getReceptions} from "../../../state/reception";
import {getDocs} from "../../../state/doc";
import {useDispatch, useSelector} from "react-redux";


const ReceptionList = (props) => {
    const {reception} = useSelector(state => state.receptionReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDocs())
        dispatch(getReceptions())
    }, [])

    return (<div key={'receptionList.main'} className={style.receptionMain}>
            <div className={style.sortContainer}>
                <Sort
                    getReceptions={props.getReceptions}
                    getSortData={props.getSortData}
                    triage={props.triage}
                    valueSorting={props.valueSorting}
                    valueOption={props.valueOption}
                    sortValueAC={props.sortValueAC}
                    reception={props.reception}
                />
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
                            idDelete={props.docs.receptionReducer.idDelete}
                            deleteReceptionAC={props.deleteReceptionAC}
                            changeReceptionId={props.changeReceptionId}
                            changeReceptionAC={props.changeReceptionAC}
                            idEditReception={props.idEditReception}
                            id={receptionUser._id}
                            deleteReception={props.deleteReception}
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