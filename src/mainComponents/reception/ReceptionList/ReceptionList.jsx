import React from 'react'
import Post from "./Post"
import style from "./receptionList.module.css"


class ReceptionList extends React.Component {
    componentDidMount() {
        this.props.getDocs()
        this.props.getReceptions()
    }

    render() {
        let reception = this.props.docs.receptionReducer.reception
        let elementsReception = reception.map(p => <Post
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