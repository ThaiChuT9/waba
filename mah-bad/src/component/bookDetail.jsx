import React from 'react'
import { useParams } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/24/solid'

const BookDetail = () => {
    const { id } = useParams()

    // Bạn có thể lấy chi tiết sách dựa vào ID, ví dụ từ một API hoặc một danh sách đã có
    const bookshelve = [
        { name: 'The Two Towers', author: 'JJR Tolken', star: 4.9, img: 'https://picsum.photos/id/193/400/600', id: 1, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt hendrerit ante tristique pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Nulla venenatis, ex vel vulputate consectetur, orci arcu pulvinar tortor, vel viverra risus est sit amet nulla. Sed augue risus, pellentesque sit amet leo sed, egestas commodo mauris. Sed mattis hendrerit sem, vitae accumsan neque bibendum et. Donec suscipit diam ut gravida eleifend. Phasellus consectetur turpis id metus luctus mollis. Donec urna tellus, varius vitae gravida ac, tempor et libero. Etiam eget dignissim nulla. Aliquam tristique volutpat risus, scelerisque dapibus neque tincidunt a. Duis vitae mollis nisi." },
        { name: 'book2', author: 'author2', star: 4.8, img: 'https://picsum.photos/id/88/400/600', id: 2, desc: 'Ut lacus tortor, volutpat at velit quis, posuere venenatis diam. Suspendisse in augue elementum, venenatis quam non, ullamcorper odio. Duis nec venenatis orci. Integer quam augue, laoreet at tempus vitae, sollicitudin sed leo. Vestibulum mollis nibh neque, eget commodo lacus pulvinar in. Integer efficitur elit eget magna elementum, ac dictum erat molestie. Donec ut velit at augue dignissim tincidunt. Integer vestibulum a diam non sollicitudin. Vestibulum nec augue eros. Nunc egestas sit amet risus iaculis imperdiet. Cras maximus massa orci, sed gravida turpis feugiat nec.' },
        { name: 'book3', author: 'author3', star: 4.7, img: 'https://picsum.photos/id/1002/400/600', id: 3, desc: 'Suspendisse potenti. Aliquam sodales pellentesque sem, ac aliquet felis luctus vel. Vivamus consequat tellus ut fermentum faucibus. Fusce ac tortor lorem. Aenean vitae dui eget elit posuere consequat. Nullam malesuada justo eget tristique blandit. Curabitur ultrices dui eget ex dignissim lacinia. Maecenas quam erat, efficitur ut consequat ut, lobortis aliquet sapien. Aliquam tincidunt dolor non suscipit convallis. Nunc vel ipsum malesuada, pellentesque dui eget, feugiat sapien.' },
        { name: 'book4', author: 'author4', star: 4.6, img: 'https://picsum.photos/id/1003/400/600', id: 4, desc: 'Aenean orci felis, gravida et lorem eget, gravida elementum nulla. Ut varius volutpat lacinia. Proin scelerisque ligula in iaculis pretium. Vestibulum lorem nibh, accumsan a lorem sed, aliquam cursus neque. Morbi vulputate, magna et mollis vehicula, magna elit efficitur tortor, scelerisque imperdiet tellus augue eu sem. Pellentesque iaculis sodales fringilla. Phasellus non volutpat leo, at consequat eros.' },
        { name: 'book5', author: 'author5', star: 4.5, img: 'https://picsum.photos/id/1004/400/600', id: 5, desc: 'Praesent viverra dui velit, sed tincidunt ligula scelerisque id. Nunc nisi risus, posuere sit amet mollis a, iaculis sed ex. Sed et tellus vel tellus tristique dapibus vel nec purus. Cras imperdiet, turpis vel placerat laoreet, orci diam commodo augue, vel vestibulum elit justo ac nisl. Nullam ut nulla luctus, ullamcorper lacus et, luctus leo. Aliquam erat volutpat. Duis et libero sapien. Nullam volutpat consequat nulla.' }
    ]

    const book = bookshelve.find(b => b.id === parseInt(id))

    if (!book) {
        return <div>Book not found</div>
    }

    return (
        <div className="p-6 flex justify-center items-center h-screen max-w-4xl ">
            <div className="border rounded-lg shadow-lg p-6 flex">
                <div className="">
                    <img src={book.img} alt={book.name} className="rounded-lg w-56" />
                </div>
                <div className="pl-6 w-2/3 flex flex-col">
                    <div className="flex justify-between w-auto">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold">{book.name}</h2>
                            <p className="text-gray-600">{book.author}</p>
                        </div>
                        <div className="flex items-center mb-7">
                            <StarIcon className="size-10 text-yellow-300 mr-2" />
                            <span className="text-gray-600 text-xl font-semibold">{book.star}</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>{book.desc}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetail
