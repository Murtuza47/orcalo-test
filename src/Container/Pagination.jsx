export const Pagination = ({ pageNumber, setPageNumber, data }) => {

  const totalPages = Math.ceil(data.length / 5);
  const handleForwrdClick = () => { pageNumber < totalPages && setPageNumber(pageNumber + 1) }
  const handleBackwardClick = () => { pageNumber > 1 && setPageNumber(pageNumber - 1) }

  return (
    <div className="pagination" style={{ margin: 'auto' }}>
      <a href="#" onClick={handleBackwardClick}>&laquo;</a>
      <a className="active">{pageNumber}</a>
      <a href="#" onClick={handleForwrdClick}>&raquo;</a>
    </div>
  )

}

