import { useState } from 'react';

export default function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '', author: '' })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewBook({ ...newBook, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
    }
  }

    return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='author'>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>    
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index} className="bookCard">
                    <h4>{book.title}</h4>
                    <p>by {book.author}</p>
                </div>
            ))}
        </div>
    </div>
    )
}