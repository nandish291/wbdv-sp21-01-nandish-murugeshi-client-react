import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        active,
        item,
        parentItem,
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {
                !editing &&
                    <div className={`nav-link ${active ? 'active' : ''}`}>
                        <Link style={{color: 'black'}} className="link"    to={to}>
                            {item.title}
                        </Link>
                        <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>

                    </div>

            }
            {
                editing &&
                    <div className="row">
                        <div className="col-8">
                            <input
                                className="form-control"
                                onChange={(e) =>
                                    setItemCache({
                                        ...itemCache,
                                        title: e.target.value
                                    })}
                                value={itemCache.title}/>
                        </div>

                        <div className=" col-4">
                            <i onClick={() => {
                                setEditing(false)
                                updateItem(itemCache)
                            }} className="fas fa-check float-right"></i>
                            &nbsp;
                            <i onClick={() => deleteItem(item, parentItem)} className="fas fa-times float-right" style={{marginRight:'.5em'}}></i>
                        </div>
                    </div>
            }
        </>
    )
}

export default EditableItem