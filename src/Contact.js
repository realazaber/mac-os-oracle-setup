import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h3>
                Have questions, feedback or just want to have a chat?
                <br />
                Don't hesitate to contact me.
            </h3>
            <form>
                <label for="Name">
                    Name:
                </label>
                <input id="Name" type="text" required></input>
                
                <label for="Email">
                    Email:
                </label>
                <input id="Email" type="email" required></input>
                
                <label for="Phone">
                    Phone:
                </label>
                <input id="Phone" type="number"></input>

                <label for="Message">
                    Message:
                </label>
                <textarea id="Message">

                </textarea>

                <button id="submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact
