import React, {useState} from 'react';

const Community = () => {
    
    const [ comment, setComment ] = useState("")
    const [ comments, setComments ] = useState(["댓글1","댓글2","댓글3"])

    const changeInputValue = event => {
        setComment(event.target.value)
    }

    const clickButton = () => {
        setComments([...comments,comment])
        setComment("")
    }

    return (
        <div>

            <ul>
                {
                    comments.map((comment)=>{
                        return <li>{comment}</li>
                    })
                }
            </ul>
            <input type="text" value={comment} onChange={changeInputValue}/>
            <button onClick={clickButton}>클릭</button>
        </div>
    );
}

export default Community;
