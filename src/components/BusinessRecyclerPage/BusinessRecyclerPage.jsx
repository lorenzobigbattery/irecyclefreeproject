import React, { useState, useEffect } from 'react'
import './BusinessRecyclerPage.css'
import { Link } from 'react-router-dom'

function BusinessRecyclerPage() {

    const handleFileInput = (e) => {
        e.preventDefault();
        console.log(`line 9`, e)
    }

    return (
        <div className='businessrecyclerpage'>
            <div className='businessrecyclercontainer'>
                <h1>RECYCLING FOR BUSINESSES</h1>
                <form>
                    <section className='fileuploadsection'>
                        <span>Upload your inventory file/manifest here*</span>
                        <input onChange={(e)=>{handleFileInput(e)}} id='spreadsheetfiles' multiple type='file' accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    </section>
                    <section className='photouploadsection'>
                        <span>Upload photos of inventory here</span>
                        <input type='file' multiple id='photofiles' />
                    </section>
                    <section className='businesscontactsection'>
                        <p>Contact Info:</p>
                        <input placeholder='Email*' />
                        <input placeholder='Phone Number*' />
                    </section>
                    <section>
                        <p>Here is the nearest recycling center:</p>
                    </section>
                </form>
                <section className='navigatesection'>
                    <Link to='/'>
                        <img className='navigatesectionimage' src={require('./../../images/irecyclefreelogo.png')} />
                    </Link>
                    <Link to='/'>Back to Main Page</Link>
                </section>
            </div>
        </div>  
    )
}

export default BusinessRecyclerPage
