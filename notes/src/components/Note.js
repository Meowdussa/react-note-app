// import icon from https://react-icons.github.io/react-icons/icons?name=md
import {MdDeleteForever} from "react-icons/md";




const Note = ({id, text, date}) =>{
    return (
        //this div is for us easier to style individual note
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>

        </div>
    )
};

export default Note;