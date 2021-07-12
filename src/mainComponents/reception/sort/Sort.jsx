import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import style from './sort.module.css'

const Moment = require('moment')


// function sortedArray() {
//     arrayDate.sort((a, b) => new Moment(a).format('YYYYMMDD') - new Moment(b).format('YYYYMMDD'))
// }

// let sortedCars = arrayDate.sort((a, b) =>
// Date.parse(new Date(a.date.split("/").reverse().join("-"))) - Date.parse(new Date(b.date.split("/").reverse().join("-")))); //сортировка даты по порядку(возрастание)

const Sort = (props) => {
    let dateFromReg = ''
    let dateToReg = ''
    const [rec, newRec] = useState(props.reception);

    useEffect(() => {
        newRec(props.reception);
    }, [props.reception])

    const [flag, setFlag] = useState() // sort by name
    const [docSort, setFlagDoc] = useState() // sort by doc
    const [flagDate, setFlagDate] = useState(false) // sort by date

    const onSubmit = (formData) => {
        dateFromReg = formData.dateFrom
        dateToReg = formData.dateTo
        props.getSortData(dateFromReg, dateToReg) //date!

    };

    function handleChange(e) {
        let text = e.target.value
        props.sortValueAC(text) //сохранение значения сортировки name/docname/date в valueOption
    }

    useEffect(() => {
        if (props.valueOption === 'none') { // сброс фильтрации даты
            props.getReceptions()
        }
    }, [props.valueOption]);

    async function sortNames(e) { //сортировка имен и врачей
        let text = await e.target.value
        await props.triage(text)
        // console.log(text)
        if (text === "none") {
            props.triage('')
        }
        if (resultName) {
            if (text === 'ascending') {
                setFlag(true)
            }
            if (text === 'decreasing') {
                setFlag(false)
            }
        }
        if (resultDoc) {
            if (text === 'ascending') {
                setFlagDoc(true)
            }
            if (text === 'decreasing') {
                setFlagDoc(false)
            }
        }
    }

    let resultName = props.valueOption === "name"
    let resultDoc = props.valueOption === "doc"
    let resultDate = props.valueOption === "date"

    if (docSort === true) { // sort by doc
        console.log('возрастание')
        props.reception.sort(function (a, b) {
                let nameA = a.nameDoc.toLowerCase(), nameB = b.nameDoc.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
        )
    }

    if (docSort === false) { // sort by doc
        console.log('убывание')
        props.reception.sort(function (a, b) {
                let nameA = a.nameDoc.toLowerCase(), nameB = b.nameDoc.toLowerCase();
                if (nameA < nameB)
                    return 1;
                if (nameA > nameB)
                    return -1;
                return 0;
            }
        )
    }
    if (flag === true) {// sort by name
        console.log('возрастание')
        props.reception.sort(function (a, b) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
        )
        console.log(props.reception)
    }
    if (flag === false) { // sort by name
        console.log('убывание')
        props.reception.sort(function (a, b) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return 1;
                if (nameA > nameB)
                    return -1;
                return 0;
            }
        )
        console.log(props.reception)
    }

// console.log(props.reception)
    const {register, handleSubmit} = useForm();
    return (
        <div className={style.sorting}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.containerSortingBy}>
                    <p className={style.sortBy}>Сортировать по:</p>
                    <select className={style.select} onChange={handleChange}>
                        <option value="no_value"> </option>
                        <option value="name">Имя</option>
                        <option value="doc">Врач</option>
                        <option value="date">Дата</option>
                        <option value="none">None</option>
                    </select>
                </div>


                {resultName || resultDoc ?
                    <div className={style.direction}>
                       <span className={style.directionSpan}>Направление: </span>
                        <select className={style.directionSelect} onChange={sortNames}>
                            <option value="none"> </option>
                            <option value="ascending">По возрастанию</option>
                            <option value="decreasing">По убыванию</option>
                        </select>
                    </div> :
                    null}


                {resultDate ?
                    <div className={style.direction}>
                        <div>
                          <span>  с:</span>
                            <input className={style.date} {...register("dateFrom")} type="date"/> </div>

                       <div>
                           <span> по:</span>
                           <input className={style.date2} {...register("dateTo")} type="date"/>
                       </div>
                        <input className={style.filterButton}  type="submit" value='Фильтровать'/>
                    </div> :
                    null

                }

                {/*<button*/}
                {/*    onClick={async () => {*/}
                {/*        await sortedArray(props.reception)*/}
                {/*        this.setState({reception:props.reception})*/}
                {/*        // console.log(copyReception)*/}
                {/*        // setReception(reception)*/}
                {/*    }}>*/}
                {/*    Sort by date*/}
                {/*</button>*/}
            </form>
        </div>
    )
}

export default Sort