import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const book = () => {
    const bookshelve = [
        { name: 'The Two Tower', author: 'JRR Tolkien', star: 4.9, img: 'https://picsum.photos/id/193/400/600', id:'1' },
        { name: 'book2', author: 'author2', star: 4.8, img: 'https://picsum.photos/id/88/400/600', id:'2' },
        { name: 'book3', author: 'author3', star: 4.7, img: 'https://picsum.photos/id/1002/400/600', id:'3' },
        { name: 'book4', author: 'author4', star: 4.6, img: 'https://picsum.photos/id/1003/400/600', id:'4' },
        { name: 'book5', author: 'author5', star: 4.5, img: 'https://picsum.photos/id/1004/400/600', id:'5' }
    ]
    return (
        <div className='px-14 max-w-s mx-auto py-10'>
            <h1 className='text-2xl font-bold mb-4'>Book Shelve</h1>
            <div className="flex flex-wrap gap-10 mx-auto justify-center mt-7">
                {bookshelve.map((book, idx) => (
                    <Link to={`/book/${book.id}`} key={book.id} className={`w-48 ${idx % 2 === 0 ? 'mt-10' : 'mt-0'}`} >
                        <img src={book.img} alt={book.name} className="rounded-lg" />
                        <div className="mt-2 flex justify-between">
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold">{book.name}</h2>
                                <p className="text-sm">{book.author}</p>
                            </div>
                            <div className="flex items-center pb-5">
                                <StarIcon className="w-5 h-5 text-yellow-300" />
                                <span className="ml-1">{book.star}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default book