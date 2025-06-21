import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { createshorturl } from '../api/shortUrl.api'
import { QueryClient } from '@tanstack/react-query'
import { queryClient } from '../main'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const UrlForm = () => {

  const [url, setUrl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [customSlug, setCustomSlug] = useState('')
  const [error, setError] = useState(null)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const submithandler = async () => {
    try {
      const shortUrl = await createshorturl(url, customSlug)
      setshortUrl(shortUrl)
      queryClient.invalidateQueries({ queryKey: ['userUrls'] })
      setError(null)


    } catch (error) {
      setError(error.message)
    }
  }


  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)

    }, 2000)
  }


  return (

    // <div

    //   className='space-y-4'>
    //   <div>
    //     <label htmlFor='url' className='block text-sm font-medium text-gray-700 text-xl mb-2' >
    //       Enter Your URL
    //     </label>
    //     <input
    //       value={url}
    //       onInput={(e) => setUrl(e.target.value)}
    //       type="url"
    //       id='url'
    //       placeholder='https://example.com'
    //       required
    //       className='w-full px-4 py-2 border border-gray-300 rounded-md font-semibols' />

    //   </div>
    //   <button
    //     onClick={submithandler}
    //     type='submit'
    //    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50">
    //     Shortern URL 
    //   </button>
    //   {error && (
    //     <div  className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
    //   )}
    //   {isAuthenticated && (
    //     <div className='mt-4'>
    //       <label htmlFor="CustomUrl" className='block text-sm font-medium mb-1 text-gray-700'>CustomUrl</label>
    //       <input type="text"
    //        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2'
    //         placeholder='Enter CustomUrl'
    //          value={customSlug} 
    //          onChange={(e) => setCustomSlug(e.target.value)} 
    //          id="customSlug" />
    //     </div>
    //   )}
    //   {shortUrl && (
    //     <div className='mt-6'>
    //       <h2 className='text-lg mb-2 font-semibold'>Your Shortened URL</h2>
    //       <div className="flex items-center">
    //         <input 
    //         type="text"
    //           readOnly
    //           value={shortUrl}
    //           className='flex-1 p-2 border w-[75%] border-gray-300 rounded-l-md bg-white'
    //         />
    //         <button
    //           onClick={handleCopy}
    //           className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
    //             copied
    //             ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 hover:bg-gray-300'
    //             }`}
    //         >
    //           {copied ? 'Copied' : 'Copy'}
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='space-y-5'
    >
      {/* URL Input */}
      <div>
        <label htmlFor='url' className='block text-xl font-semibold text-gray-800 mb-2'>
          Enter Your URL
        </label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type='url'
          id='url'
          placeholder='https://example.com'
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none'
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={submithandler}
        type='button'
        className='w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md'
      >
        Shorten URL
      </button>

      {/* Error Message */}
      {error && (
        <div className='p-4 bg-red-100 text-red-700 rounded-lg shadow'>
          {error}
        </div>
      )}

      {/* Custom Slug Input (if logged in) */}
      {isAuthenticated && (
        <div>
          <label htmlFor='customSlug' className='block text-sm font-medium text-gray-700 mb-2'>
            Custom URL
          </label>
          <input
            type='text'
            id='customSlug'
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            placeholder='Enter Custom Slug'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none'
          />
        </div>
      )}

      {/* Shortened URL + Copy Button */}
      {shortUrl && (
        <div className='mt-6'>
          <h2 className='text-lg font-bold text-gray-700 mb-2'>Your Shortened URL</h2>
          <div className='flex'>
            <input
              type='text'
              readOnly
              value={shortUrl}
              className='flex-grow px-4 py-2 border border-gray-300 rounded-l-md bg-gray-50'
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md font-medium transition duration-300 shadow-sm ${
                copied ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </motion.div>

    


  )
}

export default UrlForm