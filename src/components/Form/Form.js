import React, { useState } from 'react'
import Axios from 'axios'

function Form() {
    const url = 'https://api.telegram.org/bot'
    const telegram_bot_id = '5691978661:AAHwO_BOoZ41sfN957Q8VX9nlDbto-9qqfE'
    const chat_id = -819185711;
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [message, setMessage] = useState("");


    const handleusername = (event) => {
        const user_name = event.target.value;
        setUsername(user_name);
    };

    const handleemail = (event) => {
        const user_email = event.target.value;
        setUseremail(user_email);
    };


    const submitUser = async (e) => {
        e.preventDefault();
        const userdata = [
            `Cообщение от сайта: Saidparadent.uz\n\n\nИмя пациента: ${username}\nТелефон номер: ${useremail}\n\nСотрудники: @Sardor_say @stom_9910\n\n\nПациент ждёт звонок`
        ];
        await Axios({
            baseURL: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
            method: 'POST',
            
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            data: JSON.stringify({
                'chat_id': chat_id,
                'text': userdata.toString()
            })
        })
            .then((result) => {
                setMessage(result.data.msg);
                console.log(result.data);
                console.log(result.data.message);
            });
    };
    return (
        <section>
            <form onSubmit={submitUser} className="row g-3">
                <div className="col-md-3">
                    <label className="form-label">User Name </label>
                    <input
                        type="text"
                        name="user_name"
                        className="form-control p-2"
                        onChange={(e) => handleusername(e)}
                    />
                </div>

                <div className="col-md-3">
                    <label className="form-label">Email</label>
                    <input
                        type="tel"
                        name="user_email"
                        className="form-control p-2"
                        onChange={(e) => handleemail(e)}
                    />
                </div>

                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary mt-4">
                        Submit
                    </button>
                </div>
            </form>

        </section>
    )
}

export default Form