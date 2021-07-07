import React, {useState} from "react";
import {useForm} from "react-hook-form";
const Moment = require('moment')


function sortedArray(copyReception) {
    copyReception.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))
}


const Sort = (props) => {
    const [flag, setFlag] = useState(false)
    const [flagDate, setFlagDate] = useState(false)
    const onSubmit = (formData) => {

    };
    console.log(flag)
    const { register, handleSubmit } = useForm();
    return(
        <div>
            <form>


            <div>
                <p>Сортировать по</p>
                <select>
                    <option value=""> </option>
                    <option onClick={()=>{setFlag(true)}} value="1">Имя</option>
                    <option onClick={()=>{setFlag(!flag)}} value="2">Врач</option>
                    <option onClick={()=>{setFlagDate(!flagDate)}} value="3">Дата</option>
                    <option value="">None</option>
                </select>
            </div>
            {flag ?
               <div>
                   <select name="" id="">
                       <option value="">По возрастанию</option>
                       <option value="">По убыванию </option>
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