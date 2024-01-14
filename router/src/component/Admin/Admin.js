import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Admin() {
    const params = useParams();
    const [search, SetParam] = useSearchParams();
  return (
    <div>
        Admin
        {JSON.stringify(params)}
        {params.id}
        {search.get("age")}
    </div>
  )
}
