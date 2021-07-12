import React, {useState} from 'react'
import Post from "./Post"
import style from "./receptionList.module.css"
import Sort from "../sort/Sort";
import {changeReceptionId, getReceptions} from "../../../state/reception";


class ReceptionList extends React.Component {
    componentDidMount() {
        this.props.getDocs()
        this.props.getReceptions()
        // this.props.getSortData("2021-07-02","2021-07-17" )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (this.props.reception !== prevProps) {
        //     console.log('запрос')
        //     this.props.getReceptions()
        // }
        // console.log('component update!')
    }

    render() {
        let reception = this.props.reception
        let elementsReception = reception.map(p => <Post
                idDelete={this.props.docs.receptionReducer.idDelete}
                deleteReceptionAC={this.props.deleteReceptionAC}
                changeReceptionId={this.props.changeReceptionId}
                changeReceptionAC={this.props.changeReceptionAC}
                idEditReception={this.props.idEditReception}
                id={p._id}
                deleteReception={this.props.deleteReception}
                key={p._id}
                name={p.name}
                nameDoc={p.nameDoc}
                date={p.date}
                complaints={p.complaints}
            />
        )


        return (<div key={'receptionList.main'} className={style.receptionMain}>
                <div>
                    <Sort
                        getReceptions={this.props.getReceptions}
                        getSortData={this.props.getSortData}
                        triage={this.props.triage}
                        valueSorting={this.props.valueSorting}
                        valueOption={this.props.valueOption}
                        sortValueAC={this.props.sortValueAC}
                        reception={this.props.reception}
                    />
                </div>
                <ul key={'listReception'} className={style.list}>
                    <li key={'list.name'}>Имя</li>
                    <li key={'list.doc'}> Врач</li>
                    <li key={'list.date'}>Дата</li>
                    <li key={'list.complaints'}>Жалобы</li>
                </ul>

                <div className={style.elements} key='heapElems'>
                    {elementsReception}
                </div>
            </div>
        )
    }


}


export default ReceptionList;