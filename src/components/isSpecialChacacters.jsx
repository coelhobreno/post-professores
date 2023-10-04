import React, { useState } from 'react'

export const isSpecialChacacters = (text) => {

    const redex = /[^A-Za-z0-9çÇ, ]/;
    
    return redex.test(text)

}