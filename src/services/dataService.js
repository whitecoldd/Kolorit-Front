import React from 'react'
import { Items } from '../comps/Items'

const dataService = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            const data = Items.slice(from, to)
            resolve({
                count: Items.length,
                data: data
            })
        }
    
        )
    }
}

export default dataService