import React from 'react'
import Post from "./Post"
import style from "./receptionList.module.css"
import {getDocs} from "../../../state/doc";
import {loginAuth} from "../../../state/auth";
import {deleteReception, getReceptions} from "../../../state/reception";


// let temporaryArray = [
//     {
//         name: 'Иванов Иван Иваныч',
//         doc: 'Иванов Иван Иваныч',
//         date: '22.22.2021',
//         complaints: "Равным образом внедрение современных подходов способствует подготовке и реализации стандартных подходов. "
//     },
//     {
//         name: 'Александров Александр Иваныч',
//         doc: 'Иванов Иван Иваныч',
//         date: '22.22.2021',
//         complaints: "В целом, конечно, оптимизация основных целей вынуждает нас объективно потребовать новых предложений."
//     },
//     {
//         name: 'Алексеев Алексей Иваныч', doc: 'Иванов Иван Иваныч',
//         date: '22.22.2021', complaints: "Жалобы Жалобы Жалобы Жалобы Жалобы Жалобы Жалобы Жалобы"
//     },
// ]
//
//
// let elements = temporaryArray.map(p => <Post key={p.id}
// name={p.name}
// doc={p.doc}
// date={p.date}
//  complaints={p.complaints}/>)

class ReceptionList extends React.Component {
    componentDidMount() {
        this.props.getDocs()
        this.props.getReceptions()
    }

    render() {
        let reception = this.props.docs.receptionReducer.reception
        let elementsReception = reception.map(p => <Post id={p._id}
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