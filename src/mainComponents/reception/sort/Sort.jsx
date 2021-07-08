import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {sortValue, triage} from "../../../state/sort";
import {loginAuth} from "../../../state/auth";
import reception from "../../../state/reception";

const Moment = require('moment')


function sortedArray(copyReception) {
    copyReception.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))
}


const Sort = (props) => {
    const [flag, setFlag] = useState(false)
    const [flagDate, setFlagDate] = useState(false)
    const onSubmit = (formData) => {

    };

    function handleChange(e) {
        let text = e.target.value
        props.sortValueAC(text)
    }

    function sortNameDate(e) {
        let text = e.target.value
        props.triage(text)
    }


    let result = props.valueOption === "name" || props.valueOption === "doc"
    let ascending = props.valueSorting === "ascending"
    console.log(ascending)
    //  if(ascending) {
    //     props.reception.sort(function(a, b){
    //             let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    //             if (nameA < nameB)
    //                 return -1;
    //             if (nameA > nameB)
    //                 return 1;
    //             return 0;
    //         })
    //         // this.setState({reception:props.reception})
    //         console.log(props.reception)
    //
    // }

    // console.log(props.reception)
    const {register, handleSubmit} = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Сортировать по</p>
                    <select onChange={handleChange}>
                        <option value="no_value"></option>
                        <option value="name">Имя</option>
                        <option value="doc">Врач</option>
                        <option value="date">Дата</option>
                        <option value="none">None</option>
                    </select>
                </div>


                {result ?
                    <div>
                        Сортировка
                        <select onChange={sortNameDate}>
                            <option value="none"> </option>
                            <option value="ascending">По возрастанию</option>
                            <option value="decreasing">По убыванию</option>
                        </select>
                    </div> :
                    null}
                {/*{ascending ?*/}
                {/*    ascendingFunction() : null*/}
                {/*}*/}
                {flagDate ?
                    <div>
                        <input type="date"/>
                        <input type="date"/>
                        <input type="submit" value='Фильтровать'/>
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