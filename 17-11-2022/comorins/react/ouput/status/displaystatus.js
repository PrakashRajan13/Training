import React from 'react'

function Displaystatus({status,id,delete_status}) {
  return (
    <tr>
    <td className="text-center align-middle">{id+1}</td>
    <td className="text-center align-middle">{status}</td>
    <td className="text-center">
        <button className="m-2 button text-white bg-danger btn" onClick={()=>delete_status(id)}>Delete</button>
    </td>
</tr>
  )
}

export default Displaystatus