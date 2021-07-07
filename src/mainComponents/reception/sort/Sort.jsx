import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {sortValue} from "../../../state/sort";

const Moment = require('moment')


function sortedArray(copyReception) {
    copyReception.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))
}


const Sort = (props) => {
    const [flag, setFlag] = useState(false)
    const [flagDate, setFlagDate] = useState(false)
    const onSubmit = (formData) => {
        console.log(formData)
    };

    async function handleChange  (e){
        let text = await e.target.value
        props.sortValueAC(text)
    }

    const {register, handleSubmit} = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Сортировать по</p>
                    <select onChange={handleChange}>
                        <option value=""> </option>
                        <option  {...register("name")} value="name">Имя</option>
                        <option {...register("doc")} value="doc">Врач</option>
                        <option {...register("date")} value="date">Дата</option>
                        <option {...register("none")} value="none">None</option>
                    </select>
                </div>
                {flag ?
                    <div>
                        <select name="" id="">
                            <option value="">По возрастанию</option>
                            <option value="">По убыванию</option>
                        </select>
                    </div> :
                    null}

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