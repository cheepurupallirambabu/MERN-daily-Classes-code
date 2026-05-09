import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <div id="error-container" className='m-5 border border-danger p-3 rounded-3'>
            <div><h1>404 Page not Found</h1></div>
            <p>This page is not found try to change the Url/UrlPath</p>
        </div>
    </div>
  )
}

export default ErrorPage;