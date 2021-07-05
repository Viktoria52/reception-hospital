import Post from "./Post"
import style from "./receptionList.module.css"


let temporaryArray = [
    {
        name: 'Иванов Иван Иваныч', doc: 'Иванов Иван Иваныч',
        date: '22.22.2021', complaints: "Равным образом внедрение современных подходов способствует подготовке и реализации стандартных подходов. "
    },
    {
        name: 'Александров Александр Иваныч', doc: 'Иванов Иван Иваныч',
        date: '22.22.2021', complaints: "В целом, конечно, оптимизация основных целей вынуждает нас объективно потребовать новых предложений."
    },
    {
        name: 'Алексеев Алексей Иваныч', doc: 'Иванов Иван Иваныч',
        date: '22.22.2021', complaints: "Жалобы Жалобы Жалобы Жалобы Жалобы Жалобы Жалобы Жалобы"
    },
]


let elements = temporaryArray.map(p => <Post key='elems'
    name={p.name}
    doc={p.doc}
    date={p.date}
    complaints={p.complaints} />)

const ReceptionList = (props) => {
    return (<div className={style.receptionMain}>
        <ul className={style.list}>
            <li>Имя</li>
            <li> Врач </li>
            <li>Дата</li>
            <li>Жалобы</li>
        </ul>
        <div className={style.elements} key='heapElems'>
            {elements}

        </div>
    </div>
    )

}




export default ReceptionList;